document.getElementById("satisfeito").addEventListener("click", function() {
    enviarFeedback("Satisfeito");
  });
  
  document.getElementById("razoavelmenteSatisfeito").addEventListener("click", function() {
    enviarFeedback("Razoavelmente Satisfeito");
  });
  
  document.getElementById("insatisfeito").addEventListener("click", function() {
    enviarFeedback("Insatisfeito");
  });
  
  function enviarFeedback(feedback) {
    // Aqui você pode enviar o feedback para onde for necessário, como um servidor backend, API, etc.
    console.log("Feedback enviado:", feedback);
    alert("Obrigado pelo seu feedback!");
  }
  