var navigation = document.getElementsByClassName("navigation")[0];
var navigation_ol = document.getElementsByClassName("navigation_ol")[0];
var close_icon = document.getElementsByClassName("icon-close-aside")[0];
var a = document.getElementsByTagName("a");



navigation.addEventListener('click', open_navigation_menu);
navigation_ol.addEventListener('mouseleave', close_navigation_menu);


function open_navigation_menu() {
  navigation_ol.style.display = "block";
  navigation_ol.style.animation = "move_nav 0.7s linear forwards";
  // inside_menu.style.display = (inside_menu.style.display == 'none') ? 'block' : 'none';
}

function close_navigation_menu(event) {
  var e = event.toElement || event.relatedTarget;
  if (e.parentNode == this || e == this) {
    return;
  }else
  this.style.display = "none";
}

close_icon.onclick = function(){
  navigation_ol.style.display = "none";
}


for(var i=0; i<a.length; a++){
  a[i].onclick = function(){
    navigation_ol.style.display = "none";
  }
}
