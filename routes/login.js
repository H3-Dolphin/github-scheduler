'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  
  // loginページ描画前に、どこからログインしようとしたか？を10分cookieに保存
  const from = req.query.from;
  if (from) {
    res.cookie('loginFrom', from, { expires: new Date(Date.now() + 600000)});
  }
  res.render('login');
});

module.exports = router;
