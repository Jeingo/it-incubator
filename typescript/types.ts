const isFetching: boolean = true
const isLoading: boolean = false

const int: number = 42
const float: number = 4.2
const num: number = 3e10

const meassage: string = 'Hello TypeScript'

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13]
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13]

const words: string[] = ['Hello', 'TypeScript']

//Typle
const contact: [string, number] = ['Renat', 1234567]

//Any
let variable: any= 42

variable = 'new'

//===

function sayMyName(name: string): void {
    console.log(name)
}

sayMyName('Renat')

//never

function throwError(message: string): never {
    throw new Error(message)
}

//Type

type Login = string

const login1: Login = 'admin'


//===

type SomeType = string | null | undefined


