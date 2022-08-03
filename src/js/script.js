let password = document.querySelector("#password")
let imgEye = document.querySelector("#eye")
let rptpassword = document.querySelector("#rptpassword")
let otherEye = document.querySelector("#otherEye")
let check = document.querySelector("#checkEqual")

imgEye.addEventListener("click", function() {
	if (password.getAttribute('type') == 'password') {
		password.setAttribute('type', 'text')
		imgEye.src = '../img/eyeOpen.png'
	} else {
		password.setAttribute('type', 'password')
		imgEye.src = '../img/eyeClose.png'
	}
})

otherEye.addEventListener("click", function() {
	if (rptpassword.getAttribute('type') == 'password') {
		rptpassword.setAttribute('type', 'text')
		otherEye.src = '../img/eyeOpen.png'
	} else {
		rptpassword.setAttribute('type', 'password')
		otherEye.src = '../img/eyeClose.png'
	}
})

function strongPassword() { 
	let numbers = /([0-9])/
	let tiny = /([a-z])/
	let uppercase = /([A-Z])/
	let diferent = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/

	if ($('#password').val().length < 6) { 
        // Se for menor que 6, mostra essa mensagem na tela.
		$('#status').html("<p class='text-red-500 font-bold'>Fraco, insira no mínimo 6 letras</p>")
	} else {  	
		if ($('#password').val().match(numbers) && $('#password').val().match(tiny) && $('#password').val().match(uppercase) && $('#password').val().match(diferent)) { 
            // Se tiver todos esses atributos, mostra essa.
			$('#status').html("<p class='text-green font-bold'>Forte</p>")
		} else { 
            // Se só tiver alguns, mostra essa.
			$('#status').html("<p class='text-orange-500 font-bold'>Médio</p>")
		}
	}
}

function passwordEqual() {
    if (rptpassword.value === input.value) {
        check.innerHTML = `<p class='text-green font-bold'>As senhas são iguais.</p>`
    } else {
        check.innerHTML = `<p class='text-red-500 font-bold'>As senhas são diferentes.</p>`
    }
}