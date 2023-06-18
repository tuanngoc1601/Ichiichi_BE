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
        await queryInterface.bulkInsert('tests', [{
            title: '以下の質問を読んで、空欄に入力してください。',
            detail: 'A: Xin chào!\nB: _______, Linh!\nA: Bạn có khỏe không?\nB: Tôi_______',
            right_answer: 'Chào bạn',
            wrong_answer_first: 'Chào bác',
            wrong_answer_second: 'Chào chú',
            wrong_answer_third: 'Chào cháu',
            course_id: 2
        }, {
            title: '以下の質問を読んで、空欄に入力してください。',
            detail: 'A: Chào bạn, tôi tên là Mai. Bạn là ai?\nB: Chào Mai, tôi là Linh. Rất vui được gặp bạn.\nA: Rất vui được gặp Linh. ______________\nB: Tôi sống ở Hà Nội, còn bạn thì sao?',
            right_answer: 'Bạn sống ở đâu',
            wrong_answer_first: 'Quê bạn ở đâu',
            wrong_answer_second: 'Công việc của bạn là gì',
            wrong_answer_third: 'Rất vui gặp bạn',
            course_id: 2
        }, {
            title: '以下の質問を読んで、空欄に入力してください。',
            detail: 'A: Tôi sống ở Sài Gòn. Tôi đến đây làm việc từ năm ngoái.\nB: Oh, thật tuyệt! Bạn làm công việc gì ở đây?\nA: Tôi là kỹ sư phần mềm. Còn Linh, bạn làm gì?\nB: Tôi là giáo viên tiếng Anh. Tôi làm việc tại một trường trung học ở đây.\nA: Nghe có vẻ thú vị. ___________\nB: Tôi đã làm giáo viên được 5 năm rồi. Tôi thích làm việc với các học sinh.',
            right_answer: 'Bạn làm bao lâu rồi',
            wrong_answer_first: 'Bạn thích làm gì',
            wrong_answer_second: 'Bạn đang ở đâu',
            wrong_answer_third: 'Chúc bạn may mắn',
            course_id: 2
        }, {
            title: '以下の質問を読んで、空欄に入力してください。',
            detail: 'A: Đó là một công việc tuyệt vời. Bạn thường làm gì vào cuối tuần?\nB: __________, tôi thường gặp bạn bè, đi xem phim hoặc tham gia vào các hoạt động ngoài trời. Còn bạn?\nA: Tôi thích đọc sách, đi dạo cùng gia đình và xem phim. Cuối tuần là thời gian tôi thư giãn sau một tuần làm việc căng thẳng.',
            right_answer: 'Vào cuối tuần',
            wrong_answer_first: 'Vào đầu tuần',
            wrong_answer_second: 'Vào giữa tuần',
            wrong_answer_third: 'Vào tuần sau',
            course_id: 2
        }, {
            title: '以下の質問を読んで、空欄に入力してください。',
            detail: 'A: Đó là một công việc tuyệt vời. Bạn thường làm gì vào cuối tuần?\nB: __________, tôi thường gặp bạn bè, đi xem phim hoặc tham gia vào các hoạt động ngoài trời. Còn bạn?\nA: Tôi thích đọc sách, đi dạo cùng gia đình và xem phim. Cuối tuần là thời gian tôi thư giãn sau một tuần làm việc căng thẳng.',
            right_answer: 'Vào cuối tuần',
            wrong_answer_first: 'Vào đầu tuần',
            wrong_answer_second: 'Vào giữa tuần',
            wrong_answer_third: 'Vào tuần sau',
            course_id: 2
        }, {
            title: '以下の質問を読んで、空欄に入力してください。',
            detail: 'B: Nghe có vẻ thú vị. Bạn có kế hoạch nghỉ mát trong tương lai không?\nA: Có, tôi đang lên ______ đi du lịch đến Đà Lạt trong tháng sau. Tôi nghe nó rất đẹp.\nB: Đà Lạt là một điểm đến tuyệt vời. Tôi đã từng đi du lịch đến đó và rất thích. Bạn sẽ có trải nghiệm tuyệt vời đấy.\nA: Cảm ơn, Linh. Tôi rất háo hức với chuyến đi. Bạn có kỹ năng ngoại ngữ nào khác không?',
            right_answer: 'Kế hoạch',
            wrong_answer_first: 'Vui chơi',
            wrong_answer_second: 'Làm việc',
            wrong_answer_third: 'Học tập',
            course_id: 2
        }, {
            title: '以下の質問を読んで、空欄に入力してください。',
            detail: 'B: Ngoài tiếng Anh, tôi cũng biết một chút tiếng Pháp. Nhưng tôi đang học để cải thiện kỹ năng _______ của mình.\nA: Đó là tuyệt vời! Tôi cũng đang học tiếng Nhật. Hy vọng sau này chúng ta có thể nói chuyện bằng nhiều ngôn ngữ khác nhau.\nB: Chắc chắn! Đó là một ý tưởng tuyệt vời. Chúc mừng chuyến đi của bạn và hy vọng chúng ta có thể trò chuyện nhiều hơn trong tương lai.',
            right_answer: 'Ngoại ngữ',
            wrong_answer_first: 'Ngữ điệu',
            wrong_answer_second: 'Bối cảnh',
            wrong_answer_third: 'Hoàn cảnh',
            course_id: 2
        }]);
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('tests', null, {});
    }
};
