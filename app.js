let cnt = 0 ;

function Drecrement() {
  cnt--;
  if(cnt < 0 ){
    document.querySelector(".errormsg").innerHTML = "cannot go below 0";
    cnt = 0 ;
  }
  document.getElementById("counterValue").textContent = cnt;
}

function Increment() {
  cnt++;
  if(cnt>=0){
    document.querySelector(".errormsg").innerHTML = "";
  }
  document.getElementById("counterValue").textContent = cnt; 
}

function Clear() {
  cnt = 0 ;
  document.getElementById("counterValue").textContent = cnt;
}