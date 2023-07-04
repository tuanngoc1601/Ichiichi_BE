import { 
    getAllWords, 
    getWordById, 
    getAllCourses, 
    getSearchCourseTerm, 
    getVideoofWord, 
    createVideoWatchedService,
    getAllVideoWatchedService,
    updateProgressCourseService
} from '../services/courseService';

let handleGetAllWords = async (req, res) => { // from contents table
    const courseID = req.query.course_id;
    if (!courseID) {
        return res.status(500).json({
            errorCode: 1,
            message: "Missing required parameters"
        })
    }
    let listWords = await getAllWords(courseID);
    if (listWords.length === 0) {
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
    if (!id) {
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

let handleSearchCourse = async (req, res) => {
    const searchTerm = req.body.searchTerm;
    if (searchTerm === '') {
        return res.status(500).json({
            errorCode: 1,
            message: 'Invalid search term'
        })
    }
    let searchCourse = await getSearchCourseTerm(searchTerm);
    return res.status(200).json({
        errorCode: 0,
        message: 'Ok',
        searchCourse: searchCourse
    })
}

let handleVideoofWord = async (req, res) => { // from details table 
    let content_id = req.query.content_id;
    if (!content_id) {
        return res.status(500).json({
            errorCode: 1,
            message: 'Missing required parameter'
        })
    }
    let VideoOfWords = await getVideoofWord(content_id);
    if (VideoOfWords.length === 0) {
        return res.status(200).json({
            errorCode: 0,
            message: "No Video found",
            VideoOfWords: []
        })
    }
    return res.status(200).json({
        errorCode: 0,
        message: 'OK',
        VideoOfWords: VideoOfWords
    })
}

let handleCreateVideoWatched = async (req, res) => {
    let data = req.body;
    let message = await createVideoWatchedService(data);
    return res.status(200).json(message);
}

let handleGetAllVideoWatched = async (req, res) => {
    let content_id = req.query.content_id;
    if(!content_id) {
        return res.status(500).json({
            errorCode: 1,
            message: 'Missing required parameter'
        })
    }
    let data = await getAllVideoWatchedService(content_id);
    return res.status(200).json(data);
}

let handleUpdateProgressCourse = async (req, res) => {
    let course_id = req.query.course_id;
    if(!course_id) {
        return res.status(500).json({
            errorCode: 1,
            message: 'Missing required parameter'
        })
    }
    let message = await updateProgressCourseService(course_id);
    return res.status(200).json(message);
}

module.exports = {
    handleGetAllWords: handleGetAllWords,
    handleGetWordById: handleGetWordById,
    handleGetAllCourses: handleGetAllCourses,
    handleSearchCourse: handleSearchCourse,
    handleVideoofWord: handleVideoofWord,
    handleCreateVideoWatched: handleCreateVideoWatched,
    handleGetAllVideoWatched: handleGetAllVideoWatched,
    handleUpdateProgressCourse: handleUpdateProgressCourse
} 