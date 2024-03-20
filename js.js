let string = '';
let buttons = document.querySelectorAll('.button');
let text= document.querySelector('.text')
Array.from(buttons).forEach((item)=>{
    item.addEventListener('click',(e)=>{

        if( e.target.innerHTML == '='){
            string = eval(string)
            text.value=string;
        }
        else if( e.target.innerHTML == 'C'){
            string = ''
            text.value=string;
        }else if(e.target.innerHTML =='DEL'){
            string = string.substring(0,string.length-1);
            text.value=string
        }
        
        else{
            // console.log(e.target);
            string = string + e.target.innerHTML;
            text.value=string;
        }
       
       
    })
})