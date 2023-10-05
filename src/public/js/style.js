// get the button and footer elements
const scrollUpBtn = document.getElementById('scroll-up-btn');
const footer = document.querySelector('footer');

// calculate the offset of the footer from the top of the page
const footerOffset = footer.offsetTop + footer.clientHeight;

// add a scroll event listener to the window
window.addEventListener('scroll', () => {
  // get the current scroll position
  const scrollPos = window.scrollY + window.innerHeight;

  // if the scroll position is at or below the footer, show the button
  if (scrollPos >= footerOffset) {
    scrollUpBtn.classList.remove('hidden');
  } else {
    // otherwise, hide the button
    scrollUpBtn.classList.add('hidden');
  }
});

// add a click event listener to the button
scrollUpBtn.addEventListener('click', () => {
  // scroll to the top of the page
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// thư mục gốc: my-portfolio
/// node_modules (folder)
/// src (folder)
///// public (folder)
/////// css (folder)
///////// style.css (file)
/////// images (folder)
/////// js (folder)
///////// style.js (file)
///// views (folder)
/////// partials (folder)
///////// footer.ejs (file)
///////// header.ejs (file)
///////// navbar.ejs (file)
/////// about.ejs (file)
/////// contact.ejs (file)
/////// hobbies.ejs (file)
/////// index.ejs (file)
/////// project.ejs (file)
/// .env (file)
/// server.js (file)
/// package-lock.json (file)
/// package.json (file)



