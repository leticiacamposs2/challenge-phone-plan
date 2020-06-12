module.exports = app => {
    const controller = require('../controllers/standardPriceList')();

    app.route('/api/v1/standard-price-list')
        .get(controller.listStandardPrice);
}
