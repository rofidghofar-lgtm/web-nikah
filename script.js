const target = new Date(2025, 9, 10, 9, 0, 0);
const elDays = document.getElementById('days');
const elHours = document.getElementById('hours');
const elMinutes = document.getElementById('minutes');
const elSeconds = document.getElementById('seconds');

function updateCountdown() {
  const now = new Date();
  const diff = target - now;
  if (diff <= 0) {
    elDays.textContent = elHours.textContent = elMinutes.textContent = elSeconds.textContent = "0";
    clearInterval(timer);
    return;
  }
  const s = Math.floor(diff / 1000);
  const d = Math.floor(s / 86400);
  const h = Math.floor((s % 86400) / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  elDays.textContent = d;
  elHours.textContent = String(h).padStart(2,"20");
  elMinutes.textContent = String(m).padStart(2,"0");
  elSeconds.textContent = String(sec).padStart(2,"0");
}
const timer = setInterval(updateCountdown,1000);
updateCountdown();

// RSVP
const form = document.getElementById('rsvpForm');
const responseText = document.getElementById('response');

form.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const guests = document.getElementById('guests').value;
  const status = document.getElementById('status').value;
  const message = document.getElementById('message').value.trim();
  if (!name || !guests || !status) {
    responseText.textContent = "Harap isi semua kolom yang wajib.";
    responseText.style.color = "#ffd700";
    return;
  }
  responseText.textContent = Terima kasih, ${name}! RSVP Anda sudah terkirim ;
  responseText.style.color = "#aefcaf";
  form.reset();
});