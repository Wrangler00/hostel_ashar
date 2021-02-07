
exports.isEmpty = obj => (obj && Object.keys(obj).length === 0 && obj.constructor === Object);

exports.randDuration = () => (Math.floor(Math.random() * (Number(process.env.MAXX) - Number(process.env.MINN) + 1) + Number(process.env.MINN)));

