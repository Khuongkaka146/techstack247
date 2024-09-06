//seclector den phan tu bang id
//document.getelementbyid('id')
// const selectorWithId = document.getElementById('heading');
// console.log(selectorWithId);
// console.log(document.getElementById('test'));

// selector den phan tu bang class
// document.getelementsbyclassname('class');
// const selectorWithClass = document.getElementsByClassName('heading');
// console.log(selectorWithClass);
// console.log(document.getElementsByClassName('test'));

// selector den phan tu bang tag name
// document.getelementsbytagname("tag");
// const selectorWithTagName = document.getElementsByTagName('h1');
// console.log(selectorWithTagName);

// selector ket hop cac yeu to
// h1#heading => tim kiem the h1 co id la heading
// h1.heading => tim kiem the h1 co class la heading
// h1 .heading => tim kiem the co class la heading va nam ben trong the h1
// document.querySelector('selector'); => tra ve phan tu dau tien hop le ma no tim thay
// const selectorWithQuerySelector = document.querySelector('h1.heading')
// console.log(selectorWithQuerySelector);

// document.querySelectorAll("selector"); => tra ve tat ca cac phan tu hop le ma no tim thay
// const seclectorWithQuerySelectorAll = document.querySelectorAll('h1.heading')
// console.log(seclectorWithQuerySelectorAll);

// element.innerHTML = new_html_content: thay đổi nội dung bên trong element.
// const $h1 = document.getElementById('heading');
// console.log($h1.innerHTML);
// $h1.innerHTML = 'test innerhtml';

// element.innerText = new_html_content: thay đổi nội dung văn bản bên trong element.
// const $h2 = document.getElementsByClassName('heading')[2];
// console.log($h2.innerText);
// $h2.innerText = 'thay doi noi dung h2';

// element.attribute = new_value: thay đổi giá trị một thuộc tính của element.
// const $a = document.querySelector('#link');
// $a.href = 'youtube';
// console.log($a.href);



// element.setAttribute(attribute, value): thay đổi giá trị một thuộc tính của element.
// $a.setAttribute('data-href','youtube');

// element.style.attribute = new_value: thay đổi style của element.
// const $h1 = document.querySelector('#heading');
// $h1.style.color = 'red';
// $h1.style.fontSize = '20px';

// element.getAttribute(attribute): lấy giá trị của một thuộc tính của element.
// const contenAttribute = $a.getAttribute('data-href');
// console.log(contenAttribute);

// element.removeAttribute(attribute): xóa một thuộc tính của element.
// $a.removeAttribute('data-href');

// them moi element
// const $h1 = document.createElement('h1'); //tao noi dung the h1 moi
// $h1.innerText = 'noi dung them moi the h1'; //thay doi noi dung cho the h1

// document.body.appendChild($h1); //them vao cuoi trong the body

// document.getElementById('link').remove(); //xoa phan tu dang duoc selector den

//thao tac voi class
// const $h2 = document.getElementsByName('h2')[0];
// $h2.classList.add('test-add-class');//them 1 class vao trong element
// $h2.classList.remove('heading');//xoa 1 class ben trong element

// $h2.classList.toggle('test-toggle');
// neu co class day roi thi no xoa di con chua co thi se them vao

// const $favoriteListItem = document.querySelectorAll('li.favorite-list-item');
// for(let $favoriteListItems of $favoriteListItem){
//     $favoriteListItems.innerText = 'i love this thing';
//     $favoriteListItems.style.color = 'red';
// }

// const content = prompt('nhap noi dung');
// const $favoriteListItems = document.createElement('li');
// $favoriteListItems.innerText = content;
// document.getElementById('favorite-list').appendChild($favoriteListItems);

function logger(tagName){
    console.log('tagName: ',tagName);
    alert('hello world' + tagName);
}

// document.getElementById('btn').onclick = function(){
//     alert('gan event thong qua DOM 1');
// };

// document.getElementById('btn').onclick = function(){
//     alert('gan event thong qua DOM 2');
// };

document.getElementById('btn').addEventListener('click',function(){
    alert('gan event thong qua addeventlistener 1');
}) ;

document.getElementById('btn').addEventListener('click',function(){
    alert('gan event thong qua addeventlistener 2');
}) ;
