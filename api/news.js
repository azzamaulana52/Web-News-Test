export default async function handler(req, res) {
  const apiKey = process.env.NEWS_API_KEY; // simpan API key di environment variable

  try {
    const response = await fetch(`https://newsapi.org/v2/everything?q=technology&apiKey=${apiKey}`);
    if (!response.ok) {
      return res.status(response.status).json({ message: 'Error fetching news from NewsAPI' });
    }
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
