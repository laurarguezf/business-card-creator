const handleClickResetInputCard = () => {
    resetInputs();
    resetCard();
    resetPallete();
}

const resetInputs = () => {

    const form = document.querySelector('.js_create-form');

    form.reset();
}

const resetCard = () => {
    namePreview.innerHTML = `<h3 class="js__namePreview">Nombre Apellido</h3>`;
    jobPreview.innerHTML = `<p class="js__jobPreview">Front-end developer</p>`;
    previewTlf.innerHTML = `<a href="#" class="js__previewTlf"><i class="fa-solid fa-mobile-screen-button preview_contact--icon"></i></a>`;
    previewMail.innerHTML = `<a href="#" class="js__previewMail"><i class="fa-regular fa-envelope preview_contact--icon"></i></a>`;
    previewLinkedin.innerHTML = `<a href="#" class="js__previewLinkedin"><i class="fa-brands fa-linkedin-in preview_contact--icon"></i></a>`;
    previewGithub.innerHTML = `<a href="#" class="js__previewGithub"><i class="fa-brands fa-github-alt preview_contact--icon"></i></a>`;
    profileImagen.src = "./images/img_prueba_preview.jpg";
    profilePreview.style.backgroundImage = '';
}

const resetPallete = () => {
    previewCard.classList.remove('palette2');
    previewCard.classList.remove('palette3');
    previewCard.classList.add('palette1');

    const radioBtns = document.querySelectorAll('.js_radioBtn');
    radioBtns[0].checked = true;

};





resetBtn.addEventListener ('click', handleClickResetInputCard);


