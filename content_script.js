const socket = io.connect('http://localhost:3000')

setTimeout(function () {
  const [playPauseListener_1] = document.getElementsByClassName('button-nfplayerPause')
  const [playPauseListener_2] = document.getElementsByClassName('button-nfplayerPlay')

  let playPause = playPauseListener_1 || playPauseListener_2
  playPause.addEventListener('click', (event) => {
    if (event.isTrusted) socket.emit('play/pause')
  })

  socket.on('play/pause', () => {
    console.log('registering click from someone else')
    playPause.click()
  })


}, 12000)




//listen click()
//front end: socket emit('pushedPlay', )
//backend: socket.on('pushedPlay', )  send to all the other sockets

//what file should I this run in?
  //content ==> someone has a tab open and it runs in the DOM
  //pop-up ==> someone has clicked the icon and it renders js, when things are clicked in the pop-up
  //background ==> always running but not connected to a particular tab, can't access the DOM

//how do I detect when someone has clicked the play button?

