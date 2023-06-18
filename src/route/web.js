import express from 'express';
import userController from '../controllers/userController';
import courseController from '../controllers/courseController';
import testController from '../controllers/testController';

let router = express.Router();

let initWebRoutes = (app) => {

    router.post("/api/login", userController.handleLogin);
    router.get("/api/get-all-users", userController.handleGetAllUsers);
    router.post("/api/create-new-user", userController.handleCreateNewUser);
    router.put("/api/edit-user", userController.handleEditUser);
    router.delete("/api/delete-user", userController.handleDeleteUser);
    router.get("/api/get-all-words", courseController.handleGetAllWords);
    router.get("/api/get-word", courseController.handleGetWordById);
    router.get("/api/get-all-courses", courseController.handleGetAllCourses);
    router.post("/api/search-course", courseController.handleSearchCourse);
    router.get("/api/get-content", courseController.handleVideoofWord);

    router.get("/api/get-right-answer", testController.handleGetRightAnswer);
    router.get("/api/get-question", testController.handleQuestion);
    router.get("/api/get-all-answer", testController.handleAnswer);
    router.get("/api/get-all-question", testController.handleGetAllQuestions);

    return app.use("/", router);
}

module.exports = initWebRoutes;