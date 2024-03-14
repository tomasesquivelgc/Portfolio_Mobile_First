const openButton = document.getElementById('dropdown-button');
openButton.onclick = () => {
  const x = document.getElementById('pop-up-menu');
  x.style.display = 'block';
};

const closeButtons = document.querySelectorAll('.close-menu-button');
closeButtons.forEach((item) => {
  item.onclick = () => {
    const y = document.getElementById('pop-up-menu');
    y.style.display = 'none';
  };
});

const projects = {
  yoga: {
    title: 'Awesome Books',
    technologies: ['CSS', 'HTML', 'ES6', 'Luxon'],
    image: './Normal_Button/awesome_books_2.png',
    paragraph: "This is a one page application using basic CSS classes to hide and show the section you want to see with the navBar. The 'add Book' input adds a class instance into our list and then renders it for a complete view of the library. The complete list is then saved to the local storage for everyday use. Try it out in the live demo!",
    link: 'https://tomasesquivelgc.github.io/Awesome-books/',
    codeLink: 'https://github.com/tomasesquivelgc/Awesome-books',
  },

  artprinting: {
    title: 'profesional-art-printing-data',
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails', 'Ruby'],
    image: './Normal_Button/desktop-grid3-background-A.png',
    paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    link: 'link_to_live_version.com',
    codeLink: 'https://github.com/tomasesquivelgc/Games-Sales-Hunter',
  },

  dataDash: {
    title: 'Data Dashboard Healthcare',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    image: './Normal_Button/data-dashboard-hovered.png',
    paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    link: 'link_to_live_version.com',
    codeLink: 'https://github.com/tomasesquivelgc/Games-Sales-Hunter',
  },

  webPort: {
    title: 'Website Portfolio',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    image: './Normal_Button/web-portfolio-background.png',
    paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    link: 'link_to_live_version.com',
    codeLink: 'https://github.com/tomasesquivelgc/Games-Sales-Hunter',
  },

  gameSales: {
    title: 'Game Sales Hunter',
    technologies: ['Javascript', 'React', 'Redux'],
    image: './project_images/game_sales/game_sale_screenshot_3.png',
    paragraph: 'Mobile App using CheapShark Api to find the best deals on games. The user can search for a specific game or browse through the deals list. By clickin, the user can also see the games details and a link to the official steam page',
    link: 'https://monumental-raindrop-ef8680.netlify.app',
    codeLink: 'https://github.com/tomasesquivelgc/Games-Sales-Hunter',
  },

  recipeApp: {
    title: 'Recipe App',
    technologies: ['Ruby', 'Rails', 'PostgreSQL'],
    image: './project_images/recipe_app/recipe_app_screenshot_2.png',
    paragraph: 'Web App that allows users to create, edit, and delete recipes. The user can also add ingredients and steps to the recipe, as well as deciding if their recipe is public or not.',
    link: '',
    codeLink: 'https://github.com/tomasesquivelgc/Recipe-app',
  },

  bookCar: {
    title: 'Book a Car',
    technologies: ['Ruby', 'Rails', 'PostgreSQL', 'React', 'Redux'],
    image: './project_images/bookcar/book_car_screenshot_2.png',
    paragraph: 'Full-stack app built with Ruby on Rails and React/Redux. The user can book a car for a specific date and time, as well as see the available cars and their details. The user can also see the available cities to rent. Admins can add new cars as well as delete them.',
    link: 'https://fmanimashaun.github.io/book-car/',
    codeLink: 'https://github.com/tomasesquivelgc/book-car',
  }
};

function showNewSection(projectId) {
  const container = document.getElementById('yoga-project');
  const newSection = document.createElement('div');
  newSection.id = 'pop-up-window';
  let liItems = `<li><p class='new-section-technology'>${projects[projectId].technologies[0]}</p></li><li><p class='new-section-technology'>${projects[projectId].technologies[1]}</p></li><li><p class='new-section-technology'>${projects[projectId].technologies[2]}</p></li>`;
  if (projects[projectId].technologies.length > 3) {
    liItems += `<li><p class='new-section-technology'>${projects[projectId].technologies[3]}</p></li>`;
  }
  newSection.innerHTML = `<div class='pop-up-container'><h3 style='margin: 0;'>${projects[projectId].title}<button id='closePopUp' class='close-pop-up' onclick='closeNewSection()'><img src='./Normal_Button/Close_button.png' alt='Close menu'></button></h3>
                          <ul>${liItems}</ul>
                          <img src='${projects[projectId].image}' alt='${projects[projectId].title}' class='pop-up-image'/>
                          <div class='text-and-buttons'><p>${projects[projectId].paragraph}</p>
                          <div class='button-div'><button class='see-project1'><a href=${projects[projectId].link} target="_blank">See Live</a><img src='./Normal_Button/seeLive-button.svg' alt='See live'></button><button class='see-project1'><a href=${projects[projectId].codeLink} target="_blank">See Source</a><img src='./Normal_Button/seeSource-button.svg' alt='See source'</button></div></div></div>';`;
  container.appendChild(newSection);
  newSection.style.display = 'flex';
}
function closeNewSection() {
  const newSection = document.getElementById('pop-up-window');
  newSection.parentNode.removeChild(newSection);
}

const closePopUp = document.getElementById('closePopUp');
closePopUp.onclick = closeNewSection();

const openPopUp = document.getElementById('popButton');
openPopUp.onclick = showNewSection();