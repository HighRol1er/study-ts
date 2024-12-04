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

function playerMaker(name: string): Player {
	return {
		name,
	}
}

const nico = playerMaker("nico")
nico.age = 20
