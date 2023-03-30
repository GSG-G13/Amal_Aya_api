/* eslint-disable no-plusplus */
const container = document.querySelector('.cards-container');
// eslint-disable-next-line no-unused-vars
const createCard = (data) => {
  container.textContent = '';
  for (let i = 0; i < 10; i++) {
    const div = document.createElement('div');

    div.classList.add('card');

    const img = document.createElement('img');

    img.classList.add('card-img');
    img.setAttribute('src', data[i].image.url);

    const cardDetails = document.createElement('div');
    cardDetails.classList.add('card-details');
    const h2 = document.createElement('h2');
    h2.classList.add('full-name');
    h2.innerText = data[i].biography['full-name'];
    const p = document.createElement('p');
    p.classList.add('group');
    p.innerText = data[i].connections['group-affiliation'];
    const ul = document.createElement('ul');
    ul.classList.add('powers');
    const li = document.createElement('li');
    const icon = document.createElement('i');
    icon.classList = 'fa-solid fa-shield-halved';

    li.textContent = 'INTELLIGENC ';
    const span = document.createElement('span');
    span.textContent = data[i].powerstats.intelligence;
    li.append(icon, span);
    const li2 = document.createElement('li');
    const icon2 = document.createElement('i');
    icon2.classList = 'fa-solid fa-shield-halved';
    li2.textContent = 'STRENGTH ';
    const span2 = document.createElement('span');
    span2.textContent = data[i].powerstats.strength;
    li2.append(icon2, span2);
    const li3 = document.createElement('li');
    const icon3 = document.createElement('i');
    icon3.classList = 'fa-solid fa-shield-halved';
    li3.textContent = 'COMBACT ';
    const span3 = document.createElement('span');
    span3.textContent = data[i].powerstats.combat;
    li3.append(icon3, span3);
    ul.append(li, li2, li3);
    cardDetails.append(h2, p, ul);
    const div2 = document.createElement('div');

    div2.classList.add('card-body');
    const h5 = document.createElement('h5');
    h5.classList.add('card-title');
    h5.textContent = data[i].name;
    const publisher = document.createElement('h5');
    publisher.textContent = data[i].biography.publisher;
    div2.append(h5, publisher);
    div.append(img, div2, cardDetails);
    container.append(div);
  }
};
