import express from 'express';
import userController from '../controllers/userController';
import courseController from '../controllers/courseController';

let router = express.Router();

let initWebRoutes = (app) => {

    router.post("/api/login", userController.handleLogin);
    router.get("/api/get-all-users", userController.handleGetAllUsers);
    router.post("/api/create-new-user", userController.handleCreateNewUser);
    router.put("/api/edit-user", userController.handleEditUser);
    router.delete("/api/delete-user", userController.handleDeleteUser);
    
    router.get("/api/get-all-words", courseController.handleGetAllWords);
    router.get("/api/get-all-courses", courseController.handleGetAllCourses);
    router.get("/api/get-content", courseController.handleVideoofWord);
    

    
    
    return app.use("/", router);
}

module.exports = initWebRoutes;