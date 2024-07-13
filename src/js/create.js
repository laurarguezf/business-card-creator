const createCardBtn = document.querySelector('.js_createCardBtn');
const cardUrl = document.querySelector('.js_cardUrl');
const hiddenSection = document.querySelector('.js_hiddenSection');
const twitterLink = document.querySelector('.js_link');
const message = document.querySelector('.js_cardMessage');

let shareUrl = '';

const handleClickCreateCard = (ev) => {
    ev.preventDefault();

    hiddenSection.classList.remove('hidden');

    fetch('https://dev.adalab.es/api/card/', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then( response => response.json() )
        .then( dataResponse => {

            if( dataResponse.success === false) {
                cardUrl.innerHTML = `
                    <p>Ha sucedido un error al cargar la tarjeta</p>
                    <p>${dataResponse.error}</p>`;
            }
            else {
                cardUrl.href = dataResponse.cardURL;
                cardUrl.innerHTML = dataResponse.cardURL;
                shareUrl = dataResponse.cardURL;
                twitterLink.href = `https://twitter.com/intent/tweet?text=He%20creado%20mi%20tarjeta%20de%20visita%2C%20puedes%20visualizarla%20en%20este%20enlace%3A%20&url=${shareUrl}`
            }
        })
};

createCardBtn.addEventListener( 'click' , handleClickCreateCard);
