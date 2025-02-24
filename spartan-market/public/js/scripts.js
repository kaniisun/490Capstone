// function searchItems() {
//     const query = document.getElementById('searchInput').value;
//     alert('Searching for: ' + query);
// }
// const colors = ["#add8e6", "#dda0dd", "#ffeb3b", "#98fb98", "#ffb6c1", "#ffa500"];
// let colorIndex = 0;

// function setProductColors() {
//     const products = document.querySelectorAll('.product'); // Corrected line
//     products.forEach(product => {
//         product.style.backgroundColor = colors[colorIndex];
//         colorIndex = (colorIndex + 1) % colors.length;
//     });
// }

// window.onload = setProductColors;
const colors = ["#9ee3f1", "#e2bee6", "#f2eaa2", "#88ad7a"];
let colorIndex = 0;

function setProductColors() {
    const products = document.querySelectorAll('.product'); // Corrected line
    products.forEach(product => {
        product.style.backgroundColor = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    });
}

window.onload = setProductColors;
