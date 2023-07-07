const input = document.querySelector('#mass')
const select = document.querySelector('#select')
const calculate = document.querySelector('.Calculate')
const errorMessage = document.querySelector('#error-message')

calculate.addEventListener('click', () =>{
    let calc 
    if(select.value == 'Earth') {
        const g = 10
        calc = Number(input.value) * g
    }
    else if (select.value ==='Mercury') {
        const g2 = 0.38
        calc = Number(input.value) * g2
    }
    else if(select.value =='Venus'){
        const g3 = 0.9
        calc = Number (input.value) * g3
    }
    else if(select.value =='Mars'){
        const g4 = 0.38
        calc = Number (input.value) * g4
    }
    else if(select.value =='Jupiter'){
        const g5 = 2.53
        calc = Number (input.value) * g5
    }
    else if(select.value =='Saturn'){
        const g6 = 1.07
        calc = Number (input.value) * g6
    }
    else if(select.value =='Uranus'){
        const g7 = 0.89
        calc = Number (input.value) * g7
    }
    else if(select.value =='Neptune'){
        const g8 = 1.14
        calc = Number (input.value) * g8
    }
    alert(`The weight on planet ${select.value} is ${calc}`)
   
})

calculate.addEventListener('click', (event) =>{
    if(!event.target.checkValidity()){
        event.preventDefault()
        errorMessage.style.display ='block'
    }
})
