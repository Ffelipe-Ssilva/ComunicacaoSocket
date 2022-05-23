const net = require('net')

const handleConnection = socket => {
    console.log('alguem se conectou')
    socket.on('end', () => {
        console.log('alguem se desconectou')
    })
    socket.on('data', data => {
        const str = data.toString();
        if(str === "end"){
            socket.end()
            console.log("entrou no if")
        }
        else{
        console.log(str)
        }  
    })
}

const server = net.createServer(handleConnection)
server.listen(4000, '127.0.0.1')

