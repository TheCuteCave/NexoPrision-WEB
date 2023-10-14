function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}

const boton = document.getElementById('button-ip');
boton.addEventListener('click', function () {
  alert('¡La ip se copio con exito!');
});