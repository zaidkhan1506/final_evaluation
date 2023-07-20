let empId = document.getElementById("empId")
let empIdErrorLabel = document.getElementById("empNameErrorLabel")
let empName = document.getElementById("empName")
let age = document.getElementById("age")
let ageErrorLabel = document.getElementById("ageErrorLabel")
let gender = document.getElementById("gender")
let genderErrorLabel = document.getElementById("genderErrorLabel")
let designation = document.getElementById("designation")
let designationErrorLabel = document.getElementById("designationErrorLabel")
let selfphoto = document.getElementById("selfPhoto")
let selfPhotoErrorLabel = document.getElementById("selfPhotoErrorLabel")
let empNameErrorLabel = document.getElementById("empNameErrorLabel")
var usedId = []

function Validate() {
    let flag = 0;
    let stop = 0;
    if (empName.value == "") {
        empNameErrorLabel.innerHTML = "enter name"
        flag--
    } else {
        empNameErrorLabel.innerHTML = ""
        flag++
    }
    if (age.value <= 18 || age.value >= 59) {
        ageErrorLabel.innerHTML = "employee cant be below 18 and above 59"
        flag--
    } else {
        ageErrorLabel.innerHTML = ""
        flag++
    }
    if (gender.value == "none") {
        genderErrorLabel.innerHTML = "Please select gender"
        flag--
    } else {
        genderErrorLabel.innerHTML = ""
        flag++
    }
    if (designation.value == "none") {
        designationErrorLabel.innerHTML = "Please select designation"
        flag--
    } else {
        designationErrorLabel.innerHTML = ""
        flag++
    }
    if (selfphoto.value == "") {
        selfPhotoErrorLabel.innerHTML = "please enter image url"
        flag--
    } else {
        selfPhotoErrorLabel.innerHTML = ""
        flag++
    }
    for (i = 0; i <= usedId.length; i++) {
        if (usedId[i] == empId.value) {
            empIdErrorLabel.innerHTML = "Id already used"
            flag--
            stop = 1
        }
    }
    if (stop == 0) {
        empIdErrorLabel.innerHTML = ""
        flag++
        usedId.push(empId.value)

    }

    if (flag == 6) {
        data();
    }
}