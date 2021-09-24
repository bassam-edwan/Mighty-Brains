const url = "https://mightybrains.herokuapp.com/"
async function postaccount(name,course,email,number){
const data = await fetch(url,{
    method: "POST",
    headers: {
        'accept':'application/json',
        'content-type':'application/json'
    },
    body:JSON.stringify({name,course,email,number})
    
})
const updated_data = await  data.json()
return updated_data
}

//getting values from form

document.getElementById('sign_in').addEventListener('submit', function(e){
    e.preventDefault()
const name = document.getElementById('name').value
const course = document.getElementById('course').value
const email = document.getElementById('email').value
const number = document.getElementById('number').value
postaccount(name,course,email,number)
})
