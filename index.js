const perPage = 3;
let currentPage = 0;
let totalBreeds = 148;

const cardContainer = document.getElementById('card-container');
const previousButton = document.createElement('button');
previousButton.textContent = 'Previous';
previousButton.disabled = true;
previousButton.addEventListener('click', loadPreviousPage);

const nextButton = document.createElement('button');
nextButton.textContent = 'Next';
nextButton.addEventListener('click', loadNextPage);

cardContainer.insertAdjacentElement('beforebegin', previousButton);
cardContainer.insertAdjacentElement('afterend', nextButton);

function loadBreeds() {
  fetch(`https://api.thedogapi.com/v1/breeds?limit=${perPage}&page=${currentPage}`)
    .then(response => response.json())
    .then(data => {
      cardContainer.innerHTML = '';

      data.forEach(breed => {
        const card = document.createElement('div');
        card.classList.add('card');

        const image = document.createElement('img');
        image.src = breed.image.url;
        image.alt = breed.name;
        image.width = '32px';
        image.height = '32px';
        card.appendChild(image);

        const name = document.createElement('h2');
        name.textContent = breed.name;
        card.appendChild(name);

        const imageUrl = document.createElement('img');
        imageUrl.src = breed.image.url;
        card.appendChild(imageUrl);

        const description = document.createElement('p');
        description.textContent = breed.temperament;
        card.appendChild(description);

        cardContainer.appendChild(card);
      });

      updateButtons();
    });
}

function updateButtons() {
  previousButton.disabled = currentPage === 0;
  nextButton.disabled = (currentPage + 1) * perPage >= totalBreeds;
}

function loadPreviousPage() {
  if (currentPage > 0) {
    currentPage--;
    loadBreeds();
  }
}

function loadNextPage() {
  if ((currentPage + 1) * perPage < totalBreeds) {
    currentPage++;
    loadBreeds();
  }
}

loadBreeds();
