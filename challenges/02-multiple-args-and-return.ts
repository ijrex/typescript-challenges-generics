////////////////////////////////////////////////////
// 02 - Use multiple generic args with a return type
////////////////////////////////////////////////////

/* Edit between these lines only >>>>>>>>>>>>>>>>>>> */

const putArgsIntoTuple = (arg1: unknown, arg2: unknown) => {
    console.log('arguments: ', arg1, arg2)
    return [arg1, arg2]
}

/* <<<<<<<<<<<<<<<<<<<< Edit between these lines only */

const [num1, num2] = putArgsIntoTuple(1, 2)
const sumOfNums = num1 + num2
console.log('result: ', sumOfNums)

const [str1, str2] = putArgsIntoTuple('foo', 'bar')
const concatonatedStrs = str1.toUpperCase() + str2.toUpperCase()
console.log('result: ', concatonatedStrs)

const [str3, num3] = putArgsIntoTuple('foo', 3)
const repeatedStrs = str3.repeat(num3)
console.log('result: ', repeatedStrs)

const [fn1, num4] = putArgsIntoTuple((a: number) => a * 2, 3)
const multipliedNum = fn1(num4)
console.log('result: ', multipliedNum)

export {}
