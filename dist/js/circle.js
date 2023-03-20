var circle = document.querySelectorAll(".circle1, .circle2, .circle3, .circle4, .circle5, .circle6");
    document.onmousemove = function(){
      var x = event.clientX * 100 / window.innerWidth + "%";
      var y = event.clientY * 100 / window.innerHeight + "%";
      //event.clientX => get the horizontal coordinate of the mouse
      //event.clientY => get the Vertical coordinate of the mouse
      //window.innerWidth => get the browser width
      //window.innerHeight => get the browser height
  
      for(var i=0;i<6;i++){
        circle[i].style.left = x;
        circle[i].style.top = y;
        circle[i].style.transform = "translate(-"+x+",-"+y+")";
      }
    }
