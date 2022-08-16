let coxinha = prompt("Deseja comer mais uma coxinha? \nDigite S para sim e N para não.").toUpperCase()
let conta = 0

while(coxinha === "S"){
    conta = conta + 2.50
    coxinha = prompt("Deseja comer mais uma coxinha? \nDigite S para sim e N para não.").toUpperCase()
}

alert(`O total de sua conta foi de: ${conta} reais`)