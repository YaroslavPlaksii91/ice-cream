(() => {
    const mobileMenu = document.querySelector('.js-menu-container');
    const openMenuBtn = document.querySelector('.js-open-menu');
    const closeMenuBtn = document.querySelector('.js-close-menu');
  
    const toggleMenu = () => {
      const isMenuOpen =
        openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
      openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
      mobileMenu.classList.toggle('is-open');
    };
  
    openMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);
  
    // Закрываем мобильное меню на более широких экранах
    // в случае изменения ориентации устройства.
    window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
      if (!e.matches) return;
      mobileMenu.classList.remove('is-open');
      openMenuBtn.setAttribute('aria-expanded', false);
      bodyScrollLock.enableBodyScroll(docmobile__navigate-linkument.body);
    });

    // Закрываем мобильное меню после выбора секции 
    $(".mobile__navigate-link").click(function () {
      if ($(".menu__container").hasClass('is-open')) {
        $(".menu__container").removeClass('is-open');
      }
    });
    //Плавный переход на верх при нажатии Home *может быть задействован так же для будущей кнпки UP
    (function($) {
      $(function() {
      
        $('#home-link').click(function() {
          $('html, body').animate({scrollTop: 0},500);
          return false;
        })
      
      })
      })(jQuery)
  })();