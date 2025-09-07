const MENU_DATABASE = {
    japanese: {
        main: [
            // 魚料理
            { name: '鮭の塩焼き', calories: 200, cost: 250, healthScore: 5 },
            { name: 'さばの味噌煮', calories: 250, cost: 220, healthScore: 4 },
            { name: 'さんまの塩焼き', calories: 230, cost: 180, healthScore: 5 },
            { name: 'ぶりの照り焼き', calories: 280, cost: 320, healthScore: 4 },
            { name: '金目鯛の煮付け', calories: 220, cost: 450, healthScore: 5 },
            { name: 'あじの南蛮漬け', calories: 180, cost: 200, healthScore: 4 },
            { name: 'うなぎの蒲焼き', calories: 450, cost: 980, healthScore: 3 },
            { name: 'たらの西京焼き', calories: 190, cost: 280, healthScore: 5 },
            { name: 'かれいの煮付け', calories: 160, cost: 220, healthScore: 5 },
            
            // 肉料理
            { name: '鶏の照り焼き', calories: 280, cost: 200, healthScore: 4 },
            { name: '豚の生姜焼き', calories: 320, cost: 280, healthScore: 3 },
            { name: 'とんかつ', calories: 520, cost: 380, healthScore: 2 },
            { name: 'チキンカツ', calories: 450, cost: 320, healthScore: 2 },
            { name: '牛すき焼き', calories: 480, cost: 680, healthScore: 3 },
            { name: '豚角煮', calories: 420, cost: 350, healthScore: 2 },
            { name: 'からあげ', calories: 380, cost: 250, healthScore: 2 },
            { name: '鶏つくね', calories: 220, cost: 180, healthScore: 3 },
            { name: 'ハンバーグ和風', calories: 350, cost: 280, healthScore: 3 },
            
            // 丼・麺類
            { name: '親子丼', calories: 450, cost: 320, healthScore: 3 },
            { name: '牛丼', calories: 520, cost: 380, healthScore: 2 },
            { name: 'カツ丼', calories: 680, cost: 450, healthScore: 2 },
            { name: '天丼', calories: 580, cost: 420, healthScore: 2 },
            { name: '海鮮丼', calories: 420, cost: 680, healthScore: 4 },
            { name: 'うな丼', calories: 580, cost: 1200, healthScore: 3 },
            { name: '焼き鳥丼', calories: 480, cost: 350, healthScore: 3 },
            { name: 'そば', calories: 320, cost: 380, healthScore: 4 },
            { name: 'うどん', calories: 280, cost: 320, healthScore: 3 },
            { name: 'ざるそば', calories: 250, cost: 420, healthScore: 4 },
            { name: '天ざるそば', calories: 450, cost: 580, healthScore: 3 },
            { name: 'きつねうどん', calories: 320, cost: 350, healthScore: 3 },
            
            // 揚げ物・焼き物
            { name: '天ぷら盛り合わせ', calories: 400, cost: 450, healthScore: 2 },
            { name: 'エビフライ', calories: 320, cost: 380, healthScore: 2 },
            { name: 'アジフライ', calories: 280, cost: 250, healthScore: 3 },
            { name: 'メンチカツ', calories: 420, cost: 280, healthScore: 2 },
            { name: 'コロッケ', calories: 300, cost: 150, healthScore: 2 },
            { name: 'お好み焼き', calories: 480, cost: 320, healthScore: 3 },
            { name: 'たこ焼き', calories: 350, cost: 280, healthScore: 2 },
            { name: '焼き鳥', calories: 250, cost: 200, healthScore: 3 },
            
            // 鍋・煮物
            { name: 'すき焼き', calories: 520, cost: 780, healthScore: 3 },
            { name: 'しゃぶしゃぶ', calories: 380, cost: 680, healthScore: 4 },
            { name: 'もつ鍋', calories: 420, cost: 480, healthScore: 3 },
            { name: 'おでん', calories: 280, cost: 320, healthScore: 4 },
            { name: '肉じゃが', calories: 320, cost: 250, healthScore: 4 },
            { name: '筑前煮', calories: 220, cost: 280, healthScore: 5 },
            
            // 刺身・生もの
            { name: '刺身盛り合わせ', calories: 180, cost: 580, healthScore: 5 },
            { name: 'まぐろ刺身', calories: 120, cost: 480, healthScore: 5 },
            { name: 'サーモン刺身', calories: 150, cost: 420, healthScore: 5 },
            { name: '海鮮カルパッチョ', calories: 160, cost: 520, healthScore: 5 }
        ],
        side: [
            // ご飯類
            { name: '白米', calories: 160, cost: 50, healthScore: 3 },
            { name: '玄米', calories: 140, cost: 80, healthScore: 5 },
            { name: '雑穀米', calories: 150, cost: 120, healthScore: 5 },
            { name: '赤飯', calories: 180, cost: 150, healthScore: 3 },
            { name: 'おにぎり', calories: 180, cost: 100, healthScore: 3 },
            { name: '稲荷寿司', calories: 220, cost: 180, healthScore: 3 },
            { name: '巻き寿司', calories: 200, cost: 250, healthScore: 3 },
            
            // 汁物
            { name: '味噌汁', calories: 40, cost: 80, healthScore: 4 },
            { name: 'すまし汁', calories: 25, cost: 100, healthScore: 4 },
            { name: '豚汁', calories: 120, cost: 150, healthScore: 4 },
            { name: 'けんちん汁', calories: 80, cost: 120, healthScore: 5 },
            { name: 'わかめスープ', calories: 30, cost: 80, healthScore: 5 },
            { name: 'たまごスープ', calories: 60, cost: 100, healthScore: 3 },
            
            // 漬物・和え物
            { name: '漬物', calories: 15, cost: 60, healthScore: 4 },
            { name: 'キムチ', calories: 25, cost: 100, healthScore: 4 },
            { name: '梅干し', calories: 8, cost: 80, healthScore: 4 },
            { name: 'なめたけ', calories: 30, cost: 120, healthScore: 3 },
            { name: 'もずく酢', calories: 20, cost: 150, healthScore: 5 },
            
            // 煮物・炒め物
            { name: 'ひじきの煮物', calories: 50, cost: 120, healthScore: 5 },
            { name: 'きんぴらごぼう', calories: 60, cost: 110, healthScore: 4 },
            { name: '切り干し大根', calories: 45, cost: 100, healthScore: 5 },
            { name: '高野豆腐の煮物', calories: 80, cost: 120, healthScore: 5 },
            { name: 'かぼちゃの煮物', calories: 90, cost: 100, healthScore: 4 },
            { name: '里芋の煮っころがし', calories: 110, cost: 120, healthScore: 4 },
            { name: 'れんこんのきんぴら', calories: 70, cost: 150, healthScore: 4 },
            { name: 'もやし炒め', calories: 50, cost: 60, healthScore: 4 },
            
            // お浸し・サラダ
            { name: 'ほうれん草のお浸し', calories: 25, cost: 100, healthScore: 5 },
            { name: '小松菜のお浸し', calories: 20, cost: 80, healthScore: 5 },
            { name: 'ちくわと胡瓜の和え物', calories: 40, cost: 80, healthScore: 3 },
            { name: 'わかめときゅうりの酢の物', calories: 15, cost: 100, healthScore: 5 },
            { name: 'トマトサラダ', calories: 25, cost: 120, healthScore: 5 },
            { name: 'ポテトサラダ', calories: 180, cost: 150, healthScore: 3 },
            { name: 'マカロニサラダ', calories: 220, cost: 120, healthScore: 2 },
            
            // 豆腐料理
            { name: '冷奴', calories: 80, cost: 90, healthScore: 4 },
            { name: '湯豆腐', calories: 100, cost: 120, healthScore: 5 },
            { name: 'アゲダシ豆腐', calories: 150, cost: 180, healthScore: 3 },
            { name: '豆腐ハンバーグ', calories: 180, cost: 200, healthScore: 4 },
            { name: '麻婆豆腐', calories: 220, cost: 250, healthScore: 3 },
            
            // その他
            { name: '納豆', calories: 100, cost: 80, healthScore: 5 },
            { name: '温泉卵', calories: 80, cost: 100, healthScore: 4 },
            { name: 'だし巻き卵', calories: 120, cost: 150, healthScore: 3 },
            { name: '茶わん蒸し', calories: 90, cost: 200, healthScore: 4 }
        ],
        drink: [
            // お茶類
            { name: '緑茶', calories: 2, cost: 30, healthScore: 5 },
            { name: '麦茶', calories: 1, cost: 25, healthScore: 5 },
            { name: 'ほうじ茶', calories: 2, cost: 40, healthScore: 5 },
            { name: '玄米茶', calories: 2, cost: 50, healthScore: 5 },
            { name: 'ウーロン茶', calories: 0, cost: 80, healthScore: 4 },
            { name: 'そば茶', calories: 3, cost: 100, healthScore: 5 },
            { name: 'とうもろこし茶', calories: 5, cost: 80, healthScore: 4 },
            { name: 'どくだみ茶', calories: 0, cost: 120, healthScore: 5 },
            
            // 乳製品
            { name: '牛乳', calories: 67, cost: 80, healthScore: 4 },
            { name: '豆乳', calories: 55, cost: 120, healthScore: 4 },
            { name: 'アーモンドミルク', calories: 30, cost: 180, healthScore: 4 },
            
            // その他
            { name: '水', calories: 0, cost: 0, healthScore: 5 },
            { name: 'スポーツドリンク', calories: 25, cost: 120, healthScore: 3 },
            { name: '野菜ジュース', calories: 45, cost: 150, healthScore: 4 },
            { name: '青汁', calories: 15, cost: 200, healthScore: 5 },
            { name: '甘酒', calories: 80, cost: 150, healthScore: 4 },
            { name: 'はちみつレモン', calories: 60, cost: 120, healthScore: 3 }
        ]
    },
    western: {
        main: [
            // ステーキ・グリル料理
            { name: 'ビーフステーキ', calories: 400, cost: 800, healthScore: 3 },
            { name: 'ポークステーキ', calories: 350, cost: 600, healthScore: 3 },
            { name: 'ラムチョップ', calories: 380, cost: 920, healthScore: 3 },
            { name: 'グリルチキン', calories: 250, cost: 300, healthScore: 4 },
            { name: 'グリルサーモン', calories: 280, cost: 450, healthScore: 5 },
            { name: 'グリル野菜', calories: 120, cost: 280, healthScore: 5 },
            { name: 'BBQリブ', calories: 520, cost: 680, healthScore: 2 },
            { name: 'ローストビーフ', calories: 320, cost: 780, healthScore: 3 },
            { name: 'ローストチキン', calories: 280, cost: 420, healthScore: 4 },
            
            // ハンバーガー・サンドイッチ
            { name: 'ハンバーガー', calories: 540, cost: 380, healthScore: 2 },
            { name: 'チーズバーガー', calories: 620, cost: 450, healthScore: 2 },
            { name: 'ベーコンバーガー', calories: 680, cost: 520, healthScore: 1 },
            { name: 'フィッシュバーガー', calories: 480, cost: 420, healthScore: 3 },
            { name: 'クラブハウスサンド', calories: 450, cost: 480, healthScore: 3 },
            { name: 'BLTサンド', calories: 380, cost: 350, healthScore: 3 },
            { name: 'ツナサンド', calories: 320, cost: 280, healthScore: 3 },
            { name: 'ハムサンド', calories: 340, cost: 250, healthScore: 3 },
            { name: 'エッグサンド', calories: 280, cost: 200, healthScore: 3 },
            
            // 肉料理
            { name: 'ハンバーグ', calories: 350, cost: 250, healthScore: 2 },
            { name: 'ミートローフ', calories: 380, cost: 320, healthScore: 3 },
            { name: 'ポークカツ', calories: 450, cost: 320, healthScore: 2 },
            { name: 'チキンカツ', calories: 420, cost: 280, healthScore: 2 },
            { name: 'フライドチキン', calories: 480, cost: 320, healthScore: 2 },
            { name: 'チキンナゲット', calories: 380, cost: 250, healthScore: 2 },
            { name: 'ソーセージ', calories: 280, cost: 200, healthScore: 2 },
            { name: 'ベーコンエッグ', calories: 320, cost: 220, healthScore: 2 },
            
            // 魚料理
            { name: 'サーモンソテー', calories: 280, cost: 450, healthScore: 5 },
            { name: 'フィッシュアンドチップス', calories: 620, cost: 520, healthScore: 2 },
            { name: 'ムニエル', calories: 250, cost: 380, healthScore: 4 },
            { name: 'シーフードグリル', calories: 320, cost: 680, healthScore: 4 },
            { name: 'ロブスター', calories: 180, cost: 1200, healthScore: 4 },
            { name: '蟹料理', calories: 200, cost: 980, healthScore: 4 },
            
            // 卵料理
            { name: 'オムレツ', calories: 200, cost: 150, healthScore: 3 },
            { name: 'スクランブルエッグ', calories: 180, cost: 120, healthScore: 3 },
            { name: 'エッグベネディクト', calories: 420, cost: 480, healthScore: 3 },
            { name: 'キッシュ', calories: 380, cost: 420, healthScore: 3 },
            { name: 'フレンチトースト', calories: 450, cost: 320, healthScore: 2 },
            { name: 'パンケーキ', calories: 520, cost: 380, healthScore: 2 },
            { name: 'ワッフル', calories: 480, cost: 400, healthScore: 2 },
            
            // シチュー・煮込み料理
            { name: 'ビーフシチュー', calories: 380, cost: 520, healthScore: 3 },
            { name: 'チキンシチュー', calories: 320, cost: 420, healthScore: 4 },
            { name: 'アイリッシュシチュー', calories: 420, cost: 480, healthScore: 3 },
            { name: 'ガンボ', calories: 350, cost: 450, healthScore: 3 },
            { name: 'チリコンカン', calories: 380, cost: 350, healthScore: 3 },
            { name: 'ハンガリアンシチュー', calories: 450, cost: 520, healthScore: 3 },
            
            // その他
            { name: 'ピザ', calories: 520, cost: 480, healthScore: 2 },
            { name: 'ホットドッグ', calories: 350, cost: 200, healthScore: 2 },
            { name: 'タコス', calories: 280, cost: 250, healthScore: 3 },
            { name: 'ブリトー', calories: 520, cost: 380, healthScore: 3 },
            { name: 'ナチョス', calories: 680, cost: 420, healthScore: 1 }
        ],
        side: [
            // パン類
            { name: 'バゲット', calories: 120, cost: 150, healthScore: 3 },
            { name: 'クロワッサン', calories: 280, cost: 200, healthScore: 2 },
            { name: 'マフィン', calories: 320, cost: 180, healthScore: 2 },
            { name: 'ベーグル', calories: 250, cost: 220, healthScore: 3 },
            { name: 'トースト', calories: 120, cost: 80, healthScore: 3 },
            { name: 'ガーリックブレッド', calories: 180, cost: 150, healthScore: 2 },
            { name: 'コーンブレッド', calories: 200, cost: 180, healthScore: 3 },
            { name: 'プレッツェル', calories: 280, cost: 200, healthScore: 2 },
            
            // ポテト料理
            { name: 'フライドポテト', calories: 220, cost: 120, healthScore: 1 },
            { name: 'マッシュポテト', calories: 180, cost: 150, healthScore: 3 },
            { name: 'ベークドポテト', calories: 160, cost: 100, healthScore: 4 },
            { name: 'ポテトグラタン', calories: 320, cost: 280, healthScore: 2 },
            { name: 'ハッシュブラウン', calories: 250, cost: 180, healthScore: 2 },
            { name: 'ポテトサラダ', calories: 180, cost: 150, healthScore: 3 },
            { name: 'スイートポテト', calories: 140, cost: 120, healthScore: 4 },
            
            // サラダ
            { name: 'グリーンサラダ', calories: 50, cost: 180, healthScore: 5 },
            { name: 'シーザーサラダ', calories: 220, cost: 320, healthScore: 3 },
            { name: 'コブサラダ', calories: 380, cost: 450, healthScore: 3 },
            { name: 'ニコワーズサラダ', calories: 320, cost: 520, healthScore: 4 },
            { name: 'コールスロー', calories: 80, cost: 150, healthScore: 3 },
            { name: 'カプレーゼサラダ', calories: 280, cost: 420, healthScore: 4 },
            { name: 'ウォルドーフサラダ', calories: 250, cost: 380, healthScore: 3 },
            { name: 'タブーリサラダ', calories: 180, cost: 280, healthScore: 5 },
            { name: 'キャロットサラダ', calories: 120, cost: 150, healthScore: 4 },
            
            // ご飯・穀物
            { name: 'ライス', calories: 160, cost: 80, healthScore: 3 },
            { name: 'ピラフ', calories: 220, cost: 180, healthScore: 3 },
            { name: 'リゾット', calories: 280, cost: 320, healthScore: 3 },
            { name: 'キノアサラダ', calories: 180, cost: 350, healthScore: 5 },
            { name: 'クスクス', calories: 200, cost: 250, healthScore: 4 },
            
            // スープ
            { name: 'コーンスープ', calories: 80, cost: 120, healthScore: 3 },
            { name: 'オニオンスープ', calories: 120, cost: 180, healthScore: 4 },
            { name: 'トマトスープ', calories: 90, cost: 150, healthScore: 4 },
            { name: 'チキンスープ', calories: 100, cost: 200, healthScore: 4 },
            { name: 'ミネストローネ', calories: 110, cost: 180, healthScore: 5 },
            { name: 'クラムチャウダー', calories: 220, cost: 320, healthScore: 3 },
            { name: 'ガスパチョ', calories: 60, cost: 250, healthScore: 5 },
            { name: 'ビシソワーズ', calories: 150, cost: 280, healthScore: 4 },
            
            // その他
            { name: '茹でとうもろこし', calories: 120, cost: 100, healthScore: 4 },
            { name: 'アスパラガス', calories: 30, cost: 200, healthScore: 5 },
            { name: 'ブロッコリー', calories: 35, cost: 120, healthScore: 5 },
            { name: 'グリーンビーンズ', calories: 40, cost: 150, healthScore: 5 },
            { name: 'マカロニチーズ', calories: 320, cost: 180, healthScore: 2 },
            { name: 'オニオンリング', calories: 280, cost: 220, healthScore: 1 }
        ],
        drink: [
            // コーヒー類
            { name: 'コーヒー', calories: 5, cost: 150, healthScore: 3 },
            { name: 'エスプレッソ', calories: 2, cost: 200, healthScore: 3 },
            { name: 'カプチーノ', calories: 80, cost: 250, healthScore: 3 },
            { name: 'ラテ', calories: 120, cost: 280, healthScore: 3 },
            { name: 'モカ', calories: 180, cost: 320, healthScore: 2 },
            { name: 'アメリカーノ', calories: 10, cost: 180, healthScore: 3 },
            { name: 'アイスコーヒー', calories: 5, cost: 150, healthScore: 3 },
            { name: 'フラッペ', calories: 220, cost: 380, healthScore: 2 },
            
            // 紅茶類
            { name: '紅茶', calories: 2, cost: 100, healthScore: 4 },
            { name: 'アールグレイ', calories: 2, cost: 120, healthScore: 4 },
            { name: 'イングリッシュブレックファスト', calories: 2, cost: 150, healthScore: 4 },
            { name: 'チャイ', calories: 60, cost: 180, healthScore: 3 },
            { name: 'アイスティー', calories: 5, cost: 100, healthScore: 4 },
            { name: 'ハーブティー', calories: 2, cost: 200, healthScore: 5 },
            { name: 'カモミールティー', calories: 2, cost: 180, healthScore: 5 },
            
            // ジュース類
            { name: 'オレンジジュース', calories: 110, cost: 120, healthScore: 2 },
            { name: 'アップルジュース', calories: 120, cost: 150, healthScore: 2 },
            { name: 'グレープフルーツジュース', calories: 90, cost: 180, healthScore: 3 },
            { name: 'クランベリージュース', calories: 140, cost: 200, healthScore: 3 },
            { name: 'トマトジュース', calories: 40, cost: 120, healthScore: 4 },
            { name: 'レモネード', calories: 120, cost: 150, healthScore: 2 },
            { name: 'フルーツパンチ', calories: 150, cost: 180, healthScore: 2 },
            
            // 乳製品
            { name: '牛乳', calories: 67, cost: 80, healthScore: 4 },
            { name: '低脂肪乳', calories: 45, cost: 90, healthScore: 4 },
            { name: 'スキムミルク', calories: 35, cost: 85, healthScore: 4 },
            { name: 'チョコレートミルク', calories: 150, cost: 120, healthScore: 2 },
            { name: 'バターミルク', calories: 80, cost: 150, healthScore: 3 },
            
            // 炭酸飲料
            { name: 'コーラ', calories: 140, cost: 100, healthScore: 1 },
            { name: 'スプライト', calories: 140, cost: 100, healthScore: 1 },
            { name: 'ジンジャーエール', calories: 130, cost: 120, healthScore: 2 },
            { name: '炭酸水', calories: 0, cost: 80, healthScore: 4 },
            { name: 'ルートビア', calories: 160, cost: 120, healthScore: 1 },
            
            // その他
            { name: '水', calories: 0, cost: 0, healthScore: 5 },
            { name: 'スポーツドリンク', calories: 60, cost: 150, healthScore: 3 },
            { name: 'エナジードリンク', calories: 110, cost: 200, healthScore: 1 },
            { name: 'ココア', calories: 150, cost: 180, healthScore: 3 },
            { name: 'ホットチョコレート', calories: 180, cost: 200, healthScore: 2 }
        ]
    },
    chinese: {
        main: [
            { name: '麻婆豆腐', calories: 280, cost: 320, healthScore: 3 },
            { name: 'チャーハン', calories: 450, cost: 280, healthScore: 2 },
            { name: '青椒肉絲', calories: 250, cost: 380, healthScore: 4 },
            { name: '酢豚', calories: 380, cost: 420, healthScore: 2 },
            { name: '餃子', calories: 320, cost: 250, healthScore: 3 },
            { name: 'エビチリ', calories: 280, cost: 480, healthScore: 3 }
        ],
        side: [
            { name: '白米', calories: 160, cost: 50, healthScore: 3 },
            { name: 'ワンタンスープ', calories: 80, cost: 150, healthScore: 3 },
            { name: 'もやし炒め', calories: 60, cost: 80, healthScore: 4 },
            { name: '中華サラダ', calories: 70, cost: 120, healthScore: 4 }
        ],
        drink: [
            { name: '烏龍茶', calories: 0, cost: 80, healthScore: 4 },
            { name: 'ジャスミン茶', calories: 0, cost: 100, healthScore: 4 },
            { name: 'コーラ', calories: 140, cost: 100, healthScore: 1 }
        ]
    },
    italian: {
        main: [
            { name: 'カルボナーラ', calories: 520, cost: 450, healthScore: 2 },
            { name: 'ペペロンチーノ', calories: 380, cost: 320, healthScore: 3 },
            { name: 'ボロネーゼ', calories: 450, cost: 420, healthScore: 3 },
            { name: 'マルゲリータピザ', calories: 480, cost: 580, healthScore: 2 },
            { name: 'リゾット', calories: 350, cost: 480, healthScore: 3 }
        ],
        side: [
            { name: 'シーザーサラダ', calories: 120, cost: 280, healthScore: 3 },
            { name: 'カプレーゼ', calories: 150, cost: 350, healthScore: 4 },
            { name: 'ガーリックブレッド', calories: 180, cost: 150, healthScore: 2 },
            { name: 'ミネストローネ', calories: 90, cost: 200, healthScore: 4 }
        ],
        drink: [
            { name: 'エスプレッソ', calories: 2, cost: 200, healthScore: 3 },
            { name: '赤ワイン', calories: 85, cost: 400, healthScore: 3 },
            { name: 'ペリエ', calories: 0, cost: 150, healthScore: 5 }
        ]
    },
    korean: {
        main: [
            { name: 'ビビンバ', calories: 420, cost: 380, healthScore: 4 },
            { name: 'キムチチゲ', calories: 280, cost: 320, healthScore: 4 },
            { name: '焼肉', calories: 480, cost: 780, healthScore: 3 },
            { name: 'チャプチェ', calories: 320, cost: 280, healthScore: 3 },
            { name: 'サムギョプサル', calories: 580, cost: 680, healthScore: 2 }
        ],
        side: [
            { name: '白米', calories: 160, cost: 50, healthScore: 3 },
            { name: 'キムチ', calories: 25, cost: 100, healthScore: 4 },
            { name: 'ナムル', calories: 40, cost: 120, healthScore: 5 },
            { name: 'わかめスープ', calories: 30, cost: 100, healthScore: 4 }
        ],
        drink: [
            { name: 'マッコリ', calories: 45, cost: 300, healthScore: 2 },
            { name: '韓国茶', calories: 5, cost: 120, healthScore: 4 },
            { name: 'コーン茶', calories: 8, cost: 80, healthScore: 4 }
        ]
    },
    healthy: {
        main: [
            { name: 'グリルサーモン', calories: 280, cost: 480, healthScore: 5 },
            { name: 'チキンブレスト', calories: 180, cost: 250, healthScore: 5 },
            { name: '豆腐ステーキ', calories: 150, cost: 120, healthScore: 5 },
            { name: '蒸し魚', calories: 200, cost: 350, healthScore: 5 },
            { name: 'ポケボウル', calories: 320, cost: 580, healthScore: 5 }
        ],
        side: [
            { name: '玄米', calories: 110, cost: 80, healthScore: 5 },
            { name: 'キヌアサラダ', calories: 180, cost: 320, healthScore: 5 },
            { name: '蒸し野菜', calories: 80, cost: 150, healthScore: 5 },
            { name: 'アボカドサラダ', calories: 200, cost: 280, healthScore: 5 },
            { name: 'スープ', calories: 50, cost: 120, healthScore: 5 }
        ],
        drink: [
            { name: 'グリーンスムージー', calories: 80, cost: 250, healthScore: 5 },
            { name: 'デトックスウォーター', calories: 5, cost: 100, healthScore: 5 },
            { name: 'ハーブティー', calories: 2, cost: 150, healthScore: 5 },
            { name: '豆乳', calories: 55, cost: 120, healthScore: 4 }
        ]
    }
};

class MealPlanner {
    constructor() {
        this.data = {
            settings: {
                budget: 0,
                dailyCalories: 2000,
                mealsPerDay: 3,
                healthLevel: 3,
                cuisinePreferences: ['japanese'],
                dietaryRestrictions: []
            },
            budget: {
                weekly: 0,
                used: 0
            },
            weeklyPlan: {},
            expenses: []
        };
        this.loadData();
        this.initializeEventListeners();
        this.updateBudgetDisplay();
        this.displayExpenses();
        this.displayWeeklyPlan();
        this.updateStats();
    }

    saveData() {
        localStorage.setItem('mealPlannerData', JSON.stringify(this.data));
    }

    loadData() {
        const savedData = localStorage.getItem('mealPlannerData');
        if (savedData) {
            this.data = { ...this.data, ...JSON.parse(savedData) };
        }
    }

    initializeEventListeners() {
        const healthSlider = document.getElementById('health-level');
        if (healthSlider) {
            healthSlider.addEventListener('input', this.updateHealthDescription.bind(this));
            this.updateHealthDescription();
        }
    }

    updateHealthDescription() {
        const level = document.getElementById('health-level').value;
        const descriptions = {
            1: '高カロリー・ジャンクフード中心',
            2: '普通の食事・たまにジャンクフード',
            3: 'バランスの取れた食事',
            4: '野菜多め・ヘルシー志向',
            5: '超健康的・オーガニック重視'
        };
        document.getElementById('health-description').textContent = descriptions[level] || 'バランスの取れた食事';
    }

    generateWeeklyPlan() {
        this.saveSettings();
        
        const settings = this.data.settings;
        const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
        const mealTypes = this.getMealTypes(settings.mealsPerDay);
        
        this.data.weeklyPlan = {};
        this.data.budget.weekly = settings.budget;
        
        let totalWeeklyCost = 0;
        let totalWeeklyCalories = 0;
        
        days.forEach(day => {
            this.data.weeklyPlan[day] = {};
            let dailyCalories = 0;
            
            mealTypes.forEach(mealType => {
                const targetCalories = this.getTargetCalories(mealType, settings.dailyCalories, settings.mealsPerDay);
                const meal = this.selectMeal(settings, targetCalories, mealType);
                
                this.data.weeklyPlan[day][mealType] = meal;
                dailyCalories += meal.calories;
                totalWeeklyCost += meal.cost;
            });
            
            totalWeeklyCalories += dailyCalories;
        });
        
        this.saveData();
        this.displayWeeklyPlan();
        this.updateCaloriesSummary(totalWeeklyCalories, totalWeeklyCost);
        
        showTab('weekly-plan');
    }

    saveSettings() {
        this.data.settings.budget = parseFloat(document.getElementById('weekly-budget-setup').value) || 0;
        this.data.settings.dailyCalories = parseFloat(document.getElementById('daily-calories').value) || 2000;
        this.data.settings.mealsPerDay = parseInt(document.getElementById('meals-per-day').value) || 3;
        this.data.settings.healthLevel = parseInt(document.getElementById('health-level').value) || 3;
        
        const cuisineCheckboxes = document.querySelectorAll('.cuisine-preferences input[type="checkbox"]:checked');
        this.data.settings.cuisinePreferences = Array.from(cuisineCheckboxes).map(cb => cb.value);
        
        const restrictionCheckboxes = document.querySelectorAll('.dietary-restrictions input[type="checkbox"]:checked');
        this.data.settings.dietaryRestrictions = Array.from(restrictionCheckboxes).map(cb => cb.value);
        
        if (this.data.settings.cuisinePreferences.length === 0) {
            this.data.settings.cuisinePreferences = ['japanese'];
        }
    }

    getMealTypes(mealsPerDay) {
        switch (mealsPerDay) {
            case 2: return ['breakfast', 'dinner'];
            case 4: return ['breakfast', 'lunch', 'snack', 'dinner'];
            default: return ['breakfast', 'lunch', 'dinner'];
        }
    }

    getTargetCalories(mealType, dailyCalories, mealsPerDay) {
        const ratios = {
            2: { breakfast: 0.4, dinner: 0.6 },
            3: { breakfast: 0.25, lunch: 0.35, dinner: 0.4 },
            4: { breakfast: 0.25, lunch: 0.3, snack: 0.1, dinner: 0.35 }
        };
        return dailyCalories * (ratios[mealsPerDay][mealType] || 0.33);
    }

    selectMeal(settings, targetCalories, mealType) {
        const mealComposition = this.getMealComposition(mealType, settings.mealsPerDay);
        const meal = {};
        
        settings.cuisinePreferences.forEach(cuisine => {
            if (MENU_DATABASE[cuisine]) {
                if (mealComposition.needsMain) {
                    const mainDish = this.selectDish(MENU_DATABASE[cuisine].main, settings, targetCalories * 0.6);
                    if (mainDish) meal.main = mainDish;
                }
                
                if (mealComposition.needsSide) {
                    const sideDishes = this.selectMultipleDishes(MENU_DATABASE[cuisine].side, settings, targetCalories * 0.3, 2);
                    if (sideDishes.length > 0) meal.sides = sideDishes;
                }
                
                if (mealComposition.needsDrink) {
                    const drink = this.selectDish(MENU_DATABASE[cuisine].drink, settings, targetCalories * 0.1);
                    if (drink) meal.drink = drink;
                }
            }
        });
        
        if (!meal.main && !meal.sides && !meal.drink) {
            meal.main = MENU_DATABASE.japanese.main[0];
            meal.sides = [MENU_DATABASE.japanese.side[0]];
            meal.drink = MENU_DATABASE.japanese.drink[0];
        }
        
        const totalCalories = (meal.main?.calories || 0) + 
                             (meal.sides?.reduce((sum, side) => sum + side.calories, 0) || 0) + 
                             (meal.drink?.calories || 0);
        const totalCost = (meal.main?.cost || 0) + 
                         (meal.sides?.reduce((sum, side) => sum + side.cost, 0) || 0) + 
                         (meal.drink?.cost || 0);
        
        return { ...meal, calories: totalCalories, cost: totalCost };
    }

    getMealComposition(mealType, mealsPerDay) {
        switch (mealType) {
            case 'breakfast':
                return { needsMain: true, needsSide: true, needsDrink: true };
            case 'lunch':
                return { needsMain: true, needsSide: true, needsDrink: true };
            case 'dinner':
                return { needsMain: true, needsSide: true, needsDrink: true };
            case 'snack':
                return { needsMain: false, needsSide: true, needsDrink: true };
            default:
                return { needsMain: true, needsSide: true, needsDrink: true };
        }
    }

    selectDish(dishes, settings, targetCalories) {
        if (!dishes || dishes.length === 0) return null;
        
        let availableDishes = dishes.filter(dish => {
            const healthMatch = Math.abs(dish.healthScore - settings.healthLevel) <= 2;
            const calorieMatch = Math.abs(dish.calories - targetCalories) <= targetCalories * 0.5;
            const budgetMatch = dish.cost <= (settings.budget / 21);
            
            let restrictionMatch = true;
            if (settings.dietaryRestrictions.includes('vegetarian')) {
                restrictionMatch = !dish.name.includes('肉') && !dish.name.includes('魚') && 
                                 !dish.name.includes('チキン') && !dish.name.includes('豚') && 
                                 !dish.name.includes('牛') && !dish.name.includes('鶏');
            }
            if (settings.dietaryRestrictions.includes('low-carb')) {
                restrictionMatch = restrictionMatch && !dish.name.includes('米') && 
                                 !dish.name.includes('パスタ') && !dish.name.includes('パン');
            }
            
            return healthMatch && calorieMatch && budgetMatch && restrictionMatch;
        });
        
        if (availableDishes.length === 0) {
            availableDishes = dishes;
        }
        
        return availableDishes[Math.floor(Math.random() * availableDishes.length)];
    }

    selectMultipleDishes(dishes, settings, targetCalories, maxCount) {
        if (!dishes || dishes.length === 0) return [];
        
        const selectedDishes = [];
        const caloriesPerDish = targetCalories / maxCount;
        
        for (let i = 0; i < maxCount; i++) {
            const availableDishes = dishes.filter(dish => 
                !selectedDishes.some(selected => selected.name === dish.name)
            );
            
            const dish = this.selectDish(availableDishes, settings, caloriesPerDish);
            if (dish) {
                selectedDishes.push(dish);
            }
        }
        
        return selectedDishes;
    }

    updateCaloriesSummary(totalCalories, totalCost) {
        const avgDaily = Math.round(totalCalories / 7);
        const summary = document.getElementById('calories-summary');
        if (summary) {
            summary.innerHTML = `
                週間合計: ${totalCalories.toLocaleString()}kcal (1日平均: ${avgDaily}kcal) | 
                推定費用: ${totalCost.toLocaleString()}円
            `;
        }
    }

    setBudget() {
        const budgetInput = document.getElementById('weekly-budget');
        const budget = parseFloat(budgetInput.value);
        if (budget && budget > 0) {
            this.data.budget.weekly = budget;
            this.saveData();
            this.updateBudgetDisplay();
            budgetInput.value = '';
        }
    }

    updateBudgetDisplay() {
        document.getElementById('total-budget').textContent = `${this.data.budget.weekly.toLocaleString()}円`;
        document.getElementById('used-budget').textContent = `${this.data.budget.used.toLocaleString()}円`;
        const remaining = this.data.budget.weekly - this.data.budget.used;
        document.getElementById('remaining-budget').textContent = `${remaining.toLocaleString()}円`;
        
        const remainingElement = document.getElementById('remaining-budget');
        if (remaining < 0) {
            remainingElement.style.color = '#e74c3c';
        } else if (remaining < this.data.budget.weekly * 0.2) {
            remainingElement.style.color = '#f39c12';
        } else {
            remainingElement.style.color = '#27ae60';
        }
    }

    addIngredient() {
        const name = document.getElementById('ingredient-name').value.trim();
        const price = parseFloat(document.getElementById('ingredient-price').value);
        const unit = document.getElementById('ingredient-unit').value.trim();

        if (name && price >= 0 && unit) {
            const ingredient = {
                id: Date.now(),
                name,
                price,
                unit
            };
            this.data.ingredients.push(ingredient);
            this.saveData();
            this.displayIngredients();
            
            document.getElementById('ingredient-name').value = '';
            document.getElementById('ingredient-price').value = '';
            document.getElementById('ingredient-unit').value = '';
        }
    }

    deleteIngredient(id) {
        this.data.ingredients = this.data.ingredients.filter(item => item.id !== id);
        this.saveData();
        this.displayIngredients();
    }

    displayIngredients() {
        const list = document.getElementById('ingredients-list');
        list.innerHTML = '';
        
        this.data.ingredients.forEach(ingredient => {
            const div = document.createElement('div');
            div.className = 'ingredient-item';
            div.innerHTML = `
                <div>
                    <strong>${ingredient.name}</strong>
                    <span> - ${ingredient.price}円/${ingredient.unit}</span>
                </div>
                <button class="delete-btn" onclick="planner.deleteIngredient(${ingredient.id})">削除</button>
            `;
            list.appendChild(div);
        });
    }

    addMenu() {
        const name = document.getElementById('menu-name').value.trim();
        const cost = parseFloat(document.getElementById('menu-cost').value) || 0;

        if (name) {
            const menu = {
                id: Date.now(),
                name,
                cost
            };
            this.data.menus.push(menu);
            this.saveData();
            this.displayMenus();
            
            document.getElementById('menu-name').value = '';
            document.getElementById('menu-cost').value = '';
        }
    }

    deleteMenu(id) {
        this.data.menus = this.data.menus.filter(item => item.id !== id);
        this.saveData();
        this.displayMenus();
        this.displayWeeklyPlan();
    }

    displayMenus() {
        const list = document.getElementById('menu-list');
        list.innerHTML = '';
        
        this.data.menus.forEach(menu => {
            const div = document.createElement('div');
            div.className = 'menu-item';
            div.draggable = true;
            div.dataset.menuId = menu.id;
            div.innerHTML = `
                <div>
                    <strong>${menu.name}</strong>
                    <span> - ${menu.cost}円</span>
                </div>
                <button class="delete-btn" onclick="planner.deleteMenu(${menu.id})">削除</button>
            `;
            div.addEventListener('dragstart', this.handleDragStart.bind(this));
            div.addEventListener('dragend', this.handleDragEnd.bind(this));
            list.appendChild(div);
        });
    }

    handleDragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.dataset.menuId);
        e.target.classList.add('dragging');
    }

    handleDragEnd(e) {
        e.target.classList.remove('dragging');
    }

    allowDrop(e) {
        e.preventDefault();
        e.target.classList.add('drag-over');
    }

    drop(e) {
        e.preventDefault();
        e.target.classList.remove('drag-over');
        
        const menuId = parseInt(e.dataTransfer.getData('text/plain'));
        const menu = this.data.menus.find(m => m.id === menuId);
        
        if (menu) {
            const mealContent = e.target;
            const meal = mealContent.closest('.meal');
            const day = meal.closest('.day-column');
            
            const dayName = day.dataset.day;
            const mealType = meal.dataset.meal;
            
            if (!this.data.weeklyPlan[dayName]) {
                this.data.weeklyPlan[dayName] = {};
            }
            if (!this.data.weeklyPlan[dayName][mealType]) {
                this.data.weeklyPlan[dayName][mealType] = [];
            }
            
            this.data.weeklyPlan[dayName][mealType].push({
                id: menu.id,
                name: menu.name,
                cost: menu.cost
            });
            
            this.saveData();
            this.displayWeeklyPlan();
        }
    }

    displayWeeklyPlan() {
        const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
        const meals = this.getMealTypes(this.data.settings.mealsPerDay);
        
        days.forEach(day => {
            meals.forEach(meal => {
                const mealContent = document.querySelector(`[data-day="${day}"] [data-meal="${meal}"] .meal-content`);
                if (!mealContent) return;
                
                mealContent.innerHTML = '';
                
                if (this.data.weeklyPlan[day] && this.data.weeklyPlan[day][meal]) {
                    const mealData = this.data.weeklyPlan[day][meal];
                    
                    if (mealData.main) {
                        const mainDiv = document.createElement('div');
                        mainDiv.className = 'meal-item main-dish';
                        mainDiv.innerHTML = `
                            <div class="dish-category">主菜</div>
                            <div class="menu-name">${mealData.main.name}</div>
                            <div class="menu-info">${mealData.main.calories}kcal | ${mealData.main.cost}円</div>
                        `;
                        mealContent.appendChild(mainDiv);
                    }
                    
                    if (mealData.sides && mealData.sides.length > 0) {
                        mealData.sides.forEach(side => {
                            const sideDiv = document.createElement('div');
                            sideDiv.className = 'meal-item side-dish';
                            sideDiv.innerHTML = `
                                <div class="dish-category">副菜</div>
                                <div class="menu-name">${side.name}</div>
                                <div class="menu-info">${side.calories}kcal | ${side.cost}円</div>
                            `;
                            mealContent.appendChild(sideDiv);
                        });
                    }
                    
                    if (mealData.drink) {
                        const drinkDiv = document.createElement('div');
                        drinkDiv.className = 'meal-item drink-item';
                        drinkDiv.innerHTML = `
                            <div class="dish-category">飲み物</div>
                            <div class="menu-name">${mealData.drink.name}</div>
                            <div class="menu-info">${mealData.drink.calories}kcal | ${mealData.drink.cost}円</div>
                        `;
                        mealContent.appendChild(drinkDiv);
                    }
                    
                    const totalDiv = document.createElement('div');
                    totalDiv.className = 'meal-total';
                    totalDiv.innerHTML = `
                        <div class="total-info">合計: ${mealData.calories}kcal | ${mealData.cost}円</div>
                    `;
                    mealContent.appendChild(totalDiv);
                }
            });
        });
    }

    removeMealMenu(day, meal, index) {
        if (this.data.weeklyPlan[day] && this.data.weeklyPlan[day][meal]) {
            this.data.weeklyPlan[day][meal].splice(index, 1);
            if (this.data.weeklyPlan[day][meal].length === 0) {
                delete this.data.weeklyPlan[day][meal];
            }
            this.saveData();
            this.displayWeeklyPlan();
        }
    }

    generateShoppingList() {
        const shoppingList = document.getElementById('shopping-list');
        shoppingList.innerHTML = '';
        
        const itemsByCategory = {
            main: new Map(),
            side: new Map(),
            drink: new Map()
        };
        let totalEstimatedCost = 0;
        
        Object.values(this.data.weeklyPlan).forEach(day => {
            Object.values(day).forEach(meal => {
                if (meal.main) {
                    const name = meal.main.name;
                    if (itemsByCategory.main.has(name)) {
                        itemsByCategory.main.get(name).count += 1;
                    } else {
                        itemsByCategory.main.set(name, { count: 1, cost: meal.main.cost });
                    }
                    totalEstimatedCost += meal.main.cost;
                }
                
                if (meal.sides) {
                    meal.sides.forEach(side => {
                        const name = side.name;
                        if (itemsByCategory.side.has(name)) {
                            itemsByCategory.side.get(name).count += 1;
                        } else {
                            itemsByCategory.side.set(name, { count: 1, cost: side.cost });
                        }
                        totalEstimatedCost += side.cost;
                    });
                }
                
                if (meal.drink) {
                    const name = meal.drink.name;
                    if (itemsByCategory.drink.has(name)) {
                        itemsByCategory.drink.get(name).count += 1;
                    } else {
                        itemsByCategory.drink.set(name, { count: 1, cost: meal.drink.cost });
                    }
                    totalEstimatedCost += meal.drink.cost;
                }
            });
        });
        
        const totalItems = itemsByCategory.main.size + itemsByCategory.side.size + itemsByCategory.drink.size;
        if (totalItems === 0) {
            shoppingList.innerHTML = '<p>まず設定画面で週間献立を生成してください。</p>';
            return;
        }
        
        const summaryDiv = document.createElement('div');
        summaryDiv.className = 'shopping-summary';
        summaryDiv.innerHTML = `<h3>推定総額: ${totalEstimatedCost.toLocaleString()}円</h3>`;
        shoppingList.appendChild(summaryDiv);
        
        const categories = [
            { name: '主菜', items: itemsByCategory.main, color: '#e74c3c' },
            { name: '副菜', items: itemsByCategory.side, color: '#f39c12' },
            { name: '飲み物', items: itemsByCategory.drink, color: '#3498db' }
        ];
        
        categories.forEach(category => {
            if (category.items.size > 0) {
                const categoryDiv = document.createElement('div');
                categoryDiv.className = 'shopping-category';
                categoryDiv.innerHTML = `
                    <h4 style="color: ${category.color}; border-left: 4px solid ${category.color}; padding-left: 10px; margin: 15px 0 10px 0;">
                        ${category.name} (${category.items.size}種類)
                    </h4>
                `;
                shoppingList.appendChild(categoryDiv);
                
                category.items.forEach((data, itemName) => {
                    const div = document.createElement('div');
                    div.className = 'shopping-item';
                    div.innerHTML = `
                        <label>
                            <input type="checkbox">
                            <span class="item-name">${itemName}</span>
                            <span class="item-details">${data.count}回分 - ${(data.cost * data.count).toLocaleString()}円</span>
                        </label>
                    `;
                    shoppingList.appendChild(div);
                });
            }
        });
    }

    addExpense() {
        const date = document.getElementById('expense-date').value;
        const item = document.getElementById('expense-item').value.trim();
        const amount = parseFloat(document.getElementById('expense-amount').value);

        if (date && item && amount >= 0) {
            const expense = {
                id: Date.now(),
                date,
                item,
                amount
            };
            this.data.expenses.push(expense);
            this.data.budget.used += amount;
            this.saveData();
            this.displayExpenses();
            this.updateBudgetDisplay();
            this.updateStats();
            
            document.getElementById('expense-date').value = '';
            document.getElementById('expense-item').value = '';
            document.getElementById('expense-amount').value = '';
        }
    }

    deleteExpense(id) {
        const expense = this.data.expenses.find(e => e.id === id);
        if (expense) {
            this.data.budget.used -= expense.amount;
            this.data.expenses = this.data.expenses.filter(e => e.id !== id);
            this.saveData();
            this.displayExpenses();
            this.updateBudgetDisplay();
            this.updateStats();
        }
    }

    displayExpenses() {
        const list = document.getElementById('expense-list');
        list.innerHTML = '';
        
        this.data.expenses
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .forEach(expense => {
                const div = document.createElement('div');
                div.className = 'expense-item';
                div.innerHTML = `
                    <div>
                        <strong>${expense.date}</strong> - ${expense.item}
                        <span style="font-weight: bold; color: #e74c3c;"> ${expense.amount}円</span>
                    </div>
                    <button class="delete-btn" onclick="planner.deleteExpense(${expense.id})">削除</button>
                `;
                list.appendChild(div);
            });
    }

    updateStats() {
        const stats = document.getElementById('stats');
        
        const totalExpenses = this.data.expenses.reduce((sum, expense) => sum + expense.amount, 0);
        const avgDailyExpense = this.data.expenses.length > 0 ? totalExpenses / 7 : 0;
        const budgetUsage = this.data.budget.weekly > 0 ? (totalExpenses / this.data.budget.weekly * 100) : 0;
        
        let plannedCost = 0;
        Object.values(this.data.weeklyPlan).forEach(day => {
            Object.values(day).forEach(meals => {
                meals.forEach(menu => {
                    plannedCost += menu.cost;
                });
            });
        });
        
        stats.innerHTML = `
            <div class="stat-item">
                <h4>総支出</h4>
                <div class="value">${totalExpenses.toLocaleString()}円</div>
            </div>
            <div class="stat-item">
                <h4>1日平均</h4>
                <div class="value">${Math.round(avgDailyExpense).toLocaleString()}円</div>
            </div>
            <div class="stat-item">
                <h4>予算使用率</h4>
                <div class="value">${budgetUsage.toFixed(1)}%</div>
            </div>
            <div class="stat-item">
                <h4>計画総費用</h4>
                <div class="value">${plannedCost.toLocaleString()}円</div>
            </div>
        `;
    }
}

function showTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    document.getElementById(tabName).classList.add('active');
    
    const activeBtn = document.querySelector(`[onclick="showTab('${tabName}')"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

function setBudget() {
    planner.setBudget();
}

function addIngredient() {
    planner.addIngredient();
}

function generateWeeklyPlan() {
    planner.generateWeeklyPlan();
}

function allowDrop(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function drop(e) {
    planner.drop(e);
}

function generateShoppingList() {
    planner.generateShoppingList();
}

function addExpense() {
    planner.addExpense();
}

const planner = new MealPlanner();

const expenseDateElement = document.getElementById('expense-date');
if (expenseDateElement) {
    expenseDateElement.valueAsDate = new Date();
}