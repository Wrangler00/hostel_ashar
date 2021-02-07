
module.exports = (req, res) => {
    setTimeout(function () {
        res.send(res.locals.data);
    }, res.locals.data.duration * 1000);
}