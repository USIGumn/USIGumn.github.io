$(document).ready(function($){
  var path = window.location.pathname.split("/").pop();

  console.log(path);
  if (path === undefined || path == "" || path == 'index.html') {
    console.log('null path');
    path = '../';
  }


  var target = $('nav a[href="' + path + '"]');
  target.parent().addClass('active');
})
