'use strict';

const resetBtn = document.querySelector('.js__resetBtn');
/* const nameInput = document.querySelector('.js__inputName'); */

const handleClickResetInputCard = () => {

    resetInputs();
}

const resetInputs = () => {
    nameInput.value = '';
    jobInput.value = '';

}


resetBtn.addEventListener ('click', handleClickResetInputCard);


