/*******************************
        Call Signatures 
********************************/

// RECAP
// 이전에 우리는 함수를 아래와 같이 작성해줬음 
function add(a : number, b: number) {
  return a + b;
}
// add2에 커서를 올리면 :(a: number, b: number) => number <- 콜 시그니처
const add2 = (a : number, b: number) => a + b;


/** Declare Call Signatures
 * 함수를 구현하기 전에 내가 어떻게 함수가 어떻게 작동하는지 서술한다는 장점이 있음
 * 타입을 스스로 생각하게 한다. -> 그리고 코드 구현
 */

// Declare call signatures 
type Add = (a:number, b:number) => number;

// call signatures 를 길게 적어보기 
type Add2 = {
  (a: number, b: number) : number
}

const add3:Add = (a,b) => a + b;


/*******************************
          Overloading
  대부분은 다른 사람들이 만든 라이브러리를 사용할텐데
  이런 패키지나 라이브러리들은 오버로딩을 많이 사용한다.
********************************/

// 오버로딩은 함수가 서로다른 여러개의 call signatures를 가지고 있을 때 발생 

type Add3 = {
  // overloading은 여러개의 call signatures를 가지고 있다.
  (a: number, b: number) : number
  (a: number, b: string) : number
}

const add4: Add3 = (a, b) => {
  if (typeof b === 'string') {
    return a;
  }
  return a + b;
}

/** 다른 파라미터 개수를 가지는 콜 시그니쳐 */
type Add4 = {
  (a: number, b: number) : number
  (a: number, b: number, c: number) : number
}

const add5: Add4 = (a ,b ,c?:number) => {
  if(c) return a + b + c;
  return a + b;
}

add5(1,2);
add5(1,2,3);


/*******************************
          Polymorphism
poly + morphism : 여러가지 다른 구조들 이란 뜻 
********************************/

// Challenge : 배열을 받고 그 배열의 결과를 print 해주는 함수를 만들 것 
// type은 신경 안씀 

// 아래 예시는 bad
type SuperPrint = {
  /**  아래처럼 작성한 것을 concrete type이라 한다.
   * Concrete Type이란 타입이 구체적으로 정의되어 있어
   * 더 이상 추상적이지 않은 타입
  */
  (arr: number[]):void
  (arr: boolean[]):void
  (arr: string[]):void
}

const superPrint: SuperPrint = (arr) => {
  arr.forEach(i => console.log(i));
}

superPrint([1,2,3]);
superPrint([true,false,true]);
superPrint(["1", "2", "3"]);   

/** Generic 
 * TS에게 스스로 타입을 유추 시키는 것 
 * 동적으로 타입이 결정됨 
*/
type SuperPrint2 = {
  <TypePlaceholder>(arr: TypePlaceholder[]): void
}

const superPrint2: SuperPrint2 = (arr) => {
  arr.forEach(i => console.log(i));
}

// 어느 타입이 들어오던 동작하게 하려고한다.
// Generic을 사용하면 동적으로 값이 들어오게 할 수 있다.
superPrint2(["1", 2, false, "hello"]);   


//
type SuperPrint3 = {
  <TypePlaceholder>(arr: TypePlaceholder[]): TypePlaceholder
}

const superPrint3: SuperPrint3 = (arr) => arr[0]

// 어느 타입이 들어오던 동작하게 하려고한다.
// Generic을 사용하면 동적으로 값이 들어오게 할 수 있다.
const aa = superPrint3(["1", 2, false, "hello"]);  