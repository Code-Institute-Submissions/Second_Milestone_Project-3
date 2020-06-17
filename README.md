# HTML CSS & JS Quiz
 
This is a travel website that users can use to find out more about Iceland, its cities, attractions, natural wonders and more. 
Travel website allows user who has not yet traveled to Iceland, to find more about his destination of travel and what they would like to visit. 
Using two search bars on website they can pick location and nearbyplaces they would like to search for, the website will then display this destination on google map and show locations of interest to the user. 
Furthermore it will also showcase articles about different attractions.
 
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
- There should be "Contact Us" page that can be used in case user has any questions or would like to contact the admin of the page.
 
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
- Animations should be used where necessary making the website more interactive and more appealing to the users eye.


All wireframes used for this project can be found on my GitHub at [Manojlovic1998](https://github.com/Manojlovic1998/Second_Milestone_Project/tree/master/assets/wireFrame).

## Features

Main feature:

- Main features of this project are the two search bars which allow user to input data that is then used by Google API services, Google Map, Geolocation and GooglePlaces.
The first input field is a select box where the user can pick which type of place he would like to search for, Tourist Attractions, Hotels or Food and Restaurants.
The second input field is an input box that together with the help of Google API autocomplete function allows the user to search for any city within Iceland.
Once the user has filled in the data he/she can then click the "search" button, which triggers a function that takes the data and uses it to make requests to Google API services.
After requests were made it sets markers on google map and creates a list of all the places of the same type found near the location searched as well as a single red marker that represents the location of the city.

Three other features:

- Ajax: 
    - On second successful request where geolocation is initiated a function is ran that uses ajax method to get JSON data from [assets/ajax](https://github.com/Manojlovic1998/Second_Milestone_Project/blob/master/assets/ajax/articles.json).
    This function gets the data and uses a template provided on the bottom of location.html page to run a loop that queries the template, makes a copy of it, inputs data to the copy of the template and appends the template to an empty container.
    This way articles can be added inside JSON file and there won't be any need to create new elements as loop does this for us using premade template.

- EmailJS:
    - Website has a contact feature available on contactus.html page, where users can use the form to send us an email. This feature was set using [EmailJS](https://www.emailjs.com/) service.
    User gets to fill 3 input fields, "Full Name", "Email", and "Message". Once all the input fields have been filled, the user can click the send button which takes the data and uses EmailJS service to send us an email using the template that we have set on Emailjs to format the data accordingly. 
 
 - Intersection Observer:
    - Intersection Observer API is used to load in text and images, creating a fade in animation that is made by utilising CSS style and JS logic through a callback function that uses the API observer to set and remove classes. 

### Existing Features

- Google API - allows user to search for cities within Iceland and find nearby places of interest by inputing data inside two search boxes on "locations.html" page.
- Email JS 2 - allows the user to send email to the admin of the page by inputting data inside a form on "contactus.html" page.
- Intersection Observer - allows the user to scroll down the page and reveal more content with smooth transition that adds to professional look and feel of website.

### Features Left to Implement

- In future I would like to have only one page where once any anchor is clicked the page will load new content in place of the old one. 
Example of this would be, once the navigation link is clicked then only new content of the page is loaded instead of having the whole page load again. For this I would use JSON file, template elements and JS logic.
What this would allow me to do is that I would be able to change the content easily inside a JSON file without ever having to do it through html. So in case I want to change images, article texts, article headings I could do it all just by updating JSON file.
This would also allow me to create a new feature where after reading an article about some location, the user can click a button which will automatically initiate a function that will load the map and display the location of the place that user has just read about.


## Technologies Used

- [Bootstrap](https://getbootstrap.com/)
    - The project uses **Bootstrap** to provide a responsive toolkit for building the base of the website.
- [Imgur](https://imgur.com/)
    - The project uses **Imgur** for hosting image content for the website.
- [Fontawesome](https://fontawesome.com/)
    - The project uses **Fontawesome** in order to use icons for the website.
- [Fonts Google](https://fonts.google.com/)
    - The project uses **Google Fonts** for changing the font family.
- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.
- [GoogleMapApi](https://cloud.google.com/maps-platform/?utm_source=google&utm_medium=cpc&utm_campaign=FY18-Q2-global-demandgen-paidsearchonnetworkhouseads-cs-maps_contactsal_saf&utm_content=text-ad-none-none-DEV_c-CRE_267331561093-ADGP_Hybrid+%7C+AW+SEM+%7C+BKWS+~+EXA_+M:1_EMEAOt_EN_API_SQR-KWID_43700024190182920-kwd-295562633747-userloc_9040282&utm_term=KW_google%20map%20api-ST_google+map+api&gclid=CjwKCAjw_LL2BRAkEiwAv2Y3SYGH_hAATPE2gVHTbRN6fIqfiwXeclmiHHa7CNtldw1sCLV0vF7IVhoCghcQAvD_BwE)
    - The project uses **GoogleMapApi** to provide Google Map, Geolocation and Google Places service.
- [EmaiJS](https://www.emailjs.com/)
    - The project uses **EmailJS** to provide service for sending emails from the website.

## Testing

Here is the list of all manually tested user stories:

1. Page anchor tags:
    1. Go to the "Discover" page.
    2. Try to click on the brand logo "Iceland Travel'' found in the top left corner it should reload the page.
    3. Try to repeat the same process for all of the anchor tags present on the "Discover '' page, each anchor should lead to another page or its content.
    4. Go to the "Attractions" page.
    5. Try to click on the brand logo "Iceland Travel'' found in the top left corner it should reload the page.
    6. Try to repeat the same process for all of the anchor tags present on the "Attractions" page, each anchor should lead to another page or its content.
    7. Go to the "Locations" page.
    8. Try to click on the brand logo "Iceland '' found in the top left corner it should reload the page.
    9. Try to repeat the same process for all of the anchor tags present on the "Locations" page, each anchor should lead to another page or its content.
    10. Go to "Contact Us" page.
    11. Try to click on the brand logo "Iceland Travel'' found in the top left corner it should reload the page.
    12. Try to repeat the same process for all of the anchor tags present on "Contact Us" page, each anchor should lead to another page or its content.

2. Navigation bar:
    1. Go to the "Discover" page. 
    2. Try to downsize the browser window, at one point navigation links should collapse into hamburger icons.
    3. Try to click the hamburger icon, it should open a mobile navigation menu.
    4. Try to scroll up or down while the menu is open.
    5. Try to increase browser window size while nav is open, at one point links should go back to their initial positions.
    6. Try to scroll up and down again, scroll should work again.

3. Attractions page button:
    1. Go to the "Attractions" page.
    2. Try to click on the first "show more" button, it should display the hidden text of the article above it. 
    3. Try to click again on the same button, it should hide part of the text displayed above it. 
    3. Try to repeat the clicking process for all the other "show more" buttons.

4. Locations page input fields:
    1. Go to the "Locations" page.
    2. Try to click the "search" button without any input, the website should display an alert saying "Geocode was not successful for the following reason:INVALID_REQUEST".
    4. Try to click on the first input box and pick any of the three options.
    5. Try to click the "search" button with just one input filled, the website should display an alert saying "Geocode was not successful for the following reason:INVALID_REQUEST".
    6. Try to click on the second input box and type in the location of any city in Iceland.
    7. Try to click the "search" button with both inputs filled, the website should set markers on google map, there should be a list with names of all the marked locations, attraction articles will be displayed under the map and list section.
    8. Reload the "Locations" page this should clear all of the inputs.
    9. Try to click on the second input filled and type in any city in Iceland.
    10. Try to click the "search" button with just the second input filled, the website should set markers with different icons depending on location type, there should be a list with names of all the marked locations, attraction articles will be displayed under the map and list section.

5. Location page buttons: 
    1. Go to the "Locations" page.
    2. Try to input data into both fields.
    3. Try to click the "search" button, the website should set markers on google map, there should be a list with names of all the marked locations, attraction articles will be displayed under the map and list section.
    5. Try to click on the "show more" button under the first article, it should reveal hidden text above the button.
    6. Try to click again on the same button, it should hide part of the text displayed above it.
    7. Try to repeat the clicking process for all the other "show more" buttons.

6. Locations Page Markers:
    1. Go to the "Locations" page.
    2. Try to input data into both fields.
    3. Try to click the "search" button, the website should set markers on google map, there should be a list with names of all the marked locations, attraction articles will be displayed under the map and list section.
    4. Try to click any marker icon displayed on google map, it should open a "pop-up" window above it that contains place name and place rating.
    5. Try to click on "x" icon found in top right corner of this "pop-up" window, this should close the window. 

7. Contact Us page contact form: 
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.


Using Bootstrap layout, and mobile fist development method, it allowed me to create a responsive website. All of the content resizes appropriately to the size of the displayed screen.
This was tested using Google's Inspect Tool that allowed me to resize the screen and see how my website responds to different device screen sizes. 
It also allowed to to display website in a horizontal phone view, this way I found a problem with height units, "vh", that I intialy used to set the background image.
I have fixed the issue by replacing unit, using rem insted of vh.

## Deployment

For this project I used [Github](https://github.com/) platform, where I created [repository](https://github.com/Manojlovic1998/Second_Milestone_Project) using a template provided to me by [Code Institute](https://codeinstitute.net/).
Once repository was created, I have used browser IDE addon for GitHub called [GitPod](https://chrome.google.com/webstore/detail/gitpod-online-ide/dodmmooeoklaejobgleioelladacbeki?hl=en), to open the repository.
This online IDE that allowed me to access repository as, ["Gitpod knows where you are coming from and beams you into the right context."](https://chrome.google.com/webstore/detail/gitpod-online-ide/dodmmooeoklaejobgleioelladacbeki?hl=en).
Using this IDE I was able to make my commits and push all of my code to the [Github](https://github.com/).
 
Deployment step by step process:
1. Go to [repository](https://github.com/Manojlovic1998/Second_Milestone_Project).
2. In [repository](https://github.com/Manojlovic1998/Second_Milestone_Project) page click on [settings](https://github.com/Manojlovic1998/Second_Milestone_Project/settings).
3. In [settings](https://github.com/Manojlovic1998/Second_Milestone_Project/settings) scroll down to "GitHub Pages" section.
4. In "Github Pages" click on the first dropdown, found under the Source subheading.
5. Select the branch where you pushed your files, in my case that would be "master branch".
6. Once you click on "master branch", the page will reload.
7. Scroll down again back to the "GitHub Pages" section inside [settings](https://github.com/Manojlovic1998/Second_Milestone_Project/settings).
8. In the top part of "GitHub Pages" section you will find text saying "Your site is published at ..." and it will include the link to the deployed website.
9. Try to click on the link, it should open deployed version of your website.
10. In case browser failed to load the website, you need to wait 2-5 minutes as sometimes it knows to take longer for website to be deployed.
11. After you have waited 2-5min, you can try to open the website again using the link found in the "GitHub pages" section.
12. Website is now deployed and online.


- Diffrence between development version and the deployed version is that:
 1. In deployed version, image jpg files have been downsized so that they get loaded faster.
 2. Google Maps API key was restricted after the website was deployed to prevent any misuse. 


- Local Deployment:
 1. To run the code locally you can go to [Github repository](https://github.com/Manojlovic1998/Second_Milestone_Project).
 2. There you can download zip file that includes all of the files used to create this website. 
 3. Once you have dowloaded the files you can use IDE such as [VScode](https://code.visualstudio.com/) to open them.
 4. From there you use any addon that allows you to run the server locally. 
 5. In order to have a functional Google Map you will have to create your own API key as the key in this project was restricted when deployed.


## Credits

### Content
- The text for articles used on this website was created after reading articles on:
 1. [Wikipedia](https://www.wikipedia.org/) 
 2. [iceland Travel](https://www.icelandtravel.is/) 
 3. [Blue Lagoon](https://www.bluelagoon.com/)
 4. [Iceland Nordic Visitor](https://iceland.nordicvisitor.com/)

### Media

- The photos used in this site were obtained from [Unsplash.com](https://unsplash.com/).
- UI design idea for wireframe was obtained from [sketchappsources.com](https://www.sketchappsources.com/free-source/3654-travel-landing-page-sketch-freebie-resource.html).


### Acknowledgements

- I received inspiration for this project from Code Institute school lessons.