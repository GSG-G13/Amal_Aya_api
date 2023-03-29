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

    const div2 = document.createElement('div');

    div2.classList.add('card-body');
    const h5 = document.createElement('h5');
    h5.classList.add('card-title');
    h5.textContent = data[i].name;
    div2.append(h5);
    div.append(img, div2);
    container.append(div);
  }
};
