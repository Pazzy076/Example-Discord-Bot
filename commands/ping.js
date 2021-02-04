module.exports.run = async (client, message, args) => {
    return message.channel.send('Pong!')
}

module.exports.help = {
    name: "ping"
}