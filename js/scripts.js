// Scripting

// Data source
const url = "https://assets.codepen.io/16425/Spring-2025-Roster.json";

// Get data
fetch(url)
  .then( response  => response.json())
  .then( students  => {
    
    // check-check: is the data good?
    console.log(data);
    console.log(data.Name);
    console.log(data.Image);

    // get container for data
    const roster = document.querySelector(".roster");

    // loop through data
    students.forEach( student => {
      
      // template
      const template = `
          <li style="border-color:${student.favoriteColor}; 
     background: linear-gradient(red, ${student.favoriteColor} );
     
     ">
    
    
    
    <img src="${student.imageUrl}"
        <p>${student.name}
        ${student.status}
    </p>
        
        <em>${student.favoriteSong}</em>
        
    </li>
    `;

      // insert EACH `student` record into container
      roster.insertAdjacentHTML("afterbegin", template);
    });
  });
