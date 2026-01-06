export default {
  fetch(request, env) {
    console.log("Worker běží, token:", env.SECRET_TOKEN);
    console.log("Worker běží, site key:", env.SITE_KEY);

    return new Response(
      `Token: ${env.SECRET_TOKEN ? "OK" : "chybí"}, Site key: ${env.SITE_KEY ? "OK" : "chybí"}`
    );
  }
};
