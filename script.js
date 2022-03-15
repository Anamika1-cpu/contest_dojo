var count = 0;
var s = setInterval(function(){
    if(count<100){
        count++;
        document.querySelector("#loading .prg").style.width = count+'%';
    }
    else{
        document.querySelector("#top").style.top = "100%";
        document.querySelector("#supertop").style.top = "100%";
        document.querySelector("#ssupertop").style.bottom = "100%";

        clearInterval(s);


    }
},20)

var tl = gsap.timeline();

tl.to("#square", {
    onStart: function(){
      $('#top h6').textillate({ 
        in: { 
          effect: 'fadeInDown' }
        });
    }
    
  })
  tl.to("#top h6",{
    opacity:1
    })
  tl.to("#square",{
    opacity:1
    })   
    tl.from('#supertop',{
        y:0
    }) 
    tl.from("#main",{
        onStart: function(){
            $('#nav a').textillate({ 
              in: { 
                effect: 'fadeInLeftBig' }
              });
          }
    })

    
var lerp = document.querySelector("#lerp");
window.addEventListener("mousemove",function(dets){
    console.log(dets);
    
    lerp.style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
})
document.querySelector("#ssupertop").style.scale = "0.3";
