let calContainer = document.querySelector('#calendarContainer')
let cardsContainer = document.querySelector('#cardsNew')


let table = document.createElement('table')
let tr = document.createElement('tr')

let month = 7
let year = 2022
let date = new Date(year,month-1)
let dayMonthStart = date.getDay()
let daysInMonth = new Date(year,month,0).getDate()

console.log(date.setDate(date.getDate()+1))


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
    plusPng.src = './Static/Plus.png'

    let inputContainer = document.createElement('div')


    let form = document.createElement('form')
    form.classList.add('form')
    
    
    let BdayPng = document.createElement('input')
    BdayPng.classList.add('b-day-submit')
    BdayPng.type = 'image'
    BdayPng.src = './Static/Birthday-cake.png'
    
    
    let anniversaryPng = document.createElement('input')
    anniversaryPng.classList.add('anniv-submit')
    anniversaryPng.type = 'image'
    anniversaryPng.src = './Static/Growing-heart.png'


    let input = document.createElement('input')
    input.setAttribute('id',`userInput+${index}`)
    input.classList.add(`userInput`)
    input.type = 'text'

    inputContainer.append(input,BdayPng,anniversaryPng)
    form.append(inputContainer)
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


let annivAll = document.querySelectorAll('.b-day-submit')
let bdayAll = document.querySelectorAll('.anniv-submit')
let formButton = document.querySelectorAll('.formButton')
console.log(annivAll)
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
    
    let specificDay = e.target.parentElement.parentElement

    let userInfoContainer = document.createElement('div')
    userInfoContainer.setAttribute('id','card1')
    let userText = document.createElement('span')
    userText.textContent =  e.target.value
    userInfoContainer.append(userText)
    specificDay.append(userInfoContainer)
}



function occasionSelect(){

}