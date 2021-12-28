// document.getElementById("bg-video").style.display = "none";
// document.getElementById("content").style.display = "none";
var screenX = screen.width;
console.log("dsadas");
if (screenX <= 768) {
  setTimeout(() => {
    document.getElementById("loading").style.display = "none";
    document.getElementById("bg-video").style.display = "block";
    document.getElementById("content").style.display = "block";
    // console.log(screen.availWidth);
    console.log("đã chuyển");
  }, 2500);
  clearTimeout();
} else {
  setTimeout(() => {
    document.getElementById("loading").style.display = "none";
    document.getElementById("bg-video").style.display = "block";
    document.getElementById("content").style.display = "flex";
    // console.log(screen.availWidth);
    console.log("đã chuyển");
  }, 2500);
  clearTimeout();
}
