$(document).ready(function(){

   // jQuery methods go here...


// events click through

window.addEventListener('scroll', function() {
  const header = document.querySelector('header');

  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

   $(".menu-mobile").click(function(){
     $(".sub-menu").toggle();
   });

   $(".burger-button").click(function(){
       $(".nav-header-hidden").toggleClass("nav-header-hidden", false);
     $(".burger-button").toggleClass("active");
     $(".burger-menu").toggleClass("active");
   });


$(".burger-menu").click(function(){
    $(".nav-header-hidden").toggleClass("nav-header-hidden", false);
    $(".burger-button").toggleClass("active");
     $(".burger-menu").toggleClass("active");
   });


});


// images


// $(".p0-button").hover(function(){
//   $(".filterable").addClass('hide');
//   $(".p0").removeClass('hide');
//   $(".filter-grid-button").removeClass('active');
//   $(".p0-button").addClass('active');

// });

  // $(".p1-button").hover(function(){
  //   $(".filterable").addClass('hide');
  //   $(".p1").removeClass('hide');
  //   $(".filter-grid-button").removeClass('active');
  //   $(".p1-button").addClass('active');

  // });

  // $(".p2-button").hover(function(){
  //    $(".filterable").addClass('hide');
  //   $(".p2").removeClass('hide');
  //   $(".filter-grid-button").removeClass('active');
  //   $(".p2-button").addClass('active');
  // });

  // $(".p3-button").hover(function(){
  //   $(".filterable").addClass('hide');
  //   $(".p3").removeClass('hide');
  //   $(".filter-grid-button").removeClass('active');
  //   $(".p3-button").addClass('active');


  // });



  // $(".p4-button").hover(function(){
  //   $(".filterable").addClass('hide');
  //   $(".p4").removeClass('hide');
  //   $(".filter-grid-button").removeClass('active');
  //   $(".p4-button").addClass('active');


  // });

  //  $(".p5-button").hover(function(){
  //    $(".filterable").addClass('hide');
  //    $(".p5").removeClass('hide');
  //    $(".filter-grid-button").removeClass('active');
  //    $(".p5-button").addClass('active');


  //  });



// Gallery pop up

lightGallery(document.getElementById('lightgallery'), {
  speed: 500,
  download: false
});

lightGallery(document.getElementById('lightgallery-mob'), {
  speed: 500,
  download: false
});
