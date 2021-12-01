function array(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return i;
        }
    }
    return -1;
}

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let number = parseInt(prompt("index: "));
let arr2 = array(arr1, number);
if (arr2 !== -1) {
    console.log('Phan tu nam o vi tri thu ' + arr2 + ' trong mang');
} else {
    console.log('Phan tu khong nam trong mang');
}