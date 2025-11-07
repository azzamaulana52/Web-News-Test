console.log("hello");

// Fetch news from NewsAPI
async function fetchNews() {
  const apiKey = '35e9f2c44cc64db6aa812d39c29b5aed';
  const url = `https://newsapi.org/v2/everything?domains=detik.com,kompas.com&apiKey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.status === 'ok') {
      const articles = data.articles.slice(0, 12); // Limit to 12 articles
      const cards = document.querySelectorAll('.card');

      articles.forEach((article, index) => {
        if (cards[index]) {
          const card = cards[index];
          const img = card.querySelector('.card-img-top');
          const title = card.querySelector('.card-title');
          const dateEl = card.querySelector('.text-muted');
          const text = card.querySelector('.card-text');
          const link = card.querySelector('.btn');

          if (img) img.src = article.urlToImage || 'https://via.placeholder.com/300x200?text=No+Image';
          if (title) title.textContent = article.title || 'No Title';
          if (dateEl) dateEl.textContent = `${new Date(article.publishedAt).toLocaleDateString('id-ID')} - Berita`;
          if (text) text.textContent = article.description || 'No Description';
          if (link) {
            link.href = article.url || '#';
            link.textContent = 'Baca Selengkapnya';
          }
        }
      });
    } else {
      console.error('Error fetching news:', data.message);
    }
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

// Call fetchNews when the page loads
window.addEventListener('DOMContentLoaded', fetchNews);
