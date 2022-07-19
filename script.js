let calContainer = document.querySelector('#calendarContainer')
let cardsContainer = document.querySelector('#cardsNew')
let monthHTML = document.querySelector('#date-string')
let dateFormCont = document.querySelector('#dateFormCont')

let table = document.createElement('table')
table.setAttribute('id','caltable')
let tr = document.createElement('tr')

let dateButton = document.querySelector('#dateForm')

let tble = document.querySelector('#caltable')

let month = new Date().getMonth()
let year = new Date().getFullYear()


function NextMonth(){
    monthHTML.innerHTML =''
    table.innerHTML = ''
    month += 1 
    newDates(month,year)
}

function previousMonth(){
    monthHTML.innerHTML =''
    table.innerHTML = ''
        month -= 1 
            newDates(month,year)
        }


function newDates(month,year){
    
    let date = new Date(year,month)
    let dayMonthStart = date.getDay()
    let daysInMonth = new Date(year,month+1,0).getDate()
    let myDate = `${date.toLocaleString('default', { month: 'long' })} ${date.getUTCFullYear()}`;

    let namesOfTheWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

let tr = document.createElement('tr') 
    
    let count = 0
    rowNum = 1
    tr.setAttribute('id','row'+rowNum)

    for (let index = 0; index < 7; index++) {
        
        let td = document.createElement('td')
        td.textContent = namesOfTheWeek[index]
        td.classList.add('Days-Of-Week')    
        tr.append(td)
        
        
    }
    table.append(tr)
    tr = document.createElement('tr')
    rowNum++
    tr.setAttribute('id','row'+rowNum)
        
    for (let index = 0; index < dayMonthStart; index++) {

        count = index+1
        let td = document.createElement('td')
        td.classList.add('box')    
        tr.append(td)
    }
    
    
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
        let subCont = document.createElement('div')
        let subCont2 = document.createElement('div')
        
    
        let form = document.createElement('form')
        form.classList.add('form')
        
        
        let BdayPng = document.createElement('input')
        BdayPng.classList.add('b-day-submit')
        BdayPng.type = 'image'
        BdayPng.src = './Static/Birthday-cake.png'
        BdayPng.required = true;
        // subCont.append(BdayPng)
        
        
        let anniversaryPng = document.createElement('input')
        anniversaryPng.classList.add('anniv-submit')
        anniversaryPng.type = 'image'
        anniversaryPng.src = './Static/Growing-heart.png'
        anniversaryPng.required = true;
        // subCont2.append(anniversaryPng)
    
        // subCont.style.padding ='10px'
        // subCont2.style.padding ='10px'
        // subCont.style.display ='inline-block'
        // subCont2.style.display ='inline-block'
        // subCont.classList.add('submit-bday-cont')
        // subCont2.classList.add('submit-anni-cont')
    
    
        let input = document.createElement('input')
        input.setAttribute('id',`userInput${index}`)
        input.classList.add(`userInput`)
        input.type = 'text'
    
        form.append(input,BdayPng,anniversaryPng)
        // form.append(input,subCont,subCont2)
        inputContainer.append(form)
        formSpan.append(plusPng,form)
        td.append(formSpan)
        tr.append(td)
        
    }
    for (let index = count; index <= 34; index++) {
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
    monthHTML.append(myDate)
    

    
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
    
    e.target.setAttribute('required', '') 

    let userInfoContainer = document.createElement('div')
    userInfoContainer.classList.add('card')

    let textcont = document.createElement('div')
    textcont.classList.add('card-texts')

    // let userTextSpan = document.createElement('span')
    let userInputText = document.createElement('p')


    
    userInputText.textContent = this.parentElement.firstChild.value
    // userTextSpan.textContent = this.parentElement.firstChild.value
    
    // userTextSpan.append(userInputText)
    // userTextSpan.classList.add('userTextSpan')
    userInputText.classList.add('userTextSpan')
    let imgEvent  = document.createElement('img')
    imgEvent.src = this.src
    
    let occasionType;
    if(imgEvent.src == 'http://127.0.0.1:5501/Static/Growing-heart.png'){
         occasionType = document.createTextNode('Happy Anniversary')
         userInfoContainer.style.backgroundColor = 'rgba(244, 171, 186, 0.29)'
    }else{
        occasionType = document.createTextNode('Happy Birthday')
        userInfoContainer.style.backgroundColor = 'rgba(197, 213, 236, 1)'
    }
    // let occasionTypeCont = document.createElement('span')
    let occasionTypeCont = document.createElement('p')
    occasionTypeCont.classList.add('event-status')
    occasionTypeCont.append(occasionType)
    


    let contForDeleteImg = document.createElement('div')
    contForDeleteImg.classList.add('contForDelete')
    let deleteCard = document.createElement('img')
    deleteCard.classList.add('deleteCard')
    deleteCard.src ='./Static/fill-4.png'
    deleteCard.addEventListener('click',remove_div)
    contForDeleteImg.append(deleteCard)

    

    textcont.append(occasionTypeCont,userInputText)

    this.parentElement.firstChild.value = ''
    let imgOpen = this.parentElement.parentElement.firstChild
    console.log(imgOpen)
    let formDiv = this.parentElement
    formDiv.style.visibility = 'hidden' 
    imgOpen.style.visibility = ''
    
    // userInfoContainer.append(imgEvent,occasionTypeCont,userTextSpan,deleteCard)
    userInfoContainer.append(imgEvent,textcont,contForDeleteImg)
    specificDay.append(userInfoContainer)

    
}


function remove_div(){
    this.parentElement.parentElement.remove();
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
    element.addEventListener('click',reveal)
  })

function reveal(element){

    let popUpContainer = element.target.nextElementSibling;
    let plusImagePopUp = element.target;
    
        // if(popUpContainer.style.display == 'unset'){
        //     plusImagePopUp.style.display = ''
        //     popUpContainer.style.display ='none' 
        //     plusImagePopUp.style.display = ''
        // } else {element.target.nextElementSibling.style.display == 'unset'
        // // element.target.style.visibility = 'visible'
        //     element.target.nextElementSibling.style.display  = 'unset'
        //     element.target.style.display = 'unset'
        // }
        if(popUpContainer.style.visibility == 'visible'){
            plusImagePopUp.style.visibility = ''
            popUpContainer.style.visibility ='hidden' 
            plusImagePopUp.style.visibility = ''
        } else {element.target.nextElementSibling.style.visibility == 'hidden'
        // element.target.style.visibility = 'visible'
            element.target.nextElementSibling.style.visibility  = 'visible'
            element.target.style.visibility = 'visible'
        }

    }

document.addEventListener('click', function handleClickOutsideBox(event) {
        // const form1 = document.querySelector('.form');
        
        // if (form1.style.visibility=='visible' && !form1.contains(event.target)) {
        //   form1.style.visibility = 'hidden';
        // }
      });
}


newDates(month,year)


// function newDates(){
//     // tble.innerHTML = ''
//     // console.log(tble)


//     let month = Number(inputMonth.value)
//     let year = Number(inputYear.value)
//     let date = new Date(year,month-1)
//     let dayMonthStart = date.getDay()
//     let daysInMonth = new Date(year,month,0).getDate()
    
    
//     let pTagWithDate = document.createElement('h2')
//     hju
//     let myDate = `${date.toLocaleString('default', { month: 'long' })} ${date.getUTCFullYear()}`;
//     pTagWithDate.innerHTML = myDate
    
//     monthHTML.append(pTagWithDate)
    
    
    
//     let count = 0
//     rowNum = 1
    
//     for (let index = 0; index < dayMonthStart; index++) {
//         count = index+1
//         let td = document.createElement('td')
//         td.classList.add('box')    
//         tr.append(td)
//     }
    
//     tr.setAttribute('id','row'+rowNum)
    
//     for (let index = 1; index < daysInMonth+1; index++) {
        
//         if(count%7 == 0){
//             table.append(tr)
//             tr = document.createElement('tr')
//             rowNum++
//             tr.setAttribute('id','row'+rowNum)
//         }
    
//         count++
        
//         let td = document.createElement('td')
//         td.innerHTML = index
//         td.classList.add('day','box')
//         td.setAttribute('id','day'+index) 
    
//         let formSpan = document.createElement('span')
//         formSpan.classList.add('formButton')
//         let plusPng = document.createElement('img')
//         plusPng.classList.add('showForm')
//         plusPng.src = './Static/Plus.png'
    
//         let inputContainer = document.createElement('div')
//         let subCont = document.createElement('div')
//         let subCont2 = document.createElement('div')
        
    
//         let form = document.createElement('form')
//         form.classList.add('form')
        
        
//         let BdayPng = document.createElement('input')
//         BdayPng.classList.add('b-day-submit')
//         BdayPng.type = 'image'
//         BdayPng.src = './Static/Birthday-cake.png'
//         BdayPng.required = true;
//         // subCont.append(BdayPng)
        
        
//         let anniversaryPng = document.createElement('input')
//         anniversaryPng.classList.add('anniv-submit')
//         anniversaryPng.type = 'image'
//         anniversaryPng.src = './Static/Growing-heart.png'
//         anniversaryPng.required = true;
//         // subCont2.append(anniversaryPng)
    
//         // subCont.style.padding ='10px'
//         // subCont2.style.padding ='10px'
//         // subCont.style.display ='inline-block'
//         // subCont2.style.display ='inline-block'
//         // subCont.classList.add('submit-bday-cont')
//         // subCont2.classList.add('submit-anni-cont')
    
    
//         let input = document.createElement('input')
//         input.setAttribute('id',`userInput${index}`)
//         input.classList.add(`userInput`)
//         input.type = 'text'
    
//         form.append(input,BdayPng,anniversaryPng)
//         // form.append(input,subCont,subCont2)
//         inputContainer.append(form)
//         formSpan.append(plusPng,form)
//         td.append(formSpan)
//         tr.append(td)
        
//     }
//     for (let index = count; index < 34; index++) {
//         let td = document.createElement('td')
//         td.classList.add('box')
//             tr.append(td)
//     }
    
//     if(count>35){
//         for (let index = 0; index < 42-(daysInMonth+dayMonthStart); index++) {
//             let td = document.createElement('td')
        
//         td.classList.add('box') 
        
//         tr.append(td)
        
//         }
//     }
    
//     table.append(tr)
//     calContainer.append(table)
    
// }
// inputMonth.value = 7
// inputYear.value = 2022

// let month = Number(inputMonth.value)
// let year = Number(inputYear.value)
// let date = new Date(year,month-1)
// let dayMonthStart = date.getDay()
// let daysInMonth = new Date(year,month,0).getDate()


// let pTagWithDate = document.createElement('h2')

// let myDate = `${date.toLocaleString('default', { month: 'long' })} ${date.getUTCFullYear()}`;
// pTagWithDate.innerHTML = myDate

// monthHTML.append(pTagWithDate)
// let bDaySelected, anniversarySelected



// let count = 0
// rowNum = 1

// for (let index = 0; index < dayMonthStart; index++) {
//     count = index+1
//     let td = document.createElement('td')
//     td.classList.add('box')    
//     tr.append(td)
// }

// tr.setAttribute('id','row'+rowNum)

// for (let index = 1; index < daysInMonth+1; index++) {
    
//     if(count%7 == 0){
//         table.append(tr)
//         tr = document.createElement('tr')
//         rowNum++
//         tr.setAttribute('id','row'+rowNum)
//     }

//     count++
    
//     let td = document.createElement('td')
//     td.innerHTML = index
//     td.classList.add('day','box')
//     td.setAttribute('id','day'+index) 

//     let formSpan = document.createElement('span')
//     formSpan.classList.add('formButton')
//     let plusPng = document.createElement('img')
//     plusPng.classList.add('showForm')
//     plusPng.src = './Static/Plus.png'

//     let inputContainer = document.createElement('div')
//     let subCont = document.createElement('div')
//     let subCont2 = document.createElement('div')
    

//     let form = document.createElement('form')
//     form.classList.add('form')
    
    
//     let BdayPng = document.createElement('input')
//     BdayPng.classList.add('b-day-submit')
//     BdayPng.type = 'image'
//     BdayPng.src = './Static/Birthday-cake.png'
//     BdayPng.required = true;
//     // subCont.append(BdayPng)
    
    
//     let anniversaryPng = document.createElement('input')
//     anniversaryPng.classList.add('anniv-submit')
//     anniversaryPng.type = 'image'
//     anniversaryPng.src = './Static/Growing-heart.png'
//     anniversaryPng.required = true;
//     // subCont2.append(anniversaryPng)

//     // subCont.style.padding ='10px'
//     // subCont2.style.padding ='10px'
//     // subCont.style.display ='inline-block'
//     // subCont2.style.display ='inline-block'
//     // subCont.classList.add('submit-bday-cont')
//     // subCont2.classList.add('submit-anni-cont')


//     let input = document.createElement('input')
//     input.setAttribute('id',`userInput${index}`)
//     input.classList.add(`userInput`)
//     input.type = 'text'

//     form.append(input,BdayPng,anniversaryPng)
//     // form.append(input,subCont,subCont2)
//     inputContainer.append(form)
//     formSpan.append(plusPng,form)
//     td.append(formSpan)
//     tr.append(td)
    
// }
// for (let index = count; index < 34; index++) {
//     let td = document.createElement('td')
//     td.classList.add('box')
//         tr.append(td)
// }

// if(count>35){
//     for (let index = 0; index < 42-(daysInMonth+dayMonthStart); index++) {
//         let td = document.createElement('td')
    
//     td.classList.add('box') 
    
//     tr.append(td)
    
//     }
// }

// table.append(tr)
// calContainer.append(table)




// let dateForm = document.createElement('form')
// dateForm.setAttribute('id','dateForm')



// let inputMonth = document.createElement('input')
// inputMonth.classList.add('inputDate')
// inputMonth.type = 'number'

// let inputYear = document.createElement('input')
// inputYear.classList.add('inputDate')
// inputYear.type = 'number'

// let dateSubmit = document.createElement('input')
// dateSubmit.type = 'submit'
// dateSubmit.value = 'search'
// dateSubmit.classList.add('inputDate')


// inputMonth.setAttribute('id','inputMonth')
// inputYear.setAttribute('id','inputYear')
// dateSubmit.setAttribute('id','dateSubmit')