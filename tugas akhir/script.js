// JavaScript: interaksi navigasi dan validasi formulir
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // mencegah halaman reload saat formulir diproses

    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const destinasi = document.getElementById("destinasi").value;
    const pesan = document.getElementById("pesan").value.trim();
    const message = document.getElementById("formMessage");

    if (nama.length < 2 || !email || !destinasi || pesan.length < 5) {
      message.textContent = "Mohon lengkapi semua kolom dengan benar.";
      message.style.color = "#b42318";
      return;
    }

    message.textContent = `Terima kasih, ${nama}! Saran untuk ${destinasi} berhasil ditampilkan. (Demo: belum dikirim ke server)`;
    message.style.color = "#1e6257";
    form.reset();
  });
});
