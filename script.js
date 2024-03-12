const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para permitir o parsing de JSON
app.use(bodyParser.json());

// Rota para receber os feedbacks
app.post('/receber-feedback', (req, res) => {
  const feedback = req.body.feedback;
  console.log('Feedback recebido:', feedback);
  
  // Aqui você pode fazer o que quiser com o feedback, como salvar em um banco de dados, por exemplo
  
  res.sendStatus(200); // Respondendo com sucesso
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
