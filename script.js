for (var i = 0; i < 3; i++) {
  document.querySelectorAll(".show-modal")[i].addEventListener("click", function(){
    open();
  });
}
document.querySelectorAll(".close-modal")[0].addEventListener("click", function(){
  close();
});
document.addEventListener("keydown", function(e){
  if (event.keyCode == 27){
    close()
  }
});
function open(){
  document.querySelectorAll(".modal")[0].classList.remove("hidden");
  document.querySelectorAll(".overlay")[0].classList.remove("hidden");
}
function close(){
  document.querySelectorAll(".modal")[0].classList.add("hidden");
  document.querySelectorAll(".overlay")[0].classList.add("hidden");
}
