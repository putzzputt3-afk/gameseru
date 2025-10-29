const quizData = [
  {question: "1. Apa sumber energi utama bagi tumbuhan?", a:"Air", b:"Cahaya Matahari", c:"Tanah", d:"Angin", correct:"b"},
  {question: "2. Planet terdekat dengan Matahari adalah…", a:"Bumi", b:"Venus", c:"Merkurius", d:"Mars", correct:"c"},
  {question: "3. Bagian tumbuhan yang menyerap air adalah…", a:"Batang", b:"Daun", c:"Akar", d:"Bunga", correct:"c"},
  {question: "4. Zat yang dibutuhkan tubuh untuk membentuk tulang dan gigi adalah…", a:"Vitamin C", b:"Kalsium", c:"Zat Besi", d:"Protein", correct:"b"},
  {question: "5. Perubahan wujud air dari cair menjadi gas disebut…", a:"Menguap", b:"Mencair", c:"Membeku", d:"Mengendap", correct:"a"},
  {question: "6. Contoh alat pernapasan pada ikan adalah…", a:"Paru-paru", b:"Insang", c:"Kulit", d:"Trakea", correct:"b"},
  {question: "7. Benda yang mengalami percepatan memiliki…", a:"Kecepatan tetap", b:"Kecepatan berubah", c:"Massa tetap", d:"Gaya nol", correct:"b"},
  {question: "8. Gas yang dihasilkan saat fotosintesis adalah…", a:"Oksigen", b:"Karbon dioksida", c:"Nitrogen", d:"Hidrogen", correct:"a"},
  {question: "9. Benda yang bersifat magnetik biasanya mengandung…", a:"Tembaga", b:"Besi", c:"Aluminium", d:"Karet", correct:"b"},
  {question: "10. Satuan gaya dalam SI adalah…", a:"Newton", b:"Joule", c:"Watt", d:"Meter", correct:"a"},
  {question: "11. Proses perubahan zat dari padat langsung menjadi gas disebut…", a:"Menguap", b:"Menyublim", c:"Mencair", d:"Membeku", correct:"b"},
  {question: "12. Organisme yang dapat membuat makanannya sendiri disebut…", a:"Heterotrof", b:"Autotrof", c:"Parasit", d:"Predator", correct:"b"},
  {question: "13. Zat yang berperan dalam transportasi oksigen dalam darah adalah…", a:"Protein", b:"Hemoglobin", c:"Enzim", d:"Glukosa", correct:"b"},
  {question: "14. Alat pernapasan manusia yang utama adalah…", a:"Paru-paru", b:"Insang", c:"Kulit", d:"Trakea", correct:"a"},
  {question: "15. Contoh perubahan kimia adalah…", a:"Es mencair", b:"Kertas terbakar", c:"Air mendidih", d:"Mentega meleleh", correct:"b"},
  {question: "16. Energi yang dimiliki benda karena geraknya disebut…", a:"Energi potensial", b:"Energi kinetik", c:"Energi panas", d:"Energi cahaya", correct:"b"},
  {question: "17. Organisme yang hidup di air disebut…", a:"Akuatik", b:"Terestrial", c:"Parasit", d:"Predator", correct:"a"},
  {question: "18. Bagian mata yang berfungsi melihat warna adalah…", a:"Kornea", b:"Lensa", c:"Bintik kuning", d:"Pupil", correct:"c"},
  {question: "19. Contoh sumber energi terbarukan adalah…", a:"Batu bara", b:"Minyak bumi", c:"Matahari", d:"Gas alam", correct:"c"},
  {question: "20. Perubahan zat dari gas menjadi cair disebut…", a:"Menguap", b:"Mengembun", c:"Menyublim", d:"Membeku", correct:"b"},
  {question: "21. Tubuh manusia memerlukan vitamin D untuk…", a:"Pertumbuhan tulang", b:"Membentuk darah", c:"Pencernaan", d:"Penglihatan", correct:"a"},
  {question: "22. Benda yang tidak mengubah bentuk saat gaya bekerja disebut…", a:"Elastis", b:"Inelastis", c:"Fluida", d:"Padat", correct:"b"},
  {question: "23. Proses pemisahan campuran berdasarkan perbedaan titik didih disebut…", a:"Filtrasi", b:"Destilasi", c:"Saring", d:"Kromatografi", correct:"b"},
  {question: "24. Bagian tumbuhan yang menghasilkan biji adalah…", a:"Daun", b:"Bunga", c:"Batang", d:"Akar", correct:"b"},
  {question: "25. Contoh benda yang mengapung di air adalah…", a:"Besi", b:"Kayu", c:"Batu", d:"Pasir", correct:"b"},
  {question: "26. Organ pencernaan manusia yang menyerap nutrisi adalah…", a:"Lambung", b:"Usus halus", c:"Usus besar", d:"Mulut", correct:"b"},
  {question: "27. Proses terjadinya gerak suatu benda karena gaya disebut…", a:"Hukum Newton", b:"Gerak", c:"Percepatan", d:"Momentum", correct:"c"},
  {question: "28. Gas yang diperlukan tumbuhan untuk fotosintesis adalah…", a:"Oksigen", b:"Karbon dioksida", c:"Nitrogen", d:"Hidrogen", correct:"b"},
  {question: "29. Sumber energi panas bumi berasal dari…", a:"Matahari", b:"Reaksi nuklir alami dalam bumi", c:"Air", d:"Angin", correct:"b"},
  {question: "30. Organ yang berfungsi untuk menyaring darah pada manusia adalah…", a:"Hati", b:"Ginjal", c:"Jantung", d:"Paru-paru", correct:"b"},
];

const loginDiv = document.getElementById('login');
const startBtn = document.getElementById('start');
const usernameInput = document.getElementById('username');
const quizContainer = document.getElementById('quiz-container');
const quizDiv = document.getElementById('quiz');
const submitBtn = document.getElementById('submit');
const resetBtn = document.getElementById('reset');
const scoreDisplay = document.getElementById('score');

let currentUser = '';
let answers = [];

startBtn.addEventListener('click', ()=>{
    const name = usernameInput.value.trim();
    if(!name) return alert("Masukkan nama kamu!");
    currentUser = name;
    answers = [];
    loginDiv.style.display = 'none';
    quizContainer.style.display = 'block';
    loadQuiz();
});

function loadQuiz(){
    quizDiv.innerHTML = '';
    quizData.forEach((q, idx)=>{
        quizDiv.innerHTML += `
        <div class="question">
            <p>${idx+1}. ${q.question}</p>
            <div class="options">
                <label><input type="radio" name="q${idx}" value="a"> ${q.a}</label>
                <label><input type="radio" name="q${idx}" value="b"> ${q.b}</label>
                <label><input type="radio" name="q${idx}" value="c"> ${q.c}</label>
                <label><input type="radio" name="q${idx}" value="d"> ${q.d}</label>
            </div>
        </div>`;
    });
}

quizDiv.addEventListener('change', e=>{
    if(e.target.name.startsWith('q')){
        const idx = parseInt(e.target.name.replace('q',''));
        answers[idx] = e.target.value;
    }
});

submitBtn.addEventListener('click', ()=>{
    if(answers.length === 0) return alert("Pilih jawaban minimal satu!");
    let score = 0;
    quizData.forEach((q, idx)=>{
        if(answers[idx] === q.correct) score++;
    });

    // Simpan nilai per user
    let allScores = JSON.parse(localStorage.getItem('quizScores')) || {};
    allScores[currentUser] = score;
    localStorage.setItem('quizScores', JSON.stringify(allScores));

    // Tampilkan nilai
    scoreDisplay.innerText = `Nilai ${currentUser}: ${score}/${quizData.length}`;

    // Hilangkan jawaban agar bisa mengulang
    quizDiv.querySelectorAll('input[type=radio]').forEach(i=>i.checked=false);
    answers = [];
});

resetBtn.addEventListener('click', async ()=>{
    const passwordInput = prompt("Masukkan password untuk reset nilai:");
    if(!passwordInput) return alert("Password dibutuhkan!");

    try {
        const res = await fetch('https://raw.githubusercontent.com/PutzzXD12/kuis-nilai/refs/heads/main/pw_reset.json');
        const data = await res.json();

        if(data.passwords && data.passwords.includes(passwordInput)){
            alert("Berhasil mengambil DATABASE!");
            localStorage.removeItem('quizScores');
            alert("Reset berhasil! Semua nilai telah dihapus.");

            loginDiv.style.display = 'block';
            quizContainer.style.display = 'none';
            usernameInput.value = '';
            scoreDisplay.innerText = '';
        } else {
            alert("Password salah! GAGAL MENGAMBIL DATABASE!");
        }
    } catch(err){
        alert("GAGAL MENGAMBIL DATABASE!");
        console.error(err);
    }
});