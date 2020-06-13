module.exports = app => {
    const phonePlanDB = app.data.phonePlan;
    const controller = {};

    controller.listPhonePlan = (req, res) => {

        try {
            res.status(200).json(phonePlanDB);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }

    }
    
    return controller;

}
