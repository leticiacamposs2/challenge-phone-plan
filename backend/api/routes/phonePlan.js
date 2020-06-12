module.exports = app => {
    const controller = app.controllers.phonePlan;

    app.route('/api/v1/phone-plan')
        .get(controller.listPhonePlan);
}
