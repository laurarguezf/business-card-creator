const paletteWrap = document.querySelectorAll('.js__paletteWrap');
const previewCard = document.querySelector('.js__previewCard');

console.log(previewCard);

const palettes = [
    {
        id: '1',
        class: "green"
    },
    {
        id: '2',
        class: 'red'
    },
    {
        id: '3',
        class: 'blue'
    }
]

function changeColorPalette(ev){
    const elementId = ev.currentTarget.dataset.id;
    const clickedPalette = palettes.find(palette => palette.id === elementId);
    const clickedClass = clickedPalette.class;

    palettes.forEach(palette => previewCard.classList.remove(palette.class));

    previewCard.classList.add(clickedClass);
    console.log(previewCard.classList);
}



for (const palette of paletteWrap){
    palette.addEventListener('click', changeColorPalette);
}

