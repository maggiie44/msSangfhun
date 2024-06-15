const courses = [
    {
        id: 1,
        title : "คอร์สเรียน ระดับชั้นประถม",
        category : "primary",
        detail : "คอร์สเรียน สำหรับ ระดับชั้นประถม วิชา คณิต วิทย์ อังกฤษ ไทย สังคม",
        img : "./img/course/1.svg",
        price : "0",
    },
    {
        id: 2,
        title : "คอร์สเรียน ระดับชั้นมัธยมต้น",
        
        category : "middle",
        detail : "คอร์สเรียน สำหรับ ระดับชั้นมัธยมต้น วิชา คณิต วิทย์ อังกฤษ ไทย สังคม",
        img : "./img/course/2.svg",
        price : "0",
    },
    {
        id: 3,
        title : "คอร์สเรียน ระดับชั้นมัธยมปลาย",
        category : "high",
        detail : "คอร์สเรียน สำหรับระดับชั้นมัธยมปลาย ติวเข้ม คณิต ฟิสิกส์ เคมี ชีวะ อังกฤษ",
        img : "./img/course/3.svg",
        price : "0",
    },

]






const courseWrapper = document.querySelector(".card-wrapper")
const linkEL = document.querySelectorAll(".catLink")

// display all course
const displayCourseData = (courses) =>{
    let displayData = courses.map(function (course){
        return `<div class="col-lg-4 col-md-6 col-sm-12 card-item">
                    <div class="card" style="">
                    <img src="${course.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${course.title}</h5>
                        <p class="card-text">${course.detail}</p>
                        <a href="./item${course.id}.html" class="btn btn-primary">เพิ่มเติม</a>
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



