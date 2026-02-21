//*emailjs
(function(){
  emailjs.init("PUBLIC_KEY");//na życzenie klienta*
})();

form.addEventListener("submit", function(e){
  e.preventDefault();

  const response = grecaptcha.getResponse();
  if(response.length === 0){
    alert("Potwierdź, że nie jesteś robotem!");
    return;
  }
    emailjs.sendForm("SERVICE_ID", "TEMPLATE_ID", this)//na życzenie klienta*
    .then(() => alert("Wysłano!"))
    .catch(err => alert("Błąd wysyłania: " + err.text));
});