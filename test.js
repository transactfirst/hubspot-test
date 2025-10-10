document.getElementById("fetchBtn").addEventListener("click", async () => {
  const statusEl = document.getElementById("status");
  const responseEl = document.getElementById("response");

  // Replace with your actual API key
  const apiKey = "ryan@ftpay.co";

  // Encode API key + empty password for Basic Auth
  const encoded = btoa(`${apiKey}:`);

  try {
    const res = await fetch("https://api.pos.dutchie.com/", {
      method: "GET",
      headers: {
        "Authorization": `Basic ${encoded}`,
        "Content-Type": "application/json"
      }
    });

    statusEl.textContent = res.status;

    const text = await res.text();
    responseEl.textContent = text;

  } catch (err) {
    statusEl.textContent = "Error";
    responseEl.textContent = err;
    console.error(err);
  }
});
