import { getAllWords, getWordById, getAllCourses, getSearchCourseTerm, getVideoofWord, getAllPassedCourses, getWatchedVid, postWatchedVid  } from '../services/courseService';

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
    const userId = req.query.user_id;
    let courses = await getAllCourses();
    //console.log(courses)
    let passedCourses = await getAllPassedCourses();

    let output = [];
    courses.forEach(e => {
        let process_course = passedCourses.find(ee => ee.course_id == e.id);
        let i = 0;

        if (process_course && process_course.user_id == userId) {
          output.push({...e, process : process_course.process, result : process_course.result });
        //   console.log(1)
        //   console.log(output)
        } else {
          output.push({...e});
        }
    });

    if (output.length === 0) {
        return res.status(404).json({
            errorCode: 0,
            message: "NO Course not found",
            allCourses: []
        })
    }
    return res.status(200).json({
        errorCode: 0,
        message: "OK",
        allCourses: output
    })
}

let handleSearchCourse = async (req, res) => {
    const searchTerm = req.body.searchTerm;
    if(searchTerm === '') {
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
    if(!content_id) {
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

let handleGetWatchedVid = async (req, res) => {
    const userId = req.query.user_id;
    const contentId = req.query.cont_id;
    if(!userId || !contentId) {
        return res.status(500).json({
            errorCode: 1,
            message: 'Missing required parameter'
        })
    }
    let Video = await getWatchedVid(userId, contentId);
    return res.status(200).json({
        errorCode: 0,
        message: 'Ok',
        WatchedVid: Video
    })
}

// let handleProcess = async (req, res) => {
//     try {
//         const { user_id, course_id } = req.body;
//         //console.log(user_id,course_id, content_id,detail_id)
    
//         // Create a new record in the watched_video table
//         const process = await calcProcess(user_id,course_id)
    
//         // Return the newly created record as the API response
//         return res.status(200).json({
//             errorCode: 0,
//             message: "Saved",
//             Process: process
//         })
//       } catch (error) {
//         console.error('Error update process', error);
//         return res.status(500).json({ error: 'Internal server error' });
//       }
// }


let handleNewWatchedVideo = async (req , res) =>{
    try {
        const { user_id, course_id, content_id, detail_id } = req.body;
        //console.log(user_id,course_id, content_id,detail_id)
    
        // Create a new record in the watched_video table
        const newWatchedVideo = await postWatchedVid(user_id,course_id,content_id,detail_id)
    
        // Return the newly created record as the API response
        return res.status(200).json({
            errorCode: 0,
            message: "Saved",
            Watched: newWatchedVideo
        })
      } catch (error) {
        console.error('Error creating new watched video record:', error);
        return res.status(500).json({ error: 'Internal server error' });
      }

}



module.exports = {
    handleGetAllWords: handleGetAllWords,
    handleGetWordById: handleGetWordById,
    handleGetAllCourses: handleGetAllCourses,
    handleSearchCourse: handleSearchCourse,
    handleVideoofWord: handleVideoofWord,
    handleGetWatchedVid: handleGetWatchedVid,
    handleNewWatchedVideo: handleNewWatchedVideo,
    // handleProcess:handleProcess
} 