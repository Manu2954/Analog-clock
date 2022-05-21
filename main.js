var sec=document.getElementById('sec')
var hr=document.getElementById('hr')
var min=document.getElementById('min')
var t0 = new Date()
var i=t0.getSeconds(),j=t0.getMinutes(),k=t0.getHours();

function updateSec() {
    var counts = 0+i*6
    sec.style.transform="rotate("+counts+"deg)";
    i++;

}

function updateMin() {
    var countm = 0+j*6
    min.style.transform="rotate("+countm+"deg)";
    j++

}

function updateHr() {
    var counth = 30*k+j/2
    hr.style.transform="rotate("+counth+"deg)";
    k++;

}
updateMin()
updateHr()
setInterval(updateSec,1000)
setInterval(updateMin,60000)
setInterval(updateHr,3600000)


















































// var t = document.getElementById("time");
// const t0 = new Date();

// function update() {
//   const t1 = new Date();
//   if(t1.getSeconds()==00)alert('manoj')
//   var hrDiff = parseInt(t1.getHours()-t0.getHours());
//   var minDiff = parseInt(t1.getMinutes()-t0.getMinutes());
//   var secDiff = parseInt(t1.getSeconds()-t0.getSeconds());
//   console.log(parseInt(t0.getSeconds()))

//   t.innerHTML = "<h1>" + hrDiff + " : " + minDiff + " : " + secDiff+ "</h1>";
// }

// setInterval(update, 1000);