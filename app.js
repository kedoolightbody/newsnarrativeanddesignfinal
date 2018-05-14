alert('Welcome :-)');

var elem = document.querySelector('.materialboxed');
  var instance = M.Materialbox.init(elem, options);

  // Or with jQuery

  $(document).ready(function(){
    $('.materialboxed').materialbox();
  });