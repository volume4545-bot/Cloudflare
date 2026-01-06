export default {
  fetch(req) {
    console.log("PING", new Date().toISOString());
    return new Response("OK");
  }
};
