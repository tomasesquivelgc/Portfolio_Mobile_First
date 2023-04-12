const openButton = document.getElementById('dropdown-button');
openButton.onclick = () => {
  const x = document.getElementById('pop-up-menu');
  x.style.display = 'block';
};

const closeButton = document.querySelectorAll('.close-menu-button');
closeButton.forEach((item) => {
  item.onclick = () => {
    const y = document.getElementById('pop-up-menu');
    y.style.display = 'none';
  };
});

const projects = {
  yoga: {
    title: 'Multi-Post Stories',
    technology1: 'CSS',
    technology2: 'HTML',
    technology3: 'Bootstrap',
    technology4: 'Ruby',
    image: './Normal_Button/yoga-img.jpg',
    paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  },

  artprinting: {
    title: 'profesional-art-printing-data',
    technology1: 'HTML',
    technology2: 'Bootstrap',
    technology3: 'Ruby',
    technology4: '',
    image: './Normal_Button/desktop-grid3-background-A.png',
    paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  },

  dataDash: {
    title: 'Data Dashboard Healthcare',
    technology1: 'HTML',
    technology2: 'Bootstrap',
    technology3: 'Ruby',
    technology4: '',
    image: './Normal_Button/data-dashboard-hovered.png',
    paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  },

  webPort: {
    title: 'Website Portfolio',
    technology1: 'HTML',
    technology2: 'Bootstrap',
    technology3: 'Ruby',
    technology4: '',
    image: './Normal_Button/web-portfolio-background.png',
    paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",

  },
};

function showNewSection(projectId) {
  const container = document.getElementById('yoga-project');
  const newSection = document.createElement('div');
  newSection.id = 'pop-up-window';
  newSection.innerHTML = `<div class='pop-up-container'><h3 style='margin: 0;'>${projects[projectId].title}<button id='' class='close-pop-up' onclick='closeNewSection()'><img src='./Normal_Button/Close_button.png' alt='Close menu'></button></h3>
                          <ul><li><p class='new-section-technology'>${projects[projectId].technology1}</p></li><li><p class='new-section-technology'>${projects[projectId].technology2}</p></li><li><p class='new-section-technology'>${projects[projectId].technology3}</p></li><li><p class='new-section-technology'>${projects[projectId].technology4}</p></li></ul>
                          <img src='${projects[projectId].image}' alt='${projects[projectId].title}' class='pop-up-image'/>
                          <div class='text-and-buttons'><p>${projects[projectId].paragraph}</p>
                          <div class=button-div><button class=see-project1>See Live<img src=./Normal_Button/seeLive-button.svg' alt='See live'></button><button class='see-project1'>See Source<img src='./Normal_Button/seeSource-button.svg' alt='See source'</button></div></div></div>';`;
  container.appendChild(newSection);
  newSection.style.display = 'flex';
}
function closeNewSection() {
  const newSection = document.getElementById('pop-up-window');
  newSection.parentNode.removeChild(newSection);
}