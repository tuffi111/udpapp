
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

// new line

let PORT = 861323;

let dgram = require('dgram');
// Create udp server socket object.
let server = dgram.createSocket("udp4");

// Make udp server listen on port 8089.
server.bind(PORT);

// When udp server receive message.
server.on("message", function (message) {
  // Create output message.
  let output = "Udp server receive message : " + message + "\n";
  // Print received message in stdout, here is log console.
  process.stdout.write(output);
});

// When udp server started and listening.
server.on('listening', function () {
  // Get and print udp server listening ip address and port number in log console.
  let address = server.address();
  console.log('UDP Server started and listening on ' + address.address + ":" + address.port);
});
