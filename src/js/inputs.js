const defaultData = {   
    name: namePreview.textContent,
    job: jobPreview.textContent,
    photo: profileImagen.src
}

const preview = () => { 
    namePreview.innerHTML = data.name || defaultData.name;
    jobPreview.innerHTML = data.job || defaultData.job;
    profileImagen.src = data.photo || defaultData.photo;
    phonePreview.href = `tel:${data.phone}`;
    mailPreview.href = `mailto:${data.email}`;
    linkedinPreview.href = `https://linkedin.com/in/${data.linkedin}`;

    const githubFixedName = data.github.startsWith('@') ? data.github.slice(1) : data.github;
    gitGubPreview.href = `https://github.com/${githubFixedName}`;
}   

const handlerInput = (event) => {   
    data[event.target.name] = event.target.value;
    preview();
    createCardBtn.removeAttribute('disabled');
    resetCreatedCardSection();
    localStorage.setItem('personalData', JSON.stringify(data) );
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
            data.photo = imageUrl;
            localStorage.setItem('personalData', JSON.stringify(data) );
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
    data = localData;
    paletteFromLocalStorage();
    displayInfoLocal(data);
};

function displayInfoLocal(data) {

    nameInput.value = data.name;
    jobInput.value = data.job;
    inputPhone.value = data.phone;
    inputMail.value = data.email;
    inputLkdin.value = data.linkedin;
    inputGitHub.value = data.github;

    if (data.photo === '') {
        profileImagen.src = defaultData.photo;
    }
    else {
        profileImagen.src = data.photo;
    }

    profilePreview.style.backgroundImage = `url(${data.photo})`;  

    preview();
}












