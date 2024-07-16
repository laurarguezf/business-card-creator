const defaultData = {   
    name: namePreview.textContent,
    job: jobPreview.textContent,
}

const preview = () => { 
    namePreview.innerHTML = data.name || defaultData.name;
    jobPreview.innerHTML = data.job || defaultData.job;

    phonePreview.href = `tel:${data.phone}`;
    mailPreview.href = `mailto:${data.email}`;
    linkedinPreview.href = `https://${data.linkedin}`;

    const githubFixedName = data.github.startsWith('@') ? data.github.slice(1) : data.github;
    gitGubPreview.href = `https://github.com/${githubFixedName}`;
}   

const handlerInput = (event) => {   
    data[event.target.name] = event.target.value;
    preview();
    createCardBtn.removeAttribute('disabled');

    localStorage.setItem('personalData', JSON.stringify(data) );
};

nameInput.addEventListener('input', handlerInput); 
jobInput.addEventListener('input' , handlerInput);  

inputPhone.addEventListener('input', handlerInput);
inputMail.addEventListener('input', handlerInput);
inputLkdin.addEventListener('input', handlerInput);
inputGitHub.addEventListener('input', handlerInput);


const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) { 
        const reader = new FileReader(); 
        reader.onload = () => {
            const imageUrl = reader.result;
            profilePreview.style.backgroundImage = `url(${imageUrl})`;
            profileImagen.src = imageUrl;
            data.photo = imageUrl;
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

data = localData;

function displayInfoLocal(data){

    nameInput.value = data.name;
    jobInput.value = data.job;
    inputPhone.value = data.phone;
    inputMail.value = data.email;
    inputLkdin.value = data.linkedin;
    inputGitHub.value = data.github;
    profilePreview.style.backgroundImage = `url(${data.photo})`;
    profileImagen.src = data.photo;

    preview();
}

displayInfoLocal(data);










