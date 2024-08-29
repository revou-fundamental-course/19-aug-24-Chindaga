// Ini Javascript

//Ini fungsi yang bagian tombol atas untuk mengganti nama (untungnya jalan ya Allah)
function replaceName() {
    let name = prompt("Whats your name?", "CITIZEN")
    document.getElementById("name").innerHTML = name
}

document.getElementById("change-name").addEventListener("click", function() {
    replaceName()
})

//ini banner auto slide (akhirnya jadi juga )
let indexSlide = 1;
showslide(1);

function nextSlide(n) {
    showslide(indexSlide += n);
}

function showslide(n) {
    let listImage = document.getElementsByClassName("banner-image");
    console.log("listImage");
    
    if (n > listImage.length) {
        indexSlide = 1;
    }

    let index = 0;
    while (index < listImage.length) {
        listImage[index].style.display = "none";
        index++;
    }

    listImage[indexSlide - 1].style.display = "block";
   
}

setInterval(() => nextSlide(1), 2500);



//ini form validation (masih belum bisa jalan !!!!)
function setSenderUI(name, birthDate, gender, message) {
    document.getElementById("sender-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-message").innerHTML = message;
}

function validateform() {
    const name = document.forms["message-form"]["name"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const message = document.forms["message-form"]["message"].value;
    
    if (name == "" || birthDate == "" || gender == "" || message == "") {
        alert("this form cannot be empty");
        return false;
    }
    setSenderUI(name, birthDate, gender, message);
    return false;
}
