

document.addEventListener('DOMContentLoaded', function () {
  //  Typing Effect
  const words = ["Frontend Developer", "Database Developer", "Graphic Designer"];
  const textElement = document.querySelector(".home-info h2 span");
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentWord = words[wordIndex];

    textElement.textContent = isDeleting
      ? currentWord.substring(0, charIndex--)
      : currentWord.substring(0, charIndex++);

    if (!isDeleting && charIndex === currentWord.length) {
      setTimeout(() => (isDeleting = true), 1000); 
    }
     else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
  }

  typeEffect(); 


  // Contact Form Submission 
  const form = document.getElementById('contact-form');
  const message = document.getElementById('form-message');

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      const formData = new FormData(form);

      fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

        .then(function (response) {
          if (response.ok) {
            message.textContent = 'Webaale Nyo! lolo will check it.';
            message.style.color = '#7cf03d';
            form.reset();
          } else {
            message.textContent = 'Nedda,You have a problem.';
            message.style.color = 'Green';
          }

           setTimeout(function () {
              message.textContent = '';
          }, 4000); 

        })
        .catch(function () {
          message.textContent = 'Perhaps, the internet is not favoring .';
          message.style.color = 'red';
        });
    });
  }
});

const menuToggle = document.getElementById('menu-toggle');
const navList = document.querySelector('.navbar ul');

menuToggle.addEventListener('click', () => {
  navList.classList.toggle('show');
});


