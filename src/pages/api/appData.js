// pages/api/appData.js

import gplay from 'google-play-scraper';

export default async (req, res) => {
  const { id } = req.query;

  try {
    const results = await gplay.app({appId: id});

    res.status(200).json(results);
  } catch (error) {
    console.error('Error fetching Google Play data:', error);
    res.status(500).json({ error: 'Error fetching Google Play data' });
  }
};
