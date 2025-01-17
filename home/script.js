const home = document.querySelector("#home");

home.addEventListener("click", () => {
  window.location.href = "index.html";
});

const cmElements = document.querySelectorAll("#cm");

cmElements.forEach(cmElement => {
  cmElement.addEventListener("click", () => {
    window.location.href = "../cm/cm-dept.html";
  });
});

const logo2 = document.getElementById("msbte");
logo2.addEventListener("click", () => {
  window.open("https://msbte.org.in", "blank_");
});

const logo3 = document.getElementById("gps");
logo3.addEventListener("click", () => {
  window.open("http://gpsolapur.ac.in", "blanl_");
});

const abt = document.querySelectorAll("#abt");

abt.forEach(a => {
  a.addEventListener("click", () => {
    window.location.href = "about.html";
  });
});


const dnl = document.querySelector("#dnl-mode");
const secBody = document.querySelector(".sec-body");
const terBody = document.querySelector(".ter-body");
const topHead = document.querySelector(".site-name-logo");
const topHeadLogo = document.querySelectorAll("#logo");
const logof = document.getElementById("logof");
const links = document.querySelectorAll("#links");
const commentSection = document.querySelector(".comment-section")
const k = document.querySelectorAll("#k");



logof.addEventListener("click", () => {
  window.location.href = "index.html";
})

// Function to set dark mode
const setDarkMode = () => {
  console.log("d");
  secBody.style.backgroundColor = "#121212";
  secBody.style.color = "#f0f0f0";
  commentSection.style.backgroundColor = "#121212";
  commentSection.style.color = "#f0f0f0";
  terBody.style.backgroundColor = "#121212";
  terBody.style.color = "#f0f0f0";
  topHead.style.backgroundColor = "#121212";
  topHead.style.color = "#f0f0f0";
  topHeadLogo.forEach(logo => {
    logo.src = "../images/D (3).png";
  });
  links.forEach(link => {
    link.style.color = "#F5BD02";
  });
};

// Function to set light mode
const setLightMode = () => {
  console.log("l");
  secBody.style.backgroundColor = "#f0f0f0";
  secBody.style.color = "#0f0f0f";
  commentSection.style.backgroundColor = "#f0f0f0";
  commentSection.style.color = "#0f0f0f";
  terBody.style.backgroundColor = "#f0f0f0";
  terBody.style.color = "#0f0f0f";
  topHead.style.backgroundColor = "#f0f0f0";
  topHead.style.color = "#0f0f0f";
  topHeadLogo.forEach(logo => {
    logo.src = "../images/dd-logo.svg";
  });
  links.forEach(link => {
    link.style.color = "#000080";
  });
};

// Check if dark mode is enabled from local storage
const isDarkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';

// Initialize count based on saved state
let count = isDarkModeEnabled ? 1 : 0;

// Apply initial styles based on count
if (count % 2 === 0) {
  setLightMode();
} else {
  setDarkMode();
}

// Add event listener for the dark mode toggle button
dnl.addEventListener('click', () => {
  count++;
  if (count % 2 === 0) {
    setLightMode();
    localStorage.setItem('darkModeEnabled', 'false');
  } else {
    setDarkMode();
    localStorage.setItem('darkModeEnabled', 'true');
  }
});


document.addEventListener('DOMContentLoaded', function() {
  const commentForm = document.getElementById('comment-form');
  const commentInput = document.getElementById('comment-input');
  const commentsContainer = document.getElementById('comments-container');

  commentForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const commentText = commentInput.value.trim();

      if (commentText !== "") {
          addComment(commentText);
          commentInput.value = '';
      }
  });

  function addComment(text) {
      const commentElement = document.createElement('div');
      commentElement.className = 'comment';

      const commentText = document.createElement('p');
      commentText.textContent = text;

      commentElement.appendChild(commentText);
      commentsContainer.appendChild(commentElement);
  }
});


