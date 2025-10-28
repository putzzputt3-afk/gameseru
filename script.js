// Ganti dengan link RAW GitHub kamu sendiri
const DB_URL = "https://raw.githubusercontent.com/PutzzXD12/kuis-nilai/refs/heads/main/pw_reset.json";

async function checkPassword() {
  const passwordInput = document.getElementById("password").value;
  const status = document.getElementById("status");
  
  status.textContent = "🔄 Mengecek password...";
  
  try {
    const res = await fetch(DB_URL);
    const data = await res.json();
    
    if (passwordInput === data.password) {
      status.textContent = "✅ Berhasil mengambil dari database!";
      showLoading();
    } else {
      status.textContent = "❌ Akses ditolak!";
    }
  } catch (err) {
    status.textContent = "⚠️ Gagal mengambil data dari GitHub.";
  }
}

function showLoading() {
  document.getElementById("login-container").style.display = "none";
  const loader = document.getElementById("loading-container");
  loader.style.display = "block";
  
  const progress = document.getElementById("progress");
  const text = document.getElementById("progress-text");
  
  let percent = 0;
  const steps = [0, 30, 60, 80, 90, 100];
  
  let i = 0;
  const loading = setInterval(() => {
    if (i < steps.length) {
      percent = steps[i];
      progress.style.width = percent + "%";
      text.textContent = percent + "%";
      i++;
    } else {
      clearInterval(loading);
      loader.style.display = "none";
      showQuiz();
    }
  }, 500);
}

function showQuiz() {
  document.getElementById("quiz-container").style.display = "block";
  const quiz = document.getElementById("quiz");
  
  // Contoh 5 soal dulu (bisa kamu ubah ke 30)
  const questions = [
    {q: "1. Ibukota Indonesia adalah?", a: ["Bandung", "Surabaya", "Jakarta", "Medan"], c: 2},
    {q: "2. Hewan pemakan daging disebut?", a: ["Herbivora", "Karnivora", "Omnivora", "Frugivora"], c: 1},
    {q: "3. 2 + 3 = ?", a: ["4", "5", "6", "3"], c: 1},
    {q: "4. Warna daun adalah?", a: ["Merah", "Hijau", "Biru", "Kuning"], c: 1},
    {q: "5. Air membeku pada suhu?", a: ["0°C", "50°C", "100°C", "200°C"], c: 0}
  ];
  
  quiz.innerHTML = "";
  questions.forEach((item, index) => {
    const div = document.createElement("div");
    div.classList.add("quiz-question");
    div.innerHTML = `
      <p>${item.q}</p>
      ${item.a.map((ans, i) => `
        <label>
          <input type="radio" name="q${index}" value="${i}"> ${ans}
        </label><br>
      `).join('')}
    `;
    quiz.appendChild(div);
  });
}

function submitQuiz() {
  const questions = document.querySelectorAll(".quiz-question");
  let score = 0;
  const answers = [2,1,1,1,0]; // Jawaban benar dari contoh soal di atas
  
  questions.forEach((q, i) => {
    const selected = q.querySelector("input[type='radio']:checked");
    if (selected && parseInt(selected.value) === answers[i]) {
      score++;
    }
  });
  
  document.getElementById("result").textContent = `Nilai kamu: ${score} / ${questions.length}`;
}