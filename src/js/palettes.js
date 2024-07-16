function changeColorPalette(ev){
    const elementId = ev.currentTarget.dataset.id;

    const paletteClass = Array.from(previewCard.classList).filter(object => object.includes('palette'));

    previewCard.classList.remove(paletteClass);
    previewCard.classList.add(`palette${elementId}`);

    const currentRadio = ev.currentTarget.querySelector('.js_radioBtn');

    data.palette = elementId;

    if (currentRadio) {
        currentRadio.checked = true;
    }

    createCardBtn.removeAttribute('disabled');
    resetCreatedCardSection();
}

for (const palette of paletteWrap){
    palette.addEventListener('click', changeColorPalette);
}