export default {
  fetch(request, env) {
    return new Response(`<!DOCTYPE html>
<html lang="cs">
<head>
  <meta charset="UTF-8">
  <title>Turnstile test</title>
  <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
  <style>
    body { font-family: sans-serif; padding: 2rem; }
    pre { background: #f5f5f5; padding: 1rem; word-break: break-all; }
  </style>
</head>
<body>

  <h1>Cloudflare Turnstile – Worker test</h1>

  <div
    class="cf-turnstile"
    data-sitekey="0x4AAAAAACGAgDV7xcFq9e8m"
    data-callback="onTurnstileSuccess">
  </div>

  <h3>Token:</h3>
  <pre id="token">čekám…</pre>

  <script>
    function onTurnstileSuccess(token) {
      console.log("Turnstile token:", token);
      document.getElementById("token").textContent = token;
    }
  </script>

</body>
</html>`, {
      headers: { "Content-Type": "text/html; charset=utf-8" }
    });
  }
};
