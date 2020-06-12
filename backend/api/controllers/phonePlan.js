module.exports = app => {
    const phonePlanDB = app.data.phonePlan;
    const controller = {};

    controller.listPhonePlan = (req, res) => res.status(200).json(phonePlanDB);

    return controller;
}