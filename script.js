const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

//Open Modal
const openModal = () => {
    console.log("Modal is Open");
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
};

//Close Modal
const closeModal = () => {
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
};
