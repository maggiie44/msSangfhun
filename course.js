const courses = [
    {
        id: 1,
        title : "Somethime",
        category : "primary",
        detail : "something",
        img : "#",
        price : "0",
    },
    {
        id: 2,
        title : "Somethime2",
        category : "primary",
        detail : "something",
        img : "#",
        price : "0",
    },
    {
        id: 3,
        title : "Somethime3",
        category : "primary",
        detail : "something",
        img : "#",
        price : "0",
    },
    {
        id: 4,
        title : "Somethime4",
        category : "primary",
        detail : "something",
        img : "#",
        price : "0",
    },
    {
        id: 5,
        title : "Somethime5",
        category : "primary",
        detail : "something",
        img : "#",
        price : "0",
    },
]


const courseWrapper = document.querySelector(".card-wrapper")
window.addEventListener("DOMContentLoaded", () =>{
    let displayData = courses.map(function (course){
        return `<div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="card" style="width: 18rem;">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${course.title}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                </div>`;
    })

    console.log(displayData);
    displayData = displayData.join("")
    courseWrapper.innerHTML = displayData

    
})
