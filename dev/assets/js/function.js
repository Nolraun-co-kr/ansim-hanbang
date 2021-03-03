$(document).ready(function(){
    $('.visual__content').slick({
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000
    });

    $('.tab__navlink').on('click', function(e){
        e.preventDefault();
        $('.tab__navlink').removeClass('active');
        $(this).addClass('active');

        var value = $(this).data('tablink');

        $('.tab__panel').hide();
        $('.tab__panel').eq(value - 1).show();

    });

    $('.product__thumbnail .top').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.product__thumbnail .bottom'
      });
      $('.product__thumbnail .bottom').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.product__thumbnail .top',
        dots: false,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true
      });

      $(document).ready(function(){
        $('.sercive__slider').slick({
          arrows: true,
          autoplay: true,
          infinite: true,
          dots: false
        });
      });

      $('.modal__close').on('click', function(){
        $(this).parents('.modal').hide();
      });



    $('.tabLinks a').on('click', function(e){
      e.preventDefault();
      const $parents = $(this).parents('.tab-area');
      $parents.find('.tabLinks a').removeClass('active');
      $(this).addClass('active');

      var value = $(this).data('tablink');

      $parents.find('.tabItem').hide();
      $parents.find('.tabItem').eq(value - 1).show();
  });
  });