let calContainer = document.querySelector('#calendarContainer')
let cardsContainer = document.querySelector('#cardsNew')
let monthHTML = document.querySelector('#date-string')


let table = document.createElement('table')
let tr = document.createElement('tr')

let month = 7
let year = 2022
let date = new Date(year,month-1)
let dayMonthStart = date.getDay()
let daysInMonth = new Date(year,month,0).getDate()

console.log(date.setDate(date.getDate()+1))

let pTagWithDate = document.createElement('h2')

let myDate = `${date.toLocaleString('default', { month: 'long' })} ${date.getUTCFullYear()}`;
pTagWithDate.innerHTML = myDate

monthHTML.append(pTagWithDate)
let bDaySelected, anniversarySelected



let count = 0
rowNum = 1

for (let index = 0; index < dayMonthStart; index++) {
    count = index+1
    let td = document.createElement('td')
    td.classList.add('box')    
    tr.append(td)
}

tr.setAttribute('id','row'+rowNum)

for (let index = 1; index < daysInMonth+1; index++) {
    
    if(count%7 == 0){
        table.append(tr)
        tr = document.createElement('tr')
        rowNum++
        tr.setAttribute('id','row'+rowNum)
    }

    count++
    
    let td = document.createElement('td')
    td.innerHTML = index
    td.classList.add('day','box')
    td.setAttribute('id','day'+index) 

    let formSpan = document.createElement('span')
    formSpan.classList.add('formButton')
    let plusPng = document.createElement('img')
    plusPng.classList.add('showForm')
    plusPng.src = './Static/Plus.png'

    let inputContainer = document.createElement('div')


    let form = document.createElement('form')
    form.classList.add('form')
    
    
    let BdayPng = document.createElement('input')
    BdayPng.classList.add('b-day-submit')
    BdayPng.type = 'image'
    BdayPng.src = './Static/Birthday-cake.png'
    BdayPng.required = true;
    
    
    let anniversaryPng = document.createElement('input')
    anniversaryPng.classList.add('anniv-submit')
    anniversaryPng.type = 'image'
    anniversaryPng.src = './Static/Growing-heart.png'
    anniversaryPng.required = true;


    let input = document.createElement('input')
    input.setAttribute('id',`userInput${index}`)
    input.classList.add(`userInput`)
    input.type = 'text'

    form.append(input,BdayPng,anniversaryPng)
    inputContainer.append(form)
    formSpan.append(plusPng,form)
    td.append(formSpan)
    tr.append(td)
    
}
for (let index = count; index < 34; index++) {
    let td = document.createElement('td')
    td.classList.add('box')
        tr.append(td)
}

if(count>35){
    for (let index = 0; index < 42-(daysInMonth+dayMonthStart); index++) {
        let td = document.createElement('td')
    
    td.classList.add('box') 
    
    tr.append(td)
    
    }
}

table.append(tr)
calContainer.append(table)


let userInput = document.querySelector('#userInput6')
let annivAll = document.querySelectorAll('.b-day-submit')
let bdayAll = document.querySelectorAll('.anniv-submit')
let formButton = document.querySelectorAll('.formButton')
formButton.forEach(element=>{
// element.addEventListener('click',()=>alert('hello'))
})


bdayAll.forEach(element=>
    element.addEventListener('click',createBdayCard)
)
annivAll.forEach(element=>
    element.addEventListener('click',createBdayCard)
)

function createBdayCard(e) {
    e.preventDefault()
    let specificDay = e.target.parentElement.parentElement.parentElement
    console.log(specificDay)
    console.log(e.target)

    e.target.setAttribute('required', '') 

    let userInfoContainer = document.createElement('div')
    userInfoContainer.classList.add('card')

    let userText = document.createElement('span')
    
    userText.textContent = this.parentElement.firstChild.value
    
    let imgEvent  = document.createElement('img')
    imgEvent.src = this.src

    let deleteCard = document.createElement('img')
    deleteCard.src ='./Static/Delete.png'
    deleteCard.addEventListener('click',remove_div)
    
    this.parentElement.firstChild.value = ''
    let formDiv = this.parentElement
    formDiv.style.visibility = 'hidden' 

    
    userInfoContainer.append(imgEvent,userText,deleteCard)
    specificDay.append(userInfoContainer)
}


function remove_div(){
    this.parentElement.remove();
  }
// function edit(){
//     console.log(this.parentElement)
//     let a = this.parentElement
//     a.innerHTML =''
//     let b = document.createElement('input')
//     let b = document.createElement('input')
//     a.append(b)
//     b.value 
//     a.append(b.value)
// }

let showForm = document.querySelectorAll('.showForm')
let form = document.querySelectorAll('form')


// console.log(showForm)
// let form = document.querySelector('form')
// showForm.addEventListener('click',()=>{
//     form.style.display = 'visible'
// })
showForm.forEach(element=>{
    element.addEventListener('click',reveal)})

function reveal(element){
    
        if(element.target.nextElementSibling.style.visibility == 'visible'){
            // element.target.style.visibility = 'hidden'
            element.target.nextElementSibling.style.visibility ='hidden' 
        } else {element.target.nextElementSibling.style.visibility == 'hidden'
        // element.target.style.visibility = 'visible'
            element.target.nextElementSibling.style.visibility  = 'visible'}
    }

document.addEventListener('click', function handleClickOutsideBox(event) {
        // const form1 = document.querySelector('.form');
        
        // if (form1.style.visibility=='visible' && !form1.contains(event.target)) {
        //   form1.style.visibility = 'hidden';
        // }
      });