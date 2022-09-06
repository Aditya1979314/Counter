let count=0;
let value=document.querySelector(".value");
value.innerHTML='0';
let buttons=document.querySelectorAll('button');
Array.from(buttons).forEach((button) => {
button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == "Reset"){
        count=0;
        value.innerHTML=count;
    }
    else if(e.target.innerHTML == "Increase"){
        
        count=count+1;
        value.innerHTML=count;
    }else{
        count=count-1;
        value.innerHTML=count;
    }
    if(count<0)
    value.style.color='red';
    else if(count>0){
        value.style.color='green';
    }
        else{
            value.style.color='black';
        }
    })
})