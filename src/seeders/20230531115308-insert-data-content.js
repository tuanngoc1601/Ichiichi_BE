'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
        */
        await queryInterface.bulkInsert('contents', [{
            content: 'Thể dục',
            type: '名詞',
            mean: '健康や技術の習得、楽しみや競争をもたらす運動活動を表す言葉です。',
            course_id: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            content: 'Bóng đá',
            type: '名詞',
            mean: 'チームスポーツの一群。 程度の差はあるが、得点するために指定された相手陣地のゴールにボールを蹴り込む要素を含むチームスポーツの総称である。 また、通常「フットボール」と呼ぶ場合、その地域で最も人気のあるフットボールの競技を意味する。',
            course_id: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            content: 'Cầu lông',
            type: '名詞',
            mean: 'ネットを隔て二つに分けられたコートの両側にプレーヤーが位置し、シャトル（シャトルコック）をラケットを使って打ち合い、得点を競うネット形のスポーツである。',
            course_id: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            content: 'Võ thuật',
            type: '名詞',
            mean: '広義には古武道を含むが、狭義には「日本において独自に展開した武術文化（古武道）を基にして、近代になって、西欧的なスポーツに学びながらそれに対抗して、近代的に再編して成立した運動文化」である。',
            course_id: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            content: 'Điền kinh',
            type: '名詞',
            mean: '主に野外競技場のトラックやフィールドあるいは道路で行われる、走る・跳ぶ・投げるの3基本技を中心とする競技の総称。',
            course_id: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            content: 'Bơi lội',
            type: '名詞',
            mean: '水の中を泳ぐこと。',
            course_id: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            content: 'Chạy',
            type: '動詞',
            mean: '足（脚）をすばやく動かして前に移動すること。',
            course_id: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            content: 'Đi bộ',
            type: '動詞',
            mean: '「歩く」ことであり、足（脚）による移動のうち比較的低速のものを言い、厳密にはどの瞬間も少なくともひとつの足が地面についたまま移動する動作を言う。',
            course_id: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            content: 'Bóng chuyền',
            type: '名詞',
            mean: 'ネット越しにボールを打ち合うチームスポーツである。',
            course_id: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            content: 'Bóng chày',
            type: '名詞',
            mean: '2つの(基本的には9人編成の)チームが攻撃と守備を交代しながら、各頂点に4つのベースを持つ菱形の区画において得点を競い合うバットとボールを使うスポーツである。',
            course_id: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            content: 'Thức dậy',
            type: '動詞',
            mean: '日本語活用形辞書はプログラムで機械的に活用形や説明を生成しているため、不適切な項目が含まれていることもあります。',
            course_id: 2,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            content: 'Rửa mặt',
            type: '動詞',
            mean: '顔の皮脂や汚れを取り除くために使用される製品です。洗顔料には、肌のタイプや悩みに合わせて選ぶことができます。',
            course_id: 2,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            content: 'Đánh răng',
            type: '動詞',
            mean: '歯の表面や歯間の汚れを取り除くために使用される道具です。',
            course_id: 2,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            content: 'Quần áo',
            type: '名詞',
            mean: '身体に着用するものである。人体の保護や装飾、社会的地位の表象等のために発展してきたもので、人間の文化の主要構成要素の一つである。',
            course_id: 2,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            content: 'Đi học',
            type: '動詞',
            mean: '通常、学生が授業や学習活動のために学校へ出かけることを指します。日本の学校制度では、子供や若者が学校に通い、教育を受けることが一般的です。',
            course_id: 2,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            content: 'Làm việc',
            type: '動詞',
            mean: '個人が職業や職務として行う活動や労働のことを指します。仕事にはさまざまな形態があり、雇用されて働くことも、自営業やフリーランスとして活動することも含まれます。',
            course_id: 2,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            content: 'Nghe nhạc',
            type: '動詞',
            mean: '音楽を楽しむために耳で音楽を受け取り、鑑賞することを指します。音楽は、歌や楽器の演奏、さまざまなジャンルやスタイルの音の組み合わせから成り立っています。',
            course_id: 2,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            content: 'Đọc báo',
            type: '動詞',
            mean: '学術的な研究成果や専門的な知識を提供するために執筆された論文を読み、内容を理解することを指します。論文は、研究者や専門家が特定のテーマに関して行った研究結果や分析、理論的な考察などを報告する文書です。',
            course_id: 2,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            content: 'Trồng cây',
            type: '動詞',
            mean: '新しい木を地面に定植することで、自然環境や景観を改善し、森林や樹木の成長を促進する活動を指します。',
            course_id: 2,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            content: 'Thư giãn',
            type: '動詞',
            mean: '心身の緊張やストレスを解放し、心地よい状態や安らぎを感じることを指します。リラックスすることは、日常生活での忙しさやプレッシャーから一時的に離れ、心身の疲れを癒し、リフレッシュするために重要です。',
            course_id: 2,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            content: 'Điện thoại',
            type: '名詞',
            mean: '音声通信を利用して遠く離れた場所にいる人とのコミュニケーションを行うための通信手段です。電話は、音声を電気信号に変換し、電気信号を通信回線を通じて相手の電話機に送信し、相手の電話機で受信された信号を再び音声に変換して会話を実現します。',
            course_id: 3,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            content: 'Máy bay',
            type: '名詞',
            mean: '空中を飛行するために設計された航空機の一種です。飛行機は、主に固定翼を持ち、推進力を得るためにエンジンを使用します。人や貨物を長距離にわたって高速かつ効率的に輸送するために使用されます。',
            course_id: 3,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            content: 'Đồng hồ',
            type: '名詞',
            mean: '時間を計測し表示するための装置や機械のことを指します。時計は、人々が時間を把握し、時間に基づいて活動や日常生活を調整するために利用されます。',
            course_id: 3,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            content: 'Máy tính',
            type: '名詞',
            mean: '情報を処理し、データを保存・取得し、計算や制御を行うために設計された電子機器のことを指します。コンピューターは、プログラムやソフトウェアを実行することで、様々なタスクや処理を行います。',
            course_id: 3,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            content: 'Quyển sách',
            type: '名詞',
            mean: '印刷された紙の集合体であり、情報や物語を記録・伝達するために使用されるものを指します。本は一般的に、読書や学習、情報の参照などの目的で利用されます。',
            course_id: 3,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            content: 'Bàn ghế',
            type: '名詞',
            mean: '住居やオフィス、公共の場所などで使用される、日常生活において便利さや快適さを提供するための様々な物品や装置のことを指します。家具は、人々の生活や作業のニーズに応じて設計され、機能性や美しさを兼ね備えた形状や材料で製造されます。',
            course_id: 3,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            content: 'Đèn',
            type: '名詞',
            mean: '光源を備えた照明器具のことを指します。ランプは、電気を利用して光を発するための装置であり、暗い場所を明るく照らしたり、特定の物や場所に重点的に光を当てたりする目的で使用されます。',
            course_id: 3,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            content: 'Cửa sổ',
            type: '名詞',
            mean: '建物や車両などの壁や屋根に開けられた開口部で、光や空気の進入、景観の観賞、室内外の視界の提供などを目的として設けられています。',
            course_id: 3,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            content: 'Cây cối',
            type: '名詞',
            mean: '生物の一群であり、陸上や水中などの環境で生育し、光合成によって栄養を得る生物の総称です。植物は、地球上の生態系や環境において重要な存在であり、酸素の供給や食物の生産、生物多様性の維持などに貢献しています。',
            course_id: 3,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            content: 'Con vật',
            type: '名詞',
            mean: '生物の一群であり、酸素を摂取して呼吸し、外部環境から有機物を摂取して栄養を得る生物の総称です。動物は、植物や微生物とともに地球上の生態系の一部を形成し、多様な種類や形態を持つ生物群です。',
            course_id: 3,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            content: 'Lễ hội',
            type: '名詞',
            mean: '特定の日や季節に行われる、神や祖先への感謝や祈り、歓迎、娯楽などを目的とした文化的な行事やお祭りのことを指します。祭りは地域や文化によって異なる形式や内容を持ちますが、一般的には神社や寺院などの宗教的な場所や特定の場所で行われ、多くの人々が集まって祝福や交流を楽しむ機会となります。',
            course_id: 4,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            content: 'Di sản văn hóa',
            type: '名詞',
            mean: '人類の歴史や文化的な価値を持つ建造物、遺跡、芸術作品、伝統的な行事や技術など、過去から現在に至るまでの人類の創造性や文化的な成果を保護・保存するために重要とされる対象や要素のことを指します。',
            course_id: 4,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            content: 'Di tích',
            type: '名詞',
            mean: '過去の時代や文化から現代に残された物質的な対象や物品のことを指します。遺物は、考古学や歴史学の研究などにおいて、過去の文化や生活様式、技術の一端を知るための貴重な証拠として扱われます。',
            course_id: 4,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            content: 'Hội nhập',
            type: '動詞',
            mean: '複数の要素や要素群を一つにまとめることや結合させることを指します。統合は異なる部分や要素を組み合わせて、一体性や調和を生み出し、より大きな全体を形成するプロセスです。',
            course_id: 4,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            content: 'Kỳ quan',
            type: '名詞',
            mean: 'アメリカのマーベル・コミックス（Marvel Comics）が出版する漫画作品や、それに関連する映画、テレビドラマ、キャラクターなどを指す言葉です。マーベルは、スーパーヒーローをテーマにした作品や、そのキャラクターが広く知られることで有名です。',
            course_id: 4,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            content: 'Văn minh',
            type: '形容詞',
            mean: '人間社会が進歩し、発展して、高度な文化や社会の特徴を備えるようになった状態を指します。具体的には、技術や科学の進歩、社会組織の発展、教育や文化の普及などが含まれます。',
            course_id: 4,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            content: 'Chuẩn mực',
            type: '名詞',
            mean: 'ある基準や基準値を定めて、それを基に他の物事や行為を評価したり、統一したりするための基準や規範のことを指します。標準は、特定の領域や業界において一貫性や統一性を確保し、効率的な運営や相互運用性の向上を図るために使用されます。',
            course_id: 4,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            content: 'Dân gian',
            type: '名詞',
            mean: '食事時に用いられる食器の一種であり、通常は金属やプラスチックで作られた、複数の突起（歯）を持つ道具です。フォークは一般的に食事中に食材を刺して持ち上げるために使用されます。',
            course_id: 4,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            content: 'Nhân loại',
            type: '名詞',
            mean: '地球上の現代人およびその先祖であるホモ属（ヒト属）に属する生物の総称です。人類は、知性や言語能力、文化の発展、社会の形成など、他の生物とは異なる特徴や能力を持っています。',
            course_id: 4,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            content: 'Hẹn hò',
            type: '動詞',
            mean: '恋人同士や興味を持った相手との親しい交流や時間を共有するための活動のことを指します。デートは一般的に、お互いの関係を深めるために行われるロマンチックなイベントや出かけることを意味します。',
            course_id: 5,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            content: 'Bạn trai',
            type: '名詞',
            mean: '女性が恋愛や交際の対象として選んだ男性のことを指します。彼氏は、ロマンチックな関係を築くためのパートナーであり、互いに愛情や支えを共有する存在です。',
            course_id: 5,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            content: 'Bạn gái',
            type: '名詞',
            mean: '男性が恋愛や交際の対象として選んだ女性のことを指します。彼女は、ロマンチックな関係を築くためのパートナーであり、互いに愛情や支えを共有する存在です。',
            course_id: 5,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            content: 'Chồng',
            type: '名詞',
            mean: '結婚やパートナーシップの関係において、女性が選んだ男性のことを指します。夫は、法的に結婚した妻の相手であり、共同生活を営み、家庭を築くためのパートナーです。',
            course_id: 5,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            content: 'Vợ',
            type: '名詞',
            mean: '結婚やパートナーシップの関係において、男性が選んだ女性のことを指します。妻は夫の法的な妻であり、共同生活を営み、家庭を築くためのパートナーです。',
            course_id: 5,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            content: 'Người yêu',
            type: '名詞',
            mean: '既婚者や交際中の人が、そのパートナー以外の人と不倫的な関係を持つことを指す言葉です。愛人関係は、一般的には秘密裏に行われる関係であり、結婚や交際における忠誠や貞節を破るものとされています。',
            course_id: 5,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            content: 'Tình nhân',
            type: '名詞',
            mean: '既婚者や交際中の人が、そのパートナー以外の人と不倫的な関係を持つことを指す言葉です。愛人関係は、一般的には秘密裏に行われる関係であり、結婚や交際における忠誠や貞節を破るものとされています。',
            course_id: 5,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            content: 'Đính hôn',
            type: '動詞',
            mean: '結婚を約束し、将来的に結婚する意思を持っていることを公に宣言することを指します。婚約は、カップルが結婚を前提とした関係を確立し、将来の結婚式や共同生活を計画するための重要な段階です。',
            course_id: 5,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            content: 'Ly hôn',
            type: '動詞',
            mean: '結婚している夫婦が法的な手続きを経て婚姻関係を解消することを指します。離婚は、夫婦が共同生活を続けることが難しくなったり、夫婦間の問題や不和が解決不可能な状況になったりした場合に選択されることがあります。',
            course_id: 5,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            content: 'Thất tình',
            type: '動詞',
            mean: '一般的な言葉ではなく、直訳すると少し不自然な表現になります。ただし、おそらく愛情や感情が苦しみや困難に直面することを指していると理解します。',
            course_id: 5,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            content: 'Tài khoản',
            type: '名詞',
            mean: 'オンラインやデジタルなプラットフォームにおいて、個人や組織が自身の情報や活動を管理するために作成する個別のユーザー情報のことを指します。',
            course_id: 6,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            content: 'Ngân hàng',
            type: '名詞',
            mean: '金融業務を行う機関であり、預金や融資、投資などの金融サービスを提供します。銀行は一般的に、個人や法人が資金を預けたり、借り入れたり、金融取引を行ったりする場所として利用されます。',
            course_id: 6,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            content: 'Chi phí',
            type: '名詞',
            mean: 'ある活動や事業を行う際に発生する金銭的な支出や経費のことを指します。費用は、商品やサービスの製造、提供、維持などにかかる負担やコストを表す言葉です。',
            course_id: 6,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            content: 'Thu nhập',
            type: '名詞',
            mean: '個人や法人がある期間に得た収入や利益のことを指します。所得は、給与や経営所得、資本利益、不動産収入など、さまざまな形態で発生する収入の総称です。',
            course_id: 6,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            content: 'Giá trị',
            type: '名詞',
            mean: 'ある対象や事柄が持つ重要性や意味の程度を示す概念です。物やサービス、アイデア、行動など、さまざまなものに対して人々は価値を見出し、評価します。価値は個人や社会の視点によって異なる場合があります。',
            course_id: 6,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            content: 'Thanh toán',
            type: '動詞',
            mean: '商品やサービス、借金などの対価として金銭を提供することを指します。支払いは、購入や取引の際に行われる金銭の移動や取引の完了を意味します。',
            course_id: 6,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            content: 'Giao dịch',
            type: '動詞',
            mean: '二つ以上の当事者間で財やサービス、権利などの交換を行う経済活動を指します。取引は、商品の売買やサービスの提供、資産の譲渡など、さまざまな形態で行われます。',
            course_id: 6,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            content: 'Quảng cáo',
            type: '名詞',
            mean: '製品やサービス、イベントなどを広く知らせるために、情報やメッセージを一般の人々に伝える手段や活動のことを指します。広告は、企業や組織が自社の商品やサービスを宣伝し、顧客の関心を引きつけるために利用されます。',
            course_id: 6,
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('contents', null, {});
    }
};
