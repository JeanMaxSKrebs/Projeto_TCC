indexController = require("../controllers/indexController.js");

exports.appRoute = router => {
    router.get("/saloes", indexController.getSaloesController);
};