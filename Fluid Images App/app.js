const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallery img");
const original = document.querySelector(".full-img");
const caption = document.querySelector(".caption");

previews.forEach((preview) => {
    preview.addEventListener("click", () => {
        modal.classList.add("open");
        original.classList.add('open');
        //Dynamically change text and image
        const originalSrc = preview.getAttribute('data-original');//get data-original
        original.src = `./full/${originalSrc}`;
        caption.textContent = preview.alt;
    });
});

modal.addEventListener('click', (e) => {
    //console.log(e);
    //check where to click on:
    if (e.target.classList.contains('modal')) {
        modal.classList.remove('open');
        original.classList.remove('open');
    }
});

