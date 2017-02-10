'use strict'
const http = require('http')
const Bot = require('messenger-bot')

let bot = new Bot({
  token: 'EAAW7z3FpocsBAKytmNZAy6fPke35gfJQILvjRrZA9dSQKaCZBmpNiQ1pDi6ZAsJsveMX1Mz7KsHsKC0s2yUd9bEuKJitFHfqZA3eJDi2nPCU9EKvxQetorZCZBq8Lxr61ZBtZASkM2Jb5KjJuvLJBWxav7nU7sVxZBzWlgAC3AK86pYQZDZD',
  verify: 'VERIFY',
})

function getMinutes(minutes){
  return minutes * 1000000;
}

function parseStringUntil(sentence, starting){
  var parsedStrings;
  var length = sentence.length();
  var i;

  for(i=starting; i<= length; i++){
      parsedStrings.push(sentence[i]);
  }

  return parsedStrings;
}

bot.on('error', (err) => {
  console.log(err.message)
})

bot.on('message', (payload, reply) => {
  let text = payload.message.text
  let attachment = payload.message.attachment

  console.log('Received message from ' + payload.sender.id)

  if (payload.message.attachment == null) {
    console.log('1) attatchment is null')
  }
  if (payload.message.attachments == null) {
    console.log('2) attatchments is null')
  }

  if (text !== null){
    var splitString = text.split('~');

    if(splitString[0] == "Remind" &&
    splitString[1] == "me" &&
    splitString[2] == "to"){ //command is to "Remind me to"

      var cmd = parseStringUntilEnd(splitString, 3);

      reply({
        text: "Will do!"
      })

      setTimeout(function(){
        reply({
          text: cmd
        })
      },getMinutes(1))
    }
  }


})
/*
  if (payload.message.attachment == "image") {
    reply({
      text: "Got the image!"
    },
    (err) => {
      return reply({
        text: 'Sorry. Something went wrong with the image uplaod'
      })
    })
  }
  */

  // if I say something like "remind me about blah"
    // I should send you a reminder in 2 hours about the thing (and have a snooze button)

  //If I get a calendar event reminder
    //I should send you a messege about the event

  // If I ask you to put something on my calendar
    // I should call the events calander and put the event in

  // If I tell you to move an event to a later date/time
    // grab the most recent event with that name and move it to my desire

  //

  /*
  if (payload.message.attachments || payload.message.attachments[0] || payload.message.attachments[0].type == 'image') {
      return reply({
        text: "got your image!"
      })
  }
  */








http.createServer(bot.middleware()).listen(process.env.PORT || 3000)
console.log('Echo bot server running at port 5000.')
