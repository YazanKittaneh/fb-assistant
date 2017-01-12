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
  if(payload.message.text !== null){
    let text = payload.message.text
    reply({ text }, (err) => {
      if (err) throw err
      console.log(`Echoed back to ${profile.first_name} ${profile.last_name}: ${text}`)
    })
  }

})






http.createServer(bot.middleware()).listen(process.env.PORT || 3000)
console.log('Echo bot server running at port 5000.')
