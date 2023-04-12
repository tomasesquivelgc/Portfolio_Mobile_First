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
  yoga : {
    Id: "yoga-project",
    title:  "Multi-Post Stories",
    technology1: "CSS",
    technology2: "HTML",
    technology3: "Bootstrap",
    technology4: "Ruby",
    image: "./Normal_Button/yoga-img.jpg",
    paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  },

  artprinting: {
    Id: "yoga-project",
    title: "profesional-art-printing-data",
    technology1: "HTML",
    technology2: "Bootstrap",
    technology3: "Ruby",
    technology4: '',
    image: "./Normal_Button/desktop-grid3-background-A.png",
    paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  }
}

function showNewSection(projectId) {
  var container = document.getElementById(projects[projectId].Id);
  var newSection = document.createElement("div");
  newSection.id = "pop-up-window";
  newSection.innerHTML = "<div class='pop-up-container'><h3 style='margin: 0;'>" + projects[projectId].title +"<button id='' class='close-pop-up' onclick='closeNewSection()'><img src='./Normal_Button/Close_button.png' alt='Close menu'></button>" + "</h3>" +
                          "<ul>" + "<li>" + "<p>" + projects[projectId].technology1 + "</p>"+ "</li>" + "<li>"+ "<p>" + projects[projectId].technology2 + "</p>" + "</li>" + "<li>"+ "<p>" + projects[projectId].technology3 + "</p>" + "</li>" + "<li>"+ "<p>" + projects[projectId].technology4 + "</p>" + "</li>" + "</ul>" +
                          "<img src='" + projects[projectId].image + "' alt='" + projects[projectId].title + "' class='pop-up-image'/>" +
                          "<div class='text-and-buttons'><p>" + projects[projectId].paragraph + "</p>" + 
                          "<div style='display: flex; justify-content: space-between; align-items: flex-end;'><button class='see-project1'>See Live</button>" + " " +"<button class='see-project1'>See Source</button></div></div></div>";
  container.appendChild(newSection);
  newSection.style.display = "flex";
}                
 function closeNewSection() {
  var newSection = document.getElementById("pop-up-window");
  newSection.parentNode.removeChild(newSection);
 }