// !accordion
document.querySelectorAll('.accordion-item__trigger').forEach((item) =>
   item.addEventListener('click', () => {
      item.parentNode.classList.toggle('accordion-item--active')
   })
);



// !slider
$(document).ready(function () {
   // our starting point
   let position = 0;

   const slidesToShow = 1;
   const slidesToScroll = 1;
   const container = $('.slider-container');
   const track = $('.slider-track');
   const item = $('.slider-item');
   const btnPrev = $('.btn-prev');
   const btnNext = $('.btn-next');
   //find out width of each elements
   let movePosition = 0;
   let children = track.children();
   //find out each nested element and set css property min width

   function calcItemWidth() {
      return container.width() / slidesToShow;
   };

   function resize() {
      let itemWidth = calcItemWidth();

      item.each(function (index, item) {
         $(item).css({
            minWidth: itemWidth,
         });
      });
   };
   resize();

   $(window).on("resize", function () {
      resize();
   });

   btnPrev.click(function () {
      console.log('btnPrev');

      if (movePosition < 0) {
         movePosition = movePosition + 100;
      } else {
         movePosition = -(children.length - 1) * 100;
      }

      setPosition();
   });

   btnNext.click(function () {
      console.log('btnNext');

      if (movePosition > -(children.length - 1) * 100) {
         movePosition = movePosition - 100;
      } else {
         movePosition = 0;
      }

      setPosition();
   });

   const setPosition = () => {
      track.css({
         transform: `translateX(${movePosition}%)`
      })
   }
});
// !hat
//our document ready to work with
// $(document).ready(function () {
//    const headerOffset = $('#header').offset().top;
//    $(window).scroll(function () {
//       const scrolled = $(this).scrollTop();

//       if (scrolled > headerOffset) {
//          // прилепить шапку
//          $('#header').addClass('header-fixed');
//       } else if (scrolled < headerOffset) {
//          // отлепить шапку
//          $('#header').removeClass('header-fixed');
//       }

//       console.log(headerOffset);
//       console.log(scrolled);
//    });
// });

// !nav 
$('#button-toggle').on("click", function (event) {
   event.preventDefault();

   $(this).toggleClass("active");
   $("#nav").toggleClass("active");

});