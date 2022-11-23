function calcular() {
    num = document.getElementById('num')
    alt = document.getElementById('alt')
    res = document.getElementById('res')
    fim = document.getElementById('fim')
    imc = Number(num.value) / (Number(alt.value)*Number(alt.value))
    if (num.value.length == 0 || alt.value.length == 0) {
        window.alert('Peso ou altura não informado!')
    }
    else {
        res.innerHTML = ''
        res.innerHTML += `Seu IMC é ${imc.toFixed(2)}`
        fim.innerHTML = ''
        if (imc <= 18.5) {
            fim.innerHTML = 'Abaixo do Peso'
        }
        else if (imc <= 24.9) {
            fim.innerHTML = 'Peso Normal'
        }
        else if (imc <= 29.9){
            fim.innerHTML = 'Acima do Peso'
        }
        else if (imc <=34.9) {
            fim.innerHTML = 'Obesidade classe 1'
        }
        else if (imc < 39.9) {
            fim.innerHTML = 'Obesidade classe 2'
        }
        else if (imc >= 40) {
            fim.innerHTML = 'Obesidade classe 3'
        }
    }
    num.value = ''
    num.focus()
    alt.value = ''
    alt.focus()
}
