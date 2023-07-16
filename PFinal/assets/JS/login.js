$(document).ready(function () {
  $("#btn-login").click(function (event) {
    let nick = document.getElementById("nick").value;
    let password = document.getElementById("password").value;
    alert(nick, password)
    if ((nick == "DarkWizrd") && (password == 1234)) {
      
    }
  });
});