// エンドポイント
const express = require('express');         //  Expressフレームワーク
const router = express.Router();            // 新しいルーターオブジェクトの作成（EndPointで使用）
// データ取得用のコントローラーモジュールのインポート
const dataController = require('../controllers/dataController'); 

// GetEndPointの定義
//  /data　パスに対してリクエストをpullする(dataController.getDataの呼び出し)
router.get('/data', dataController.getData);     

// ルータオブジェクトのエクスポート(Expressアプリケーションに組み込み可)
module.exports = router;                       
