// Get the button:
const backToTopBtn = document.querySelector("#backTop");

const scrollFunction = () => {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

// When the user clicks on the button, scroll to the top of the document
const topFunction = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
};

// When the user scrolls down 250px from the top of the document, show the button
window.addEventListener("scroll", scrollFunction);
