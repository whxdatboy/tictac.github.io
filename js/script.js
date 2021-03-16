document.addEventListener("DOMContentLoaded", function () {

  // Custom JS
  let tic = "x-class",
    tac = "o-class",
    blocks = document.querySelectorAll(".box"),
    blockArr = Array.from(blocks),
    winnerBlock = document.querySelector(".winner"),
    closeWinnerBlock = document.querySelector('.close-btn');

  function win() {
    winnerBlock.classList.add('winner-active');
  }

  // function of victory

  function example() {
    if (blocks[0].dataset.value === 'x' & blocks[3].dataset.value === 'x' & blocks[6].dataset.value === 'x') { win(); i = 2; }
    else if (blocks[0].dataset.value === 'x' & blocks[1].dataset.value === 'x' & blocks[2].dataset.value === 'x') { win(); i = 2; }
    else if (blocks[1].dataset.value === 'x' & blocks[4].dataset.value === 'x' & blocks[7].dataset.value === 'x') { win(); i = 2; }
    else if (blocks[2].dataset.value === 'x' & blocks[5].dataset.value === 'x' & blocks[8].dataset.value === 'x') { win(); i = 2; }
    else if (blocks[0].dataset.value === 'x' & blocks[4].dataset.value === 'x' & blocks[8].dataset.value === 'x') { win(); i = 2; }
    else if (blocks[2].dataset.value === 'x' & blocks[4].dataset.value === 'x' & blocks[8].dataset.value === 'x') { win(); i = 2; }
  }

  // function enemy

  function enemy() {
    let i = 0,
      j = 0;
    while (i < 1) {
      el = blockArr[Math.floor(Math.random() * blockArr.length)];
      if (el.classList.contains(tic) || el.classList.contains(tac)) {
        console.log(i);
        console.log(el);
        ++j;
        console.log("count: " + j);
        i = 0;
      } else {
        el.classList.add(tac);
        el.dataset.value = 'o';
        console.log(el);
        i = 2;
        continue;
      };
    }



  };

  // function of game

  blockArr.forEach((el) => {
    el.addEventListener('click', () => {
      if (el.classList.contains(tac)) {
        return false;
      }
      else {
        el.classList.add(tic);
        el.dataset.value = 'x';
        enemy();
        example();
      }

    });
  });

  closeWinnerBlock.addEventListener('click', () => {
    winnerBlock.classList.remove('winner-active');
  });

}
);

