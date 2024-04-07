// pages/api/appReviews.js

import gplay from 'google-play-scraper';

export default async (req, res) => {
    const { id } = req.query;

    // gplay.reviews({
    //    appId: 'com.dxco.pandavszombies',
    //   sort: gplay.sort.RATING,
    // paginate: true,
    // nextPaginationToken: 'TOKEN_FROM_THE_PREVIOUS_REQUEST' // you can omit this parameter
    // }).then(console.log, console.log);

    try {
        const results = await gplay.reviews({
            appId: id,
            sort: gplay.sort.RATING,
            //num: 3000
            paginate: true
        });

        res.status(200).json(results);
    } catch (error) {
        console.error('Error fetching Google Play data:', error);
        res.status(500).json({ error: 'Error fetching Google Play data' });
    }
};
