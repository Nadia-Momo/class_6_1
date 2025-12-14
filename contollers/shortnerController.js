const { isValidUrl } = require("../utils/validation");
const ShortUrl = require("../models/shortnerSchema");

const generateRandomStr = (length = 5) => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let randomStr = "";

  for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * characters.length);
    randomStr += characters[randomNumber];
  }
  return randomStr;
};

const createShortUrl = async (req, res) => {
  try {
    const { urlLong } = req.body;
    const token = req.cookies?.token; // ✅ fixed
console.log(token)
    if (!urlLong) return res.status(400).send({ message: "Url is required" });
    if (!isValidUrl(urlLong)) return res.status(400).send({ message: "Invalid Url" });

    const urlShort = generateRandomStr();

    const urlData = new ShortUrl({
      urlLong,
      urlShort
    });

    await urlData.save(); // ✅ await added

    res.status(201).send({
      longUrl: urlData.urlLong,
      shortUrl: urlData.urlShort
    });

  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Server error" });
  }
};

const redirectUrl = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.redirect(process.env.CLIENT_URL);

    const urlData = await ShortUrl.findOneAndUpdate(
      { urlShort: id },
      { $push: { visitHistory: {} } }
    );

    if (!urlData) {
      return res.redirect(process.env.CLIENT_URL);
    }

    res.redirect(urlData.urlLong);

  } catch (error) {
    console.error(error);
    res.redirect(process.env.CLIENT_URL);
  }
};

module.exports = { createShortUrl, redirectUrl };
