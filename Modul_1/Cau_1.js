function ptBacNhat(num1, num2) {

    if (num1 === 0) {
        if (num2 === 0) {
            return 'PT co vo so nghiem';
        } else {
            return 'PT vo nghiem';
        }
    } else {
        return 'PT co nghiem x = ' + (-num2 / num1);
    }
}
let number = ptBacNhat(5,8);
console.log(number);