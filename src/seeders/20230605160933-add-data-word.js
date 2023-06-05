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
            content: 'Ăn',
            type: '動詞',
            mean: '「Ăn」は、口に食べ物を入れ、胃に飲み込んで体に栄養を供給する行為です。',
            course_id: 2,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            content: 'Đớp',
            type: '動詞',
            mean: '「Đớp」は、食べ物や飲み物の一部を口に取り、噛んでから飲み込むという小さな行為を表すベトナム語の言葉です。これは食事の一部であり、食べ物を消化する過程を継続させる役割を果たします。',
            course_id: 2,
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
