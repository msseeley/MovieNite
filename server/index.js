const express = require('express')
const volleyball = require('volleyball')
const app = express()
const socketio = require('socket.io')
const PORT = 3000
//logging middleware
app.use(volleyball)

//parsing middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})

const io = socketio(server)

io.on('connection', socket => {
  console.log(`Welcome, ${socket.id}`)

  socket.on('play/pause', () => {
    socket.broadcast.emit('play/pause')
  })

  socket.on('disconnect', () => {
    console.log(`Socket: ${socket.id} leaving...`)
  })
})
