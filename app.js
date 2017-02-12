function changeClass() {
  $('.lightbulb').click(function(event){
    $('.lightbulb').removeClass('bulb-on');
      $(this).addClass('bulb-on');
  });
}

changeClass();
