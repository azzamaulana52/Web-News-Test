export default async function handler(req, res) {
  const apiKey = process.env.NEWS_API_KEY; // simpan API key di environment variable
  const url = `https://newsapi.org/v2/everything?q=technology&apiKey=${apiKey}`;
