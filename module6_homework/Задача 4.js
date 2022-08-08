let first = prompt('Введите число: ')
let sec = prompt('Введите число: ')
schet();
function schet(){
   let a = first;
   let b = sec;
   timer = setInterval(function () {
        if (a <= b) {
            console.log(a)
            a++;
        } else {
            clearInterval(timer)
        }
    }, 1000);
}