gsap.to("#nav",{
    backgroundColor: "#000",
    height: "100px",
    duration: 0.5,
    scrollTrigger:{
        trigger:"#nav",
      scroller: "body",
       //markers: true,
        start:"top -5%",
        end: "-=6%",
        scrub: 1.5,
    }
});

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller: "body",
        //markers: true,
        start:"top -15%",
        end: "top -40%",
        scrub: 2
    }

});

var crsr = document.querySelector("#cursor");
var crsr_b=document.querySelector("#cursor-blur")
document.addEventListener("mousemove", function(dets) {
    gsap.to(crsr, {
        left: dets.x + "px",
        top: dets.y + "px",
        ease: "power1.out", // Smoother movement
        duration: 0.5, // Adjust speed
    });
    gsap.to(crsr_b, {
        left: dets.x - 100 +"px",
        top: dets.y - 100 + "px",
        ease: "power1.out", // Smoother movement
        duration: 0.5, // Adjust speed
    });
});

let center=document.querySelectorAll("#nav .center div");
center.forEach(function(elem){
    console.log(elem);
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale=2;
        crsr.style.border= "1px solid #fff"
        crsr.style.backgroundColor = "transparent" 
    })
    elem.addEventListener("mouseleave", function(){
        crsr.style.scale=1;
        crsr.style.border= "0px solid #fff"
        crsr.style.backgroundColor ="#b3e824"; 
    })
})

console.log(document.querySelector(".about_box :nth-child(2)"));

gsap.from(".about_box img , .about_box p",{
    y:50,
    opacity:0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger: {
        trigger:".about_box",
        scroller:"body",
        //markers:true,
        start:"top 60%",
        end: "top 58%",
        scrub:3
    }
})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration: 1,
    scrollTrigger: {
        trigger:".card",
        scroller:"body",
        //markers:true,
        start:"top 60%",
        end: "top 58%",
        scrub:2
    }
})

gsap.registerPlugin(ScrollTrigger);

gsap.from(".quote-left", {
  x: -70,
  y: -70,
  opacity: 0,
  ease: "none",
  scrollTrigger: {
    trigger: ".quote-left",
    scroller: "body",
    markers: true,
    start: "top 70%",
    end: "top 40%",
    scrub: 1
  }
});

gsap.from(".quote-right", {
  x: 70,
  y: 70,
  opacity: 1,
  ease: "none",
  scrollTrigger: {
    trigger: ".quote-left", // 🔁 Use same trigger as .quote-left
    scroller: "body",
    markers: true,
    start: "top 70%",        // 🔁 Exactly same start
    end: "top 40%",          // 🔁 Exactly same end
    scrub: 1
  }
});





gsap.from("#page4 h1", {
    y: 100,
    opacity: 0,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        markers: true,
        start: "top 85%",
        end: "top 80%",
        scrub: 4
    }
});
