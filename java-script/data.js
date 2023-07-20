let arr = []

function data() {
    let id = document.getElementById("empId").value
    let name = document.getElementById("empName").value
    console.log(name)
    let age = document.getElementById("age").value
    let gender = document.getElementById("gender").value
    let designation = document.getElementById("designation").value
    let selfphoto = document.getElementById("selfPhoto").value
    let table = document.getElementById("details")



    let data = {
        id: id,
        name: name,
        age: age,
        gender: gender,
        designation: designation,
        selfphoto: selfphoto
    }

    arr.push(data)
    let str = ""
    for (let i = 0; i < arr.length; i++) {
        str += `<tr>
        <td>${arr[i].id}</td>
        <td>${arr[i].name}</td>
        <td>${arr[i].age}</td>
        <td>${arr[i].gender}</td>
        <td>${arr[i].designation}</td>
        <td>${arr[i].selfphoto}</td>
        <td>
            <button class= "action edit"onclick="updateEmp(${arr[i].id})" button-edit>edit</button>
            <button class="action delete">Delete</button>
            <button class="action view">view</button>
        </td>
        </tr>`
        table.innerHTML = str;
        console.log(str)

    }
}