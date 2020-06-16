# HTML CSS & JS Quiz
 
This is a travel website that users can use to find out more about Iceland, its cities, attractions, natural wonders and more. 
Travel website allows user who has not yet traveled to Iceland, to find more about his destination of travel and what they would like to visit. 
Using two search bars on website they can pick location and nearbyplaces they would like to search for, the website will then display this destination on google map and show locations of interest to the user. 
Furthermore it will also showcase articles about different attractions depending on the city that user has searched for.
 
## UX
Strategy plane:
- I aim to build a fully functional HTML, CSS and JS travel website that will give newcomers a place where they can go and find out more about Iceland.
 
- As a user type, I want to use the website to find out more about travel destinations of my interest.
- As a user type, I want to be able to search for more locations and go through articles. 
- As a user type, I want to have an insight of what different cities have to offer in terms of attractions, hotels, food and restaurants...
- As a user type, I would like to contact the website admin in case of any questions.
 
Scope plane:
- User should be able to search for their location using search bar.
- There should be articles about different tourist attractions in Iceland. 
- Articles should be displayed on location page after user has provided the input and clicked the "search" button.
- There should be "Contact Us" page that that be used in case user has any questions or would like to contact the admin of the page.
 
Structure plane:
- User Interface:
    - Should be simple to use, adhering to the 'rule of thumb' keeping everything on less than 3 clicks away.
    - User can search for destinations, and places in Iceland using two input fields.
    - Google Map API service will provide user with information about places that he/she has searched. 
 
Skeleton plane:
- There should always be a menu or exit button available, so that users can have freedom to navigate between different pages.
- Information content:
    - Well explained "Attraction" section.
    - Clear and easy to use landing page.
 
Structure plane:
- Color theme for this project will be generated using the following color palette generator [Coolors](https://coolors.co).
- Design should be kept simple, clear and easy to understand. It should not be overcrowded with unnecessary information as this can confuse the first time user.
- There should be loading animation present when new articles are loaded. 
- Animations should be used where necessary making the website more interactive and more appealing to the users eye.


All wireframes used for this project can be found on my GitHub at [Manojlovic1998](https://github.com/Manojlovic1998/Second_Milestone_Project/tree/master/assets/wireFrame).

## Features

In this section, you should go over the different parts of your project, and describe each in a sentence or so.


Main feature:

- Main feature of this project are the two search bars which allow user to input data that is then used by Google API services, Google Map, Geolocation and GooglePlaces.
The first input field is a select box where the user can pick which type of place he would like to search for, Tourist Attractions, Hotels or Food and Restaurants.
The second input field is an input box that together with the help of Google API autocomplete function, allows the user to search for any city within Iceland.
Once the user has filled in the data he/she can then click the "search" button, which triggers a function that takes the data and uses it to make requests to Google API services.
After requests were made it sets markers on google map and creates a list of all the places of the same type found nearby the location searched as well as a single red marker that represents the location of the city.

Two other features:

- First request made to Google API is to set Google Map. On second successfull request where geolocation is inisiated a function is ran that uses ajax method to get JSON data from [assets/ajax](https://github.com/Manojlovic1998/Second_Milestone_Project/blob/master/assets/ajax/articles.json).
This function gets the data and uses template provided on the bottom of location.html page to run a loop that queries template, makes a copy of it, inputs data to the copy of the template and apends the template to an empty container.
This way articles can be added inside JSON file and there won't be any need to create new elements as loop usses 


### Existing Features
- Feature 1 - allows users X to achieve Y, by having them fill out Z
- ...

For some/all of your features, you may choose to reference the specific project files that implement them, although this is entirely optional.

In addition, you may also use this section to discuss plans for additional features to be implemented in the future:

### Features Left to Implement
- Another feature idea

## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.
- [GoogleMapApi](https://cloud.google.com/maps-platform/?utm_source=google&utm_medium=cpc&utm_campaign=FY18-Q2-global-demandgen-paidsearchonnetworkhouseads-cs-maps_contactsal_saf&utm_content=text-ad-none-none-DEV_c-CRE_267331561093-ADGP_Hybrid+%7C+AW+SEM+%7C+BKWS+~+EXA_+M:1_EMEAOt_EN_API_SQR-KWID_43700024190182920-kwd-295562633747-userloc_9040282&utm_term=KW_google%20map%20api-ST_google+map+api&gclid=CjwKCAjw_LL2BRAkEiwAv2Y3SYGH_hAATPE2gVHTbRN6fIqfiwXeclmiHHa7CNtldw1sCLV0vF7IVhoCghcQAvD_BwE)
    - The project uses **GoogleMapApi** to provide Google Map, Geolocation and Google Places service.
## Testing

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:
- Different values for environment variables (Heroku Config Vars)?
- Different configuration files?
- Separate git branch?

In addition, if it is not obvious, you should also describe how to run your code locally.


## Credits

### Content
- The text for section Y was copied from the [Wikipedia article Z](https://en.wikipedia.org/wiki/Z)

### Media
- The photos used in this site were obtained from ...

### Acknowledgements

- I received inspiration for this project from X