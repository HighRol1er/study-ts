/*******************************
      Types of TS part Three
      사용빈도 void > unknown > never
********************************/

/* unknown
 * Ex) api 요청 후 데이터를 응답 받았을 때 그 데이터의 타입이 뭔지 모를 때,
 */

let a2: unknown;

if(typeof a2 === 'number'){
  let b2 = a2 + 1;
}

if(typeof a2 === 'string'){
  let b = a2.toUpperCase();
}

/* void
 * 아무것도 return하지 않는 함수
 * 굳이 void 타입을 명시해줄 필요는 없다. 알아서 체크한다.
*/

function hello() { // function hello(): void
  console.log("hello");
}

/**
 * never
 * never는 함수가 절대 return하지 않을 때 발생한다.
 * Ex) 함수에서 예외가 발생할 때   
 * */ 

function h1(name:string | number){
  if (typeof name === 'string') {
    name // (parameter) name: string
  } else if (typeof name === 'number') {
    name // (parameter) name: number
  } else {
    // 이미 string, number에 대한 설정을 해줬기때문에 아래는 절대 실행되선 안됨
    name // (parameter) name: never 
  }
}


