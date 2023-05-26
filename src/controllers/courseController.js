import {getImageUrl} from "../firebaseUtils/imageUtils"
import { getVideoUrl } from "../firebaseUtils/videoUtils";
import {getAllWords, getAllCourses, getVideoofWord} from '../services/courseService';
let getIUrl = async (req, res) => { 
    // console.log(req.query);  
    const url = await getImageUrl(req.query.image_name);
    if (!url) {
        return res.status(404).json({ 
            message: "Image not found"
    })}
    return res.status(200).json({
        url: url
    });
}

let getVUrl = async (req, res) => {
    const url = await getVideoUrl(req.query.video_name);
    if (!url) {
        return res.status(404).json({ 
            message: "Video not found"
    })}
    return res.status(200).json({
        url: url
    });
}

let handleGetAllWords = async (req, res) =>{ // from contents table
    const courseID = req.query.course_id;
    let AllWords = await getAllWords(courseID);
    if (!courseID) {
        return res.status(404).json({ 
            message: "Course not found",
            AllWords: []
    })}
    return res.status(200).json({ 
        AllWords: AllWords
    })
}

let handleGetAllCourses = async (req, res) =>{ // from course table table
    let AllCourses = await getAllCourses();
    if (!true) {
        return res.status(404).json({
            message: "NO Course not found",
            AllCourses: []
    })}
    return res.status(200).json({
        AllCourses: AllCourses 
    })
}

let handleVideoofWord = async (req, res) =>{ // from details table 
    let content_id = req.query.content_id;
    let VideoOfWords = await getVideoofWord(content_id);
    if (!VideoOfWords){
        return res.status(404).json({
            message: "No Video found",
            VideoOfWords: []
    })}
    return res.status(200).json({
        VideoOfWords: VideoOfWords 
    })
}




module.exports = {
    getIUrl: getIUrl,
    getVUrl: getVUrl,
    handleGetAllWords: handleGetAllWords,
    handleGetAllCourses: handleGetAllCourses,
    handleVideoofWord: handleVideoofWord
}