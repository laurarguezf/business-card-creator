'use strict';

// VARIABLES GLOBALES

const data = {
    name:'',
    job: '',
    photo: '',
    phone: '',
    email: '',
    linkedin: '',
    github: ''
}


// QUERY SELECTORS

const fieldsets = document.querySelectorAll('.js_fieldset');
const paletteWrap = document.querySelectorAll('.js__paletteWrap');
const previewCard = document.querySelector('.js__previewCard');
const nameInput = document.querySelector('.js__inputName');
const namePreview = document.querySelector('.js__namePreview');

const jobInput = document.querySelector('.js__inputJob');
const jobPreview = document.querySelector('.js__jobPreview');

const inputPhone = document.querySelector('.js__inputPhone');
const phonePreview = document.querySelector('.js__phonePreview');

const inputMail = document.querySelector('.js__inputMail')
const mailPreview = document.querySelector('.js__mailPreview');

const inputLkdin = document.querySelector('.js__inputLinkedin');
const linkedinPreview = document.querySelector('.js__linkedinPreview');

const inputGitHub = document.querySelector('.js__inputGithub');
const gitGubPreview = document.querySelector('.js__gitHubPreview');

const fileInput = document.querySelector('.js__profile-upload-btn');
const profilePreview = document.querySelector('.js__profile-preview');
const profileImagen = document.querySelector('.js__profile-image');

const resetBtn = document.querySelector('.js__resetBtn');
const mailInput = document.querySelector('.js__inputMail');
const inputTlf = document.querySelector('.js__inputPhone');
const inputLinkedin = document.querySelector('.js__inputLinkedin');
const inputGithub = document.querySelector('.js__inputGithub');
const previewTlf = document.querySelector('.js__inputPhone');
const previewMail = document.querySelector('.js__previewMail');
const previewLinkedin = document.querySelector('.js__previewLinkedin');
const previewGithub = document.querySelector('.js__previewGithub');


// IMPORT JS

import './sections.js';
import './palettes.js';
import './inputs.js';
import './reset.js';
import './create.js';