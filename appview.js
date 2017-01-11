'usestrict'
var appView = {};

appView.handleMainNav = function(){
  $('#mozart').on('click', '.tab', function(){
    $('.europe').hide();
    $('#' + $(this).data('content')).fadeIn(440);
  });
  $('#mozart .tab:first').click();
}
appView.handleMainNav();
