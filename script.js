  // Fungsi untuk Animasi scroll yang mulus
document.addEventListener("DOMContentLoaded", function() {
  var scrollLinks = document.getElementsByClassName("scroll-link");
  for (var i = 0; i < scrollLinks.length; i++) {
    scrollLinks[i].addEventListener("click", smoothScroll);
  }

  function smoothScroll(event) {
    event.preventDefault();
    var targetId = this.getAttribute("href");
    var targetElement = document.querySelector(targetId);
    var targetPosition = targetElement.offsetTop;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var duration = 500; 
    var start = null;
    
    function animation(currentTime) {
      if (start === null) start = currentTime;
      var timeElapsed = currentTime - start;
      var scrollY = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, scrollY);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }
    
    requestAnimationFrame(animation);
  }
});

  // Manipulasi DOM
document.addEventListener('DOMContentLoaded', function() {
  // Button View diklik akan menampilkan info box dan di close akan menutup info box
  const viewButton1 = document.querySelector('.view-button1');
  const infoBox1 = document.querySelector('.project-info-box1');
  const closeButton1 = document.querySelector('.close-button1');

  const viewButton2 = document.querySelector('.view-button2');
  const infoBox2 = document.querySelector('.project-info-box2');
  const closeButton2 = document.querySelector('.close-button2');

  viewButton1.addEventListener('click', function() {
    infoBox1.style.display = 'block';
  });

  // Event listener untuk tombol close 1
  closeButton1.addEventListener('click', function() {
    infoBox1.style.display = 'none'; 
  });

  // Event listener untuk tombol view 2
  viewButton2.addEventListener('click', function() {
    infoBox2.style.display = 'block'; 
  });

  // Event listener untuk tombol close 2
  closeButton2.addEventListener('click', function() {
    infoBox2.style.display = 'none'; 
  });
});
  // Event listener agar di close tidak berubah
document.addEventListener('DOMContentLoaded', function() {
  const closeButton1 = document.querySelector('.close-button1');
  const closeButton2 = document.querySelector('.close-button2');

  closeButton1.addEventListener('click', function(event) {
    event.preventDefault(); 
    document.querySelector('.project-info-box1').style.display = 'none';
  });

  closeButton2.addEventListener('click', function(event) {
    event.preventDefault(); 
    document.querySelector('.project-info-box2').style.display = 'none';
  });
});

document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();
});
