const signUp = document.querySelector('button.introBtn2')
const signUpBtn = document.querySelector('button.introBtn1')
const createAcc = document.querySelector('.create_acc')
let introArea1 = document.querySelector('.introduction1')
let  introArea2 = document.querySelector('.introduction2')
let   introTitle = document.querySelector('.text_title')
let introBgColor = document.querySelector('.bgColor')
let formArea = document.querySelector('.form_area')
let formIn = document.querySelector('.form_area1')
let formUp = document.querySelector('.form_area2')
const formBtns = document.querySelectorAll('button.submit')

function translate(e) {
    e.addEventListener('click', ()=> {
        introArea2.classList.toggle('intro_style')
        introArea1.classList.toggle('intro_style')
        introBgColor.classList.toggle('color')
        formArea.classList.toggle('translate')
        formIn.classList.toggle('hidden')
        formUp.classList.toggle('hidden')
    })
}
translate(signUp)
translate(signUpBtn)

formBtns.forEach(info => {
    info.preventDefault()
})

let usersInfo = []

function entInfo (e) {
    e.preventDefault()
    let userInf = {
        name: document.querySelector('.name'),
        email: document.querySelector('.email'),
        password: document.querySelector('.password')
    }
    usersInfo.push(userInf)
    document.querySelector('form.enter').reset()
}








