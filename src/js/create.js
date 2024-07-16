const handleClickCreateCard = (ev) => {
    ev.preventDefault();
    
    hiddenSection.classList.remove('hidden');
    
    createCardBtn.setAttribute('disabled','');
    /*createCardBtn.innerHTML = `<button class="createCardBtn js_createCardBtn" disabled>
        <i class="fa-regular fa-address-card"></i>
        <span class="createCardText">CREAR TARJETA</span>
        </button>`;*/
        
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
                twitterBtn.classList.add('hidden');
                cardSuccess.innerHTML = '';
                cardUrl.innerHTML = `
                    <p>Ha sucedido un error al cargar la tarjeta</p>
                    <p>${dataResponse.error}</p>`;   
            }
            else {
                cardSuccess.innerHTML = 'La tarjeta ha sido creada:';
                twitterBtn.classList.remove('hidden');
                cardUrl.href = dataResponse.cardURL;
                cardUrl.innerHTML = dataResponse.cardURL;
                shareUrl = dataResponse.cardURL;
                twitterLink.href = `https://twitter.com/intent/tweet?text=He%20creado%20mi%20tarjeta%20de%20visita%2C%20puedes%20visualizarla%20en%20este%20enlace%3A%20&url=${shareUrl}`
            }
        })
};

createCardBtn.addEventListener( 'click' , handleClickCreateCard);
