import express from 'express';
import userController from '../controllers/userController';
import courseController from '../controllers/courseController';
import mediaController from '../controllers/mediaController';
let router = express.Router();

let initWebRoutes = (app) => {

    router.post("/api/login", userController.handleLogin);
    router.get("/api/get-all-users", userController.handleGetAllUsers);
    router.post("/api/create-new-user", userController.handleCreateNewUser);
    router.put("/api/edit-user", userController.handleEditUser);
    router.delete("/api/delete-user", userController.handleDeleteUser);
    router.get("/api/gett-url-image",mediaController.getIUrl);
    router.get("/api/gett-url-video",mediaController.getVUrl);
    router.get("/api/get-all-words", courseController.handleGetAllWords);
    router.get("/api/get-all-courses", courseController.handleGetAllCourses);
    router.get("/api/get-content", courseController.handleVideoofWord);
    
    router.post("/api/upload-image", mediaController.uploadI);
    
    
    return app.use("/", router);
}

module.exports = initWebRoutes;