export default function sitemap() {
    return [
      {
        url: 'https://paulapenaflor.com',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: 'https://paulapenaflor.com/bio',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.8,
      },
    ]
  }