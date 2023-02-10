const core=(num1, operator, num2)=>{
    let result;  //в эту переменную скидываем результат

  switch (operator){
    case '+':
    result=num1+num2;
    break;
    case '-':
    result=num1-num2;
    break;
    case '*':
    result=num1*num2;
    break;
    case '/':
    result=num1/num2;
    break;
    case '%':
    result=num1%num2;
    break;
    default: 
    throw new Error ('некорректный оператор')
    
  }
return result
}


  module.exports.core=core;