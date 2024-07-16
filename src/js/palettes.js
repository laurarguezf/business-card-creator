function changeColorPalette(ev){
    const elementId = ev.currentTarget.dataset.id;

    const paletteClass = Array.from(previewCard.classList).filter(object => object.includes('palette'));

    previewCard.classList.remove(paletteClass);
    previewCard.classList.add(`palette${elementId}`);

    const currentRadio = ev.currentTarget.querySelector('.js_radioBtn');
    
    if (currentRadio) {
        currentRadio.checked = true;
    }
    data.palette = elementId;
    createCardBtn.removeAttribute('disabled');
    resetCreatedCardSection();

    localStorage.setItem('personalData', JSON.stringify(data) );
}

function paletteFromLocalStorage(ev) {
    if (data.palette === '') {
        const paletteClass = Array.from(previewCard.classList).filter(object => object.includes('palette'));
        previewCard.classList.remove(paletteClass);
        previewCard.classList.add(`palette1`);
    }
    else {
        const localData = JSON.parse(localStorage.getItem('personalData'));
        const paletteClass = Array.from(previewCard.classList).filter(object => object.includes('palette'));
        previewCard.classList.remove(paletteClass);
        previewCard.classList.add(`palette${localData.palette}`);
        const radio1 = document.querySelector('.js_radioBtn1');
        const radio2 = document.querySelector('.js_radioBtn2');
        const radio3 = document.querySelector('.js_radioBtn3');
        if (localData.palette === '1') {
            radio1.checked = true;
        }
        else if (localData.palette === '2') {
            radio2.checked = true;
        }
        else {
            radio3.checked = true;
        };  
    };
    
}

for (const palette of paletteWrap){
    palette.addEventListener('click', changeColorPalette);
}

paletteFromLocalStorage();