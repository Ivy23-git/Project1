const perPage = 4;
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

        const breedGroup = document.createElement('p');
        breedGroup.textContent = `Breed group: ${breed.breed_group}`;
        card.appendChild(breedGroup);

        const lifeSpan = document.createElement('p');
        lifeSpan.textContent = `Life span: ${breed.life_span}`;
        card.appendChild(lifeSpan);

        const commentForm = document.createElement('form');
        const commentInput = document.createElement('input');
        commentInput.type = 'text';
        commentInput.placeholder = 'Add a comment';
        const submitButton = document.createElement('button');
        submitButton.type = 'submit';
        submitButton.textContent = 'Submit';
        commentForm.appendChild(commentInput);
        commentForm.appendChild(submitButton);
        card.appendChild(commentForm);

        const likeButton = document.createElement('button');
        likeButton.textContent = 'Like';

        const likeCount = document.createElement('span');
        likeCount.textContent = '0';

        likeButton.addEventListener('click', () => {
          let currentCount = parseInt(likeCount.textContent);
          likeCount.textContent = currentCount + 1;
        });

        card.appendChild(likeButton);
        card.appendChild(likeCount);


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
