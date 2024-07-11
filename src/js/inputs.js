    'use strict';

    /* VARIABLES GLOBALES*/

    const data = {
        name:'',
        job: '',
        phone: '',
        email: '',
        linkedin: '',
        github: '',
        photo: '',
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

    /* FUNCIONES */ 

    const preview = () => {
        namePreview.innerHTML = data.name;
        jobPreview.innerHTML = data.job;

        phonePreview.href = `${data.phone}`;
        mailPreview.href = `${data.email}`;
        linkedinPreview.href = `https://${data.linkedin}`;
        gitGubPreview.href = `https://${data.github}`;
    }
    

    /* EVENTOS */

    const namePreviewDefaultValue = namePreview.textContent;
    const jobPreviewDefaultValue = jobPreview.textContent;


    const handleInputName = (ev) => {
        data.name = nameInput.value;
        if(data.name === '') {
            data.name = namePreviewDefaultValue;
        }
        preview();
    };

    const handleInputJob = (ev) => {
        data.job = jobInput.value;
        if(data.job === '') {
            data.job = jobPreviewDefaultValue;
        }
        preview();
    };

    const handleInputPhone = (ev) => {
        data.phone = inputPhone.value;
        preview();
    };

    const handleInputEmail = (ev) => {
        data.email = inputMail.value;
        preview();
    };

    const handleInputLinkedin = (ev) => {
        data.linkedin = inputLinkedin.value;
        preview();
    };

    const handleInputGitHub = (eva) => {
        data.github = inputGitHub.value;
        preview();
    }


    nameInput.addEventListener('input', handleInputName);
    jobInput.addEventListener('input' , handleInputJob);

    inputPhone.addEventListener('input', handleInputPhone);
    inputMail.addEventListener('input', handleInputEmail);
    inputLinkedin.addEventListener('input', handleInputLinkedin);
    inputGitHub.addEventListener('input', handleInputGitHub);
    
   


    

