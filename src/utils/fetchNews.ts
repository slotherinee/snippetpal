export async function fetchNews() {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=programming&language=en&sortBy=publishedAt&apiKey=${process.env.NEWS_API_KEY}`
  );
  const data = await response.json();
  return data.articles.slice(0, 8);
}
