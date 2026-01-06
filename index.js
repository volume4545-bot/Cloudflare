export default {
  async fetch(request, env) {
    try {
      // Použití tokenu
      const res = await fetch("https://httpbin.org/bearer", {
        headers: {
          "Authorization": `Bearer ${env.SECRET_TOKEN}`
        }
      });

      const data = await res.json();

      // Vracíme site key a odpověď z API
      const body = {
        siteKey: env.SITE_KEY,
        tokenUsed: env.SECRET_TOKEN ? true : false,
        apiResponse: data
      };

      // Logujeme do Cloudflare Live logs
      console.log("API volání úspěšné:", data);

      return new Response(JSON.stringify(body, null, 2), {
        headers: { "Content-Type": "application/json" }
      });
    } catch (e) {
      console.log("Chyba při volání API:", e.message);
      return new Response("Chyba při volání API: " + e.message, { status: 500 });
    }
  }
};
