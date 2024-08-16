// const cars=[ ,'bmw', 'honda','vinfast']
// const arr=[]
// console.log(cars)
// console.log(cars[2])


// const cars=['bmw', 'honda','audi','vinfast']

// for(let i=0;i<cars.length;i++){
//     console.log(i)
//     console.log(cars[i])
// }


// for(let car of cars){
//     console.log(car)
// }

//  dung splice de xoa phan tu
// console.log(cars)
// cars.splice(2,1)
// console.log(cars)

// dung splice de them phan tu
// console.log(cars)
// cars.splice(2,1,'toyota')
// console.log(cars)


const num=[10,4,-7,9,100,3,-21,0,33,991]

// Tìm phần tử nhỏ nhất / lớn nhất trong mảng.


let min = num[0];
for(let nums of num){
    if(nums < min){
        min = nums;
    }
}
console.log("min = ",min);

//max
let max = num[0];
for(let nums of num){
    if(nums > max){
        max = nums;
    }
}
console.log("max = ",max);

// Tính tổng các phần tử trong mảng.

let sum = 0;
for (let number of num){
    sum = sum + number;
}

console.log('sum = ',sum); 

// Tính trung bình cộng các phần tử trong mảng.
const avg = sum / num.length;
console.log('tbc = ',avg)
// Tìm phần tử đầu tiên chia hết cho 3 trong mảng.

for (let i = num.length; i <= num.length; i++) {
  if (i % 3 === 0) {
    console.log('so dau tien chia het cho 3:',i);
    break;
  }
}

// Tìm các phần tử là số nguyên tố trong mảng.
for(let number of num){
    let count = 0;
    for(let i = 1; i<=number; i++){
        if(number % i === 0){
            count++;
        }
        if(count >2){
            break;
        }
}
    if(count === 2){
        console.log(number,'la so nguyen to')
    }else{
        console.log(number,'khong la so nguyen to')
    }
}