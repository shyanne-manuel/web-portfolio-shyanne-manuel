document.addEventListener('DOMContentLoaded', () => {
const workCard = document.querySelectorAll('.work-card');

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
});
