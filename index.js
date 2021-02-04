const Discord = require("discord.js");
const client = new Discord.Client();

const fs = require("fs");

const { token, prefix } = require('./config.json');

client.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);

    files.forEach(f => {
        if (!f.endsWith(".js")) return;

        let command = require(`./commands/${f}`);

        client.commands.set(command.help.name, command);
    });
});

client.once("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", async (message) => {
    if (!message.guild || message.author.bot) return;

    if (!message.content.startsWith(prefix)) return;

    let args = message.content.slice(prefix.length).trim().split(" ");
    let command = args.shift().toLowerCase();
    let commandFile = client.commands.get(command);

    if (!commandFile) return;
    
    commandFile.run(client, message, args);
});

client.login(token);