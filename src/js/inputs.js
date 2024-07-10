    'use strict';

    /* VARIABLES GLOBALES*/

    const data = {
        palette: 1,
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


    /* EVENTOS */

    const namePreviewDefaultValue = namePreview.textContent;
    const jobPreviewDefaultValue = jobPreview.textContent;


    const handleInputName = (ev) => {
        data.name = nameInput.value;
        if(data.name === '') {
            data.name = namePreviewDefaultValue;
        }
        namePreview.innerHTML = data.name;
    };

    const handleInputJob = (ev) => {
        data.job = jobInput.value;
        if(data.job === '') {
            data.job = jobPreviewDefaultValue;
        }
        jobPreview.innerHTML = data.job;
    };



    nameInput.addEventListener('input', handleInputName);
    jobInput.addEventListener('input' , handleInputJob);