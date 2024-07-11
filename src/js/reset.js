'use strict';

const resetBtn = document.querySelector('.js__resetBtn');
const mailInput = document.querySelector('.js__inputMail');
const inputTlf = document.querySelector('.js__inputTlf');
const inputLinkedin = document.querySelector('.js__inputLinkedin');
const inputGithub = document.querySelector('.js__inputGithub');
const previewTlf = document.querySelector('.js__previewTlf');
const previewMail = document.querySelector('.js__previewMail');
const previewLinkedin = document.querySelector('.js__previewLinkedin');
const previewGithub = document.querySelector('.js__previewGithub');
const previewCard = document.querySelector('.js__previewCard');



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
    previewTlf.innerHTML = `<a href="" class="js__previewTlf"><i class="fa-solid fa-mobile-screen-button preview_contact--icon"></i></a>`;
    previewMail.innerHTML = `<a href="" class="js__previewMail"><i class="fa-regular fa-envelope preview_contact--icon"></i></a>`;
    previewLinkedin.innerHTML = `<a href="" class="js__previewLinkedin"><i class="fa-brands fa-linkedin-in preview_contact--icon"></i></a>`;
    previewGithub.innerHTML = `<a href="" class="js__previewGithub"><i class="fa-brands fa-github-alt preview_contact--icon"></i></a>`;
    
}

const resetPallete = () => {
    previewCard.innerHTML = `<div class="js__previewCard">
        <div class="preview_info">
            <h3 class="info_name js__namePreview">Nombre Apellido</h3>
            <p class="info_job js__jobPreview">Front-end developer</p>
            <img class="info_img" src="./images/img_prueba_preview.jpg" alt="">
        </div>
        <nav class="preview_contact">
            <a href="" class="preview_contact--link js__previewTlf"><i class="fa-solid fa-mobile-screen-button preview_contact--icon"></i></a>
            <a href="" class="preview_contact--link js__previewMail"><i class="fa-regular fa-envelope preview_contact--icon"></i></a>
            <a href="" class="preview_contact--link js__previewLinkedin"><i class="fa-brands fa-linkedin-in preview_contact--icon"></i></a>
            <a href="" class="preview_contact--link js__previewGithub"><i class="fa-brands fa-github-alt preview_contact--icon"></i></a>
        </nav>
    </div>`;
};





resetBtn.addEventListener ('click', handleClickResetInputCard);


