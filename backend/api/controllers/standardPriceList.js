module.exports = app => {
    const standardPriceListDB = app.data.standardPriceList;
    const controller = {};

    controller.listStandardPrice = (req, res) => res.status(200).json(standardPriceListDB);

    return controller;
}