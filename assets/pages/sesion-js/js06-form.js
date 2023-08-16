console.log('Formulario')


// Obtenemos la referencia del formulario
//const registerForm = document.getElementById('registerForm') 
const registerForm = document.forms['registerForm']

registerForm.addEventListener('submit', ( event ) =>{
    event.preventDefault(); // omitir acciones por default
    //console.log( event ) datos del click
    //const email = registerForm.elements['email']
    //const birthday = registerForm.elements['birthday']

    const user = {
        fullname : registerForm.elements['fullname'].value,
        email : registerForm.elements['email'].value,
        password : registerForm.elements['password'].value,
        birthdate : registerForm.elements['birthdate'].value
    }

    const age = calculateAge( user )

    if ( age.year < 18) {
        appendAlert( `Al rato regresas, aun tienes ${age.year} años`,'success')
    }


} )

const calculateAge = ( {birthdate: birthdateStr} ) => {
    //console.log(birthdateStr)

    // Date entrega los milisegundos transcurridos desde el 01/01/1970

    const today = new Date(); // crear un objeto con la fecha en curso
    const birthdate = new Date( birthdateStr ) //Objeto con la fecha 1996-11-30

    const difference = today - birthdate
    //console.log(difference) // milisegundos de diferencia
    const age = new Date( difference )
    //console.log( age )
    //console.log(`year: ${age.getFullYear() - 1970 }`)
    //console.log(`Month: ${age.getMonth() }`)
    //console.log(`Days: ${age.getDate() }`)

    return {
        year: age.getFullYear() - 1970 ,
        Month: age.getMonth(), 
        Days: age.getDate()
    }
}

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

/* const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Nice, you triggered this alert message!', 'success')
  })
} */