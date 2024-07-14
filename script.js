let tip = document.getElementById("tip");
let amt = document.getElementById("amt");
let service = document.getElementById("service");
let people = document.getElementById("people");


let principal = 0;
document.getElementById("cal").addEventListener("click", function() {
  
  principal = (parseInt(amt.value) * parseInt(service.value)) / 100;
  document.getElementById("tip").innerHTML = principal / parseInt(people.value);

})
