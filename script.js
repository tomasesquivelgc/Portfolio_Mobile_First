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
    image: "./Normal_Button/yoga-img.jpgX",
    paragraph: "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  }
}

function showNewSection(projectId) {
  var container = document.getElementById(projects[projectId].Id);
  var newSection = document.createElement("div");
  newSection.id = "pop-up-window";
  newSection.innerHTML = "<h3>" + projects[projectId].title +"<button id='close-menu-button' class='close-menu-button'><img src='./Normal_Button/Close_button.png' alt='Close menu'></button>" + "</h3>" +
                          "<ul>" + "<li>" + "<p>" + projects[projectId].technology1 + "</p>"+ "</li>" + "<li>"+ "<p>" + projects[projectId].technology2 + "</p>" + "</li>" + "<li>"+ "<p>" + projects[projectId].technology3 + "</p>" + "</li>" + "<li>"+ "<p>" + projects[projectId].technology4 + "</p>" + "</li>" + "</ul>" +
                          "<img src='" + projects[projectId].image + "' alt='" + projects[projectId].title + "' />" +
                          "<p>" + projects[projectId].paragraph + "</p>" + 
                          "<div><button>See Live</button>" + " " +"<button>See Source</button></div>";
  container.appendChild(newSection);
  newSection.style.display = "flex";
}                
