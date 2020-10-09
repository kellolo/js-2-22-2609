export const displayMenu = () => {
    document.querySelector('.header__browse').addEventListener('click', () => {
     const x = document.getElementById("mega_menu");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    } 
})}
