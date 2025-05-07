// Scripting

// Data source
const url = "https://assets.codepen.io/16425/Spring-2025-Roster.json";

// Get data
fetch(url)
  .then(response => response.json())
  .then(data => {
	    // check-check: is the data good?
    console.log(data);
    console.log(data.Name);
    console.log(data.Image);
	
      // get container for data
    const roster = document.querySelector(".roster");

    // Loop through the data
    data.forEach(student => {
      // template
      const template = `
        <figure class="card" style="border-color: ${student.favoriteColor}">
          <img src="${student.imageUrl}" alt="${student.name}">
          <figcaption>
            <h2 style="color: ${student.favoriteColor}">${student.name}</h2>
            <p class="motto">${student.motto}</p>
            <p>Fun Fact: ${student.funFact}</p>
            <p>Fav Artist/Band: ${student.favoriteBand}</p>
            
            <button class="emoji" style="border-color: ${student.favoriteColor}">
              ${student.status}
            </button>
          </figcaption>
        </figure>
      `;

      roster.insertAdjacentHTML("afterbegin", template);

      // Set the CSS variable
      const emojiCard = roster.querySelector(".card");
      emojiCard.style.setProperty('--fav-color', student.favoriteColor);
    });
  });