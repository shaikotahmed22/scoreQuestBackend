const client = require("../utils/redisClient.js");

const cacheData = async (req, res, next) => {
  try {
    const { matchId } = req.params;

    const data = await client.get(`match:${matchId}`);

    if (data) {
      res.status(200).send(data);
    } else {
      next();
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = { cacheData };
