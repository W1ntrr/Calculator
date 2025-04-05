const display = document.querySelector('.display');
let calculated = false;

function clearDisplay(){
  display.textContent = '';
  calculated = false;
}

function appendToDisplay(input){
  if(calculated){
    display.textContent = '';
    calculated = false;
  }
  display.textContent += input;
  
}

function calculateOperator(op){
  let lastChar = display.textContent.slice(-1);
  if (!['+', '-', '*', '/'].includes(lastChar)) {
    display.textContent += op;
    calculated = false;
  }
}

function calculate(){ 
  try{
    display.textContent = eval(display.textContent);
    calculated = true;
  }
  catch(err){
    display.textContent = 'Error';
    calculated=false;
  }
}

function deleteDisplay(){
  display.textContent = display.textContent.slice(0,-1);
}