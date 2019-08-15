/*****Objects Array******/

var data = [ 
    {
        name: "Billy-B",
        age: "5 years old",
        gender: "Male",
        personalities: "Active, Friendly",
        favoriteToy: "Rubber Ducky",
        bestBuddy: "",
        image: "img/brown-dog.jpg",
    },
    {
        name: "Musky",
        age: "3 years old",
        gender: "Male",
        personalities: "Happy, Curious",
        favoriteToy: "",
        bestBuddy: "Tiffany the Cat",
        image: "img/white-dog.jpg"
    },
    {
        name: "Saddy",
        age: "2 years old",
        gender: "Female",
        personalities: "Jumpy",
        favoriteToy: "",
        bestBuddy: "",
        image: "img/sad-cat.jpg"
    },
    {
        name: "Cindy",
        age: "1 year old",
        gender: "Female",
        personalities: "Happy, Curious",
        favoriteToy: "",
        bestBuddy: "",
        image: "img/white-cat.jpg"
    },
    {
        name: "Husker",
        age: "Unknown",
        gender: "Male",
        personalities: "Serious",
        favoriteToy: "",
        bestBuddy: "",
        image: "img/husky.jpg"
    }
];

/******Add Vars to Profile Page********/

       console.log(data);
        function outputData(dataObj){
       $.each( dataObj, function( key, value ) {
         let $html = "";
          $html = `
          <div class="col5">
         <h6>${value.name}:</h6>
                 <img id="pets" src="${value.image}" alt="brown-dog">
                 <p class="hide"> Age: ${value.age}</p>
                 <p class="hide"> Gender: ${value.gender}</p>
                 <p class="hide"> Personalities: ${value.personalities}</p>
                 <p class="hide"> Favorite Toy: ${value.favoriteToy}</p>
                 <p class="hide"> Best Buddy: ${value.bestBuddy}</p>
                 </div>
         `;
         $("#petss").append($html);
       });
    }
outputData(data);
