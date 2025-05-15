let fname = document.querySelector("#name");
let email = document.querySelector("#email");
let number = document.querySelector("#number");
let btn = document.querySelector("#btn");
let list = document.querySelector("#li");

let editIndex = null;

btn.addEventListener("click",()=>{
    let oldRecord = JSON.parse(localStorage.getItem("students")) || [];
    if(editIndex == null){
        let obj = {
            id : Date.now(),
            fname : fname.value,
            email : email.value,
            number : number.value
        };
        oldRecord = [...oldRecord,obj];
    } else{
        oldRecord.forEach((item)=>{
            if(item.id == editIndex){
                item.fname = fname.value;
                item.email = email.value;
                item.number = number.value;
            } else{
                item
            }
        });
    }

    localStorage.setItem("students",JSON.stringify(oldRecord));

    // localStorage.setItem("students",obj);
    // localStorage.setItem("students",JSON.stringify(obj));
    // console.log(JSON.parse(localStorage.getItem("students")));
    // localStorage.setItem("students",JSON.stringify([...oldRecord,obj]));

    fname.value = "";
    email.value = "";
    number.value = "";
    editIndex = null;
    btn.innerHTML = "Add Data";

    getData();
})

function getData() {
    let allData = JSON.parse(localStorage.getItem("students"));
    list.innerHTML = "";
    allData.forEach((item,index) => {
        let li1 = document.createElement("li");
        let li2 = document.createElement("li");
        let li3 = document.createElement("li");
        let li4 = document.createElement("li");
        let del = document.createElement("button");
        let edit = document.createElement("button");

        del.setAttribute("data-id", item.id);
        edit.setAttribute("data-id", item.id);

        li1.innerHTML = index + 1;
        li2.innerHTML = item.fname;
        li3.innerHTML = item.email;
        li4.innerHTML = item.number;
        del.innerHTML = "Delete";
        edit.innerHTML = "Edit";
        del.classList = "delete-btn";
        edit.classList = "edit-btn";

        list.append(li1);
        list.append(li2);
        list.append(li3);
        list.append(li4);
        list.append(del);
        list.append(edit);
    });

    let deleteBtns = document.querySelectorAll(".delete-btn");

    deleteBtns.forEach((btn)=>{
        btn.addEventListener("click",()=>{
            let allData = JSON.parse(localStorage.getItem("students"));
            let btnId = btn.getAttribute("data-id");

            let newRecord = allData.filter(item => item.id != btnId);
            
            localStorage.setItem("students",JSON.stringify(newRecord));
            getData();
        });
    });

    let editBtns = document.querySelectorAll(".edit-btn");

    editBtns.forEach((btn)=>{
        btn.addEventListener("click",()=>{
            let allData = JSON.parse(localStorage.getItem("students"));
            let btnId = btn.getAttribute("data-id");

            let singleData = allData.find(item => item.id == btnId);
            fname.value = singleData.fname;
            subject.value = singleData.subject;
            age.value = singleData.age;
            document.querySelector("#btn").innerHTML = "Update Data";
            editIndex = btnId;
        });
    });
}

getData();