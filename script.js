let body = document.getElementById("body");
console.log(body)

let profileImg = document.getElementById("profile-img");

let table = document.getElementById("table");
console.log(table)

let th = document.getElementById("th");
console.log(th)

let modeToggle = document.getElementById("mode-toggle");
console.log(modeToggle)


function changeMode() {
    
    if (modeToggle.innerText === "Light") {
        modeToggle.innerText = "Dark";
    }else {
        modeToggle.innerText = "Light";
    }

    body.classList.toggle("dark-body");
    body.classList.toggle("light-body");
    modeToggle.classList.toggle("light-toggle");
    modeToggle.classList.toggle("dark-toggle");
    profileImg.classList.toggle("light-profile-img");
    profileImg.classList.toggle("dark-profile-img");
    table.classList.toggle("dark-table");
    table.classList.toggle("light-table");
    th.classList.toggle("dark-toggle");
    th.classList.toggle("light-toggle");

}