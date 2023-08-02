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
let form1 = document.querySelector('form.enter')

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

let users = JSON.parse(localStorage.getItem('users'))?JSON.parse(localStorage.getItem('users')):[]
// Sign Up user
let signUpName = document.querySelector('.signup_name')
let signUpEmail = document.querySelector('.signup_email')
let signUpPassword = document.querySelector('.signup_password')
let signUpSubmit = document.querySelector('.signUp_submit')

 function signUpUser (e) {
     let userObj = {
        name: signUpName.value,
        email: signUpEmail.value,
        pass: signUpPassword.value
    }

   users.push(userObj)
    
    console.log(users);
    localStorage.setItem('users', JSON.stringify(users))
    
    form1.reset()

}
signUpSubmit.addEventListener('click',(e)=> {
    e.preventDefault()
    signUpUser()
    alert('done')
  })

//  log in
let signInEmail = document.querySelector('.signin_email')
let signInPassword = document.querySelector('.signin_password')
let signInSubmit = document.querySelector('.signIn_submit')


function signinUser(e) {
    
    users.forEach(item => {
        if(item.email == signInEmail.value && item.pass == signInPassword.value) {
            alert('done')
        } else {
            alert('retry')
        }
    });
    form1.reset()

}
signInSubmit.addEventListener('click', (e)=> {
    e.preventDefault()
    signinUser()
})








