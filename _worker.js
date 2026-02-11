export default {
  async fetch(request) {
    return new Response("Hello from your Worker!", {
      headers: { "content-type": "text/plain" }
    })
  }
}
