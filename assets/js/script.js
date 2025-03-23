
document.getElementById('form-user').addEventListener("submit", (event)=>{
	event.preventDefault()

	const inputs = {
		nombres : document.getElementById('input-nombres'),
		apellidos : document.getElementById('input-apellidos'),
		username : document.getElementById('input-usuario'),
		email : document.getElementById('input-email'),
		password : document.getElementById('input-pass'),
		repeatPassword : document.getElementById('input-birthday'),
		nacimiento : document.getElementById('input-birthday'),
		calle : document.getElementById('input-calle'),
		numeroCalle : document.getElementById('input-numero'),
		tipoDireccion : document.getElementById('input-tipo_direccion')
	}
	
	for(let input in inputs){
		if(input !== "calle"){
			if(inputs[input].value.length <= 1){
				console.log(`El input ${input} debe tener un valor valido`)
			}
		}
	}

})