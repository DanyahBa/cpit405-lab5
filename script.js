const themebutton = document.getElementById('theme-toggle');
themebutton.addEventListener('click', () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themebutton.textContent = "Dark Mode";
    } else {
        themebutton.textContent = "Light Mode";
    }

});

const printButton = document.getElementById('print-btn');
printButton.addEventListener("click", function() {
    window.print();
});

const readMoreButton = document.getElementById('read-more');
const moreText = document.getElementById('more-text');
readMoreButton.addEventListener("click", function() {

    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        readMoreButton.textContent = "Show Less -";
    } else {
        moreText.style.display = "none";
        readMoreButton.textContent = "Show More +";
    }

});

const projects = [

    {
        title: "The CountDown Button",
        description: "Developed an interactive web-based game that tests memory and time perception using a hidden 60 seconds timer.",
        category: "Web",
        technologies: "HTML, CSS, JavaScript"
    },

    {
        title: "CareOne - Queue Management System",
        description: "Designed and developed a queue management system to organize customer flow and reduce waiting times.",
        category: "Programming",
        technologies: "Java, MySQL"
    }

];

const projectsCard = document.getElementById("projects-card");

function displayProjects(category) {

    projectsCard.innerHTML = "";

    projects.forEach(function(project) {

        if (category === "All" || project.category === category) {

            const card = document.createElement("article");
            card.classList.add("project-card");

            const title = document.createElement("h3");
            title.textContent = project.title;

            const description = document.createElement("p");
            description.textContent = project.description;

            const projectCategory = document.createElement("p");
            projectCategory.textContent = "Category: " + project.category;

            const technologies = document.createElement("p");
            technologies.textContent = "Technologies: " + project.technologies;

            card.appendChild(title);
            card.appendChild(description);
            card.appendChild(projectCategory);
            card.appendChild(technologies);

            // Insert card into projects container
            projectsCard.appendChild(card);

        }

    });

}

// Display all projects when page loads
displayProjects("All");

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const category = button.getAttribute("data-category");

        displayProjects(category);

    });

});