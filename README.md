# Usage & Installation guide 
Follow the README guidelines from [femhack-II-frontend-challenge](https://github.com/nuwe-reports/femhack-II-frontend-challenge) to have a backend server up and running.  

Clone the repository :   
```
git clone https://github.com/J-ustine/internet_user_data_visualization.git
```
Install project dependencies :  
```
npm install 
```
Start the project :    
```
npm start
```

# Technology stack
## Languages and main framework
**JavaScript** as requested in the challenge statement and **React.js**

## Librairies
I took care not to use many libraries to **avoid impacting performance and increasing complexity**.  
That said, here are the libraries I chose to use and why :  
- **[reaviz](https://reaviz.io/?path=/docs/docs-intro--docs)** (version 14.7.4)  
It is a powerful charting library for React.js. It provides a wide range of customizable and interactive chart components. 
I choose this library beacause you can easily visualize your data in a visually appealing and informative manner. 
It offers extensive documentation and examples to help you get started quickly.

The two following libraries were necessary for the implementation of the `Map` component of reaviz.  
- **world-atlas** (version 2.0.2)   
It is a collection of TopoJSON files(format for representing geographic data in JSON format) representing geographic features of the world. 
- **topojson-client** (version 3.1.0)  
It is a JavaScript library that simplifies the handling of TopoJSON files.

## Style Framework
This project does not use any specific style framework. Instead, **pure CSS** is utilized for styling the components.   
This decision was made to focus the allocated time for the challenge on researching, comparing, and implementing the charts library.

# Description
- [x] Task 1: Displaying charts
I made these decisions to align with the principles of UX design on data visualization:
- I chose to use **minimalist charts** types such as `Funnel`, `Gauge`, and `Bubble` in my project. I aim to allow users to focus on the essential information without any **unnecessary visual distractions**.
<img width="1429" alt="funnel" src="https://github.com/J-ustine/internet_user_data_visualization/assets/78701219/9915c6ca-6bac-4357-86c6-2695094a0e1e">
<img width="1389" alt="bubble" src="https://github.com/J-ustine/internet_user_data_visualization/assets/78701219/827c6009-2558-46b8-99fd-534101a0e3d9">

- I chose not to display all the available information, (`Gauge` chart representing Internet Users by Year and Country and world `Map`). This decision stems from a desire to emphasize **simplicity**, **clarity**, and **avoid excessive amount of information**.
<img width="1398" alt="gauge" src="https://github.com/J-ustine/internet_user_data_visualization/assets/78701219/9ff8da11-2fbd-4bba-9901-725e28cd4a7e">

- As for the color palette and font selection, I drew inspiration from the *Femhack* page. They exhibit appropriate **contrast, hue, and saturation**, ensuring optimal **readability** and contribute to create a visually appealing user interface.
<img width="1416" alt="intro" src="https://github.com/J-ustine/internet_user_data_visualization/assets/78701219/12c6568d-2335-47be-8b99-55265ebae772">   

- [x] Task 2: Animating website  
- **Gauge chart representing Internet Users by Year and Country** : Every 10 seconds, the selected year is modified. A random year from the available one is chosen. The number of users displayed in the gauge displays the minimum number (0) and gradually increases to the correct number for the country and year selected.  
- **Bubble chart representing Top 10 Countries with the largest number of internet user per Year** : Every 10 seconds, the selected year is modified. A random year from the available one is chosen. The bubbles of the different countries come alive: the distribution, color and arrangement change.  
- **World Map** : The world map is animated when it is displaying, the points of the different countries for which we have data are displayed one by one, little by little.

- [x] Task 3: World Map data visualization  
- Looking for a library to display an interactive map, I noticed [kepler](https://kepler.gl/) library. I managed to generate an [interactive map](https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/s/rezva28i2giv00w/keplergl_jnr606m.json) with the backend data but due to a lack of a paying token, I could not implement it.
- I therefore used the same library as that of the previous graphs. I also used this [gist](https://gist.github.com/tadast/8827699#file-countries_codes_and_coordinates-csv) which allowed me to retrieve the latitude and longitude coordinates of the countries provided by the backend server. I did a mapping to add the number of users per country in a json format (`src/assets/map-data.json`) in order to be able to inject this data into my `Map` component.
<img width="1410" alt="map" src="https://github.com/J-ustine/internet_user_data_visualization/assets/78701219/29419cf9-0cac-467a-882c-316ac2907cd4">

# Future steps
The next steps that I would have taken if I had to continue this project after the deadline would be:   
- [ ] The implementation of **error handling** on my requests to the backend server. I noticed that some countries do not have data for all the years available. Error handling will prevent an error from popping up.  
- [ ] **Interactive world map**. I would have implemented the [kepler](https://kepler.gl/) library with this [interactive map](https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/s/rezva28i2giv00w/keplergl_jnr606m.json).  
<img width="978" alt="interactive_map" src="https://github.com/J-ustine/internet_user_data_visualization/assets/78701219/5d627c11-3448-4819-83ac-f52c410b2d98">

- [ ] **Performance improvement**. I would have taken the necessary time to optimize performance in terms of the number of requests made to the API, perhaps through better use of the cache. This is not a problem at the moment but it remains to be improved by anticipating a bigger feed on the project.
