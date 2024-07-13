const fieldsets = document.querySelectorAll('.js_fieldset');

function handleClickArrow(ev) {
    const clickedSection = ev.currentTarget.closest('fieldset');

    for (let i = 0; i < fieldsets.length; i++) {
        const currentFieldset = fieldsets[i].closest('fieldset');

        if(currentFieldset === clickedSection) {
            currentFieldset.classList.remove('collapsed');
        } else {
            currentFieldset.classList.add('collapsed');
        }
    }
    
    clickedSection.scrollIntoView();
}

for (let i = 0; i < fieldsets.length; i++) {
    fieldsets[i].addEventListener('click', handleClickArrow);
};