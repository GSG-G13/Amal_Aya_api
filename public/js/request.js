const searchInput = document.querySelector('.search-hero');

searchInput.addEventListener('input', () => {
  const { value } = searchInput;
  fetch(`/search/${value}`)
    .then((res) => res.json())
    // eslint-disable-next-line no-undef
    .then((res) => createCard(res));
});
