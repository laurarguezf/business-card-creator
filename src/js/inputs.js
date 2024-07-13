'use strict';

/* VARIABLES GLOBALES*/

const data = {
    name:'',
    job: '',
    phone: '',
    email: '',
    linkedin: '',
    github: '',
    photo: ''
}

/* MEDIA QUERIS*/
const nameInput = document.querySelector('.js__inputName');
const namePreview = document.querySelector('.js__namePreview');

const jobInput = document.querySelector('.js__inputJob');
const jobPreview = document.querySelector('.js__jobPreview');

const inputPhone = document.querySelector('.js__inputPhone');
const phonePreview = document.querySelector('.js__phonePreview');

const inputMail = document.querySelector('.js__inputMail')
const mailPreview = document.querySelector('.js__mailPreview');

const inputLinkedin = document.querySelector('.js__inputLinkedin');
const linkedinPreview = document.querySelector('.js__linkedinPreview');

const inputGitHub = document.querySelector('.js__inputGithub');
const gitGubPreview = document.querySelector('.js__gitHubPreview');

const fileInput = document.querySelector('.js__profile-upload-btn');
const profilePreview = document.querySelector('.js__profile-preview');
const profileImagen = document.querySelector('.js__profile-image');



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
inputLinkedin.addEventListener('input', handlerInput);
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







