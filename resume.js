// Code demonstrating how to load saved 
// information from localStorage
// for use in a game

function resumeGame() {
    if (localStorage.getItem('nextMove')) {
      redOrBlue = JSON.parse(localStorage.getItem('nextMove'));
      if (redOrBlue == red) { // variable holding who's turn it is
        document.images["red"].src = "img/red_a.png" // project specific
      } else {
        document.images["blue"].src = "img/blue_a.png" // project specific 
      }
    }
    if (localStorage.getItem('savedBoard')) {
        var temp = JSON.parse(localStorage.getItem('savedBoard'));

        for (var i = 0; i < 6; i++) {
            for (var j = 0; j < 7; j++) {
                connectFour.board[i][j] = temp[i][j]; // update board array
                if (temp[i][j] != "") {
                    updateBoard(i, j, temp[i][j]);   // draw to screen
                }
            }
        }
    }
