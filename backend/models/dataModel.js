// SQL接続設定

const mysql = require('mysql');
// データベースの接続情報をdataController.jsから受け取る
const dbConfig = require('../config/db.config');

// データベース接続設定
const connection = mysql.createConnection({
  host: dbConfig.host,          // ホスト名
  user: dbConfig.user,          // ユーザ名
  password: dbConfig.password,  // パスワード
  database: dbConfig.database,  // データベース名
});

connection.connect(error => {    // データベース接続の実施
  if (error) throw error;        // エラーの場合、例外をスロー(->処理中断)する
  console.log("Successfully connected to the database.");     // 接続成功の場合に画面表示
});

module.exports = connection;     // 接続オブジェクトのエクスポート(オブジェクト再利用の為)

// データ取得エンドポイント
app.get('/api/data', async function (res) {
    let conn;
    try {
      conn = await pool.getConnection();
      const rows = await conn.query('SELECT temperature, humidity FROM your_table ORDER BY timestamp DESC LIMIT 7');
      res.json(rows);
    } catch (err) {
      res.status(500).json({ error: 'データ取得エラー' });
    } finally {
      if (conn) conn.end();
    }
  });