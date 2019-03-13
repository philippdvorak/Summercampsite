function createCardRow(mainID) {
  $(mainID).append("<div class='row'></div>");
}

function createCardCol(mainID, faICON, title, content) {
  $(mainID).find('.row').append("<div class='card' style='width: 14vw;margin: 10px;'><i class='" + faICON +  " bg-dark'></i><div class='card-body'><h5 class='card-title'>Fotografie</h5><p class='card-text'>Wolltest du schon immer Professionel Bilderbearbeiten.</p></div></div>");
}
