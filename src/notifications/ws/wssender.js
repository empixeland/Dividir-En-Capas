import twilio from 'twilio'

const accountSid ='ACf475523d362f04c20cf7fdcf53b53e32'
const authToken = 'd02a49fca61e419d6869c498d7ed05f9'

const client = require('twilio')(accountSid, authToken)


client.messages
      .create({
         body: 'Hello! This is an editable text message. You are free to change it and write whatever you like.',
         from: 'whatsapp:+14155238886',
         to: 'whatsapp:+573118200394'
       })
      .then(message => console.log(message.sid))
      .done();