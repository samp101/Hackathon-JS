let calContainer = document.querySelector('#calendarContainer')
let cardsContainer = document.querySelector('#cardsNew')
let monthHTML = document.querySelector('#date-string')
let dateFormCont = document.querySelector('#dateFormCont')


let numOfCard = 0
        

let table = document.createElement('table')
table.setAttribute('id','caltable')
let tr = document.createElement('tr')

let dateButton = document.querySelector('#dateForm')

let tble = document.querySelector('#caltable')

let month = new Date().getMonth()
let year = new Date().getFullYear()
const namesOfTheWeek = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']



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

    let todaysDate = new Date();
    let todaysDay = todaysDate.getDate();
    let todaysMonth = todaysDate.getMonth();
    
    let selectedMonth = todaysMonth == date.getMonth()
    
    let dayMonthStart = date.getDay()
    let daysInMonth = new Date(year,month+1,0).getDate()
    let myDate = `${date.toLocaleString('default', { month: 'long' })} ${date.getUTCFullYear()}`;
    
    
    let tr = document.createElement('tr') 
    
    let count = 0
    let rowNum = 1
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
        // Each box for the day
        let td = document.createElement('td')
        if(selectedMonth && index == todaysDay){
            td.classList.add('current-day','box')
        }
        td.innerHTML = index
        td.classList.add('day','box')
        td.setAttribute('id','day'+index) 
        
        // The div which has the form
        let formSpan = document.createElement('div')
        formSpan.classList.add('formButton')
        let plusPng = document.createElement('img')
        plusPng.classList.add('showForm')
        plusPng.src = './Static/Plus.png'
        
        // This div is where all the cards will be stored
        let cardContainerInDay = document.createElement('div')
        cardContainerInDay.classList.add('contOfContForCard')
        
        // This is the container for the form where to add a Bday and Anniversary
        let inputContainer = document.createElement('div')
        let form = document.createElement('form')
        form.classList.add('form')
        
        // These are the submit buttons for an anniversary and a Bday
        let BdayPng = document.createElement('input')
        BdayPng.classList.add('b-day-submit')
        BdayPng.type = 'image'
        BdayPng.src = './Static/Frame-5.png'
        BdayPng.required = true;
        
        // These are the submit buttons for an anniversary and a Bday
        let anniversaryPng = document.createElement('input')
        anniversaryPng.classList.add('anniv-submit')
        anniversaryPng.type = 'image'
        anniversaryPng.src = './Static/Frame-6.png'
        anniversaryPng.required = true;
    
        // Here is the input bpx for text to write the names
        let input = document.createElement('input')
        input.setAttribute('id',`userInput${index}`)
        input.classList.add(`userInput`)
        input.placeholder = 'Type Here'
        input.type = 'text'
    
        
        form.append(input,BdayPng,anniversaryPng)
        inputContainer.append(form)
        // formSpan.append(plusPng,form)
        td.append(cardContainerInDay,formSpan)
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


        bdayAll.forEach(element=>
            element.addEventListener('click',createBdayCard)
        )
        annivAll.forEach(element=>
            element.addEventListener('click',createBdayCard)
        )
        
        function createBdayCard(e) {
            e.preventDefault()
            const formsButtonThatWasSelected = this
            numOfCard += 1
        
            let specificDay = e.target.parentElement.parentElement.parentElement.firstChild.nextElementSibling

            e.target.setAttribute('required', '') 
        
            let userInfoContainer = document.createElement('div')
            userInfoContainer.classList.add('card')
            userInfoContainer.draggable = 'true'
            userInfoContainer.setAttribute('id',`card#${numOfCard}`)
        
        
            let textcont = document.createElement('div')
            textcont.classList.add('card-texts')
        
            let userInputText = document.createElement('p')
        
        

            userInputText.textContent = this.parentElement.firstChild.value

            userInputText.classList.add('userTextSpan')
            let imgEvent  = document.createElement('img')

            let occasionType;
        
            if(formsButtonThatWasSelected.classList.contains('anniv-submit')){
                imgEvent.src = './Static/Growing-heart.png'        
                occasionType = document.createTextNode('Happy Anniversary')
                userInfoContainer.style.backgroundColor = 'rgba(244, 171, 186, 0.29)'
            }else{
                console.log(imgEvent)
                imgEvent.src = './Static/Birthday-cake.png'     
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
            deleteCard.src ='./Static/x.png'
            deleteCard.addEventListener('click',remove_div)
            contForDeleteImg.append(deleteCard)
        

        
            textcont.append(occasionTypeCont,userInputText)
        
            this.parentElement.firstChild.value = ''
            let imgOpen = this.parentElement.parentElement.firstChild

            let form = this.parentElement
            let formDiv = this.parentElement.parentElement
            console.log(formDiv);
            form.style.visibility = 'hidden' 
            formDiv.style.visibility = 'hidden' 
            imgOpen.style.visibility = ''

            // userInfoContainer.append(imgEvent,occasionTypeCont,userTextSpan,deleteCard)
            //  specificDay = document.querySelectorAll('.box');
            //  userInfoContainer = document.querySelectorAll('.small-box');


            userInfoContainer.append(imgEvent,textcont,contForDeleteImg)
        
            userInfoContainer.addEventListener('dragstart', handleDragStart);
        
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
      
      
      
        showForm.forEach(element=>{
            element.addEventListener('click',reveal)
          })
      
        function reveal(element){
            let popUpContainer = element.target.nextElementSibling;
            const formsParentContainer = this.parentElement
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
                    formsParentContainer.style.visibility = ''
                    popUpContainer.style.visibility ='hidden' 
                    plusImagePopUp.style.visibility = ''
                } else {element.target.nextElementSibling.style.visibility == 'hidden'
                formsParentContainer.style.visibility = 'visible'
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


        function handleDragOver(e) {
    e.preventDefault();
        }

        function handleDrop(e) {
    const id = e.dataTransfer.getData('text/plain');
    const currentlyDraggedBox = document.getElementById(id);
    console.log(typeof currentlyDraggedBox)
    e.target.append(currentlyDraggedBox);
         }
     
        function handleDragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
        }


        newDates(month,year)

        const cardContainerInDay = document.querySelectorAll('.contOfContForCard')

        cardContainerInDay.forEach((box) => {
    box.addEventListener('dragover', handleDragOver);
    box.addEventListener('drop', handleDrop);
        });
