const ckbEspecialAudioSM = document.getElementById("chkEspecialAudioSM");
const ckbEspecialAudioLG = document.getElementById("chkEspecialAudioLG");
var riGrid = document.getElementById("gridImagesSection");
var mc = new Hammer(riGrid);

$(document).ready(function () {
  let prevUrl = document.referrer;
  if (prevUrl.indexOf(window.location.host) !== -1) {
    $("#overlay").removeClass("d-lg-block");
  } else {
    $("#overlay").addClass("d-lg-block");
  }
  activePanGesture();
  // musica.play();
  ckbEspecialAudioSM.checked = false;
  ckbEspecialAudioLG.checked = false;
});

function disablePanGesture() {
  mc.off("pan");
  $("#gridImagesSection").addClass("touchImportant");
}

