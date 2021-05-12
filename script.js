'use strict';
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const score1 = document.querySelector('#score--0');
const score2 = document.querySelector('#score--1');
const current_score_1 = document.querySelector('#current--0');
const current_score_2 = document.querySelector('#current--1');
const imgdice = document.querySelector('.dice');
const btn_new = document.querySelector('.btn--new');
const btn_roll = document.querySelector('.btn--roll');
const btn_hold = document.querySelector('.btn--hold');
const result = document.querySelector('.result');
imgdice.style.opacity = '0%';
let diceNo = null;
let current_1 = 0;
let current_2 = 0;
let hold_score_1 = 0;
let hold_score_2 = 0;



const roll_dice_func = function () {
    diceNo = Math.floor(Math.random() * 6) + 1;
    console.log(diceNo);
    if (diceNo === 1) {
        if (player1.classList.contains('player--active')) {
            player1.classList.remove('player--active');
            player2.classList.add('player--active');
            current_1 = 0;
            hold_score_1 = 0;
            score1.textContent = hold_score_1;
            current_score_1.textContent = current_1;
        }
        else if (player2.classList.contains('player--active')) {
            player2.classList.remove('player--active');
            player1.classList.add('player--active');
            current_2 = 0;
            hold_score_2 = 0;
            score2.textContent = hold_score_2;
            current_score_2.textContent = current_2;
        }

    }

    else if (diceNo === 2)
        imgdice.src = 'dice-2.png';
    else if (diceNo === 3)
        imgdice.src = 'dice-3.png';
    else if (diceNo === 4)
        imgdice.src = 'dice-4.png';
    else if (diceNo === 5)
        imgdice.src = 'dice-5.png';
    else if (diceNo === 6)
        imgdice.src = 'dice-6.png';
    imgdice.style.opacity = '100%';
};
const add_current_score = function () {
    if (player1.classList.contains('player--active')) {
        current_1 = current_1 + diceNo;
        current_score_1.textContent = current_1;
    }
    else if (player2.classList.contains('player--active')) {
        current_2 = current_2 + diceNo;
        current_score_2.textContent = current_2;
    }
};
const hold_press = function () {
    if (player1.classList.contains('player--active')) {
        player1.classList.remove('player--active');
        player2.classList.add('player--active');
        hold_score_1 = current_1;
        score1.textContent = hold_score_1;
    }
    else if (player2.classList.contains('player--active')) {
        player2.classList.remove('player--active');
        player1.classList.add('player--active');
        hold_score_2 = current_2;
        score2.textContent = hold_score_2;
    }
    if (hold_score_1 >= 50 || hold_score_2 >= 50) {
        if (hold_score_1 > hold_score_2) {
            result.textContent = 'Player 1 is the Winner!!';
            result.classList.remove('hidden');

        }
        else if (hold_score_1 < hold_score_2) {
            result.textContent = 'Player 2 is the Winner!!';
            result.classList.remove('hidden');

        }
        else if ((hold_score_1 === hold_score_2) && (hold_score_1 != 0)) {
            result.textContent = 'Its a Tie!!';
            result.classList.remove('hidden');
        }
    }

}
if (hold_score_1 > hold_score_2) {
    result.textContent = 'Player 1 is the Winner!!';
    result.classList.remove('hidden');

}
else if (hold_score_1 < hold_score_2) {
    result.textContent = 'Player 2 is the Winner!!';
    result.classList.remove('hidden');

}
else if ((hold_score_1 === hold_score_2) && (hold_score_1 != 0)) {
    result.textContent = 'Its a Tie!!';
    result.classList.remove('hidden');
}

btn_roll.addEventListener('click', roll_dice_func);
btn_roll.addEventListener('click', add_current_score);

btn_hold.addEventListener('click', hold_press);
btn_new.addEventListener('click', function () {
    window.location.reload();
})





