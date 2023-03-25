import "../node_modules/jquery/dist/jquery.min.js"
// import { vacant } from "./vacant";
import { arr } from "./vacant";
import { app, arr1, y1 } from "./applicant"
import { schedule, u } from "./schedule.js";

var in1: number = 0;
var crt = document.getElementById(`crt`);
crt?.addEventListener('click', function () {
  var t1 = document.getElementById('name')!.value;
  var t2 = document.getElementById('vac')!.value;
  var t3 = document.getElementById('state')!.value;
  var t4 = document.getElementById('qua')!.value;
  var t5 = document.getElementById('ski')!.value;
  console.log(t1, t2);


  var arr6: any[] = [];
  arr6.push({ t1, t2 ,t3,t4,t5})
  console.log(arr6)
  for (let i = 0; i < arr6.length; i++) {
    card += `<div class="card w-25 text-center"><div><p>${arr6[i].t1}</p></div><p>${arr6[i].t2}</p><p>${arr6[i].t3}</p><p>${arr6[i].t4}</p><p>${arr6[i].t5}</p><div><button class="btn btn-success m-2" id="b${in1}" value="">apply</button></div></div>`
    in1++;
  }
  // var btn = document.getElementById(`b${i}`);
  // btn?.addEventListener("click", () => {
  //   console.log(arr[i])
  //   alert("applied successfully")

  // })


  // var card = ""
  // for (let x of arr) {
  //   // console.log(x.id)
  //   card += `<div class="card w-25 text-center"><div><p>${x.Department}</p></div><p>${x.Vacany}</p><p>${x.Experience}</p><p>${x.Qualification}</p><p>${x.skills}</p><div><button class="btn btn-success m-2" id="b${x.id}" value="">apply </button></div></div>`
  //   // console.log(x.id)

  // }
  document.getElementById('tab')!.innerHTML = card
})
var card = ""

for (let x of arr) {
  // console.log(x.id)
  card += `<div class="card w-25 text-center"><div><p>${x.Department}</p></div><p>${x.Vacany}</p><p>${x.Experience}</p><p>${x.Qualification}</p><p>${x.skills}</p><div><button class="btn btn-success m-2" id="b${x.id}" value="">apply </button></div></div>`
  // console.log(x.id)

}
document.getElementById('tab')!.innerHTML = card


for (let i = 0; i < arr.length; i++) {
  var btn = document.getElementById(`b${i}`);
  btn?.addEventListener("click", () => {
    console.log(arr[i])
    alert("applied successfully")

  })
}
// console.log(arr1.length)
var inum: number = 0;
var ress = "<tr><th>Name</th><th>Age</th><th>Gender</th><th>Marital Status</th><th>Address</th><th>schedule interview</th></tr>"
for (let x of arr1) {
  ress += `<tr><td>${x.name}</td><td>${x.age}</td><td>${x.gender}</td><td>${x.marriage_status}</td><td>${x.address}</td><td><button id="ctcc${inum}" class='btn btn-primary' >schedule</button></td></tr>`;
  inum++;
}
document.getElementById('tab1')!.innerHTML = ress


var arr3: any[] = [];
for (let i = 0; i < arr1.length; i++) {
  var ctcc = document.getElementById(`ctcc${i}`);
  ctcc?.addEventListener("click", () => {
    console.log(arr1[i])
    var for1 = ""
    for1 += "<div><input class='form-control m-1' disabled value='" + arr1[i].name + "'><input class='form-control m-1' disabled value='" + arr1[i].age + "'><input class='form-control m-1' disabled value='" + arr1[i].gender + "'><input class='form-control m-1' disabled value='" + arr[i].marriage_status + "'><input class='form-control m-1' disabled value='" + arr1[i].address + "'><input class='form-control m-1' id='dat' type='date'><input class='form-control m-1' id='time' type='time'><button type='button' class='btn btn-success m-1' id='tro" + i + "'>schedule interview</button></div>"
    document.getElementById('forr')!.innerHTML = for1


    var tum = "<tr><th>Name</th><th>Age</th><th>Gender</th><th>Date</th><th>Time</th></tr>"
    var tro = document.getElementById('tro' + i);
    tro?.addEventListener('click', function () {
      var date = document.getElementById('dat')!.value;
      var time = document.getElementById('time')!.value;

      arr3.push({ date, time })
      // console.log(arr1[1], arr3)
      tum += `<tr><td>${arr1[i].name}</td><td>${arr1[i].age}</td><td>${arr1[i].gender}</td><td>${arr3[i].date}</td><td>${arr3[i].time}</td></tr>`
      document.getElementById('tim')!.innerHTML = tum
    })
  })

  // })
}


