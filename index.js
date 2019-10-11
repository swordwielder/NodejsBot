const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!')
  }
})

client.login('NjIzMTk2NjMyMTAzNzgwMzUy.XX_IHQ.6tOIVPLartwVgl34O7t4MBZqWDg')
