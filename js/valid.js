var myInput = document.querySelector(".reg-pass1");
var myInput2 = document.querySelector(".reg-pass2");
var myEmail = document.querySelector(".reg-mail");
var letter = document.getElementById("valid-letter");
var capital = document.getElementById("valid-capital");
var number = document.getElementById("valid-number");
var length = document.getElementById("valid-length");

var pass_match = document.getElementById("pass-match");
var pass_mismatch = document.getElementById("pass-mismatch");

// Когда пользователь нажимает на поле Пароль, отображается окно сообщения
myInput.addEventListener('focus', function() {
    document.getElementById("valid-block").style.display = "block";
});

// Когда пользователь щелкает за пределами поля пароля, скрыть окно сообщения
myInput.addEventListener('blur', function() {
    document.getElementById("valid-block").style.display = "none";
});

// Когда пользователь начинает вводить что-то в поле пароля
myInput.addEventListener('keyup', (e)=>{
  // Проверка строчных букв
    var lowerCaseLetters = /[a-zа-я]/g;
    var goodTest = 0;
    if(e.target.value.match(lowerCaseLetters)) {
      letter.classList.remove("invalid");
      letter.classList.add("valid");
      goodTest++;
    } else {
      letter.classList.remove("valid");
      letter.classList.add("invalid");
      goodTest--;
    }

    // Проверка заглавных букв
    var upperCaseLetters = /[A-ZА-Я]/g;
    if(e.target.value.match(upperCaseLetters)) {
      capital.classList.remove("invalid");
      capital.classList.add("valid");
      goodTest++;
    } else {
      capital.classList.remove("valid");
      capital.classList.add("invalid");
      goodTest--;
    }

    // Проверка чисел
    var numbers = /[0-9]/g;
    if(e.target.value.match(numbers)) {
      number.classList.remove("invalid");
      number.classList.add("valid");
      goodTest++;
    } else {
      number.classList.remove("valid");
      number.classList.add("invalid");
      goodTest--;
    }

    // Проверить длину
    if(e.target.value.length >= 8) {
      length.classList.remove("invalid");
      length.classList.add("valid");
      goodTest++;
    } else {
      length.classList.remove("valid");
      length.classList.add("invalid");
      goodTest--;
    }

    if(goodTest === 4) {
      e.target.style.border = "1px solid green";
    } else {
      e.target.style.border = "1px solid red";
    }
} );

myEmail.addEventListener('keyup', (e)=>{
  var patt = /[\w\.-]+@[\w\.-]+\.\w+/g;
    if(e.target.value.match(patt)) {
      e.target.style.border = "1px solid green";
    } else {
      e.target.style.border = "1px solid red";
    }
    if(e.target.value === "") {
      e.target.style.border = "0";
    }
} );

function passMatch() {
    if(myInput2.value != myInput.value) {
        pass_mismatch.style.display = "block";
        pass_match.style.display = "none";
        myInput2.style.border = "1px solid red";
    } else {
        pass_mismatch.style.display = "none";
        pass_match.style.display = "block";
        myInput2.style.border = "1px solid green";
    }
    if(myInput2.value === '') {
        pass_mismatch.style.display = "none";
        pass_match.style.display = "none";
        myInput2.style.border = "0";
    }
}

myInput2.addEventListener('focus', passMatch);
myInput2.addEventListener('keyup', passMatch);