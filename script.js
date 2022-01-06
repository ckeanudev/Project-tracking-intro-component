const navBarLinks = document.getElementById("nav_links");
let view = false;

const viewNavLinks = () => {
  if (!view) {
    navBarLinks.classList.add("viewLinks");
    document.getElementById("navBarBtn").src = "./images/icon-close.svg";
    console.log("yes");
    view = true;
  } else if (view) {
    navBarLinks.classList.remove("viewLinks");
    document.getElementById("navBarBtn").src = "./images/icon-hamburger.svg";
    console.log("no");
    view = false;
  }
};
