'use strict';

// VARIABLES GLOBALES

let data = {
    palette: '1',
    name:'',
    job: '',
    photo: '',
    phone: '',
    email: '',
    linkedin: '',
    github: '',
}

let shareUrl = '';



// QUERY SELECTORS

//Variables para los Fieldsets y Secciones
const fieldsets = document.querySelectorAll('.js_fieldset');  
const paletteWrap = document.querySelectorAll('.js__paletteWrap');
const previewCard = document.querySelector('.js__previewCard');
const hiddenSection = document.querySelector('.js_hiddenSection');
const message = document.querySelector('.js_cardMessage');
const cardSuccess = document.querySelector('.js_cardSuccess');

//Variables para los inputs(formulario)
const nameInput = document.querySelector('.js__inputName');
const jobInput = document.querySelector('.js__inputJob');
const inputPhone = document.querySelector('.js__inputPhone');
const inputMail = document.querySelector('.js__inputMail')
const inputLkdin = document.querySelector('.js__inputLinkedin');
const inputGitHub = document.querySelector('.js__inputGithub');
const fileInput = document.querySelector('.js__profile-upload-btn');

//Variables para los previews (previsualización)
const namePreview = document.querySelector('.js__namePreview');
const jobPreview = document.querySelector('.js__jobPreview');
const phonePreview = document.querySelector('.js__previewTlf');
const mailPreview = document.querySelector('.js__previewMail');
const linkedinPreview = document.querySelector('.js__previewLinkedin');
const gitGubPreview = document.querySelector('.js__previewGithub');
const profilePreview = document.querySelector('.js__profile-preview');
const profileImagen = document.querySelector('.js__profile-image');

//Variables para el botón de Crear Tarjeta y Reset
const createCardBtn = document.querySelector('.js_createCardBtn');
const cardUrl = document.querySelector('.js_cardUrl');
const twitterBtn = document.querySelector('.js_twitterBtn');
const twitterLink = document.querySelector('.js_link');
const resetBtn = document.querySelector('.js__resetBtn');
const icontTel = document.querySelector('.js__icon');

// IMPORT JS

import './sections.js';
import './palettes.js';
import './inputs.js';
import './reset.js';
import './create.js';