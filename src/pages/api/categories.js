// pages/api/categories.js

import gplay from 'google-play-scraper';

export default async (req, res) => {
  try {
    const categories = await gplay.categories();
    res.status(200).json(categories);
  } catch (error) {
    console.error('Error fetching Google Play categories:', error);
    res.status(500).json({ error: 'Error fetching Google Play categories' });
  }
};
