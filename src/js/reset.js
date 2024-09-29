const handleClickResetInputCard = () => {
    resetInputs();
    resetCard();
    resetPallete();
    resetIconPhone();
    resetCreatedCardSection();
    localStorage.setItem('personalData', JSON.stringify(initData) );
}

const resetInputs = () => {

    const form = document.querySelector('.js_create-form');
    form.reset();
    initData = {
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
    namePreview.innerHTML = `Nombre Apellido`;
    jobPreview.innerHTML = `Front-end developer`;
    phonePreview.innerHTML = ``;
    mailPreview.innerHTML = ``;
    linkedinPreview.innerHTML = ``;
    gitGubPreview.innerHTML = ``;
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