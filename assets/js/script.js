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
};

let errors = 0;

document.getElementById('form-user').addEventListener("submit", (event)=>{
	event.preventDefault()
	errors = 0
	for (let input in inputs) {
		const divPadre = inputs[input].parentElement
		let errorExistente = divPadre.querySelector('.error-msg')
		if (errorExistente){
			divPadre.removeChild(errorExistente)
		}
	}
	for (let input in inputs) {
		if (input !== "tipoDireccion" && inputs[input].value.trim().length <= 1){ 
			mostrarError(inputs[input], `Introduzca un valor válido para ${inputs[input].name}`)
		}
		if (input === "email" && inputs[input].value.length >= 1) {
			const esMail = inputs[input].value.split('@')
			if (esMail.length < 2) {
				mostrarError(inputs[input], "El formato del correo es incorrecto")
			}
		}
	}
	if (inputs.password.value !== inputs.repeatPassword.value) {
		alert('Las contraseñas deben coincidir')
		return
	}
	if (inputs.password.value.length < 6 || inputs.password.value.length > 18){
		alert('La contraseña debe tener entre 6 y 18 caracteres')
		return
	}
	if (!inputs.password.value.split('').some(char => !isNaN(char))){
		alert('La contraseña debe tener al menos un número')
		return
	}
	if (!inputs.password.value.split('').some(char => char !== char.toLowerCase())){
		alert('La contraseña debe tener al menos una mayúscula')
		return
	}
	const fechaIngresada = new Date(inputs.nacimiento.value)
	let fechaActual = new Date()
	let edad = fechaActual.getFullYear() - fechaIngresada.getFullYear()
	const mesActual = fechaActual.getMonth()
	const diaActual = fechaActual.getDate()
	const mesNac = fechaIngresada.getMonth()
	const diaNac = fechaIngresada.getDate()

	if (mesActual < mesNac || (mesActual === mesNac && diaActual < diaNac)){
		edad--
	}

	if (edad < 13){
		alert('Debes tener al menos 13 años para registrarte')
		return
	}
	if (errors == 0){
		alert('Usuario creado con éxito!')
		window.location.href = 'index.html'
	}
})
function mostrarError(input, mensaje){
	const divPadre = input.parentElement
	let errorMsg = document.createElement('p')
	errorMsg.classList.add('error-msg')
	errorMsg.style.color = "red"
	errorMsg.style.fontSize = "14px"
	errorMsg.style.marginTop = "5px"
	errorMsg.textContent = mensaje
	divPadre.appendChild(errorMsg)
	errors += 1
}
document.getElementById('boton-cancelar').addEventListener('click', () =>{
	for (let input in inputs){
		const divPadre = inputs[input].parentElement
		let errorExistente = divPadre.querySelector('.error-msg')
		if (errorExistente){
			divPadre.removeChild(errorExistente)
		}
	}
	errors = 0
})
let iconCart = document.querySelector('.icon-cart')
let closeCart = document.querySelector('.cerrar')
let body = document.querySelector('body')
iconCart.addEventListener('click', () => {
	body.classList.toggle('showCart');
})
closeCart.addEventListener('click', () => {
	body.classList.toggle('active');
})
