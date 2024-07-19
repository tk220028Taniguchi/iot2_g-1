// Expressを用いたウェブサーバーの構築
// APIエンドポイントの設定

const express = require('express');     // Expressフレームワーク
const cors = require('cors');           // CORCの許可（異なるドメインからのリクエスト可）
const app = express();                  // app変数にExpressアプリケーションを作成する
const dataRoutes = require('./routes/dataRoutes');    // 引数からインポートしたルート定義の受け取り

app.use(cors());                  // 全てのルートでCORSを許可
app.use('/api', dataRoutes);      // /apiパス上で ↑(dataRoutes)で定義されたルートを使用する様に設定

const PORT = process.env.PORT || 3306;    // POST変数に環境変数から取得したポート番号を格納(デフォルト3306)
app.listen(PORT, () => {                  // 設定したポート番号でサーバを起動
  console.log(`Server is running on port ${PORT}.`);    // 起動成功時にメッセージ表示
});
