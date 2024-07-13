'use strict';

const resetBtn = document.querySelector('.js__resetBtn');
const mailInput = document.querySelector('.js__inputMail');
const inputTlf = document.querySelector('.js__inputPhone');
const inputLinkedin = document.querySelector('.js__inputLinkedin');
const inputGithub = document.querySelector('.js__inputGithub');
const previewTlf = document.querySelector('.js__inputPhone');
const previewMail = document.querySelector('.js__previewMail');
const previewLinkedin = document.querySelector('.js__previewLinkedin');
const previewGithub = document.querySelector('.js__previewGithub');




const handleClickResetInputCard = () => {
    resetInputs();
    resetCard();
    resetPallete();
}

const resetInputs = () => {
    nameInput.value = '';
    jobInput.value = '';
    mailInput.value = '';
    inputTlf.value = '';
    inputLinkedin.value = '';
    inputGithub.value = '';
}

const resetCard = () => {
    namePreview.innerHTML = `<h3 class="js__namePreview">Nombre Apellido</h3>`;
    jobPreview.innerHTML = `<p class="js__jobPreview">Front-end developer</p>`;
    previewTlf.innerHTML = `<a href="#" class="js__previewTlf"><i class="fa-solid fa-mobile-screen-button preview_contact--icon"></i></a>`;
    previewMail.innerHTML = `<a href="#" class="js__previewMail"><i class="fa-regular fa-envelope preview_contact--icon"></i></a>`;
    previewLinkedin.innerHTML = `<a href="#" class="js__previewLinkedin"><i class="fa-brands fa-linkedin-in preview_contact--icon"></i></a>`;
    previewGithub.innerHTML = `<a href="#" class="js__previewGithub"><i class="fa-brands fa-github-alt preview_contact--icon"></i></a>`;
    
}

const resetPallete = () => {
    previewCard.classList.remove('palette2');
    previewCard.classList.remove('palette3');
    previewCard.classList.add('palette1');
};





resetBtn.addEventListener ('click', handleClickResetInputCard);


