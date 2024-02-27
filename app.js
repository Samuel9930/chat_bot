const express = require('express');
const bodyParser = require('body-parser');
const { API_KEY_GEMINI, START_CHAT, GENERATION_CONFIG } = require('./config');

const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(API_KEY_GEMINI);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

const app = express();

// Middleware para habilitar CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Permitir solicitudes desde cualquier origen
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Métodos HTTP permitidos
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization'); // Cabeceras permitidas
  if (req.method === 'OPTIONS') {
    res.sendStatus(200); // Responder a las solicitudes OPTIONS
  } else {
    next(); // Continuar con el siguiente middleware
  }
});

app.use(bodyParser.json());

const port = 3000;

app.post('/chat', async (req, res) => {
  let history = req.body.history;
  let question = req.body.question;
  let historyChat = START_CHAT.concat(history)
  const chat = model.startChat({
    history: historyChat,
    generationConfig: GENERATION_CONFIG
  });
  const sendQuestion = await chat.sendMessage(question);
  const response = await sendQuestion.response;
  const text = response.text();
  history.push({ role: "user", parts: question })
  history.push({ role: "model", parts: text })
  return res.status(200).json({ history: history });
});

// Middleware de manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
