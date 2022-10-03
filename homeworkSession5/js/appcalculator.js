function run()
{
    const letsDoMath = confirm('Would you like to test this Calculator?');
    if (letsDoMath === true)
    {
        const operCalculator =prompt('Select the operator that you want to use: \n+ \n- \n/ \n* \n^ \nsqrt -> applies to first value')
        const number1Calculator =prompt('Type first number')
        {
            if (isNaN(number1Calculator) == true)
            {
                alert('Invalid input, not an integer value');
            }
        };
        const number2Calculator =prompt('Type the second number')
        {
            if (isNaN(number2Calculator) == true)
            {
                alert('Invalid input, not an integer value');
            }
        }; 
        switch(operCalculator) 
        {
            case '+':
                result = Number(number1Calculator)  + Number(number2Calculator);
                alert(`${number1Calculator} + ${number2Calculator} = ${result}`);
                break;
            case '-':
                result = number1Calculator - number2Calculator;
                alert(`${number1Calculator} - ${number2Calculator} = ${result}`);
                break;    
            case '/':
                result = number1Calculator / number2Calculator;
                alert(`${number1Calculator} / ${number2Calculator} = ${result}`);       
                break; 
            case '*':
                result = number1Calculator * number2Calculator;
                alert(`${number1Calculator} * ${number2Calculator} = ${result}`);           
                break; 
            case '^':
                result = Math.pow(number1Calculator,number2Calculator);
                alert(`${number1Calculator} ^ ${number2Calculator} = ${result}`);       
                break; 
            case 'sqrt':
                result = Math.sqrt(number1Calculator);
                alert(`Square root of ${number1Calculator} = ${result}`);
                break; 
            default:
                alert('Invalid Operator!');
                break;
        };
    }
    else
    {
        alert('Good bye then!')
    }
};



