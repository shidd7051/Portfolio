   const words = ["Front End Developer", "Web Developer"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const speed = 120;
    const delayAfterWord = 880;

    const typingElement = document.getElementById("typing");

    function typeEffect() {
      const currentWord = words[wordIndex];

      if (!isDeleting) {
        // typing
        typingElement.innerHTML = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
          setTimeout(() => isDeleting = true, delayAfterWord);
        }
      } else {
        // deleting
        typingElement.innerHTML = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }
      }

      setTimeout(typeEffect, isDeleting ? 80 : speed);
    }

    typeEffect();
    function readMore() {
      let dots = document.getElementById("dots");
      let moreText = document.getElementById("more");
      let btn = document.querySelector(".read-btn");

      if (dots.style.display === "none") {
        dots.style.display = "inline";
        moreText.style.display = "none";
        btn.innerHTML = "Read More";
      } else {
        dots.style.display = "none";
        moreText.style.display = "inline";
        btn.innerHTML = "Read Less";
      }
    }

      const form = document.getElementById("contact-form");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_k420na9",     // service ID
      "template_jxt4wvo",    // template ID
      this
    ).then(
      function() {
        alert("Message sent successfully!");
        form.reset();
      },
      function(error) {
        alert("Failed to send message!");
        console.log(error);
      }
    );
  }); 


  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    {
      threshold: 0.15   // 15% visible hone par animate
    }
  );

  document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right, .reveal-zoom"
  ).forEach(el => observer.observe(el));

