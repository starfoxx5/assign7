
// Character list with a name and a code for each house
const houses = [
  {
    code: "ST",
    name: "Stark"
  },
  {
    code: "LA",
    name: "Lannister"
  },
  {
    code: "BA",
    name: "Baratheon"
  },
  {
    code: "TA",
    name: "Targaryen"
  }
];

// Return an array of characters belonging to a house
const getCharacters = houseCode => {
  switch (houseCode) {
    case "ST":
      return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
      return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
      return ["Robert", "Stannis", "Renly"];
    case "TA":
      return ["Aerys", "Daenerys", "Viserys"];
    // return an empty array
    default:
      return [];
  }
};

// create & return the 'option' tag
const optionElement = (text, value) => {
  const element = document.createElement("option");
  element.textContent = text;
  element.value = value;
  return element;
};

// create & return the 'li' tag
const createLiElement = text => {
  const element = document.createElement("li");
  element.textContent = text;
  return element;
};

const gothouseElement = document.querySelector("select");

// fill the house list with a loop
houses.forEach(house => {
  gothouseElement.appendChild(optionElement(house.name, house.code));
});

// Handle house change event
gothouseElement.addEventListener("change", e => {
  // The value of the event target is the house code
  const gotCharacters = getCharacters(e.target.value);
  const gotCharacterElement = document.getElementById("characters");
  // Empty the list
  gotCharacterElement.innerHTML = "";
  // Add each character to the list
  gotCharacters.forEach(character => {
    gotCharacterElement.appendChild(createLiElement(character));
  });
});