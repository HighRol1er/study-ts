/*******************************
Implicit Types vs Explicit Types
********************************/

// 타입추론 let a: string
let a = "hello"

// 타입 명시 let b: boolean
let b: boolean = true
// let c = [1, 2, 3];
// c.push("1");

/*******************************
      Types of TS part One

  let/const variableName : Type = Data
********************************/

const player: {
	name: string
	age?: number
} = {
	name: "joe",
}

const playerLynn: {
	name: string
	age?: number
} = {
	name: "lynn",
	age: 20,
}

// Type Alias

type Player = {
	name: string
	age?: number
}

const joe: Player = {
	name: "joe",
}

const kim: Player = {
	name: "kim",
	age: 20,
}

// return 값의 타입 지정
// 함수 선언문 
function playerMaker(name: string): Player {
	return {
		name,
	}
}
const nico = playerMaker("nico")
nico.age = 20

// 화살표 함수(표현식)
const playerMaker2 = (name:string): Player => {
	return {name};
}


/*******************************
      Types of TS part Two
********************************/

/* Read-Only */ 
type Person = {
	readonly name: string
	age?: number
}

const personMaker = (name:string) : Person => ({name})
const mike = personMaker('nico');

mike.age = 20;
// mike.name = "lass" can not assign ... (Read-Only)

/* Read-Only : Array */
const nums : readonly number[] = [1,2]
// nums.push(1) : Error Read-Only

/* Tuple 
	길이가 정해져 있어야하고 특정 위치에 특정 타입이 있어야 한다.
*/
const boxer: [string, number, boolean] = ['joe', 27, true]

/** any Type 
 * any는 TS를 빠져나오는 방법이기 때문에 권장하지 않는다. 
*/
let any : any[]= [1,2,3]
let any2: any = true

any + any2 // 이렇게 다른 자료형이 들어갈 수 있음 

