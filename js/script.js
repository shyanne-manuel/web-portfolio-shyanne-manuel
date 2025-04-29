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

accordionHeaders.forEach((header) => {
    header.addEventListener('click', () => {
      const parent = header.parentElement;

      // Toggle active class
      parent.classList.toggle('active');

      // Close other accordions
      document.querySelectorAll('.toolkit-item').forEach((item) => {
        if (item !== parent) {
          item.classList.remove('active');
        }
      });
    });
  });

});


