import { getAllWords, getWordById, getAllCourses, getVideoofWord } from '../services/courseService';

let handleGetAllWords = async (req, res) => { // from contents table
    const courseID = req.query.course_id;
    if (!courseID) {
        return res.status(500).json({
            errorCode: 1,
            message: "Missing required parameters"
        })
    }
    let listWords = await getAllWords(courseID);
    if(listWords.length === 0) {
        return res.status(404).json({
            errorCode: 2,
            message: "Words not found",
            allWords: []
        })
    }
    return res.status(200).json({
        errorCode: 0,
        message: "OK",
        allWords: listWords
    })
}

let handleGetWordById = async (req, res) => {
    const id = req.query.id;
    if(!id) {
        return res.status(500).json({
            errorCode: 1,
            message: 'Missing required parameter'
        })
    }
    let word = await getWordById(id);
    return res.status(200).json({
        errorCode: 0,
        message: 'Ok',
        word: word
    })
}

let handleGetAllCourses = async (req, res) => { // from course table table
    let courses = await getAllCourses();
    if (courses.length === 0) {
        return res.status(404).json({
            errorCode: 0,
            message: "NO Course not found",
            allCourses: []
        })
    }
    return res.status(200).json({
        errorCode: 0,
        message: "OK",
        allCourses: courses
    })
}

let handleVideoofWord = async (req, res) => { // from details table 
    let content_id = req.query.content_id;
    let VideoOfWords = await getVideoofWord(content_id);
    if (!VideoOfWords) {
        return res.status(404).json({
            message: "No Video found",
            VideoOfWords: []
        })
    }
    return res.status(200).json({
        VideoOfWords: VideoOfWords
    })
}


module.exports = {
    handleGetAllWords: handleGetAllWords,
    handleGetWordById: handleGetWordById,
    handleGetAllCourses: handleGetAllCourses,
    handleVideoofWord: handleVideoofWord
} 