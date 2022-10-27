let funcion = (num1, num2, callback) => {
    callback("holaa")
    let res = num1 + num2
    callback(res)
}

funcion(1,2, (message) => console.log(message))