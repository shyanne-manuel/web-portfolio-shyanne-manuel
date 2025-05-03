const verticalLine = document.querySelector('.vertical-line');

document.addEventListener('DOMContentLoaded', () => {
const workCard = document.querySelectorAll('.work-card');
const accordionHeaders = document.querySelectorAll('.accordion-header');

console.log(workCard);

workCard.forEach((card) => {
    card.addEventListener('click', () => {
        console.log(card);
        removeActiveClass();
        card.classList.add('active');
    });
})

function removeActiveClass() {
    workCard.forEach((card) => {
        card.classList.remove('active');
    });
}

// Accordion Functionalities
accordionHeaders.forEach((header) => {
    header.addEventListener('click', () => {
      const parent = header.parentElement;


      parent.classList.toggle('active');


      document.querySelectorAll('.toolkit-item').forEach((item) => {
        if (item !== parent) {
          item.classList.remove('active');
        }
      });
    });
  });

});


// center vertical line animations

window.addEventListener('scroll', () => {

    const scrollPosition = window.scrollY;
    console.log(`Scroll Position: ${scrollPosition}`); 

    verticalLine.style.setProperty('--translateY', `${scrollPosition}px`);
  });

