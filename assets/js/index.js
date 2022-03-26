$(function(){

  const intro = gsap.timeline({}); //timeline 이 없으면 모션 연결이 안됨
  intro.set('.sc_visual .img_wrap img',{
    opacity:0
  })
  .from('.sc_visual .img_wrap img',{
    opacity:1,
    delay:1,
    scale:1.5,
    duration:1.3
  })
  .from('.sc_visual .txt_wrap h2',{
    opacity:0
  })
  .from('.sc_visual .txt_wrap p',{
    opacity:0
  },1) //마지막 1은 자기시간대에서 실행

  $('.motion01').each(function(index,item) {
    gsap.from(item,{
      scrollTrigger: {
        trigger:item,
        start:'top 50%',
        end:"bottom 50%",
        onLeave:function(){gsap.to(item,{opacity:0})},
        onEnterBack: function(){gsap.to(item,{opacity:1})},
        // scrub:1
      },
      opacity:0,
    })
  })

  gsap.to('.sc_video video', {
    scrollTrigger: {
      trigger:'.sc_design',
      start:'top 100%',
      // markers:true,
      scrub:1
    },
    "position":"absolute"
  })

  const design =gsap.timeline({

    scrollTrigger: {
      trigger:'.headphone_motion .inner',
      start:'top 20%',
      // end: 'bottom top',
      end: '+=2000',
      // markers:true,
      scrub:1,
      pin:true,
      onLeave:function(){

      }
    },

  })
  
  design.from('.sc_design .headphone_motion .txt_wrap p.txt01',{
    opacity:0
  })
  .to('.sc_design .headphone_motion .txt_wrap p.txt01',{opacity:0})
  .from('.sc_design .headphone_motion .txt_wrap p.txt02',{
    opacity:0
  })
  .to('.sc_design .headphone_motion .txt_wrap p.txt02',{opacity:0})
  .to('.sc_design .img_wrapper .img_wrap',{
    
    y:-100,
    duration:4
  })
  .to('.sc_design .img_wrapper .img_wrap .head_01',{
    yPercent:-10,
    duration:4
  })
  // .set('.sc_design .img_')
  // .to('.sc_design .img_wrapper .img_wrap', {
  //   scale:1,
  //   yPercent:0
  // })

  gsap.from('.sc_design .head_mecunizem', {
    scrollTrigger: {
      trigger:'.head_mecunizem',
      start:'top 90%',
      // markers:true,
      scrub:1
    },
    opacity:0
  })
  gsap.from('.imgScroll img', {
    scrollTrigger: {
      trigger:'.imgScroll',
      start:'top 100%',
      end: 'bottom top', //엘리먼트위치 윈도우위치
      // markers:true,
      scrub:0.2,
    },
    yPercent:10,
  })

  const headset = gsap.timeline({
    scrollTrigger: {
      trigger:'.xray_img',
      start:'30% 30%',
      end:'+=1600',
      // end:'bottom bottom',
      // end: '+=2000', //엘리먼트위치 윈도우위치
      
      // markers:true,
      scrub:1,
      pin:true,
      
    },
  })

  headset.to('.headset02',{opacity:1,duration:2})
  .to('.xray_copy1',{duration:1, opacity:0})
  .to('.headset03',{opacity:1,duration:2})
  .to('.xray_copy2',{opacity:1,duration:1})
  .to('.headset04',{opacity:1,duration:2})
  .to('.xray_copy2',{opacity:0,duration:1})
  .to('.xray_copy3',{opacity:1,duration:1})
  
  
  
  
  

  const win = $(window);
  const header =$('header');
  const logoArea = $('.logo_area');
  const hambuger = $('.hambuger');
  const dropMenu = $('.drop_menu');
  const basket = $('.basket');
  
  
  win.scroll(function(){
    const curr = win.scrollTop();

    if(curr > logoArea.height()) {
      header.addClass('fixed');
    }else {
      header.removeClass('fixed');
    }

  })
  
  const menuEffect = gsap.from('.drop_menu .gnb li', {
    opacity: 0,
    duration:1,
    stagger:0.03,  //하나씩 순서대로 좌라락
  })

  menuEffect.pause();
  
  
  hambuger.click(function(){
    if(!hambuger.hasClass('on')) {
      menuEffect.restart();
    }
    hambuger.toggleClass('on');
    dropMenu.toggleClass('on');
    basket.toggleClass('on');
  })
  basket.click(function(){
    $('.basket_wrap').toggleClass('on');
  })


  let prdH = $('header .prd_contents ul').outerHeight();

  const prdList = gsap.timeline({})
  prdList.to('.bg',{
    opacity:1,
    "visibility":'visible'
  }).to('.prd_contents',{
    height:prdH
  }).from('.prd_contents ul li',{
    yPercent:-50,
    opacity:0,
    stagger:0.2
  })
  prdList.paused(true);  //일시정지하는것


  $('.more').click(function(e) {
    e.preventDefault();
    if($(this).hasClass('on')) {
      $(this).removeClass('on');
      prdList.reverse();  //역순으로 실행하는것
    }else {
      $(this).addClass('on');
      prdList.restart();  // 다시 재실행하는것
    }
  $('.bg').click(function() {
    prdList.reverse();
  })
    

    // $('header .prd_contents').animate({height:h},300)

  })

  const bgArr1 = ['#f5f4f0','#3c3d3a','#2f506c','#e4544d','#e7ece3']
  const bgArr2 = ['#d2d3d4','#595759','#91a6bb','#d8a097','#afbfab']


  const swiper = new Swiper('.color_slide', {
    // Optional parameters
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      
    },
    effect:'fade',
  
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '" ><span class="bull" style="background:'+bgArr1[index]+'"><i class="half" style="background:'+bgArr2[index]+'"></i></span></span>';
      },
    },
  });
  const acodianItem = $('.acodian_item');
  const acodianItemA = $('.acodian_item a');
  $(acodianItemA).click(function(e) {
    e.preventDefault();
  })
  
  for(let i = 0; i<acodianItem.length; i++) {
    $(acodianItem).eq(i).click(function(){
      $(acodianItem).eq(i).children('.sub').toggleClass('on');
    })
  }
})