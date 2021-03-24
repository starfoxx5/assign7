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

// Create and return a suggestion
const createSuggestionElement = country => {
  const element = document.createElement("div");
  element.classList.add("suggestion");
  element.textContent = country;

  // Handle click on a suggestion
  element.addEventListener("click", e => {
    // Replace input with suggested country
    countryElement.value = e.target.textContent;
    // Empty the suggestion list
    suggestionsElement.innerHTML = "";
  });
  return element;
};

// Example of extrapolating conditional logic to a function (See line 51)
function isEntryValid() {
  return (
    countryElement.value !== ""
  );
};

// Handle input change
countryElement.addEventListener("input", () => {
  // Empty suggestion list
  suggestionsElement.innerHTML = "";
  
  countryList.forEach(country => {
    // Check if the inputted value matches the start of the country
    if (isEntryValid()) {

      // Automatically capitalize first letter of input
      countryElement.value = countryElement.value[0].toUpperCase() + countryElement.value.slice(1); 

      if (country.startsWith(countryElement.value)) {
        // Add the country as suggestion
        suggestionsElement.appendChild(createSuggestionElement(country));
      }
    }
  });
});
