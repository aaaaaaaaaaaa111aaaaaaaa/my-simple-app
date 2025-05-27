const btn   = document.getElementById('btn');
const count = document.querySelector('#count strong');
let clicks = 0;
btn.addEventListener('click', () => {
  clicks += 1;
  count.textContent = clicks;
});
