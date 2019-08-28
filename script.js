$(document).ready(function(){
    $('.fa-bars').click(function(){
        if (!$(this).hasClass('clicked')) { // если класса нет
          $(this).addClass('clicked'); // добавляем класс
          $(".main-nav").css("visibility", "visible")
        } else { // если есть
          $(this).removeClass('clicked'); // убираем класс
          $(".main-nav").css("visibility", "hidden")
        }
      });
      

  });