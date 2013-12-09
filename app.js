window.onload = function () {
    var w = document.getElementById("wrap");
    var inp = document.getElementById("inp");
    var btn = document.getElementById("btn");
    var span = document.getElementById("output");
      
    btn.onclick = function () {
 
        span.innerHTML = inp.value;
    }
          
}