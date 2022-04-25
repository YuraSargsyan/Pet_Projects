const projectImages = [
    {
        name: 'quizGame',
        project: "/images/1625358858_11-phonoteka-org-p-kviz-oboi-oboi-krasivo-11.jpg"
    },
    {
        name: 'weatherGame',
        project: "/images/weather-quiz-unsmushed.png"
    },
    {
        name: 'postTable',
        project: "/images/1625358858_11-phonoteka-org-p-kviz-oboi-oboi-krasivo-11.jpg"
    },
    
    // "./images/1625358858_11-phonoteka-org-p-kviz-oboi-oboi-krasivo-11.jpg",
    // "./images/1625358858_11-phonoteka-org-p-kviz-oboi-oboi-krasivo-11.jpg"
]

const sectionProjects = document.querySelector('.section-projects')

function addProjectImages(project, name) {
    sectionProjects.insertAdjacentHTML('beforeend', `
    <div class="project-image" name="${name}">
        <img src="${project}">
        <div class="project-hover">
            <button class="project-button">
                <a href="/${name}/index.html" target="_blank">
                    
                        <span>VIEW <br> PROJECT</span>
                   
                </a>
            </button>
        </div>
    </div>
    
`)
}





projectImages.forEach(projects => {
    let project;
    let name;
    for(let key in projects) {
        if(key === 'project') {
            project = projects[key] 
        }
        if(key === 'name') {
            name = projects[key]   
        }
    }
    addProjectImages(project, name)
})

sectionProjects.addEventListener('click', e => {
    const quizGame = document.getElementById('quizGame')
})



