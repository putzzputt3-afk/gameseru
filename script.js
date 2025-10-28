// Link JSON password/reset database GitHub
const RAW_PW_URL = "https://raw.githubusercontent.com/PutzzXD12/kuis-nilai/refs/heads/main/pw_reset.json";

// ============================
// Quiz data 50 soal
// ============================
const quizData = [
  {q:"1. Teks yang menceritakan pengalaman disebut ...", o:["Teks deskripsi","Teks narasi","Teks laporan","Teks eksposisi"], a:1},
  {q:"2. Sinonim kata 'indah' adalah ...", o:["Cantik","Buruk","Jelek","Kusam"], a:0},
  {q:"3. Antonim kata 'besar' adalah ...", o:["Kecil","Tinggi","Panjang","Pendek"], a:0},
  {q:"4. Planet yang terdekat dari matahari adalah ...", o:["Venus","Merkurius","Bumi","Mars"], a:1},
  {q:"5. Hewan yang berkembang biak dengan bertelur disebut ...", o:["Vivipar","Ovipar","Ovovivipar","Herbivor"], a:1},
  {q:"6. Pahlawan wanita dari Aceh yang terkenal adalah ...", o:["R.A. Kartini","Cut Nyak Dien","Martha Christina","Dewi Sartika"], a:1},
  {q:"7. Ibukota provinsi Jawa Timur adalah ...", o:["Surabaya","Malang","Madiun","Kediri"], a:0},
  {q:"8. Perubahan wujud dari padat menjadi cair disebut ...", o:["Mencair","Membeku","Menguap","Menyublim"], a:0},
  {q:"9. Proklamasi kemerdekaan Indonesia dibacakan pada tanggal ...", o:["17 Agustus 1945","10 November 1945","1 Juni 1945","20 Mei 1945"], a:0},
  {q:"10. Energi yang dihasilkan oleh matahari disebut energi ...", o:["Panas","Cahaya","Listrik","Kimia"], a:1},
  {q:"11. Tag HTML untuk membuat tautan adalah ...", o:["<link>","<a>","<p>","<h1>"], a:1},
{q:"12. CSS digunakan untuk ...", o:["Membuat struktur web","Mengatur tampilan web","Menyimpan data","Menjalankan server"], a:1},
{q:"13. Nama presiden pertama Indonesia adalah ...", o:["Soekarno","Soeharto","Habibie","Megawati"], a:0},
{q:"14. Gas yang dibutuhkan tumbuhan untuk fotosintesis adalah ...", o:["Oksigen","Karbon dioksida","Nitrogen","Hidrogen"], a:1},
{q:"15. Alat untuk mengukur suhu adalah ...", o:["Termometer","Barometer","Higrometer","Altimeter"], a:0},
{q:"16. Hewan pemakan tumbuhan disebut ...", o:["Herbivora","Karnivora","Omnivora","Insektivora"], a:0},
{q:"17. Teks yang menjelaskan cara melakukan sesuatu adalah ...", o:["Eksposisi","Prosedur","Narasi","Laporan"], a:1},
{q:"18. Ibu kota negara Jepang adalah ...", o:["Tokyo","Seoul","Beijing","Bangkok"], a:0},
{q:"19. Bunyi dapat merambat melalui ...", o:["Udara","Hampa udara","Cahaya","Ruang kosong"], a:0},
{q:"20. Warna primer terdiri dari ...", o:["Merah, kuning, biru","Hijau, ungu, oranye","Hitam, putih, abu","Merah, putih, biru"], a:0},
  // ... sampai soal 50
];

// ============================
// Render quiz di HTML
// ============================
const form = document.getElementById("quizForm");
quizData.forEach((item, i) => {
  const div = document.createElement("div");
  div.classList.add("question");
  const qHtml = `<h3>${item.q}</h3>`;
  const optionsHtml = item.o.map((opt, idx) => {
    const letter = String.fromCharCode(65 + idx);
    return `<label><input type="radio" name="q${i}" value="${idx}" /> <strong>${letter}.</strong> ${opt}</label>`;
  }).join("");
  div.innerHTML = qHtml + optionsHtml;
  form.appendChild(div);
});

// ============================
// Submit quiz
// ============================
document.getElementById("submitBtn").addEventListener("click", async function() {
  const name = document.getElementById("studentName").value.trim();
  if(!name){ alert("Masukkan nama!"); return; }

  let score = 0;
  quizData.forEach((item, i) => {
    const sel = document.querySelector(`input[name='q${i}']:checked`);
    if(sel && Number(sel.value) === item.a) score++;
  });

  document.getElementById("result").innerHTML =
    `Nama: <b>${name}</b><br>Nilai: <b>${score}/${quizData.length}</b> (${Math.round(score/quizData.length*100)}%)`;

  // Tampilkan loading reset
  await showLoading();

  // Reset localStorage setelah quiz selesai
  localStorage.removeItem("quiz_results");
  document.getElementById("studentName").value = "";
  form.reset();
  alert("✅ Quiz selesai. Jawaban & nama otomatis dihapus!");
});

// ============================
// Fungsi loading animasi
// ============================
function showLoading() {
  return new Promise(resolve => {
    const container = document.createElement("div");
    container.classList.add("loading-box");
    container.innerHTML = `
      <div class='progress-bar'><div class='progress-fill' id='barFill'></div></div>
      <div class='loading-text' id='loadText'>🔄 Memproses... 0%</div>
    `;
    document.body.appendChild(container);

    const bar = document.getElementById("barFill");
    const txt = document.getElementById("loadText");

    const steps = [0, 20, 40, 60, 80, 100];
    let i = 0;

    const interval = setInterval(() => {
      bar.style.width = steps[i] + "%";
      txt.textContent = `🔄 Memproses... ${steps[i]}%`;
      i++;
      if(i >= steps.length){
        clearInterval(interval);
        txt.textContent = "✅ Selesai!";
        setTimeout(() => { container.remove(); resolve(); }, 500);
      }
    }, 400);
  });
}