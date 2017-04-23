navigator.webkitGetUserMedia({video: {
  width:
    { min: 1200, ideal: 1920},
  height:
    { min: 675, ideal: 1080}
  }},
  function(stream) {
    document.getElementById('camera').src = URL.createObjectURL(stream);
  },
  function() {
    alert('could not connect stream');
  }
);
