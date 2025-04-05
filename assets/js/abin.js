$('.special-slider').owlCarousel({
    loop: false,
    center: true,
    marginright: 5,
    autoWidth: false,
    responsiveClass: true,
    navText: [
       "<ion-icon name='arrow-back-outline'></ion-icon>",
       "<ion-icon name='arrow-forward-outline'></ion-icon>"
     ],
    responsive: {
        0: {
            items: 1,
            nav: true,
            margin:10,
            center:false,
        },
        600: {
            items:2,
            nav: false,
        },
        996: {
          items:3,
           dots:false,
           nav: true,
           loop: true,
           margin: 5
       },
        1000: {
           items:3,
            dots:false,
            nav: false,
            loop: true,
            margin: 10
        },
        1600: {
            items:4,
             dots:false,
             nav: false,
             loop: true,
             margin: 10
         }
    }
 });

 $('.owl-blog').owlCarousel({
    loop: false,
    center: true,
    marginright: 5,
    autoWidth: false,
    responsiveClass: true,
    navText: [
       "<ion-icon name='arrow-back-outline'></ion-icon>",
       "<ion-icon name='arrow-forward-outline'></ion-icon>"
     ],
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items:1,
            nav: false,
        },
        996: {
          items:3,
           dots:false,
           nav: true,
           loop: true,
           margin: 5
       },
        1000: {
           items:3,
            dots:false,
            nav: true,
            loop: true,
            margin: 10
        }
    }
 });


 $('.owl-testimonial').owlCarousel({
    loop: false,
    center: true,
    marginright: 5,
    autoWidth: false,
    responsiveClass: true,
    navText: [
       "<ion-icon name='arrow-back-outline'></ion-icon>",
       "<ion-icon name='arrow-forward-outline'></ion-icon>"
     ],
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items:1,
            nav: false,
        },
        996: {
          items:1,
           dots:false,
           nav: true,
           loop: true,
           margin: 5
       },
        1000: {
           items:1,
            dots:false,
            nav: true,
            loop: true,
            margin: 10
        }
    }
 });

 $('.owl-related-produts').owlCarousel({
    loop: false,
    center: true,
    marginright: 4,
    autoWidth: false,
    responsiveClass: true,
    navText: [
       "<ion-icon name='arrow-back-outline'></ion-icon>",
       "<ion-icon name='arrow-forward-outline'></ion-icon>"
     ],
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items:1,
            nav: false,
        },
        996: {
          items:3,
           dots:false,
           nav: true,
           loop: true,
           margin: 5
       },
        1000: {
           items:4,
            dots:false,
            nav: true,
            loop: true,
            margin: 5
        }
    }
 });
 

 $(".btn_closemenu").click(function(){
    $(".sidebg").css({"left":"-100%"});
 
 });
 
 $(".btn-menu").click(function(){
   
    $(".sidebg").css({"left":"0%"});
 
 });