
module.exports = (req, res) => {
    // setTimeout(function () {
    //     res.send(res.locals.data);
    // }, res.locals.data.duration * 1000);

    const mp = new Map();

    mp.set("a",1);

    console.log(mp.entries())
    res.json(Object.fromEntries(mp));
}