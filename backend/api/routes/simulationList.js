module.exports = app => {
    const controller = app.controllers.simulationList;

    app.route('/api/v1/simulation-list')
        .post(controller.listSimulation);
}
