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
    data[event.target.name] = event.target.value
    preview();
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
};

fileInput.addEventListener('change', handleFileSelect);







