function getCarBrand() {
    let age = document.getElementById("age-input").value;
    let carBrand;

    if (age < 16) {
      carBrand = "You're too young to drive a car!";
    } else if (age < 25) {
      carBrand = "You might like a BMW!";
    } else if (age < 40) {
      carBrand = "You might like a Mercedes Benz!";
    } else {
      carBrand = "You might like an Audi!";
    }

    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `<p>${carBrand}</p>`;
    
  }