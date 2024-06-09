const sidebarLinks = document.querySelectorAll('.sidebar a');
const imageContainer = document.querySelector(".image-container");
const overlay = document.getElementById("overlay");
const closeButton = document.getElementById("close-button");

var currentpage = 0;

function smoothScrollToElement(targetElement) {
    // Get the target element's position
    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
    // Get the current scroll position
    const startPosition = window.scrollY;
    // Calculate the distance and duration of the scroll
    const distance = targetPosition - startPosition;
    const duration = 1000; // Adjust this value to control the scroll speed (in milliseconds)
  
    let startTime;
  
    function scrollAnimation(currentTime) {
      if (!startTime) startTime = currentTime;
  
      const timeElapsed = currentTime - startTime;
      const scrollProgress = Math.min(timeElapsed / duration, 1);
      const newScrollPosition = startPosition + distance * easeOutCubic(scrollProgress);
  
      window.scrollTo(0, newScrollPosition);
  
      if (timeElapsed < duration) {
        requestAnimationFrame(scrollAnimation);
      }
    }
  
    function easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3);
    }
  
    requestAnimationFrame(scrollAnimation);
}

function hideElement(element) {
    element.style.display = "none";
}

function nextPage(){
    if(currentpage < 2){
        ChangePage(currentpage + 1);
    }
    else{
        ChangePage(0);
    }
}
function backPage(){
    if(currentpage > 0){
        ChangePage(currentpage - 1);
    }
    else{
        ChangePage(2);
    }
}

function ChangePage(page) {
    const buttons = document.querySelectorAll(".tabs_button");
    var image = $("#project-image");
    const title =  document.getElementById("project-Title");
    const contect =  document.getElementById("project-contect")
    var linkElement = document.getElementById("project-button-2");
    const buttonsArray = Array.from(buttons);

    for (let i = 0; i < buttonsArray.length; i++) {
        try {
            buttonsArray[i].classList.remove("active-Button");
            //console.log("Removed active-Button from: " + i);
        } catch (error) {
            console.log("Could not remove active-Button from: " + i);
        }
    }
    buttonsArray[page].classList.add("active-Button");
    currentpage = page;
    console.log("Added active-Button to: " + page);

    if(linkElement){
      console.log("a")
    }

    if(currentpage == 0)
    {
        image.attr("src", "./portfolio/img/ccsWebdes.png");
        console.log("updated image to : " + currentpage);
        title.innerHTML = `<!--<span class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">Most Popular</span>-->Web Design Contest`;
        contect.innerHTML = `<span style="color: white; font-size: 20px;"><br> Overview: </span><br>
          
        I built this with PHP, JavaScript, HTML, and CSS, featuring dynamic animations, a glitch effect, particle effects, <br> 
        and a custom cursor for a personalized touch. </p>`
        linkElement.href = "https://github.com/qw87rt?tab=repositories";
    }
    else if(currentpage == 1){
        image.attr("src", "./portfolio/img/leavemgmt.png");
        title.innerHTML = `<span class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">Newest</span>Leave Management System`;
        contect.innerHTML = `<span style="color: white; font-size: 20px;"><br> Overview: </span><br>
          
        The system includes a mobile app, desktop app, a REST API, and a database. I utilized React Native with Expo for <br>
        the mobile app, VB.NET for the desktop app, Express.js for the REST API, and MySQL for the database. It is hosted <br>
        on Hostinger.</p>`;
        linkElement.href = "https://github.com/qw87rt?tab=repositories";
        console.log("updated image to : " + currentpage);
    }
    else if(currentpage == 2){
        image.attr("src", "./portfolio/img/soon.png");
        title.innerHTML = "Project X - Under Development";
        contect.innerHTML = `<span style="color: white; font-size: 20px;"><br> Overview: </span><br>
        Currently in development`;
        linkElement.href = "https://github.com/qw87rt?tab=repositories";
        console.log("updated image to : " + currentpage);
    }

}

function copyToClipboard(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;

  // Make the textarea non-editable to avoid flickering when focusing
  textarea.setAttribute('readonly', '');

  // Append the textarea to the body
  document.body.appendChild(textarea);

  // Select the text in the textarea
  textarea.select();

  // Copy to clipboard
  document.execCommand('copy');

  // Remove the textarea from the DOM
  document.body.removeChild(textarea);
}

function changeTextOnClick(element, newText, duration) {
  // Get the original text
  const originalText = element.innerText;
  const children = Array.from(element.children);

  // Change the text to the new text
  element.innerText = newText;

  // Set a timeout to revert the text back to the original after the specified duration
  setTimeout(function () {
    element.innerText = originalText;
    element.appendChild(children);
  }, duration);
}


document.addEventListener("DOMContentLoaded", function() {

  document.documentElement.classList.add('dark');

  var loadElement = document.getElementById("load");
  var mainElement = document.getElementById("main");

  if (loadElement) loadElement.remove();
  if (mainElement) mainElement.classList.remove("inv"); // Replace "property-name" with the specific property you want to remove

});

window.addEventListener('load', function () {
      document.documentElement.classList.add('dark'); // 'dark' class defines your dark mode styles
      localStorage.theme = 'dark'; // Store the theme preference
});

document.addEventListener("DOMContentLoaded", function () {
    console.log("loading particles")
    particlesJS("particles-js", {
        "particles": {
          "number": {
            "value": 33,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#f5f5f5"
          },
          "shape": {
            "type": "star",
            "stroke": {
              "width": 0,
              "color": "#ffffff"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.4,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 7.891476416322726,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 0,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 1.5782952832645452,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            },
            "onclick": {
              "enable": false,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 127.87212787212788,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      });
  });
