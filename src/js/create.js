const handleClickCreateCard = async (ev) => {
    ev.preventDefault();
    
    hiddenSection.classList.remove('hidden');
    createCardBtn.setAttribute('disabled','');
    
    try {
        const response = await fetch('https://dev.adalab.es/api/card/', {
            method: 'POST',
            body: JSON.stringify(initData),
            headers: {'Content-Type': 'application/json'}  
        });

        const dataResponse = await response.json();

        if (!dataResponse.success) {
            twitterBtn.classList.add('hidden');
            cardSuccess.innerHTML = '';
            cardUrl.innerHTML = `
                <p>Ha sucedido un error al cargar la tarjeta</p>
                <p>${dataResponse.error}</p>`;   
        } else {
            cardSuccess.innerHTML = 'La tarjeta ha sido creada:';
            twitterBtn.classList.remove('hidden');
            cardUrl.href = dataResponse.cardURL;
            cardUrl.innerHTML = dataResponse.cardURL;
            shareUrl = dataResponse.cardURL;
            twitterLink.href = `https://twitter.com/intent/tweet?text=He%20creado%20mi%20tarjeta%20de%20visita%2C%20puedes%20visualizarla%20en%20este%20enlace%3A%20&url=${shareUrl}`
        }

        //Control del icono de teléfono
        if (inputPhone.value === '') {
            icontTel.classList.add('hidden');
        } else {
            icontTel.classList.remove('hidden');
        }

    } catch(error) {
        cardUrl.innerHTML = `<p>Error al crear la tarjeta: ${error.message}</p>`;
    }
};


createCardBtn.addEventListener( 'click' , handleClickCreateCard);