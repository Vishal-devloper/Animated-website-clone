function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
loco();


var clutter = "";

document.querySelector("#page2>h1").textContent.split(" ").forEach(function(dets){
    clutter += `<span>${dets} &nbsp;</span>`

    document.querySelector("#page2>h1").innerHTML = clutter;
})


gsap.to("#page2>h1>span",{
    scrollTrigger:{
        trigger:`#page2>h1>span`,
        start:`top bottom`,
        end:`bottom top`,
        scroller:`#main`,
        scrub:.5,
    },
    stagger:.2,
    color:`#fff`
})


// Canvas code
function canvas(){
  
const canvas = document.querySelector("#page3>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
  ./image/frames00007.png
  ./image/frames00010.png
  ./image/frames00013.png
  ./image/frames00016.png
  ./image/frames00019.png
  ./image/frames00022.png
  ./image/frames00025.png
  ./image/frames00028.png
  ./image/frames00031.png
  ./image/frames00034.png
  ./image/frames00037.png
  ./image/frames00040.png
  ./image/frames00043.png
  ./image/frames00046.png
  ./image/frames00049.png
  ./image/frames00052.png
  ./image/frames00055.png
  ./image/frames00058.png
  ./image/frames00061.png
  ./image/frames00064.png
  ./image/frames00067.png
  ./image/frames00070.png
  ./image/frames00073.png
  ./image/frames00076.png
  ./image/frames00079.png
  ./image/frames00082.png
  ./image/frames00085.png
  ./image/frames00088.png
  ./image/frames00091.png
  ./image/frames00094.png
  ./image/frames00097.png
  ./image/frames00100.png
  ./image/frames00103.png
  ./image/frames00106.png
  ./image/frames00109.png
  ./image/frames00112.png
  ./image/frames00115.png
  ./image/frames00118.png
  ./image/frames00121.png
  ./image/frames00124.png
  ./image/frames00127.png
  ./image/frames00130.png
  ./image/frames00133.png
  ./image/frames00136.png
  ./image/frames00139.png
  ./image/frames00142.png
  ./image/frames00145.png
  ./image/frames00148.png
  ./image/frames00151.png
  ./image/frames00154.png
  ./image/frames00157.png
  ./image/frames00160.png
  ./image/frames00163.png
  ./image/frames00166.png
  ./image/frames00169.png
  ./image/frames00172.png
  ./image/frames00175.png
  ./image/frames00178.png
  ./image/frames00181.png
  ./image/frames00184.png
  ./image/frames00187.png
  ./image/frames00190.png
  ./image/frames00193.png
  ./image/frames00196.png
  ./image/frames00199.png
  ./image/frames00202.png
 `;
  return data.split("\n")[index];
}

const frameCount = 67;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    //   set start end according to preference
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "#page3",
  pin: true,
  // markers:true,
  scroller: `#main`,
//   set start end according to preference
  start: `top top`,
  end: `600% top`,
});
}
canvas();


var clutterNext = "";

document.querySelector("#page4>.page4-text>h1").textContent.split(" ").forEach(function(dets){
    clutterNext += `<span>${dets} &nbsp;</span>`

    document.querySelector("#page4>.page4-text>h1").innerHTML = clutterNext;
})


gsap.to("#page4>.page4-text>h1>span",{
    scrollTrigger:{
        trigger:`#page4>.page4-text>h1>span`,
        start:`top bottom`,
        end:`bottom top`,
        scroller:`#main`,
        scrub:.5,
    },
    stagger:.2,
    color:`#fff`
})



// Canvas code
function canvasNext(){
  
  const canvas = document.querySelector("#page5>canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  function files(index) {
    var data = `
    ./image/bridges00004.png
    ./image/bridges00007.png
    ./image/bridges00010.png
    ./image/bridges00013.png
    ./image/bridges00016.png
    ./image/bridges00019.png
    ./image/bridges00022.png
    ./image/bridges00025.png
    ./image/bridges00028.png
    ./image/bridges00031.png
    ./image/bridges00034.png
    ./image/bridges00037.png
    ./image/bridges00040.png
    ./image/bridges00043.png
    ./image/bridges00046.png
    ./image/bridges00049.png
    ./image/bridges00052.png
    ./image/bridges00055.png
    ./image/bridges00058.png
    ./image/bridges00061.png
    ./image/bridges00064.png
    ./image/bridges00067.png
    ./image/bridges00070.png
    ./image/bridges00073.png
    ./image/bridges00076.png
    ./image/bridges00079.png
    ./image/bridges00082.png
    ./image/bridges00085.png
    ./image/bridges00088.png
    ./image/bridges00091.png
    ./image/bridges00094.png
    ./image/bridges00097.png
    ./image/bridges00100.png
    ./image/bridges00103.png
    ./image/bridges00106.png
    ./image/bridges00109.png
    ./image/bridges00112.png
    ./image/bridges00115.png
    ./image/bridges00118.png
    ./image/bridges00121.png
    ./image/bridges00124.png
    ./image/bridges00127.png
    ./image/bridges00130.png
    ./image/bridges00133.png
    ./image/bridges00136.png
    ./image/bridges00139.png
    ./image/bridges00142.png
    ./image/bridges00145.png
    ./image/bridges00148.png
    ./image/bridges00151.png
    ./image/bridges00154.png
    ./image/bridges00157.png
    ./image/bridges00160.png
    ./image/bridges00163.png
    
   `;
    return data.split("\n")[index];
  }
  
  const frameCount = 55;
  
  const images = [];
  const imageSeq = {
    frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page5>canvas`,
      //   set start end according to preference
      start: `top top`,
      end: `600% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
  
    trigger: "#page5",
    pin: true,
    // markers:true,
    scroller: `#main`,
  //   set start end according to preference
    start: `top top`,
    end: `600% top`,
  });
  }
  canvasNext();

  var clutterNext2 = "";

document.querySelector("#page6>.page6-text>h1").textContent.split(" ").forEach(function(dets){
    clutterNext2 += `<span>${dets} &nbsp;</span>`

    document.querySelector("#page6>.page6-text>h1").innerHTML = clutterNext2;
})


gsap.to("#page6>.page6-text>h1>span",{
    scrollTrigger:{
        trigger:`#page6>.page6-text>h1>span`,
        start:`top bottom`,
        end:`bottom top`,
        scroller:`#main`,
        scrub:.5,
    },
    stagger:.2,
    color:`#fff`
})


// Canvas code
function canvasNext1(){
  
  const canvas = document.querySelector("#page7>canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  function files(index) {
    var data = `
./image/3.webp
./image/4.webp
./image/5.webp
./image/6.webp
./image/7.webp
./image/8.webp
./image/9.webp
./image/10.webp
./image/11.webp
./image/12.webp
./image/13.webp
./image/14.webp
./image/15.webp
./image/16.webp
./image/17.webp
./image/18.webp
./image/19.webp
./image/20.webp
./image/21.webp
./image/22.webp
./image/23.webp
./image/24.webp
./image/25.webp
./image/26.webp
./image/27.webp
./image/28.webp
./image/29.webp
./image/30.webp
./image/31.webp
./image/32.webp
./image/33.webp
./image/35.webp
./image/36.webp
./image/38.webp
./image/39.webp
./image/40.webp
./image/41.webp
./image/42.webp
./image/43.webp
./image/44.webp
./image/45.webp
./image/46.webp
./image/47.webp
./image/48.webp
./image/49.webp
./image/50.webp
./image/51.webp
./image/52.webp
./image/53.webp
./image/54.webp
./image/55.webp
./image/56.webp
./image/57.webp
./image/58.webp
./image/59.webp
./image/60.webp
./image/61.webp
./image/62.webp
./image/63.webp
./image/64.webp
./image/65.webp
./image/66.webp
./image/67.webp
./image/68.webp
./image/69.webp
./image/70.webp
./image/71.webp
./image/72.webp
./image/73.webp
./image/74.webp
./image/75.webp
./image/76.webp
./image/77.webp
./image/78.webp
./image/79.webp
./image/80.webp
./image/81.webp
./image/82.webp
./image/83.webp
./image/84.webp
./image/85.webp
./image/86.webp
./image/87.webp
./image/88.webp
./image/89.webp
./image/90.webp
./image/92.webp
./image/93.webp
./image/94.webp
./image/95.webp
./image/96.webp
./image/97.webp
./image/98.webp
./image/99.webp
./image/100.webp
./image/101.webp
./image/102.webp
./image/103.webp
./image/104.webp
./image/105.webp
./image/106.webp
./image/107.webp
./image/108.webp
./image/109.webp
./image/110.webp
./image/111.webp
./image/112.webp
./image/113.webp
./image/114.webp
./image/115.webp
./image/116.webp
./image/117.webp
./image/118.webp
./image/119.webp
./image/120.webp
./image/121.webp
./image/122.webp
./image/123.webp
./image/126.webp
./image/127.webp
./image/129.webp
./image/130.webp
./image/131.webp
./image/133.webp
./image/134.webp
./image/136.webp

   `;
    return data.split("\n")[index];
  }
  
  const frameCount = 127;
  
  const images = [];
  const imageSeq = {
    frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page7>canvas`,
      //   set start end according to preference
      start: `top top`,
      end: `600% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
  
    trigger: "#page7",
    pin: true,
    // markers:true,
    scroller: `#main`,
  //   set start end according to preference
    start: `top top`,
    end: `600% top`,
  });
  }
  canvasNext1();

  gsap.to(".page7-cir",{
    scrollTrigger:{
        trigger:`.page7-cir`,
        start:`top center`,
        end:`bottom top`,
        scroller:`#main`,
        scrub:.5,
    },
    scale:5,
    transition:{
        duration:2,
        effect:`ease-in-out`
    }
  })

  
  gsap.to(".page7-cir-inner",{
    scrollTrigger:{
        trigger:`.page7-cir-inner`,
        start:`top center`,
        end:`bottom top`,
        scroller:`#main`,
        scrub:.5,
    },
    backgroundColor:`#0a3bce91`
  }) 