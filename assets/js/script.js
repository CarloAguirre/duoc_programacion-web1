
const inputs = {
	nombres : document.getElementById('input-nombres'),
	apellidos : document.getElementById('input-apellidos'),
	username : document.getElementById('input-usuario'),
	email : document.getElementById('input-email'),
	password : document.getElementById('input-pass'),
	repeatPassword : document.getElementById('input-repass'),
	nacimiento : document.getElementById('input-birthday'),
	calle : document.getElementById('input-calle'),
	numeroCalle : document.getElementById('input-numero'),
	tipoDireccion : document.getElementById('input-tipo_direccion')
}
let errors = 0;

document.getElementById('form-user').addEventListener("submit", (event)=>{
	event.preventDefault()
	errors = 0
	// inputs validaciones
	for(let input in inputs){
		const divPadre = inputs[input].parentElement
		let errorExistente = divPadre.querySelector('.error-msg')
		if(errorExistente){
			divPadre.removeChild(errorExistente)
		}

		if(input !== "calle" && inputs[input].value.length <= 1){
		let errorMsg = document.createElement('p')
		errorMsg.classList.add('error-msg')
		errorMsg.style.color = "#292929"
		let error = `Introduzca un valor valido para ${inputs[input].name}`
		errorMsg.textContent = error
		divPadre.appendChild(errorMsg)
		errors += 1
		}

		if(inputs[input].value.length >= 1 && input == "email"){
			const esMail = inputs[input].value.split('@')
			esMail.length < 2 && alert('El formato del correo es incorrecto')
		}
	}
	// password validaciones
	if (inputs.password.value !== inputs.repeatPassword.value) {
		alert('Las contraseñas deben coincidir');
		return;
	}
	if (inputs.password.value.length < 6 || inputs.password.value.length > 18) {
		alert('La contraseña debe tener un rango de longitud entre 6 y 18 caracteres');
		return;
	}
	if (!inputs.password.value.split('').some(char => !isNaN(char))) {
		alert('El password debe tener al menos un numero');
		return;
	}
	if (!inputs.password.value.split('').some(char => char !== char.toLowerCase())) {
		alert('El password debe tener una mayuscula');
		return;
	}
	// fecha validaciones
	const fechaIngresada = new Date (inputs.nacimiento.value)
	let fechaActual = new Date()
	let edad = fechaActual.getFullYear() - fechaIngresada.getFullYear()
	const mesActual = fechaActual.getMonth()
	const diaActual = fechaActual.getDate()
	const mesNac = fechaIngresada.getMonth()
	const diaNac = fechaIngresada.getDate()

	if (mesActual < mesNac || (mesActual === mesNac && diaActual < diaNac)) {
		edad -- 
	}
	edad < 13 && alert('Debes ser mayor de edad para registrarte')

	if(errors == 0){
		alert('Usuario creado con exito!')
		window.location.href = 'index.html'
	}
})

document.getElementById('boton-cancelar').addEventListener('click',()=>{
	for(let input in inputs){
		const divPadre = inputs[input].parentElement
		let errorExistente = divPadre.querySelector('.error-msg')
		if(errorExistente){
			divPadre.removeChild(errorExistente)
		}
	}
	errors = 0
})