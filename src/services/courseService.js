import { Op, where } from "sequelize";
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
            let data = await db.Watched_Video.findAll({
                where: { user_id: user_id, content_id:content_id }
            });
            resolve(data);
        } catch (e) {
            reject(e);
        }
    })
}


let postWatchedVid = ( user_id, course_id, content_id, detail_id ) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Watched_Video.create({
                user_id,
                course_id,
                content_id,
                detail_id
            })
            resolve(data);
        } catch (e) {
            reject(e);
        }
    })
}


// let calcProcess = (user_id,course_id) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             const totalVideos = await db.Detail.count({
//                 where: {user_id, course_id}
//             })

//             const completedVideos = await db.Watched_Video.count({
//                 where: {user_id, course_id}
//             })

//             const process = (completedVideos /totalVideos) * 100;

//             let data = await db.Passed_Course.update(
//                 {process},
//                 {where: {user_id, course_id}}
//             )
            
//             resolve(data)

//         } catch (e) {
//             reject(e)
//         }
//     }) 
// }


module.exports = {
    getAllWords: getAllWords,
    getWordById: getWordById,
    getAllCourses: getAllCourses,
    getSearchCourseTerm: getSearchCourseTerm,
    getVideoofWord: getVideoofWord,
    getAllPassedCourses: getAllPassedCourses,
    getWatchedVid: getWatchedVid,
    postWatchedVid :postWatchedVid,
    // calcProcess : calcProcess
}