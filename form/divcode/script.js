let signUp = document.getElementById('signUp')
let signIn = document.getElementById('signIn')
let nameInput = document.getElementById('nameInput')
let title = document.getElementById('title')


const login = ()=>{
    nameInput.style.maxHeigth = '0'
    title.innerHTML = 'Login'
    signUp.classList.add('disable')
    signIn.classList.remove('disable')
}
const signup = ()=>{
    nameInput.style.maxHeigth = '60px'
    title.innerHTML = 'Registro'
    signUp.classList.remove('disable')
    signIn.classList.add('disable')
}
signIn.addEventListener('click', login)
signUp.addEventListener('click', signup)