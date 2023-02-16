'use strict'

const adicionar = document.getElementById('add')

const adicionarCard=() => {
    const container = document.getElementById('container')
    container.innerHTML += '<div class = "items"></div>'
}

//  function adicionarCard(){
//     alert('Ola Mundo s2s2')
//  }

adicionar.addEventListener('click', adicionarCard)
//adicionar.addEventListener( 'click' , adicionarCard)