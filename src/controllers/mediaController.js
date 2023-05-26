import {getImageUrl, uploadImage} from "../firebaseUtils/imageUtils"
import { getVideoUrl } from "../firebaseUtils/videoUtils";

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


let uploadI = async (req, res) => {
    let filename = req.query.file;
    const upload = await uploadImage(filename);
    if (!filename) {
        return res.status(500).json({
            errorCode: 1,
            message: 'Missing inputs parameter!'
        })
    }
    return res.status(200).json({
        message: 'Upload successfully'
    });

}


module.exports = {
    getIUrl: getIUrl,
    getVUrl: getVUrl,
    uploadI: uploadI
}