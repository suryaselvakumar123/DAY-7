// Problem 1: Get all the countries from the Asia continent /region using Filter function
var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request.send();
request.onload = function() {
  var countryData = JSON.parse(this.response);
  var asiaCountries = countryData.filter(function(country) {
    return country.region === 'Asia';
  });
  console.log(asiaCountries);
};

// Problem 2: Get all the countries with population of less than 2 lacs using Filter function
var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request.send();
request.onload = function() {
  var countryData = JSON.parse(this.response);
  var populationLessThan2Lacs = countryData.filter(function(country) {
    return country.population < 200000;
  });
  console.log(populationLessThan2Lacs);
};

// Problem 3: Print the following details name, capital, flag using forEach function.
var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request.send();
request.onload = function() {
  var countryData = JSON.parse(this.response);
  countryData.forEach(function(country) {
    console.log(`Name: ${country.name}, Capital: ${country.capital}, Flag: ${country.flag}`);
  });
};

// Problem 4: Print the total population of countries using reduce function
var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request.send();
request.onload = function() {
  var countryData = JSON.parse(this.response);
  var totalPopulation = countryData.reduce(function(accumulator, country) {
    return accumulator + country.population;
  }, 0);
  console.log(totalPopulation);
};

//Print the country which use US Dollars as currency.
var request = new XMLHttpRequest();
request.open('Get', 'https://restcountries.eu/rest/v2/all', true)
request.send();
request.onload = function () {
        var data = JSON.parse(this.response);
        var cur=[];
        for(i=0;i<data.length;i++){
            if(data[i].currencies[0].code==="USD")
            {
                console.log("name:",data[i].name,"==>",data[i].currencies[0].code)
            }
        }
    }