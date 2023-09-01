const para = document.querySelector('p');
console.log(para.innerText);
para.innerText = "Ninja are Awosome!";
console.log(para.innerText);
const paras = document.querySelectorAll('p');

paras.forEach(para => {
    console.log(para.innerText);
    para.innerText += " what you want";
});

const content = document.querySelector('.content');
console.log(content.innerHTML);
console.log(content.innerText);
content.innerHTML += '<h2>THIS IS A NEW TAG</h2>';
