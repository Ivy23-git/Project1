fetch('https://api.thedogapi.com/v1/breeds?limit=100&page=0')
  .then(response => response.json())
  .then(data => {
    const cardContainer = document.getElementById('card-container');
    data.forEach(breed => {
      const card = document.createElement('div');
      card.classList.add('card');
      const image = document.createElement('img');
      image.src = breed.image.url;
      image.alt = breed.name;
      image.width = '32px'; // set width to 32px
      image.height = '32px'; // set height to 32px
      card.appendChild(image);

      const name = document.createElement('h2');
      name.textContent = breed.name;
      card.appendChild(name);

      const description = document.createElement('p');
      description.textContent = breed.temperament;
      card.appendChild(description);

      const imageUrl = document.createElement('img');
      imageUrl.src = breed.image.url;
      card.appendChild(imageUrl);

      cardContainer.appendChild(card);
    });
  });

