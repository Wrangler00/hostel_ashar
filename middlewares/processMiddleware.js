const { randDuration, isEmpty } = require('../utils/helper');

module.exports = function timeLog(req, res, next) {
    /**
     * {
        date: //ISO formatted date time when the request was received,
        method: //HTTP method used for making the request,
        headers: //HTTP headers in the request,
        path: //request path (will start with /process),
        query: //the parsed query string as key-values, if any
        body: //request body, if any
        duration: //time taken to process the request
    }*/

    let data = {
        date: (new Date()).toISOString(),
        method: req.method,
        headers: req.headers,
        path: "/process" + req.path,
        duration: randDuration()
    }

    if (req.query && !isEmpty(req.query)) data.query = req.query;
    if (req.body && !isEmpty(req.body)) data.body = req.body;

    console.log(data);

    coll.insertOne(data);

    res.locals.data = data;
    next();
}