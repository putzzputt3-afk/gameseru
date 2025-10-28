// ============================
// File: script.js
// ============================

// Link JSON password/reset database (contoh)
const RAW_PW_URL = "https://raw.githubusercontent.com/PutzzXD12/kuis-nilai/refs/heads/main/pw_reset.json";

// ============================
// Data quiz 50 soal
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
  {q:"21. Nama alat musik yang dipukul adalah ...", o:["Gitar","Piano","Drum","Seruling"], a:2},
  {q:"22. Kalimat ajakan biasanya menggunakan kata ...", o:["Ayo","Karena","Namun","Tetapi"], a:0},
  {q:"23. Hewan langka khas Papua adalah ...", o:["Komodo","Cendrawasih","Badak Jawa","Gajah"], a:1},
  {q:"24. Sila ketiga Pancasila berbunyi ...", o:["Persatuan Indonesia","Kemanusiaan yang adil","Ketuhanan Yang Maha Esa","Keadilan sosial"], a:0},
  {q:"25. Proses penguapan air di tumbuhan disebut ...", o:["Transpirasi","Fotosintesis","Respirasi","Kondensasi"], a:0},
  {q:"26. Tag HTML untuk paragraf adalah ...", o:["<text>","<p>","<div>","<body>"], a:1},
  {q:"27. Dalam sistem tata surya, planet terbesar adalah ...", o:["Saturnus","Jupiter","Neptunus","Mars"], a:1},
  {q:"28. Tokoh yang dikenal sebagai Bapak Pendidikan Nasional adalah ...", o:["Ki Hajar Dewantara","Soekarno","Moh. Hatta","Ahmad Dahlan"], a:0},
  {q:"29. Hewan pemakan daging disebut ...", o:["Karnivora","Herbivora","Omnivora","Frugivora"], a:0},
  {q:"30. Arti kata ‘ekonomi’ adalah ...", o:["Aturan rumah tangga","Ilmu sosial","Ilmu bumi","Kegiatan jual beli"], a:0},
  {q:"31. Sungai terpanjang di dunia adalah ...", o:["Amazon","Nil","Yangtze","Mississippi"], a:1},
  {q:"32. Matahari terbit dari arah ...", o:["Barat","Timur","Utara","Selatan"], a:1},
  {q:"33. Warna langit saat siang hari adalah ...", o:["Biru","Merah","Hijau","Kuning"], a:0},
  {q:"34. Benda yang mengapung di air disebut ...", o:["Tenggelam","Mengapung","Melayang","Hancur"], a:1},
  {q:"35. Ibu kota negara Australia adalah ...", o:["Sydney","Melbourne","Canberra","Perth"], a:2},
  {q:"36. Hewan yang bisa terbang disebut ...", o:["Kucing","Burung","Ayam","Kuda"], a:1},
  {q:"37. Benda yang memantulkan cahaya disebut ...", o:["Cermin","Kaca","Besi","Kayu"], a:0},
  {q:"38. Gas yang dihirup manusia adalah ...", o:["Oksigen","Karbon dioksida","Nitrogen","Hidrogen"], a:0},
  {q:"39. Planet merah disebut ...", o:["Mars","Venus","Merkurius","Jupiter"], a:0},
  {q:"40. Bentuk bumi adalah ...", o:["Persegi","Bola","Silinder","Segitiga"], a:1},
  {q:"41. Hewan yang hidup di air disebut ...", o:["Ikan","Ayam","Sapi","Kucing"], a:0},
  {q:"42. Bulan terbesar di tata surya adalah ...", o:["Titan","Ganymede","Europa","Callisto"], a:1},
  {q:"43. Unsur utama udara adalah ...", o:["Oksigen","Karbon dioksida","Nitrogen","Hidrogen"], a:2},
  {q:"44. Angka romawi X berarti ...", o:["5","10","50","100"], a:1},
  {q:"45. Hewan pengerat disebut ...", o:["Kelinci","Tikus","Sapi","Kucing"], a:1},
  {q:"46. Hasil dari 12 ÷ 4 adalah ...", o:["2","3","4","6"], a:1},
  {q:"47. Bagian tubuh yang digunakan untuk melihat adalah ...", o:["Tangan","Mata","Hidung","Kaki"], a:1},
  {q:"48. Gunung tertinggi di dunia adalah ...", o:["Everest","K2","Fuji","Olympus"], a:0},
  {q:"49. Benda yang menghasilkan cahaya sendiri disebut ...", o:["Lampu","Bulan","Kaca","Kayu"], a:0},
  {q:"50. Planet terbesar kedua setelah Jupiter adalah ...", o:["Saturnus","Neptunus","Uranus","Mars"], a:0}
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
// Submit quiz dan simpan hasil
// ============================
function submitQuiz(){
  const name = document.getElementById("studentName").value.trim();
  if(!name){ alert("Masukkan nama terlebih dahulu!"); return; }

  let score = 0;
  quizData.forEach((item, i) => {
    const sel = document.querySelector(`input[name='q${i}']:checked`);
    if(sel && Number(sel.value) === item.a) score++;
  });

  const results = JSON.parse(localStorage.getItem("quiz_results") || "[]");
  results.push({ name, score, time: new Date().toISOString() });
  localStorage.setItem("quiz_results", JSON.stringify(results));

  document.getElementById("result").innerHTML =
    `Nama: <b>${name}</b><br>Nilai: <b>${score}/${quizData.length}</b> (${Math.round(score/quizData.length*100)}%)`;

  alert("✅ Kuis selesai! Nilai kamu tersimpan.");
  tampilkanDaftarNilai();
}

// ============================
// Reset quiz dengan animasi loading baru
// ============================
async function resetProtected(){
  const attempt = prompt("Masukkan password untuk reset data:");
  if(attempt === null) return;

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "<pre id='loadText'></pre>";
  const txt = document.getElementById("loadText");

  // Animasi progress bar teks
  const progressBar = [
    "*[░░░░░░░░░░] 0% ⏳*",
    "*[█░░░░░░░░░] 10% ⏳*",
    "*[███░░░░░░░] 30% ⏳*",
    "*[█████░░░░░] 50% ⏳*",
    "*[███████░░░] 70% ⏳*",
    "*[█████████░] 90% ⏳*",
    "*[██████████] 100% ✅*",
    "*🔥 LOADING COMPLETED!*"
  ];

  for (let i = 0; i < progressBar.length; i++){
    txt.textContent = progressBar[i];
    await new Promise(r => setTimeout(r, 400));
  }

  // Ambil password dari database
  try {
    const res = await fetch(RAW_PW_URL + "?_=" + Date.now(), { cache: "no-store" });
    const data = await res.json();
    if (attempt.trim() === data.reset_password) {
      localStorage.removeItem("quiz_results");
      tampilkanDaftarNilai();
      resultDiv.innerHTML = "🧹 Semua data nilai berhasil dihapus!";
      alert("✅ Berhasil mengambil DATABASE token");
    } else {
      resultDiv.innerHTML = "🔒 Akses ditolak.";
      alert("❌ Gagal mengambil DATABASE token");
    }
  } catch {
    alert("⚠️ Gagal konek ke GitHub!");
  }
}

// ============================
// Tampilkan daftar nilai
// ============================
function tampilkanDaftarNilai(){
  const list = document.getElementById("scoreList");
  list.innerHTML = "";
  const results = JSON.parse(localStorage.getItem("quiz_results") || "[]");
  if(results.length === 0){
    list.innerHTML = "<li>Belum ada peserta yang mengerjakan.</li>";
    return;
  }
  results.forEach((r, i) => {
    const pct = Math.round((r.score / quizData.length) * 100);
    list.innerHTML += `<li>${i+1}. <b>${r.name}</b> — ${r.score}/${quizData.length} (${pct}%)</li>`;
  });
}

// Tampilkan daftar nilai saat load halaman
tampilkanDaftarNilai();