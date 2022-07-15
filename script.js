let calContainer = document.querySelector('#calendarContainer')


let table = document.createElement('table')
let tr = document.createElement('tr')

let month = 7
let year = 2022
let date = new Date(year,month-1)
let dayMonthStart = date.getDay()
let daysInMonth = new Date(year,month,0).getDate()

console.log(date.setDate(date.getDate()+1))



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
    formSpan.textContent = 'sh'
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

let formButton = document.querySelectorAll('.formButton')
formButton.forEach(element=>{
element.addEventListener('click',()=>alert('hello'))
})
function createBdayCard() {
    day.add
    
}
