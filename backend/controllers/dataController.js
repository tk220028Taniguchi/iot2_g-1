// データ取得のcontroller
const db = require('../models/dataModel');    // 変数のデータモデルを格納

// リクエストとリスポンスを引数にとり、httpリクエストが来たときに実行
exports.getData = function (res) {

  // テーブルからすべてのデータを実行
  db.query('SELECT * FROM mytable', (error, results) => {
    if (error) {
      // テーブルからデータ取得時にエラーが発生した場合にステータスコード500をクライアントに返す
      return res.status(500).send(error);
    }

    // クエリの結果が格納されているresultsをjson形式でクライアントに返す
    res.json(results);
  });
};
