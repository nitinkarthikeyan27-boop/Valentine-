* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body {
  height: 100vh;
  background: linear-gradient(135deg, #ff9a9e, #fad0c4);
  display: flex;
  align-items: center;
  justify-content: center;
}

.card {
  background: white;
  padding: 40px;
  border-radius: 20px;
  text-align: center;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
}

h1 {
  color: #ff4d6d;
  margin-bottom: 10px;
}

h2 {
  margin: 20px 0;
}

p {
  color: #555;
}

.buttons {
  margin-top: 20px;
}

button {
  padding: 10px 25px;
  margin: 10px;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  cursor: pointer;
}

#yesBtn {
  background-color: #ff4d6d;
  color: white;
  const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");

yesBtn.addEventListener("click", () => {
  response.innerHTML = "I love you ❤️ Happy Valentine’s Day 🥹🌹";
});

noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 80 + "%";
  noBtn.style.top = Math.random() * 80 + "%";
});
}

#noBtn {
  background-color: #ddd;
  const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");

yesBtn.addEventListener("click", () => {
  response.innerHTML = "I love you ❤️ Happy Valentine’s Day 🥹🌹";
});

noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 80 + "%";
  noBtn.style.top = Math.random() * 80 + "%";
});
}

#response {
  response.innerHTML = "I love you ❤️ Happy Valentine’s Day 🥹🌹";
  margin-top: 20px;
  font-size: 18px;
  color: #ff4d6d;
}
