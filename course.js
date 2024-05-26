const courses = [
    {
        id: 1,
        title : "Something",
        subject : "math",
        category : "1",
        detail : "something",
        img : "#",
        price : "0",
    },
    {
        id: 2,
        title : "Something2",
        subject : "since",
        category : "2",
        detail : "something",
        img : "#",
        price : "0",
    },
    {
        id: 3,
        title : "Something3",
        subject : "phys",
        category : "1",
        detail : "something",
        img : "#",
        price : "0",
    },
    {
        id: 4,
        title : "Something4",
        subject : "chemist",
        category : "3",
        detail : "something",
        img : "#",
        price : "0",
    },
    {
        id: 5,
        title : "Something5",
        subject : "eng",
        category : "1",
        detail : "something",
        img : "#",
        price : "0",
    },
]






const courseWrapper = document.querySelector(".card-wrapper")
const linkEL = document.querySelectorAll(".catLink")

// display all course
const displayCourseData = (courses) =>{
    let displayData = courses.map(function (course){
        return `<div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="card" style="width: 18rem;">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${course.title}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="./item.html" class="btn btn-primary">Detail</a>
                    </div>
                    </div>
                </div>`;

    })
    displayData = displayData.join("")
    courseWrapper.innerHTML = displayData
}

window.addEventListener("DOMContentLoaded", () =>{

    displayCourseData(courses)
    // console.log(displayData);
 
})

linkEL.forEach((links) => {
    links.addEventListener("click", (e)=>{
        const category = e.target.dataset.id;
        console.log(category);
        e.preventDefault();
        const courseCat = courses.filter(function (courses){
            if(courses.category === category){
                return courses
            }
        })
       console.log(courseCat); 
       if(category === "all"){
           displayCourseData(courses)
       }else{
           displayCourseData(courseCat)
       }
    })
});



