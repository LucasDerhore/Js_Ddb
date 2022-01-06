const books = [
  { title: "Gatsby le magnifique", id: 133712, rented: 39 },
  { title: "A la recherche du temps,perdu", id: 237634, rented: 28 },
  { title: "Orgueil & Préjugés", id: 873495, rented: 67 },
  { title: "Les frères Karamazov", id: 450911, rented: 55 },
  { title: "Dans les forêts de Sibérie", id: 8376365, rented: 15 },
  { title: "Pourquoi j'ai mangé mon père", id: 450911, rented: 45 },
  { title: "Et on tuera tous les affreux", id: 67565, rented: 36 },
  { title: "Le meilleur des mondes", id: 88847, rented: 58 },
  { title: "La disparition", id: 364445, rented: 33 },
  { title: "La lune seule le sait", id: 63541, rented: 43 },
  { title: "Voyage au centre de la Terre", id: 4656388, rented: 38 },
  { title: "Guerre et Paix", id: 748147, rented: 19 },
];

let title = [];

books.forEach((x) => {
  title.push(`${x.title}`);
});

console.log(title);

console.log("######################");
console.log("######################");
console.log("######################");

let allRented = true;
books.forEach((x) => {
  if (x.rented == 0) {
    console.log(x);
    allRented = false;
  }
});

allRented == false
  ? console.log("Un livre n'a pas été emprunté")
  : console.log("Tous les livres ont été empruntés au moins 1 fois");

console.log("######################");
console.log("######################");
console.log("######################");

let maxRent = 0;
let BookMaxRent = [];
books.forEach((x) => {
  x.rented > maxRent ? (maxRent = x.rented) && (bookMaxRent = x) : maxRent;
});

console.log(bookMaxRent);

console.log("######################");
console.log("######################");
console.log("######################");

let BookminRent = [];
books.forEach((x) => {
  x.rented < maxRent ? (BookminRent = x) : BookminRent;
});

console.log(BookminRent);

console.log("######################");
console.log("######################");
console.log("######################");

let remove = books.filter((x) => {
  if (x.id === 133712) {
    return console.log(`${x.id} livre supprimé`);
  } else {
    return true;
  }
});

console.log(remove);
