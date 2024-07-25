const fs = require('fs');
const path = require('path');

const imagesDirectory = path.join(__dirname, '../images');

export default (req, res) => {
  fs.readdir(imagesDirectory, (err, files) => {
    if (err) {
      return res.status(500).send('Unable to scan directory');
    }
    const images = files.filter(file => /\.(jpg|jpeg|png|gif)$/.test(file));
    res.json(images);
  });
};
