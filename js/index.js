// section4-category-클렌징
var bullet1 = ['<span class="abhaya a">1</span>　　젠틀 딥 포어 클렌저 75ml (1분모공팩)', '<span class="abhaya a">2</span>　　카밍 클렌징 밀크 200ml (진정 클렌저)', '<span class="abhaya a">3</span>　　아이&립 메이크업 리무버 125ml'];
new Swiper('.category1-slide', {
  
  pagination: {
    el: '.category1 .swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<div class="' + className + '"><span>' + (bullet1[index]) + '</span></div>';
    }
  },
  spaceBetween: 20,
  speed: 1,
  autoplay: {
    delay: 3000,
    disableOnInteraction : false,
  },
  observer: true,
  observeParents: true,
  
});
// section4-category-미스트
var bullet2 = ['<span class="abhaya a">1</span>　　셀룰러워터 미스트 30ml(실버 미스트)', '<span class="abhaya a">2</span>　　프리미엄 미스트 듀오(실버200ml +골드100ml)', '<span class="abhaya a">3</span>　　씨티 프로텍트 미스트 100ml (골드 미스트)'];
new Swiper('.category2-slide', {
  
  pagination: {
    el: '.category2 .swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<div class="' + className + '"><span>' + (bullet2[index]) + '</span></div>';
    }
  },
  spaceBetween: 20,
  speed: 1,
  autoplay: {
    delay: 3000,
    disableOnInteraction : false,
  },
  observer: true,
  observeParents: true,
});
// section4-category-토너/로션
var bullet3 = ['<span class="abhaya a">1</span>　　하이드라 로션 맥스 400ml (대용량 토너)', '<span class="abhaya a">2</span>　　카밍 로션 200ml (진정 토너)', '<span class="abhaya a">3</span>　　하이드라 로션 200ml (보습 토너)'];
new Swiper('.category3-slide', {
  
  pagination: {
    el: '.category3 .swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<div class="' + className + '"><span>' + (bullet3[index]) + '</span></div>';
    }
  },
  spaceBetween: 20,
  speed: 1,
  autoplay: {
    delay: 3000,
    disableOnInteraction : false,
  },
  observer: true,
  observeParents: true,
});
// section4-category-세럼/에센스
var bullet4 = ['<span class="abhaya a">1</span>　　인텐시브 비타민 E2 세럼 30ml', '<span class="abhaya a">2</span>　　셀룰러워터 에센스 125ml 듀오', '<span class="abhaya a">3</span>　　에이지 프로테옴 어드밴스드 세럼 30ml'];
new Swiper('.category4-slide', {
  
  pagination: {
    el: '.category4 .swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<div class="' + className + '"><span>' + (bullet4[index]) + '</span></div>';
    }
  },
  spaceBetween: 20,
  speed: 1,
  autoplay: {
    delay: 3000,
    disableOnInteraction : false,
  },
  observer: true,
  observeParents: true,
});
// section4-category-크림/아이케어
var bullet5 = ['<span class="abhaya a">1</span>　　셀룰러워터 크림 50ml', '<span class="abhaya a">2</span>　　인텐시브 히알루로닉 수분 자석 세트(세럼+크림)', '<span class="abhaya a">3</span>　　인텐시브 히알루로닉 아이 세럼15ml'];
new Swiper('.category5-slide', {
  
  pagination: {
    el: '.category5 .swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<div class="' + className + '"><span>' + (bullet5[index]) + '</span></div>';
    }
  },
  spaceBetween: 20,
  speed: 1,
  autoplay: {
    delay: 3000,
    disableOnInteraction : false,
  },
  observer: true,
  observeParents: true,
});
// section4-category-선케어
var bullet6 = ['<span class="abhaya a">1</span>　　노썬 프로텍티브 케어 선크림 50ml (톤업 선크림)', '<span class="abhaya a">2</span>　　씨티 프로텍트 미스트 100ml (골드 미스트)', '<span class="abhaya a">3</span>　　포토리버스 선크림 50ml (산뜻한 선크림)'];
new Swiper('.category6-slide', {
  
  pagination: {
    el: '.category6 .swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<div class="' + className + '"><span>' + (bullet6[index]) + '</span></div>';
    }
  },
  spaceBetween: 20,
  speed: 1,
  autoplay: {
    delay: 3000,
    disableOnInteraction : false,
  },
  observer: true,
  observeParents: true,
});
// section4-category-바디
var bullet7 = ['<span class="abhaya a">1</span>　　인텐시브 글로신 크림 200ml', '<span class="abhaya a">2</span>　　앱솔루트 퍼밍 컨투어링 바디크림 200ml', '<span class="abhaya a">3</span>　　셀룰러 워터 젠틀 바디 스크럽 200ml'];
new Swiper('.category7-slide', {
  
  pagination: {
    el: '.category7 .swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<div class="' + className + '"><span>' + (bullet7[index]) + '</span></div>';
    }
  },
  spaceBetween: 20,
  speed: 1,
  autoplay: {
    delay: 3000,
    disableOnInteraction : false,
  },
  observer: true,
  observeParents: true,
});

// category ranking
$(function(){
  $('.section4 .category-menu li').click(function(){
    $('.section4 .category-menu li').removeClass('activec')
    $(this).addClass('activec')

    $('.category').hide()
    let idx = $(this).index()
    $('.category').eq(idx).show()


  })
$('.section4 .category-menu li').eq(0).trigger('click')
})


// skin type
$(function(){
  $('.skin-type ul li').click(function(){
    $('.skin-type ul li').removeClass('actives')
    $(this).addClass('actives')

    // $('.circle-img').hide()
    // let idx = $(this).index()
    // $('.circle-img').eq(idx).show()

  })
$('.section4 .skin-type ul li').eq(0).trigger('click')
})