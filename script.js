function updateUTCTime() {
  const now = new Date();
  document.getElementById("utcTime").textContent = `UTC Time: ${now.toUTCString()}`;
}
updateUTCTime();

