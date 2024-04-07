// pages/api/homeData.js

import gplay from 'google-play-scraper';

export default async (req, res) => {
  const { category, collection, num } = req.query;

  try {
    const apps = await gplay.list({
      category: gplay.category.GAME_ACTION,
      collection: gplay.collection.TOP_FREE,
      num: parseInt(num)
    });

    res.status(200).json(apps);
  } catch (error) {
    console.error('Error fetching Google Play app list:', error);
    res.status(500).json({ error: 'Error fetching Google Play app list' });
  }
};
