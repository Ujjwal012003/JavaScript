// Start writing JavaScript here!
const accordions = document.querySelectorAll('.accordion')


accordions.forEach(accordion=>{
    const header = accordion.querySelector('.accordion__header')

    header.addEventListener('click', event => {
        accordion.classList.toggle('is-open')
        console.log('is-clicked')
      })
        
         
    })

    

    


