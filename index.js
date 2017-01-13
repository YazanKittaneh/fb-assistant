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

  if (attachment.type == "image") {
    reply({
      text: "Got the image!"
    },
    (err) => {
      return reply({
        text: 'Sorry. Something went wrong with the image uplaod'
      })
    })
  }

  // if I say something like "remind me about blah"
    // I should send you a reminder in 2 hours about the thing (and have a snooze button)

  //If I get a calendar event reminder
    //I should send you a messege about the event

  // If I ask you to put something on my calendar
    // I should call the events calander and put the event in

  // If I tell you to move an event to a later date/time
    // grab the most recent event with that name and move it to my desire

  //

  if (text){
    reply({
      text: "alright I got the fuck you're giving me"
    })
  }
})

  /*
  if (payload.message.attachments || payload.message.attachments[0] || payload.message.attachments[0].type == 'image') {
      return reply({
        text: "got your image!"
      })
  }
  */








http.createServer(bot.middleware()).listen(process.env.PORT || 3000)
console.log('Echo bot server running at port 5000.')
