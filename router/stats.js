const express = require('express');
const router = express.Router();

const { isEmpty } = require('../utils/helper');

router.get('/', async (req, res) => {
    const { fromDate, toDate } = req.query;

    let match = {}, query = [];

    if (fromDate) match["gte"] = new Date(fromDate);
    if (toDate) match["lte"] = new Date(toDate);

    if (match && !isEmpty()) query.push({ "$match": { "date": match } });

    query.push({
        "$group": {
            _id: "$method",
            total: {
                $sum: 1
            },
            avg_response_time: {
                $avg: "$duration"
            }
        }
    });


    const data = await coll.aggregate(query).toArray();

    console.log(data);
    res.send({ data });
});

module.exports = router;