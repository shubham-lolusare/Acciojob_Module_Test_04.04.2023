# Acciojob_Module_Test_04.04.2023
- The project is about displaying the NASA Picture of the Day using their API. The project can display any "Picture Of The Day" by NASA till date.
- UI Reference: https://drive.google.com/file/d/13eFdbJFHMnoe9egkyv5eqw53jBb4bzM0/view
- Deployed Link: https://shubham-lolusare.github.io/Acciojob_Module_Test_04.04.2023/

# Task
- Build a web page that retrieves data from NASA's Picture of the Day API, allowing the user to select a date from a form and send it in the query params. The page should allow the user to save their searches to local storage and display their past searches on the page. The page should also display the current image of the day when it loads.

# Problem Statement
- Create an HTML file with a form that allows the user to select a date and a submit button. The form should have an ID of "search-form" and the input field should have an ID of "search-input".
- Create a section in the HTML file with an ID of "current-image-container" where the data will be shown.
- Create an unordered list in the HTML file with an ID of "search-history" where the user's past searches will be displayed.
- Create a CSS file to style the HTML elements.
- Create a JavaScript file with the following functions:
- getCurrentImageOfTheDay(): This function should fetch the data for the current date from the NASA API and display it in the UI. This function runs when the page loads.
- getImageOfTheDay(): This function should fetch the data for the selected date from the NASA API and display it in the UI. It should also save the date to local storage and also show it in the search history unordered list.
- saveSearch(): This function should save a date to local storage. As shown in the recording, you need to just save the dates in an array.
- addSearchToHistory(): This function should add the date to the search history list in the Ui. You need to get the searches array from localstorage and display it as an unordered list in the ui. When a user clicks on the specific list item, you need to fetch the data for that specific date all over again and show it in the black div.
- Make sure when the user clicks the list item , you show the search results again on the screen in the div as shown in the ui reference.

# NASA API
- https://api.nasa.gov/planetary/apod: This endpoint returns the data for the image of the day for a given date. The date should be passed in as a query parameter in the format YYYY-MM-DD. The API key should be passed in as a query parameter with the key api_key.
- The API Endpoint to get information of a specific date looks like - https://api.nasa.gov/planetary/apod?date=${date}&api_key=${your_api_key}
- The API Endpoint to get information of current date is also the same, just make sure that the date to passed will be current date and the date you pass in the URL should be in yyyy-mm-dd format.
  For example - https://api.nasa.gov/planetary/apod?api_key=LCc8yC3V8qH2zpKDNlqx2G9jEKIw2kwPOhuNCX2a&date=2023-03-30
  Go to [https://api.nasa.gov/](https://api.nasa.gov/) to get the API Key and to refer to their documentation. You can generate the key by filling a simple form on the website. The API key will be sent to you on your email.

# Marking Scheme
- HTML file with date picker, current image container, and search history list: 10 marks
- CSS file that styles the HTML elements: 10 marks
- JavaScript file with all the functions: 40 marks
- Functionality to save search to local storage: 10 marks
- Functionality to show search in search history list in the UI : 10 marks
- Functionality to display current image of the day on page load: 10 marks
- Functionality to display image of the day for selected date: 10 marks
