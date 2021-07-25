const express = require('express');
const app = express();

app.use(express.static('./dist/MaikkiApp-Angular'));

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/MaikkiApp-Angular/'}
);
});

app.listen(process.env.PORT || 5000);
