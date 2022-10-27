/*
let funcion = (num1, num2, callback) => {
    callback("holaa")
    let res = num1 + num2
    callback(res)
}

funcion(1,2, (message) => console.log(message))
*/

let fm1 = () => {
    setTimeout(() => console.log(1), 2000)
}

let fm2 = () => console.log(2)
let fm3 = () => console.log(3)

fm1()
fm2()
fm3()


