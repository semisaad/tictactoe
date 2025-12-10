let boxes = document.querySelectorAll('.box');
let resetbtn = document.querySelector('#reset');
let turn = true;
let ntf = document.querySelector('.notification');
let msg = document.querySelector('#msg');
let okbtn = document.querySelector('#ok'); 

const resetGame = () => {
    boxes.forEach((box) => {
        box.innerText = '';
    });
    turn = true;
}

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (box.innerText === '') 
            {
                box.innerText = turn ? 'X' : 'O';
                turn = !turn;
            }
            checkWinner();
        });
});

const checkWinner = () => {
    winPatterns.forEach((pattern) =>{
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== '' && pos1val === pos2val && pos2val === pos3val) {
            
            ntf.style.display = 'flex'; 
            msg.innerText = `Player ${pos1val} Wins!`;
            resetGame();
        }
    })
}

resetbtn.addEventListener('click', resetGame);

okbtn.addEventListener('click', () => {
    ntf.style.display = 'none';
});


