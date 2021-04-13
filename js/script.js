// const btn = document.querySelector(".btn-toggle");
//         const theme = document.querySelector("#theme-link");
//         btn.addEventListener("click", function() {
//           // Swap out the URL for the different stylesheets
//           if (theme.getAttribute("href") == "css/light-theme.css") {
//             theme.href = "css/dark-theme.css";
//           } else {
//             theme.href = "css/light-theme.css";
//           }
//         });





// // When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

// // Get the navbar
// var navbar = document.getElementById("navbar");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }


// window.scroll = false;

$(".clickdiv").click(function () {
  window.location = "index.html#section02";
  // document.getElementById("html").style.overflow = "auto";
  return false;
});



function initComparisons() {
  var x, i;
  /* Find all elements with an "overlay" class: */
  x = document.getElementsByClassName("img-comp-overlay");
  for (i = 0; i < x.length; i++) {
    /* Once for each "overlay" element:
    pass the "overlay" element as a parameter when executing the compareImages function: */
    compareImages(x[i]);
  }
  function compareImages(img) {
    var slider, img, clicked = 0, w, h;
    /* Get the width and height of the img element */
    w = img.offsetWidth;
    h = img.offsetHeight;
    /* Set the width of the img element to 50%: */
    img.style.width = (w / 2) + "px";
    /* Create slider: */
    slider = document.createElement("DIV");
    slider.setAttribute("class", "img-comp-slider");
    /* Insert slider */
    img.parentElement.insertBefore(slider, img);
    /* Position the slider in the middle: */
    slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
    slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
    /* Execute a function when the mouse button is pressed: */
    slider.addEventListener("mousedown", slideReady);
    /* And another function when the mouse button is released: */
    window.addEventListener("mouseup", slideFinish);
    /* Or touched (for touch screens: */
    slider.addEventListener("touchstart", slideReady);
    /* And released (for touch screens: */
    window.addEventListener("touchend", slideFinish);
    function slideReady(e) {
      /* Prevent any other actions that may occur when moving over the image: */
      e.preventDefault();
      /* The slider is now clicked and ready to move: */
      clicked = 1;
      /* Execute a function when the slider is moved: */
      window.addEventListener("mousemove", slideMove);
      window.addEventListener("touchmove", slideMove);
    }
    function slideFinish() {
      /* The slider is no longer clicked: */
      clicked = 0;
    }
    function slideMove(e) {
      var pos;
      /* If the slider is no longer clicked, exit this function: */
      if (clicked == 0) return false;
      /* Get the cursor's x position: */
      pos = getCursorPos(e)
      /* Prevent the slider from being positioned outside the image: */
      if (pos < 0) pos = 0;
      if (pos > w) pos = w;
      /* Execute a function that will resize the overlay image according to the cursor: */
      slide(pos);
    }
    function getCursorPos(e) {
      var a, x = 0;
      e = e || window.event;
      /* Get the x positions of the image: */
      a = img.getBoundingClientRect();
      /* Calculate the cursor's x coordinate, relative to the image: */
      x = e.pageX - a.left;
      /* Consider any page scrolling: */
      x = x - window.pageXOffset;
      return x;
    }
    function slide(x) {
      /* Resize the image: */
      img.style.width = x + "px";
      /* Position the slider: */
      slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
    }
  }
}







const VideoController = function (isHovering, videoElement) {
  if (isHovering == true) {
    videoElement.play();
    var elems = document.getElementsByClassName("middleofvid");
    var i;
    for (i = 0; i < elems.length; i++) {
      // console.log(elems[i]);
      // elems[i].style.display = "none";
    }
    var chil = videoElement.parentElement.childNodes;
    // console.log(chil);
      var j;
      for (j = 0; j <= chil.length; j++) {
        // console.log(chil[j]);
        // console.log(chil[j].className);
        try {
          if(chil[j].className.includes("middleofvid") == true) {
            chil[j].style.display = "none";
          }
        }
        catch(err) {

        }
        

        videoElement.style.width = "85%";

        // elems[j].style.display = "none";
      }

  }
  else if (isHovering == false) {
    videoElement.pause();
    var elems = document.getElementsByClassName("middleofvid");
    var i;
    for (i = 0; i < elems.length; i++) {
      // console.log(elems[i]);
      elems[i].style.display = "block";
    }
    videoElement.style.width = "35%";

  }
}