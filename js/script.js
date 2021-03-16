document.addEventListener("DOMContentLoaded", function () {

  // Custom JS
  let tic = "x-class",
      tac = "o-class",
      blocks = document.querySelectorAll(".box"),
      blockArr = Array.from(blocks),
      winnerBlock = document.querySelector(".winner"),
      winnerBlockContent = document.querySelector('.winner-data'),
      playerTurn = true,
      i = 0;
      closeWinnerBlock = document.querySelector('.close-btn'),
      btnRestart = document.querySelector('.restart'),
      darkModeSwitch = document.querySelector('.switch'),
      tumblerSwitch = document.querySelector('.switch-tumbler');

  btnRestart.addEventListener('click', () => {
    blocks.forEach(el => {
      el.classList.remove(tic);
      el.classList.remove(tac);
      el.dataset.value = '';
      i = 0;
      winnerBlock.classList.remove('winner-active');
    });
  });

  darkModeSwitch.addEventListener('click', () => {
    if (tumblerSwitch.checked) {
      document.body.classList.add('dark-mode');
    }
    else {
      document.body.classList.remove('dark-mode');
    }
  })

  // function of game

  function game() {
    player();
  };

  function win() {
    winnerBlockContent.textContent = 'you are winner!';
    winnerBlock.classList.add('winner-active');
  };

  closeWinnerBlock.addEventListener('click', () => {
    winnerBlock.classList.remove('winner-active');
    winnerBlockContent.textContent = '';
  });

  function defeat() {
    winnerBlockContent.textContent = 'you are looser!';
    winnerBlock.classList.add('winner-active');
  };

  function draw() {
    winnerBlockContent.textContent = 'draw!';
    winnerBlock.classList.add('winner-active');
  }

  // check player and enemy victory

  function checkWin() {
    //horizontal line
    if (blocks[0].dataset.value === 'x' & blocks[1].dataset.value === 'x' & blocks[2].dataset.value === 'x') { win(); return;}
    else if (blocks[3].dataset.value === 'x' & blocks[4].dataset.value === 'x' & blocks[5].dataset.value === 'x') { win(); return;}
    else if (blocks[6].dataset.value === 'x' & blocks[7].dataset.value === 'x' & blocks[8].dataset.value === 'x') { win(); return;}
    //vertical line
    else if (blocks[0].dataset.value === 'x' & blocks[3].dataset.value === 'x' & blocks[6].dataset.value === 'x') { win(); return;}
    else if (blocks[1].dataset.value === 'x' & blocks[4].dataset.value === 'x' & blocks[7].dataset.value === 'x') { win(); return;}
    else if (blocks[2].dataset.value === 'x' & blocks[5].dataset.value === 'x' & blocks[8].dataset.value === 'x') { win(); return;}
    //diagonale line
    else if (blocks[0].dataset.value === 'x' & blocks[4].dataset.value === 'x' & blocks[8].dataset.value === 'x') { win(); return;}
    else if (blocks[2].dataset.value === 'x' & blocks[4].dataset.value === 'x' & blocks[6].dataset.value === 'x') { win(); return;}

    //enemy check
    else if (blocks[0].dataset.value === 'o' & blocks[1].dataset.value === 'o' & blocks[2].dataset.value === 'o') { defeat(); return;}
    else if (blocks[3].dataset.value === 'o' & blocks[4].dataset.value === 'o' & blocks[5].dataset.value === 'o') { defeat(); return;}
    else if (blocks[6].dataset.value === 'o' & blocks[7].dataset.value === 'o' & blocks[8].dataset.value === 'o') { defeat(); return;}
    //vertical line
    else if (blocks[0].dataset.value === 'o' & blocks[3].dataset.value === 'o' & blocks[6].dataset.value === 'o') { defeat(); return;}
    else if (blocks[1].dataset.value === 'o' & blocks[4].dataset.value === 'o' & blocks[7].dataset.value === 'o') { defeat(); return;}
    else if (blocks[2].dataset.value === 'o' & blocks[5].dataset.value === 'o' & blocks[8].dataset.value === 'o') { defeat(); return;}
    //diagonale line
    else if (blocks[0].dataset.value === 'o' & blocks[4].dataset.value === 'o' & blocks[8].dataset.value === 'o') { defeat(); return;}
    else if (blocks[2].dataset.value === 'o' & blocks[4].dataset.value === 'o' & blocks[6].dataset.value === 'o') { defeat(); return;}
    //draw
    else if (i > 7) {draw(); return;}
  };

  function player() {
    if (playerTurn == true) {
      blockArr.forEach((el) => {
        el.addEventListener('click', () => {
          if (el.classList.contains(tac)) {
            return false;
          }
          else {
            el.classList.add(tic);
            el.dataset.value = 'x';
            console.log(el);
            playerTurn = false;
            i++;
            checkWin();
            enemy();
          };
        });
      });
    };
  };

  // enemy AI function

  function enemy() {
    if(playerTurn == false) {
      el = blockArr[Math.floor(Math.random()*blockArr.length)];
      if (el.classList.contains(tic) || el.classList.contains(tac)) {
        enemy();
      } else {
        el.classList.add(tac);
        el.dataset.value = 'o';
        console.log(el);
        playerTurn = true;
        i++;
        checkWin();
        console.log(i);
      };
    };
  };

  game();

});

