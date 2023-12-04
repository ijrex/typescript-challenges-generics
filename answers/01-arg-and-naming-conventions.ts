///////////////////////////////////////////////////////
// 01 - Use a generic to get the function argument type
///////////////////////////////////////////////////////

/* Edit between these lines only >>>>>>>>>>>>>>>>>>> */

const logArgAndReturn = <Type>(arg: Type) => {
    console.log('argument', arg)
    return arg
}

/* <<<<<<<<<<<<<<<<<<<< Edit between these lines only */

const num = logArgAndReturn(1)
const calculation = num + 1
console.log('result: ', calculation)

const str = logArgAndReturn('test')
const concatenation = str.charAt(2)
console.log('result :', concatenation)

const obj = logArgAndReturn({ foo: { bar: 'test' } })
console.log('result: ', obj.foo.bar)

const arr = logArgAndReturn([1, 2, 3])
console.log('result: ', arr[0])

export {}
