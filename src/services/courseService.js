import { Op } from "sequelize";
import db from "../models/index";

let getAllWords = (course_id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Content.findAll({
                where: { course_id: course_id },
            });

            resolve(data);

        } catch (e) {
            reject(e);
        }
    })
}

let getWordById = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Content.findOne({
                where: { id: id }
            });
            resolve(data);
        } catch (e) {
            reject(e);
        }
    })
}

let getAllCourses = () => {
    return new Promise(async (resolve, reject) => {
        try {
            // let data = await db.Course.findAll();
            // resolve(data);
            let data = await db.Passed_Course.findAll({
                where: {
                    user_id: 1
                },
                attributes: {
                    exclude: ['id']
                },
                include: [
                    { model: db.Course, attributes: ['title', 'description', 'image'] }
                ],
                raw: true,
                nest: true
            });
            resolve(data);
        }
        catch (e) {
            reject(e);
        }
    })
}

let getSearchCourseTerm = (searchTerm) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Course.findAll({
                where: {
                    title: {
                        [Op.like]: '%' + searchTerm + '%'
                    }
                }
            })
            resolve(data);
        } catch (e) {
            reject(e);
        }
    })
}

let getVideoofWord = (content_id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Detail.findAll({
                where: { content_id: content_id }
            });
            resolve(data);
        } catch (e) {
            reject(e);
        }
    })
}

let checkVideoWatched = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let detail = await db.Watched_Video.findOne({
                where: {
                    user_id: data.user_id,
                    course_id: data.course_id,
                    content_id: data.content_id,
                    detail_id: data.detail_id
                },
            })
            if (detail) {
                resolve(true);
            } else {
                resolve(false);
            }
        } catch (e) {
            reject(e);
        }
    })
}

let createVideoWatchedService = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.user_id || !data.course_id || !data.content_id || !data.detail_id) {
                resolve({
                    errorCode: 1,
                    message: 'Missing required parameter'
                })
            } else {
                let checkWatched = await checkVideoWatched(data);
                if (checkWatched) {
                    resolve({
                        errorCode: 0,
                        message: 'Video watched'
                    })
                } else {
                    await db.Watched_Video.create({
                        user_id: data.user_id,
                        course_id: data.course_id,
                        content_id: data.content_id,
                        detail_id: data.detail_id
                    })
                    resolve({
                        errorCode: 0,
                        message: 'Ok'
                    })
                }
            }
        } catch (e) {
            reject(e);
        }
    })
}

let getAllVideoWatchedService = (content_id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Watched_Video.findAll({
                where: { 
                    content_id: content_id 
                }
            })
            resolve({
                errorCode: 0,
                message: 'Ok',
                data: data
            });
        } catch (e) {
            reject(e);
        }
    })
}

let updateProgressCourseService = (course_id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let videoCourse = await db.Detail.count({
                include: [{
                    model: db.Content,
                    include: [{
                        model: db.Course,
                        where: {
                            id: course_id
                        }
                    }]
                }]
            });
            let watchedVideo = await db.Watched_Video.count({
                where: {
                    course_id: course_id
                }
            });
            let progress = Math.round(watchedVideo / videoCourse * 100);
            let course = await db.Passed_Course.findOne({
                where: {
                    user_id: 1,
                    id: course_id
                }
            })

            if(course) {
                course.process = progress;
                await course.save();

                resolve({
                    errorCode: 0,
                    message: 'Ok! Update progress course successfully!'
                })
            } else {
                resolve({
                    errorCode: 1,
                    message: 'Not found course!'
                })
            }

        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    getAllWords: getAllWords,
    getWordById: getWordById,
    getAllCourses: getAllCourses,
    getSearchCourseTerm: getSearchCourseTerm,
    getVideoofWord: getVideoofWord,
    createVideoWatchedService: createVideoWatchedService,
    getAllVideoWatchedService: getAllVideoWatchedService,
    updateProgressCourseService: updateProgressCourseService
}