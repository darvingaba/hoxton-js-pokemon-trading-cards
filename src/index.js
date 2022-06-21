// !- Make sure you check and understand the data that is given to you!
// !- Create a card using JS that represents a single pokemon, use the example image as a reference. You will also find an HTML example commented out in the index.html
// !- Use the exact CSS classes you see in the example HTML to obtain the same style for each card
// !- The cards should be nested inside <ul class="cards"></ul>
// !- Use the official-artwork object key as the images for the card. The images are all inside of the sprites key, in each pokemon object
// !pokemon.sprites.other['official-artwork'].front_default

// !- Render all the cards on the page that represents all the pokemons, recreating the same layout, using JS

console.log(data);

function createCard(pokemon) {
    let card = document.createElement('li');
    card.className='card';

    let cardTitle = document.createElement('h2');
    cardTitle.textContent = pokemon.name;
    cardTitle.className='card-title';

    let cardImage = document.createElement('img');
    cardImage.src = pokemon.sprites.other['official-artwork'].front_default;
    cardImage.alt = pokemon.name;
    cardImage.className='card--img';
    cardImage.width = 256;

    let attributes = document.createElement('ul');
    attributes.className='card-text';

    let hp = document.createElement('li');
    hp.textContent = `HP: ${pokemon.stats[0].base_stat}`;
    let attack = document.createElement('li');
    attack.textContent = `Attack: ${pokemon.stats[1].base_stat}`;
    let defense = document.createElement('li');
    defense.textContent = `Defense: ${pokemon.stats[2].base_stat}`;
    let spAttack = document.createElement('li');
    spAttack.textContent = `SPECIAL-ATTACK: ${pokemon.stats[3].base_stat}`;
    let spDefense = document.createElement('li');
    spDefense.textContent = `SPECIAL-Defense: ${pokemon.stats[4].base_stat}`;
    let speed = document.createElement('li');
    speed.textContent = `Speed: ${pokemon.stats[5].base_stat}`;
    
    attributes.append(hp, attack, defense, spAttack, spDefense, speed);

    card.append(cardTitle, cardImage, attributes);

    let allCards = document.querySelectorAll('.cards');

    allCards[0].append(card);
}

for(let pokemons of data) {
    createCard(pokemons);
}