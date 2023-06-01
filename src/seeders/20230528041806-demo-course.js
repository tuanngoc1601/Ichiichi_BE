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
        await queryInterface.bulkInsert('courses', [{
            description: 'このコースは、スポーツに関連する言葉に焦点を当てています。学習者は、サッカー、野球、バスケットボール、テニスなどのスポーツに関連する用語やフレーズについて学びます。さらに、それらのスポーツのルール、技術、戦術、歴史についても学びます。また、スポーツが健康に与える重要性や、スポーツ活動への参加の利点についても説明します。',
            image: 'https://firebasestorage.googleapis.com/v0/b/ichiichi-itss.appspot.com/o/image%2Fsport_course.jpg?alt=media&token=eb31c0d3-95f9-4152-b86a-3f18c62bc962',
            title: 'スポーツテーマ',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            description: 'このコースでは、日常生活に関連する言葉を学ぶことができます。家族、友達、食事、旅行など、生活のさまざまな側面についての単語やフレーズを学びます。さらに、買い物、料理、趣味、休暇など、生活に役立つスキルや情報も提供されます。このコースを通じて、より豊かで充実した日常生活を楽しむための言語的な知識を身につけることができます。',
            image: 'https://firebasestorage.googleapis.com/v0/b/ichiichi-itss.appspot.com/o/image%2Fsinhhoat_coure.jpg?alt=media&token=b8bdb502-b470-4f60-9b64-4a99129c4294',
            title: '生活テーマ',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            description: 'このコースでは、製品に関連する言葉を学ぶことができます。様々な製品カテゴリーについて学び、例えば家電製品、衣料品、化粧品などの用語やフレーズを学びます。さらに、製品の特徴、利点、品質に関する情報を理解し、購買プロセスや顧客サービスについても学びます。このコースを通じて、製品に関連する語彙を身につけ、より賢い消費者となるための知識を得ることができます。',
            image: 'https://firebasestorage.googleapis.com/v0/b/ichiichi-itss.appspot.com/o/image%2Fsanpham_course.jpg?alt=media&token=0f2c4eeb-6c4c-4893-a7f2-736ddcd2558e',
            title: '商品テーマ',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            description: 'このコースでは、文化に関連する言葉を学ぶことができます。日本や他の国々の文化について学び、言語、習慣、伝統、祭りなどの用語やフレーズを学びます。また、文化の背後にある歴史や意義についても理解を深めます。さらに、芸術、音楽、文学、建築など、様々な文化的表現についても学びます。このコースを通じて、文化に関連する語彙を学び、異なる文化に対する理解を深めることができます。',
            image: 'https://firebasestorage.googleapis.com/v0/b/ichiichi-itss.appspot.com/o/image%2Fvanhoa_course.jpg?alt=media&token=2475c454-c9e0-4bd2-8117-7b6bc452fbdd',
            title: '文化テーマ',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            description: 'このコースでは、愛と関連する言葉を学ぶことができます。恋愛、ロマンス、パートナーシップなど、愛に関する用語やフレーズを学びます。また、愛の表現方法やコミュニケーションの重要性についても学びます。さらに、異性間の関係や恋愛文化についても議論します。このコースを通じて、愛に関連する語彙を学び、豊かな人間関係と愛の表現を深めるための知識を得ることができます。',
            image: 'https://firebasestorage.googleapis.com/v0/b/ichiichi-itss.appspot.com/o/image%2Ftinhyeu_course.jpg?alt=media&token=3ea72890-6ccc-4a5b-87d0-6d95e2ecb572',
            title: '恋愛テーマ',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            description: 'このコースでは、ビジネスに関連する言葉を学ぶことができます。経済、マーケティング、経営、財務など、ビジネスに関する用語やフレーズを学びます。また、ビジネス計画の作成、プレゼンテーション技術、チームマネジメントなど、ビジネススキルについても学びます。さらに、市場調査、競争分析、ブランディングなど、成功を収めるためのビジネス戦略についても探求します。このコースを通じて、ビジネスに関連する語彙を学び、ビジネスの世界での成功を目指すための知識とスキルを身につけることができます。',
            image: 'https://firebasestorage.googleapis.com/v0/b/ichiichi-itss.appspot.com/o/image%2Fkinhdoanh_course.png?alt=media&token=59c67e3d-f7be-403f-abe7-dd7c15f22390',
            title: '経済テーマ',
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
        await queryInterface.bulkDelete('courses', null, {});
    }
};
