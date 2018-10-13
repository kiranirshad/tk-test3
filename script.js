// write your JS code here
let count = 0;
price = 0;

function plus(){
    count++;
     
    document.querySelector("input").value= count; 
    document.querySelector(".total").innerHTML += price + count;
   
}
let numb = 0;
function minus(){
    numb--;
     document.querySelector("input").value = numb;
   
   
    
}
