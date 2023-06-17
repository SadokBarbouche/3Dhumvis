const socket = new WebSocket('ws://localhost:5500');

socket.addEventListener('open', () => {
  const link = 'https://example.com'; // The link you want to send

  const message = {
    type: 'download_url',
    content: document.getElementById('download_url').content,
  };

  socket.send(JSON.stringify(message));
});

console.log(message)

socket.addEventListener('message', (event) => {
  const response = JSON.parse(event.data);
  console.log('Received data from Python script:', response);
});

socket.addEventListener('error', (error) => {
  console.error('Error:', error);
});

socket.addEventListener('close', (event) => {
  console.log('Connection closed with code', event.code);
});
