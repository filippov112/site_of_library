const form = document.querySelector(".form-login");
const inputs = form.elements;
var text = document.querySelector(".bad-pass");
var log = document.querySelector(".log-login");
var pass = document.querySelector(".log-pass");


const registeredUsers = [
  ["admin", "KoI18"],
  ["manager", "SuperMe108"],
  ["editor", "12345"],
];

function isValid(username, password) {   
  for(var i = 0; i < registeredUsers.length; i++) {
      var temp = registeredUsers[i];
      if (temp[0] == username) {
        var currentPair = temp;
        break;        
      }        
  }     
  if (currentPair && currentPair[1] == password) {
    return true;           
  } else {
    return false;
  }
}

form.addEventListener('submit', function(e){
  e.preventDefault();
  var username = inputs["email"].value;
  var password = inputs["password"].value;  
    if (!isValid(username, password)){        
      log.classList.add("bad-input");
      pass.classList.add("bad-input");
      text.classList.remove("off-display");
    } else {      
      window.location.href = '/lk';
    }
});