

const modalbutton = document.querySelector('.jsModalButton')
const body = document.querySelector('body')

modalbutton.addEventListener('click', ()=>{
    console.log('is clicked')

    body.classList.add('modal-is-open')
})

const modalCloseButton = document.querySelector('.jsModalClose')

modalCloseButton.addEventListener('click',()=>{
    console.log('close button clicked')

    body.classList.remove('modal-is-open')
})
