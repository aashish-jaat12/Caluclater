 function butt() {
	alert("ashsishg");
};





 let input = document.getElementbyId('inputbox');
 let buttons = document.queryselectorAll('button');


 let string ="";
 let arr=Array.from(buttons);

 arr.forEach(buttons => {
 	button.addEventListener('click',(e) =>{

     if (e.target.innerHTML == '=') 
     {
     	string=  eval (string);
     	input.value = string;
     }  
      
      string += e.target.innerHTML;
      input.value = string;
     
      })
 })

function buttons() {
	alert("ashsishg");
}