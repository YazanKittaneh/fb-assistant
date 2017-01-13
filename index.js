'use strict'
const http = require('http')
const Bot = require('messenger-bot')

let bot = new Bot({
  token: 'EAAW7z3FpocsBAKytmNZAy6fPke35gfJQILvjRrZA9dSQKaCZBmpNiQ1pDi6ZAsJsveMX1Mz7KsHsKC0s2yUd9bEuKJitFHfqZA3eJDi2nPCU9EKvxQetorZCZBq8Lxr61ZBtZASkM2Jb5KjJuvLJBWxav7nU7sVxZBzWlgAC3AK86pYQZDZD',
  verify: 'VERIFY',
})


bot.on('error', (err) => {
  console.log(err.message)
})

bot.on('message', (payload, reply) => {
  let text = payload.message.text
  let attachment = payload.message.attachment
  if (text == null){ //if there isn't any text
    reply({
      text: "there's nothing written ya know"
    },(err) => {
      if (err) throw err
    } else {
      if (text == "fuck"){
        reply({
          text: "alright I got the fuck you're giving me"
        }
      }
    }
  }
  /*
  if (payload.message.attachments || payload.message.attachments[0] || payload.message.attachments[0].type == 'image') {
      return reply({
        text: "got your image!"
      })
  }
  */

});







http.createServer(bot.middleware()).listen(process.env.PORT || 3000)
console.log('Echo bot server running at port 5000.')
