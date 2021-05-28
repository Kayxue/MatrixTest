import { matrix, add, subtract, multiply, Matrix } from "mathjs"
import { PNG } from "pngjs"
import fs from "fs"

const A = matrix([
    [1, 5, 3, 9],
    [2, 5, 1, 5],
    [1, 5, 3, 7],
    [3, 6, 2, 6]
])

const B = matrix([
    [5, 2, 6, 2],
    [6, 2, 7, 2],
    [9, 3, 5, 7],
    [9, 3, 6, 2]
])

console.log((add(A, B) as Matrix)["_data"])
console.log((subtract(A, B) as Matrix)["_data"])
console.log((multiply(A, B) as Matrix)["_data"])
