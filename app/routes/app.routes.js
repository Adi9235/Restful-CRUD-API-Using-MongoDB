module.exports = (app) => {
    const App = require("../controllers/app.controller.js")

    app.post('/create' , App.create)

    app.get('/get-all' , App.findAll)

    app.get('/message/:message' , App.findOne)

    app.put('/message/:message', App.update)

    app.delete('/message/:message' , App.delete);
}