$(document).ready(function() {
  $("form").submit(function(event) {
     event.preventDefault();

    if ($("#exampleCheck1").prop("checked")) {
      alert("Su mensaje fue enviado.");
      $(this).unbind('submit').submit();
    } else {
      alert("Debe aceptar los términos y condiciones.");
    }
  });
});


