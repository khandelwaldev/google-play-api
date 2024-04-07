// pages/api/developerData.js

import gplay from 'google-play-scraper';

export default async (req, res) => {
  const { id } = req.query;

  try {
    const results = await gplay.developer({devId: id});

    res.status(200).json(results);
  } catch (error) {
    console.error('Error fetching Google Play data:', error);
    res.status(500).json({ error: 'Error fetching Google Play data' });
  }
};
