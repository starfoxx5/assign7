// Country list
const countryList = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua-and-Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Autria",
  "Azerbaïjan"
];

var countryElement = document.querySelector("input");
const suggestionsElement = document.getElementById("suggestions");

// create & return a suggestion
const createSuggestionElement = country => {
  const element = document.createElement("div");
  element.classList.add("suggestion");
  element.textContent = country;

  // access the 'click' on a suggestions
  element.addEventListener("click", e => {
    // replace the users input with a suggested country
    countryElement.value = e.target.textContent;
    // empty the suggestion list
    suggestionsElement.innerHTML = "";
  });
  return element;
};

// create an extrapolating conditional logic to a function (See line 51)
function isEntryValid() {
  return (
    countryElement.value !== ""
  );
};

// allow for input change
countryElement.addEventListener("input", () => {
  // empty the suggestion list
  suggestionsElement.innerHTML = "";
  
  countryList.forEach(country => {
    // Check if the inputted value matches the start of the country
    if (isEntryValid()) {

      // automatically capitalize first letter of input
      countryElement.value = countryElement.value[0].toUpperCase() + countryElement.value.slice(1); 

      if (country.startsWith(countryElement.value)) {
        // sdd the country as suggestion
        suggestionsElement.appendChild(createSuggestionElement(country));
      }
    }
  });
});
