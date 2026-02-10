document.addEventListener("DOMContentLoaded", () => {
  console.log("Página cargada correctamente 🚀");

  const chatbotBtn = document.getElementById("chatbot-btn");
  const chatbot = document.getElementById("chatbot");
  const closeChat = document.getElementById("close-chat");
  const sendBtn = document.getElementById("send-btn");
  const userInput = document.getElementById("user-input");
  const chatBody = document.getElementById("chat-body");

  chatbotBtn.onclick = () => chatbot.style.display = "flex";
  closeChat.onclick = () => chatbot.style.display = "none";
  sendBtn.onclick = sendMessage;

  userInput.addEventListener("keydown", e => {
    if (e.key === "Enter") sendMessage();
  });

  function sendMessage() {
    const text = userInput.value.trim();
    if (!text) return;

    chatBody.innerHTML += `<div class="user">${text}</div>`;
    userInput.value = "";

    setTimeout(() => {
      chatBody.innerHTML += `<div class="bot">${botResponse(text)}</div>`;
      chatBody.scrollTop = chatBody.scrollHeight;
    }, 500);
  }

  function botResponse(msg) {
    msg = msg.toLowerCase();

    if (msg.includes("hola")) return "¡Hola! 👋 ¿En qué puedo ayudarte?";
    if (msg.includes("precio")) return "Tenemos hamsters, ratas y ratones 🐹🐭";
    if (msg.includes("hamster")) return "El hamster cuesta $100";
    if (msg.includes("rata")) return "La rata cuesta $45";
    if (msg.includes("ratón")) return "El ratón cuesta $40";
    if (msg.includes("ayuda")) return "Pregunta por animales o precios";

    return "Lo siento 😅 aún estoy aprendiendo";
  }
});
