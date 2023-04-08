// The NASA apod api key generated from official website
let myAPIKey = "fNy0r7dJfFZtUW7mOQlUujXWTDmmVqu5nBLd9eB6";

// code to display and hide the form
let formopen = document.querySelector(".formOpener");
formopen.style.cursor = "pointer";
let searchForm = document.querySelector(".search-form");
formopen.addEventListener("click", () => {
  if (getComputedStyle(searchForm).display == "none") {
    searchForm.classList.add("responsiveForm");
  } else {
    searchForm.classList.remove("responsiveForm");
  }
});

// code to hide the form on the scroll of screen
document.addEventListener("scroll", () => {
  if (
    window.innerWidth < 1000 &&
    getComputedStyle(searchForm).display != "none"
  ) {
    searchForm.classList.remove("responsiveForm");
  }
});

let todayDate = new Date().toISOString().split("T")[0];
let searchinput = document.querySelector("#search-input");

// setting the maximum date upto which the user can select
searchinput.setAttribute("max", `${todayDate}`);

// on load the current day Picture of the day will be fethched and
// displayed
window.onload = () => {
  getCurrentImageOfTheDay();
};

function getCurrentImageOfTheDay() {
  let url = `https://api.nasa.gov/planetary/apod?date=${todayDate}&api_key=${myAPIKey}`;

  
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        localStorage.setItem("todayImage", JSON.stringify(data));
        printToPage(data, todayDate);
      });
}


// This is the function which will be only used to print the fetched
// data on the page.
// It takes the input of the fetched data object and the today's date
// It takes todays date to change the heading dynamically.
function printToPage(obj, today_date) {
  let image = document.querySelector(".image > img");
  let imageheading = document.querySelector(".imageHeading");
  let imagedesc = document.querySelector(".imageDesc");
  let header = document.querySelector(".header");

  image.setAttribute("src", `${obj.url}`);
  image.setAttribute("width", "100%");

  imageheading.innerText = `${obj.title}`;
  imagedesc.innerText = `${obj.explanation}`;

  // Here if the fetched object date is not same as todays date
  // then it will display the heading adshown below
  if (obj.date != today_date) {
    header.innerText = `Photo on ${obj.date}`;
  }
}

// this  is the event of the form submission which will trigger the
// function
searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  getImageOfTheDay(searchForm.children[0].value);
});

// This is the function triggered by above event.
// It takes the date as input from the form input element
// and fetch the image object of that particular date
// It internally calls the printToPage function which will print
// the object to page.
// Then it calls the saveSearch function which will save the the date
// from the form input to the local storage in the JSON format
// Then it calls the addSearchHistory function which will access the
// data from local storage and prints the data in list format in history space
function getImageOfTheDay(date) {
  let url = `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${myAPIKey}`;
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      printToPage(data, todayDate);
    })
    .then(() => {
      saveSearch(date);
    })
    .then(() => {
      addSearchToHistory();
    });
}

// This is the function which saves the data to local storage
function saveSearch(date) {
  let dateArray = [];
  let temp1 = {};
  temp1.date = date;
  if (localStorage.getItem("searchDates") === null) {
    dateArray.push(temp1);
    localStorage.setItem("searchDates", JSON.stringify(dateArray));
  } else {
    let temp = JSON.parse(localStorage.getItem("searchDates"));
    temp.push(temp1);
    localStorage.setItem("searchDates", JSON.stringify(temp));
  }
}

// Accessing the history element from the DOM
let his = document.querySelector(".history");

// This is the function which generate the li elements with the date
// located in local storage.
function addSearchToHistory() {
  var child = his.lastElementChild;
  while (child) {
    his.removeChild(child);
    child = his.lastElementChild;
  }
  let temp = JSON.parse(localStorage.getItem("searchDates"));

  for (obj of temp) {
    let li = document.createElement("li");
    li.style.cursor = "pointer";
    let text = document.createTextNode(`${obj.date}`);
    li.appendChild(text);
    li.addEventListener("click", (event) => {
      getOldData(event.target.innerText);
    });
    his.appendChild(li);
  }
}

// this part of code will run if there exists any search history
// which will make the UI more interactive
if (localStorage.getItem("searchDates") != null) {
  addSearchToHistory();
}

// This function is specifically used by the list items of the search
// history space to access the searched dates
// This internally calls printToPage function to print the data
function getOldData(date) {
  let url = `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${myAPIKey}`;
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      printToPage(data, todayDate);
    });
}
