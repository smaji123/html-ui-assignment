//hamburger js 

const hamburger = document.getElementById("hamburger");
const navlinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navlinks.classList.toggle("show");
});

// banner counter  

const counters = document.querySelectorAll('.counter');

counters.forEach(counter =>{
      let num = 0;
      let target = counter.dataset.target;
      
      const timer = setInterval(()=>{
       num++;

       if(num == target){
          if(target == 10){
                counter.innerText = num + 'x';
          }

          else if(target == 20){
               counter.innerText = num + 'K+';
          }
          else{
              counter.innerText = num;
          }

          clearInterval(timer);
       } else{
           counter.innerText = num;
       }

 

      }, 100);
});

// swiper js

  let current = 0;
        const track = document.getElementById('sliderTrack');
        const dots = document.querySelectorAll('.dot');
        const total = document.querySelectorAll('.slide').length;

        // Update slider function
        function updateSlider() {
            track.style.transform = 'translateX(-' + (current * 100) + '%)';
            
            // Update dots
            dots.forEach((d, i) => {
                d.classList.toggle('active', i === current);
            });
            
            // Update thumbnails
            thumbs.forEach((t, i) => {
                t.classList.toggle('active', i === current);
            });
        }

        // Previous button
        document.getElementById('prevBtn').addEventListener('click', function() {
            current = current > 0 ? current - 1 : total - 1;
            updateSlider();
        });

        // Next button
        document.getElementById('nextBtn').addEventListener('click', function() {
            current = current < total - 1 ? current + 1 : 0;
            updateSlider();
        });

        // Dots click
        dots.forEach(function(dot) {
            dot.addEventListener('click', function() {
                current = parseInt(this.getAttribute('data-slide'));
                updateSlider();
            });
        });

        // Auto-play
        setInterval(function() {
            current = current < total - 1 ? current + 1 : 0;
            updateSlider();
        }, 5000);

        // Subscription options
        const options = document.querySelectorAll('.subscription-option');
        options.forEach(function(option) {
            option.addEventListener('click', function() {
                options.forEach(function(opt) {
                    opt.classList.remove('active');
                });
                this.classList.add('active');
                this.querySelector('input[type="radio"]').checked = true;
            });
        });

        // collection

        document.querySelectorAll(".accordion-header").forEach(header => {
    header.onclick = () => {
      const item = header.parentElement;
      const icon = header.querySelector(".icon");

      // close others
      document.querySelectorAll(".accordion-item").forEach(i => {
        if (i !== item) {
          i.classList.remove("active");
          i.querySelector(".icon").innerText = "+";
        }
      });

      // toggle current
      item.classList.toggle("active");
      icon.innerText = item.classList.contains("active") ? "−" : "+";
    };
  });

