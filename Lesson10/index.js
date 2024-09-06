// const obj = {};// obj rong
// const student = {
//     name:'dk',
//     gender:'male',
//     age:'20'
// };
// console.log(student);
// // const obj2 = new Object();
// // //truy xuất

// // const variable = 'name';
// // // cách 1: object.key
// // // truy xuất đến key tên là variable trong object student
// // console.log(student.name);
// // //cach 2: object['key']
// // //truy xuất đến key đang là giá trị của biến variable trong object student
// // console.log(student[variable]);

// // cu phap set:
// // student.level = 'good';
// // console.log(student);

// // student.level = 'very good';
// // console.log(student);

// // //cu phap delete:
// // delete student.age;
// // console.log(student);

// // duyet object: for in

// for(let key in student){
//     console.log('key: ',key)
// }

// console.log(Object.entries(student))

// console.log(Object.keys(student))

// console.log(Object.values(student))

// console.log(student.hasOwnProperty('age'));


// const stu1 = {
//     name:'Nguyen Van A',
//     age: 18
// }

// // gia trị sẽ được lưu trên 1 ô nhớ trên thanh ram, địa chỉ A
// const stu2 = stu1;
// //stu1 và stu2 đang cùng trỏ đến 1 địa chỉ ô nhớ là A
// stu1.name = 'Tran Van B';

// console.log(stu1.name);
// console.log(stu2.name);

// const arr1 = [1,2,3];

// const arr2 = [1,2,3];

// console.log(arr1 == arr2);
// // xem mang nay co phai la array hay khong?
// console.log(Array.isArray([]))

// Khai báo 1 funtion nhận đầu vào là 2 số a, b. Đầu ra là kết quả của phép tính (a+b)^2.
//  dinh nghia ham`
// function cal(a,b){
//     return number = (a + b) ** 2;
// }
// // goi ham`
// console.log(cal(3,4));
// console.log(cal(4,5));

// 1. Khai báo 1 function nhận đầu vào là chuỗi name, thực hiện in ra màn hình “Hello world, ” + name.
// function logger(name){
//     console.log('Hello world ' + name);
// }
// logger('Khuong')
// 3. Khai báo 1 function để nhập vào a từ bàn phím, tiếp tục nhập đến khi a là một số lớn hơn 0. Đầu ra là giá trị số vừa nhập.
// function inputNumber(){
//     let a;
//     do{
//         a = prompt('Nhap a = ')
//         a = Number(a);
//     }while (a<=0)
//         return a;
// }
// const number = inputNumber();
// console.log(number);
// 2. Khai báo 1 function với đầu vào là 3 số a, b, c. Kiểm tra xem a, b, c có tạo thành 3 cạnh của tam giác không. Nếu tạo thành tam giác, đầu ra là true. Ngược lại, đầu ra là false.

function check(a, b, c){
    if(a+b>c && a+c >b && b+c>a){
        return true;
    }
}