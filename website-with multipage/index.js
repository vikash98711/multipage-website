window.addEventListener(
    "scroll",
    () => {
      document.body.style.setProperty(
        "--scroll",
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      );
    },
    false
  );

$(function(){
  skrollr.init({
  forceHeight: false
});
});




        let hamMenu = document.querySelector(".container1");
        hamMenu.addEventListener("click", () => {
            hamMenu.classList.toggle("active");
        });

    
    // search  icons events   

    
        $(document).ready(function () {
            $(".search-hide").click(function () {
                $(".search-container ").hide();
            });
        });
        $(document).ready(function () {
            $(".search-item-show").click(function () {
                $(".search-container ").show();
            });
        });

    
    // search  icons events 

    
        $(document).ready(function () {
            $(".container1").click(function () {
                $(".links , .midLeft, .videowrapper ,.section2, .sectionCard,.section-rotate,.footer-section").toggle();
            });
        });

   


    


        $(document).ready(function () {
            $('#slider-card').owlCarousel({
                loop: true,
                margin: 10,
                responsiveClass: true,
            

                autoplay: true,
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
                    600: {
                        items: 1,
                        nav: false
                    },
                    1000: {
                        items: 1,
                        nav: true,
                        loop: false
                    }
                }
            })
        });

    

    //  second slider
  


        $(document).ready(function () {
            $('#slider-area').owlCarousel({
                loop: true,
                margin: 10,
                responsiveClass: true,
                // autoplay:true,

                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
                    600: {
                        items: 1,
                        nav: false
                    },
                    1000: {
                        items: 1,
                        nav: true,
                        loop: false
                    }
                }
            })
        });



        const search = document.querySelector(".search-wrapper input");
     var images = document.querySelectorAll(".container");
     console.log(images)
  
        search.addEventListener("keyup", (e)=>{
            if(e.key == "Enter"){
                let searcValue = search.value,
                value  = searcValue.toLowerCase();
                images.forEach(image =>{
                    if(value === image.dataset.name){
                        return image.style.display ="block",image.style.backGround=  "white";
                    }
                    image.style.display ="none";
                })
                console.log(value);
            }
         })