# Example-Discord-Bot
Example discord bot using discord.js

# Installation

1. Install [Node.js](https://nodejs.org/en/).
2. Open terminal and type ```npm i```
3. Open ```config.json``` file and edit token & prefix.

# Add commands

```javascript
module.exports.run = (client, message, args) => {
  // The command code goes here
}

module.exports.help = {
  name: "command_name"
}
```

# Run
open terminal and type ```node .```
