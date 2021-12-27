// document.getElementById("bg-video").style.display = "none";
// document.getElementById("content").style.display = "none";
console.log("dsadas");
setTimeout(() => {
  document.getElementById("loading").style.display = "none";
  document.getElementById("bg-video").style.display = "block";
  document.getElementById("content").style.display = "flex";
  console.log("đã chuyển");
}, 2500);
clearTimeout();
