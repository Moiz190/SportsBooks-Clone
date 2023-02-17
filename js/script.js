
//responsive-navbar-show-hide
function openNav() {
    document.getElementById("myNav").style.height = "100%";
    }

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
    }

//for Faq section displaying different content at different divs
const divs = document.querySelectorAll(".question");
    const displayDivs = document.querySelectorAll(".display-div");

    displayDivs.forEach(displayDiv => {
    displayDiv.style.display = "none";
    });

    divs.forEach(div => {
    div.addEventListener("click", function() {
    divs.forEach(d => {
      d.style.backgroundColor = "white";
    });
    this.style.backgroundColor = "#eff1f8";
    displayDivs.forEach(displayDiv => {
      displayDiv.style.display = "none";
    });
    const index = Array.from(divs).indexOf(this);
    displayDivs[index].style.display = "block";
  });
});