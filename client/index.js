const socket = io("ws://localhost:3000");
console.log('client side');

socket.on("connect", () => {
  // either with send()
  socket.send('This is the default message ');
  socket.emit('custom',[1,2,3]);

  // or with emit() and custom event names
  // socket.emit("salutations", "Hello!", { "mr": "john" }, Uint8Array.from([1, 2, 3, 4]));
});

// handle the event sent with socket.send()
socket.on("message", data => {
  console.log("Received message from server:", data);
});

// handle the event sent with socket.emit()
socket.on("greetings", (elem1, elem2, elem3) => {
  console.log("Received greetings from server:", elem1, elem2, elem3);
});
