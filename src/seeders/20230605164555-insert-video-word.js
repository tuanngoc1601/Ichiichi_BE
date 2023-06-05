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
        await queryInterface.bulkInsert('details', [{
            link: 'https://firebasestorage.googleapis.com/v0/b/ichiichi-itss.appspot.com/o/video%2F%C4%82n.mp4?alt=media&token=7e7ff2e4-46b9-42ab-9988-9db1c50554b6',
            content_id: 58,
            description: "L: お昼何を食べる?<br/>K: 聞かなくても分かるだろ。ごはんを食べるに決まってるじゃん。<br/>L: やめて、フォーを食べようよ。ずっとごはんだけ食べていても飽きないの？<br/>K: 君が出してくれるなら行くよ。<br/>L: 君は行くのに、私の田舎は遠いんだよ。",
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            link: 'https://firebasestorage.googleapis.com/v0/b/ichiichi-itss.appspot.com/o/video%2F%C4%82n%20%E1%BA%A3nh.mp4?alt=media&token=c9e175a3-7cd1-48b6-81f0-53eef067459f',
            content_id: 58,
            description: "L: お昼何を食べる?<br/>K: 聞かなくても分かるだろ。ごはんを食べるに決まってるじゃん。<br/>L: やめて、フォーを食べようよ。ずっとごはんだけ食べていても飽きないの？<br/>K: 君が出してくれるなら行くよ。<br/>L: 君は行くのに、私の田舎は遠いんだよ。",
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            link: 'https://firebasestorage.googleapis.com/v0/b/ichiichi-itss.appspot.com/o/video%2F%C4%82n%20c%C6%B0%E1%BB%9Bi.mp4?alt=media&token=1e999d6b-ccf0-4ca8-8def-7291d757482b',
            content_id: 58,
            description: "L: お昼何を食べる?<br/>K: 聞かなくても分かるだろ。ごはんを食べるに決まってるじゃん。<br/>L: やめて、フォーを食べようよ。ずっとごはんだけ食べていても飽きないの？<br/>K: 君が出してくれるなら行くよ。<br/>L: 君は行くのに、私の田舎は遠いんだよ。",
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            link: 'https://firebasestorage.googleapis.com/v0/b/ichiichi-itss.appspot.com/o/video%2F%C4%82n%20may.mp4?alt=media&token=d8d787a9-0018-4d5a-bd35-08e6b503a992',
            content_id: 58,
            description: "L: お昼何を食べる?<br/>K: 聞かなくても分かるだろ。ごはんを食べるに決まってるじゃん。<br/>L: やめて、フォーを食べようよ。ずっとごはんだけ食べていても飽きないの？<br/>K: 君が出してくれるなら行くよ。<br/>L: 君は行くのに、私の田舎は遠いんだよ。",
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            link: 'https://firebasestorage.googleapis.com/v0/b/ichiichi-itss.appspot.com/o/video%2F%C4%90%E1%BB%9Bp.mp4?alt=media&token=d57a2d0f-bd36-41b2-b591-28915d6597c0',
            content_id: 59,
            description: "L: お昼何を食べる?<br/>K: 聞かなくても分かるだろ。ごはんを食べるに決まってるじゃん。<br/>L: やめて、フォーを食べようよ。ずっとごはんだけ食べていても飽きないの？<br/>K: 君が出してくれるなら行くよ。<br/>L: 君は行くのに、私の田舎は遠いんだよ。",
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            link: 'https://firebasestorage.googleapis.com/v0/b/ichiichi-itss.appspot.com/o/video%2F%C4%90%E1%BB%9Bp%20m%E1%BB%93i.mp4?alt=media&token=6e773668-c36b-4f9f-8971-ef4e06b07a8a',
            content_id: 59,
            description: "L: お昼何を食べる?<br/>K: 聞かなくても分かるだろ。ごはんを食べるに決まってるじゃん。<br/>L: やめて、フォーを食べようよ。ずっとごはんだけ食べていても飽きないの？<br/>K: 君が出してくれるなら行くよ。<br/>L: 君は行くのに、私の田舎は遠いんだよ。",
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
        await queryInterface.bulkDelete('details', null, {});
    }
};
