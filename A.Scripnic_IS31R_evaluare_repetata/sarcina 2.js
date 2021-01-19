let a = parseInt(prompt('Introduceti inceputul intervalului.'));
let b = parseInt(prompt('Introduceti sfirsitului intervalului.'));
let summ = 0;
for (let index = a; index <= b; index++){
    if(index % 2 === 0){
        summ+= parseInt(index);
    }
}
console.log('Suma numerelor pare este ' + summ);
var node = document.createElement("span");
node.appendChild(document.createTextNode(summ));
document.getElementById("evenSum").appendChild(node); 

alert('Acum vine sarcina 2');
let number = parseInt(prompt('Introduceti numarul n ='));
if(isNaN(number)){
    alert('Error');
}else{
    if(parseInt(number) > 0 ){
        alert('1');
    }
    if(parseInt(number) < 0 ){
        alert('-1');
    }
    if(parseInt(number) == 0 ){
        alert('0');
    }
}

alert('SArcina 3');
let styles = ['Джаз', 'Блюз'];
console.log(styles.toString());
styles.push('Рок-н-ролл');
console.log(styles.toString());
let temp = [];
if(styles.length % 2 == 0){
    for (let index = 0; index < styles.length; index++) {
        if(index == parseInt(styles.length / 2)){
            temp.push('Классика'); 
            //temp.push(styles[index]); 
        }else{
            temp.push(styles[index]); 
        }
        
    }
}else{
    for (let index = 0; index < styles.length; index++) {
        if((index) == parseInt(styles.length / 2)){
            //temp.push(styles[index]); 
            temp.push('Классика');             
        }else{
            temp.push(styles[index]); 
        }
        
    }
}
styles = temp;
console.log(styles.toString());
console.log('Elementul 1 de redus este ' + styles.shift());
console.log(styles.toString());
styles.unshift('Рэп');
styles.unshift('Регги');
console.log(styles.toString());