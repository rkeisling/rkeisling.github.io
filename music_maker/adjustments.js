var playing = false;
function make_sound(id) {
  var audio = document.getElementById(id);
  if (playing === false) {
    audio.play();
    playing = true;
  }
  else if (playing === true) {
    audio.pause();
    playing = false;
  }
}
