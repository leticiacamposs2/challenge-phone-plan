const DATABASE = require('../data/standardPriceList.json');

module.exports = () => {
    const controller = {};

    controller.listStandardPrice = (req, res) => {

        try {
            simulationPrice(req.body)
                .then(resolve => {
                    res.status(200).json(resolve);
                });
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }

    }

    return controller;
}

async function filteredDdds(origin, destiny) {
    
    let ddds = [];

    DATABASE.map(items => {
        if ((items.dddsOrigin === origin) && (items.dddsDestiny === destiny)) {
            ddds = items;
        }
    });

    return ddds;
}

async function simulationPrice(simulation) {
    
    const { dddsOrigin, dddsDestiny, minute, phonePlan} = simulation;

    let standardPrice = await filteredDdds(dddsOrigin, dddsDestiny);

    if (Object.keys(standardPrice).length > 0) { 

        const { excedentMinute} = standardPrice;
    
        const excedentMinutos = await excedentMinutes(minute, phonePlan, excedentMinute);

        standardPrice = { 'teste': excedentMinutos };
    }

    // if (Object.keys(standardPrice).length < 0) {
    //     standardPrice = { message: 'Não foi encontrado planos disponíveis para esta combinação de Dddds' }; 
    // }

    // console.log('standardPrice', standardPrice);

    return standardPrice;

} 

const excedentMinutes = (duration, plan, excedentMinute) => {

    let excedent_minutes = plan < duration ? (duration - plan) : 0;

    if (excedent_minutes >= 0) {

        excedent_minutes = (excedent_minutes * excedentMinute).toFixed(2);

    }

    return excedent_minutes;
}
