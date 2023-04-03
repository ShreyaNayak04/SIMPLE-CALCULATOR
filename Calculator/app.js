let screen=document.getElementById('screen');

buttons=document.querySelectorAll('button');

let screenValue='';


// for(item of buttons){
//     item.addEventListener('click',(e)=>{
//         buttonText=e.target.innerText;
//         console.log('Button text is',buttonText);

      

//         if(buttonText=='X'){
//             buttonText='*';
//             screenValue+=buttonText;
//             screen.value=screenValue;
//         }
//         else if(buttonText=='C'){
//            screen.value="";
//          }
//         else if(buttonText=='='){
//           screen.value=eval(screenValue);
//         }
//         else if(buttonText=='DEL'){
//           var remove=screen.value;
//           remove=remove.slice(0,-1);
//           screen.value=remove;

//         }
//         else{
//             screenValue+=buttonText;
//             screen.value=screenValue;
//         }
       
//     })
//   }






//in order to get the input on the screen
function number(num){
  var result=document.getElementById('screen');
  result.value+=num;
}


//to get the result
function result(){
  var result=document.getElementById('screen');
  result.value=eval(result.value);
}


//clear
function clearResult(){
  var result=document.getElementById('screen');
  result.value="";
}

//delete or backspace

function deleteChar(){
  
  var number=document.getElementById('screen');
  // var remove=number.value;
  var remove=number.value.slice(0,-1);
  number.value=remove;
}