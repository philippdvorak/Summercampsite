function createCardRow(mainID) {
  $(mainID).append("<div class='row'></div>");
}

function createCardCol(mainID, faICON, title, content) {
  $(mainID).find('.row').append("<div class='card' style='width: 14vw;margin: 10px;'><i class='" + faICON +  "'></i><div class='card-body'><h5 class='card-title'>" + title + "</h5><p class='card-text'>" + content + "</p></div></div>");
}
