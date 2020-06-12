module.exports = () => {
    const standardPriceListDB = require('../data/standardPriceList.json');
    const controller = {};

    controller.listStandardPrice = (req, res) => res.status(200).json(standardPriceListDB);

    return controller;
}