const addBtn = document.querySelector('.add-btn');
const ticketCont= document.querySelector('.ticket-container');
const ticketMainContainer= document.querySelector('.ticket-main-cont');
const textAreaContainer= document.querySelector('.text-cont');






let addTaskFlag = false;

addBtn.addEventListener('click',()=>{
    //toggling the ticket-con display to flex or none
    addTaskFlag = !addTaskFlag;
    if(addTaskFlag === true){
        ticketCont.style.display ='flex';
    }else{
        ticketCont.style.display ='none';
    }
});

//keydown--> Alt
ticketCont.addEventListener('keydown',(event)=>{
    if(event.key === 'Alt'){
        createTicket(textAreaContainer.value);
        ticketCont.style.display ='none';
        textAreaContainer.value= '';
    }

});
const createTicket =(ticketInfo)=>{
    
    let ticketCreate = document.createElement('div');
    ticketCreate.setAttribute('class','ticket-creation');
    ticketCreate.innerHTML = ` <div class="ticket-color"></div>
    <div class="ticket-id">${shortid()}</div>
    <div class="task-area">${ticketInfo}</div>    
    <div class="lock">
        <i class="fa-solid fa-lock"></i>
    </div>     `
    
    ticketMainContainer.appendChild(ticketCreate);
}