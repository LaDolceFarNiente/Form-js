const signUp = document.querySelector('button.introBtn2')
const signUpBtn = document.querySelector('button.introBtn1')
const createAcc = document.querySelector('.create_acc')
let introArea1 = document.querySelector('.introduction1')
let  introArea2 = document.querySelector('.introduction2')
let introBgColor = document.querySelector('.bgColor')
let formArea = document.querySelector('.form_area')
let formIn = document.querySelector('.form_area1')
let formUp = document.querySelector('.form_area2')
let form1 = document.querySelector('form.enter')

let signUpName = document.querySelector('.signup_name')
let signUpEmail = document.querySelector('.signup_email')
let signUpPassword = document.querySelector('.signup_password')
let signUpSubmit = document.querySelector('.signUp_submit')

let signInEmail = document.querySelector('.signin_email')
let signInPassword = document.querySelector('.signin_password')
let signInSubmit = document.querySelector('.signIn_submit')

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

// VALIDATION
let errors = document.querySelector('.error')
const inputGroup = document.querySelector('.input_group')
const formInField = document.querySelector('form.sign_in')
// const signInInputs = document.querySelectorAll('form.sign_in>input')

// signInInputs.forEach(input => {
//   input.addEventListener('click', (inpElement)=> {
//     validateForm(input)
//   })
// })



formInField.addEventListener('submit', (event)=> {
  event.preventDefault()
  validateForm()
})
function validateForm() {
  if(signInEmail.value.trim() == '') {
    setError(signInEmail, 'Required!')
  }else {
    setSuccess(signInEmail)
  }
}

function setError(element, message){
  const parent = element.parentElement;
  if(parent.classList.contains('success')){
    parent.classList.remove('success')
  }
  parent.classList.add('warning')
  errors.textContent = message
}

function setSuccess(element) {
  const parent = element.parentElement;
  if(parent.classList.contains('warning')){
    parent.classList.remove('warning')
  }
  parent.classList.add('success')
  errors.textContent= ''
}



let users = JSON.parse(localStorage.getItem('users'))?JSON.parse(localStorage.getItem('users')):[]
// Sign Up user


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




// function validateName() {
//   let inName = document.querySelector('.signin_email').value
//   if(inName.length < 0) {
//     errors.innerHTML = 'requred!'
//     return false
//   } else if (!inName.match(/^[A-Za-z]*\s{1}[A-Za-z]$/)) {
//     errors.innerHTML = 'fill'
//     return false
//   }else {
//     errors.innerHTML = 'valid'
//     return true
//   }
// }

// function setError(element, icon) {
//   inputGroup.classList.add('.warning')
// }

// function validateInp(inp) {
//   inp.addEventListener('click', ()=> {
//     let inputs = inp.value
//     if(inputs.length >= 3) {
//       errors.innerHTML = 'requred'
//       return false
//     }else {
//       errors.innerHTML = 'valid'
//       return true
//     }
//   })
// }
// validateInp(document.querySelector('.signin_email').value)







