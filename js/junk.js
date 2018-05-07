/*
function makeNewPosition(x){
   
   //clientTop
   //clientLeft
        
        var elem = x;
        console.log(elem); 
        var domRect = elem.getBoundingClientRect();
        console.log(domRect.x);
        console.log('top is '+domRect.top);
        var top = domRect.top;
        console.log(typeof top);
        var bottom = domRect.bottom;
        var left = domRect.left;
        var right = domRect.right;
        var pos = 0;
        var id = setInterval(frame, 5);
        function frame() {
           /* if (pos == 99999350) {
                clearInterval(id);
            } else {
                pos++; 
                
            var randNum =Math.floor(Math.random()* 4);
                if(pos == 400){
                    clearInterval(id);
                }
                else if(randNum == 0){
                    pos++;
                    elem.style.left =(left+ pos) + 'px';
                }
                else if(randNum ==1){
                    pos++;  
                    elem.style.right = (right+ pos) +'px';
                }   
                else if(randNum ==2){
                    pos++
                    elem.style.top =(top +pos)+ "px";
                }
                else {
                    pos++
                    elem.style.bottom =(bottom+pos)+ "px";

                }
                }
           }
        
  */  
 
 var dx = Math.random() * 600;
 var dy = Math.random() * 600;
 var x = 0, y = 0;
  
 
  window.requestAnimFrame = (function(){
     return window.requestAnimationFrame ||
         window.webkitRequestAnimationFrame ||
         window.mozRequestAnimationFrame ||
         function( callback ){
             window.setTimeout(callback, 1000 / 60);
         };
 })();
 function moveIt(circle){
     console.log(circle);
    x+= (dx -x) *0.15;
    y+= (dy -y) *0.15;
    circle.style.left = x +'px';
    circle.style.top = y + 'px';
    
 }
 function levelSix(){
     
     for (var x = 0; x < circleList.length ; x++) {
        // circleList[x].classList = ' levelSix';
         circleList[x].style.left = "0px";
         circleList[x].style.top = "0px";
         console.log(circleList[x]);
         moveIt(circleList[x]);
         moveInterval = setInterval(function(){moveIt(circleList[x])}, 2000);
         
     }
     
 }