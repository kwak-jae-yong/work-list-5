const projectList= document.querySelectorAll('.project-lst>li')


projectList.forEach((project)=>{
    project.addEventListener('mouseenter',()=>{
        project.classList.add('On')
    })
    project.addEventListener('mouseleave',()=>{
        project.classList.remove('On')
    })
})