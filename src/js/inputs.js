const defaultData = {   
    name: namePreview.textContent,
    job: jobPreview.textContent,
    photo: profileImagen.src
}

const preview = () => { 
    namePreview.innerHTML = initData.name || defaultData.name;
    jobPreview.innerHTML = initData.job || defaultData.job;
    profileImagen.src = initData.photo || defaultData.photo;
    phonePreview.href = `tel:${initData.phone}`;
    mailPreview.href = `mailto:${initData.email}`;
    linkedinPreview.href = `https://linkedin.com/in/${initData.linkedin}`;

    const githubFixedName = initData.github.startsWith('@') ? initData.github.slice(1) : initData.github;
    gitGubPreview.href = `https://github.com/${githubFixedName}`;
}   

const handlerInput = (event) => {   
    initData[event.target.name] = event.target.value;
    preview();
    createCardBtn.removeAttribute('disabled');
    resetCreatedCardSection();
    localStorage.setItem('personalData', JSON.stringify(initData) );
};

const inputElements = [nameInput, jobInput, inputPhone, inputMail, inputLkdin, inputGitHub];
inputElements.forEach(input => input.addEventListener('input', handlerInput));

const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) { 
        const reader = new FileReader(); 
        reader.onload = () => {
            const imageUrl = reader.result;
            profilePreview.style.backgroundImage = `url(${imageUrl})`;
            profileImagen.src = imageUrl;
            initData.photo = imageUrl;
            localStorage.setItem('personalData', JSON.stringify(initData) );
        };
        reader.readAsDataURL(file);
    } else { 
        console.error('No se ha seleccionado ningún archivo.');
    }
    
    createCardBtn.removeAttribute('disabled');
    resetCreatedCardSection();
};

fileInput.addEventListener('change', handleFileSelect);

const localData = JSON.parse(localStorage.getItem('personalData'));

if (localData !== null) {
    initData = localData;
    paletteFromLocalStorage();
    displayInfoLocal(initData);
};

function displayInfoLocal(initData) {

    nameInput.value = initData.name;
    jobInput.value = initData.job;
    inputPhone.value = initData.phone;
    inputMail.value = initData.email;
    inputLkdin.value = initData.linkedin;
    inputGitHub.value = initData.github;

    if (initData.photo === '') {
        profileImagen.src = defaultData.photo;
    }
    else {
        profileImagen.src = initData.photo;
    }

    profilePreview.style.backgroundImage = `url(${initData.photo})`;  

    preview();
}












