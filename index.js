document.addEventListener("DOMContentLoaded", function() {
    const nav = document.getElementById("nav");
    const bar = document.getElementById("option");

    if (nav && bar) {  // Check if both elements exist
        bar.addEventListener("click", function(){
            console.log("button_clicked")
            nav.classList.toggle("active");
        });
    } else {
        console.error("Elements not found.");
    }
});
