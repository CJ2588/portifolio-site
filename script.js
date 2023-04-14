const navigation = document.querySelector(".nav");
const navToogle= document.querySelector(".imgmenu");
const anchorPoint = document.getElementById("menubtn");
const anchorPoints = Array.from(anchorPoint.children);
//  code for hambuger menu
console.log(anchorPoint);
console.log(anchorPoints);
navToogle.addEventListener("click", () => {
    const visibility = navigation.getAttribute('data-visible');
    
    if(visibility=== "false"){
        navigation.setAttribute("data-visible", true);
        navToogle.setAttribute("aria-expanded", true);
    }

    else if (visibility=== "true"){
        navigation.setAttribute("data-visible", false);
        navToogle.setAttribute("aria-expanded", false);
    }
});

//code for smooth scrolling

anchorPoints( anchor => {anchorPoint.addEventListener("click", function(e){
    e.preventDefault();
    anchorPoints.scrollIntoView({
        behaviour: "smooth"
    })
  })
});