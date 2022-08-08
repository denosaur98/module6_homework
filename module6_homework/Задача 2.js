let a = prompt('Введите число: ');
let num =+ a;
chislo(num);
  function chislo(num) {
   if(num >= 1000 || num < 2){
      console.log('Данные не верны');
   }
   else {
      for (let i = 2; i <= num; i++){
         if (num % i === 0 && num !== i){
            console.log('Число не является простым');
            break;
         } 
         else if (num == i){
            console.log('Простое число');
         }
      }  
   }
}