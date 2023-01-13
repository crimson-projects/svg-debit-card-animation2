const tl = gsap.timeline()
  .set('svg', {opacity:1})
  .set('.scratches', {rotation:100, x:60, y:-25})
  .set('#star', {scale:0, transformOrigin:'50% 50%'})
  .from('#cardMask rect', {scale:0, rotation:-20, duration:2, transformOrigin:'50% 50%', ease:'expo.inOut'}, 0)
  .fromTo('#triangle', {transformOrigin:'-510px -280px', rotate:24}, {rotate:0, duration:2, ease:'expo.inOut'}, 0.5)
  .to('#coilMask polygon', {attr:{points:'0,0 550,0 600,370 0,370'}, duration:2, ease:'expo.inOut'}, 0.5)
  .from('#coil', {attr:{'stroke-dashoffset':-28}, ease:'none', duration:1, repeat:-1}, 0.5)
  .to('.step2', {skewY:-6, duration:2, ease:'none', repeat:-1}, 0.7)
  .fromTo('.step1', {skewY:-6}, {skewY:-9, y:15, duration:2, ease:'none', repeat:-1}, 0.7)
  .to('.step1, .step2, .step3, .step4', {x:-186, y:145, duration:2, ease:'none', repeat:-1}, 0.7)
  .fromTo('#orb', {y:-40},{y:160, ease:'circ.in', repeat:-1, yoyo:true, duration:1}, 0)
  .fromTo('#orbShadow', {scale:0.4, y:-10, transformOrigin:'50% 50%'},{scale:1.1, y:50, ease:'circ.in', repeat:-1, yoyo:true, duration:1, onRepeat:()=>{
    gsap.to('#star', {scale:1, repeat:1, yoyo:true, yoyoEase:true, duration:0.25, ease:'power4'})
    gsap.fromTo('#star', {rotate:20},{rotate:-99, duration:0.5, ease:'none'})    
  }}, 0)  
  .from('.logoPt', {x:(i)=>[18,-10][i], duration:1.2, ease:'expo.inOut'}, 0.9)
  .from('svg text', {x:-40, duration:1.1, ease:'expo.inOut', stagger:0.2}, 1)
  .from('.txtBox', {scaleX:0, transformOrigin:'100% 0', duration:1.1, ease:'expo.inOut', stagger:0.2}, 1)
  .from('#curlMask polygon', {attr:{points:'232,481 140,255 360,140'}, repeat:-1, yoyo:true, repeatDelay:0.8, duration:1, ease:'sine.inOut'}, 2)
  .to('#triangle', {rotate:()=>gsap.utils.random(2.5,4.5), duration:2, repeat:-1, yoyo:true, repeatRefresh:true, ease:'sine.inOut'}, 2.5)


window.onclick =()=> tl.play(0);