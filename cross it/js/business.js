let t = 24 * 60 * 60;
setInterval(() => {
  t--;
  let h = String(Math.floor(t / 3600)).padStart(2, "0");
  let m = String(Math.floor((t % 3600) / 60)).padStart(2, "0");
  let s = String(t % 60).padStart(2, "0");
  document.getElementById("timer").innerText = `${h}:${m}:${s}`;
}, 1000);
