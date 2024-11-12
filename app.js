/*-------------------------------- Constants --------------------------------*/
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');
let currentInput = ''  
let previousInput = ''
let operator = ''     
/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/


/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
      const buttonText = event.target.textContent;
  
      // If it's a number, append it to the current input
      if (button.classList.contains('number')) {
        currentInput += buttonText;
        updateDisplay();
      }
  
      // If it's an operator (+, -, *, /)
      if (button.classList.contains('operator')) {
        if (buttonText === 'C') {
          // Clear everything
          currentInput = '';
          previousInput = '';
          operator = '';
          updateDisplay();
        } else {
          if (previousInput !== '' && currentInput !== '') {
            calculate(); // Perform calculation before changing operator
          }
          operator = buttonText;
          previousInput = currentInput;
          currentInput = '';
        }
      }
  
      // If the equals button is pressed, perform the calculation
      if (button.classList.contains('equals')) {
        if (previousInput !== '' && currentInput !== '') {
          calculate();
        }
      }
    });
  })
  
  const calculate = () => {
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    let result;
  
    if (operator === '+') {
      result = prev + current
    } else if (operator === '-') {
      result = prev - current
    } else if (operator === '*') {
      result = prev * current
    } else if (operator === '/') {
      result = current !== 0 ? prev / current : 'Error' }
  
    
    currentInput = result.toString();
    operator = ''
    previousInput = ''
    updateDisplay()
  }
/*----------------------------- Functions -----------------------------*/
const updateDisplay = () => {
    display.textContent = currentInput || '0' 
  }