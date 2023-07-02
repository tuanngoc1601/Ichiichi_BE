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
            let data = await db.Course.findAll({raw : true});
            //console.log(data);
            resolve(data);
        }
        catch (e) {
            reject(e);
        }
    })
}

let getAllPassedCourses = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Passed_Course.findAll({raw:true});
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

let getWatchedVid = (user_id,content_id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.User_Course_Content_Detail.findAll({
                where: { user_id: user_id, content_id:content_id }
            });
            resolve(data);
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
    getAllPassedCourses: getAllPassedCourses,
    getWatchedVid: getWatchedVid
}