const handleClickResetInputCard = () => {
    resetInputs();
    resetCard();
    resetPallete();
    resetIconPhone();
    resetCreatedCardSection();
    localStorage.setItem('personalData', JSON.stringify(data) );
}

const resetInputs = () => {

    const form = document.querySelector('.js_create-form');
    form.reset();
    data = {
        palette: '1',
        name:'',
        job: '',
        photo: '',
        phone: '',
        email: '',
        linkedin: '',
        github: '',
    };
}

const resetCard = () => {
    namePreview.innerHTML = `<h3 class="js__namePreview">Nombre Apellido</h3>`;
    jobPreview.innerHTML = `<p class="js__jobPreview">Front-end developer</p>`;
    phonePreview.innerHTML = `<a href="#" class="js__previewTlf"><i class="fa-solid fa-mobile-screen-button preview_contact--icon"></i></a>`;
    mailPreview.innerHTML = `<a href="#" class="js__previewMail"><i class="fa-regular fa-envelope preview_contact--icon"></i></a>`;
    linkedinPreview.innerHTML = `<a href="#" class="js__previewLinkedin"><i class="fa-brands fa-linkedin-in preview_contact--icon"></i></a>`;
    gitGubPreview.innerHTML = `<a href="#" class="js__previewGithub"><i class="fa-brands fa-github-alt preview_contact--icon"></i></a>`;
    profileImagen.src = "./images/img_prueba_preview.jpg";
    profilePreview.style.backgroundImage = '';
    createCardBtn.removeAttribute('disabled');
}

const resetPallete = () => {
    previewCard.classList.remove('palette2');
    previewCard.classList.remove('palette3');
    previewCard.classList.add('palette1');

    const radioBtns = document.querySelectorAll('.js_radioBtn');
    radioBtns[0].checked = true;

};

const resetCreatedCardSection = () => {
    hiddenSection.classList.add('hidden'); 
};

const resetIconPhone = () => {
    icontTel.classList.remove('hidden');
}

resetBtn.addEventListener('click', handleClickResetInputCard);