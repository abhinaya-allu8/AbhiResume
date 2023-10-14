const typedTextSpan = document.querySelector(".heading h1");
const textArray = ["Abhinaya Allu", "Engineer Undergrad"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    typedTextSpan.innerHTML += `<span class="letter">${textArray[textArrayIndex].charAt(charIndex)}</span>`;
    charIndex++;
    setTimeout(type, typingDelay);
  }
  else {
    // erase
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  }
  else {
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

window.onload = function () {
  anime.timeline({ loop: false })
  .add({
      targets: '.heading .letter',
      translateY: ["1.1em", 0],
      translateZ: 0,
      duration: 750,
      delay: (el, i) => 50 * i
  })
  .add({
      targets: '.heading',
      opacity: 1,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000,
      complete: function() { // When anime.js animation completes, start the typing effect
          if(textArray.length) setTimeout(type, newTextDelay + 250);
      }
  });

  // switch theme
  var root = document.documentElement;

  const switchTheme = () => {
      var currentBackground = getComputedStyle(root).getPropertyValue('--background').trim();

      if (currentBackground === getComputedStyle(root).getPropertyValue('--light-background').trim()) {
          root.style.setProperty('--background', getComputedStyle(root).getPropertyValue('--dark-background').trim());
          root.style.setProperty('--text', getComputedStyle(root).getPropertyValue('--dark-text').trim());
          root.style.setProperty('--secondary', getComputedStyle(root).getPropertyValue('--dark-secondary').trim());
          root.style.setProperty('--accent', getComputedStyle(root).getPropertyValue('--dark-accent').trim());
          root.style.setProperty('--accent-secondary', getComputedStyle(root).getPropertyValue('--dark-accent-secondary').trim());
          root.style.setProperty('--border', getComputedStyle(root).getPropertyValue('--dark-border').trim());
          // Change particle color
          pJSDom[0].pJS.particles.color.value = "#fff";
      }
      else {
          root.style.setProperty('--background', getComputedStyle(root).getPropertyValue('--light-background').trim());
          root.style.setProperty('--text', getComputedStyle(root).getPropertyValue('--light-text').trim());
          root.style.setProperty('--secondary', getComputedStyle(root).getPropertyValue('--light-secondary').trim());
          root.style.setProperty('--accent', getComputedStyle(root).getPropertyValue('--light-accent').trim());
          root.style.setProperty('--accent-secondary', getComputedStyle(root).getPropertyValue('--light-accent-secondary').trim());
          root.style.setProperty('--border', getComputedStyle(root).getPropertyValue('--light-border').trim());
          // Change particle color
          pJSDom[0].pJS.particles.color.value = "#ddd";
      }

      // Refresh particles to apply color changes
      pJSDom[0].pJS.fn.particlesRefresh();
  }

  document.querySelector('.switch-theme').addEventListener('click', switchTheme);

  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ddd"  // Initial color for light theme
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
      },
      "opacity": {
        "value": 1,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
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
        "distance": 150,
        "color": "#ddd",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
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
          "enable": true,
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
          "distance": 200,
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
}
