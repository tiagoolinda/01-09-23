/* chave aberta "criando matriz unidimensional" */
/* chave e parentes aberta "criando matriz bidimensional" */

const images = [
    { 'id': '1', 'url': './img/chrono.jpg' },
    { 'id': '2', 'url': './img/inuyasha.jpg' },
    { 'id': '3', 'url': './img/tenchi.jpg' },
    { 'id': '4', 'url': './img/tenjhotenge' },
    { 'id': '5', 'url': './img/yuyuhakusho' },
    { 'id': '6', 'url': './img/ippo.jpg' }
];

const containerItens = document.querySelector('#container-slide');
const loadImages = (images, container) => {
    images.forEach(images => {
        container.innerHtml +=
            `<div class='item'>
            <img src='${image.url}'
            <\div>`
            })
};

loadImages(images,containerItens);

let items = document.querySelectorAll('.item');

const anterior = () =>{
items = document.querySelectorAll('.item');
}
const proximo = (){
    lastItem = items [items.lenght -1];
    containerItens.insertBefore(lastItems[0]);
items = document.querySelectorAll('item');

}
document.querySelector('#previous').addEventListener('click',anterior);
document.querySelector('#next').addEventListener('click',proximo);