export default {
  fetch(request, env) {
    console.log("Worker běží, token:", env.0x4AAAAAACGAgHFothta7mM0IFF7333ZU4w);
    console.log("Worker běží, site key:", env.0x4AAAAAACGAgDV7xcFq9e8m);

    return new Response(
      `Token: ${env.SECRET_TOKEN ? "OK" : "chybí"}, Site key: ${env.SITE_KEY ? "OK" : "chybí"}`
    );
  }
};

