const DATABASE = require('../data/simulationList.json');

module.exports = () => {
    const controller = {};

    controller.listSimulation = (req, res) => {

        try {
            simulation(req.body)
                .then(resolve => {
                    res.status(201).json(resolve);
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

async function simulation(data) {
    
    const { dddsOrigin, dddsDestiny, minute, phonePlan} = data;

    let simulation = await filteredDdds(dddsOrigin, dddsDestiny);

    if (Object.keys(simulation).length > 0) { 

        const { excedentMinute, minutePrice } = simulation;
    
        const excedentMinutos = await excedentMinutes(minute, phonePlan, excedentMinute);

        const standardPrice = await setStandardPrice(minute, minutePrice);

        simulation = {
            'excedentMinutos': Number(excedentMinutos),
            'imgExcedentMinutos': 'https://media.giphy.com/media/5VKbvrjxpVJCM/giphy.gif',
            'standardPrice': standardPrice,
            'imgStandardPrice': 'https://media.giphy.com/media/a3zqvrH40Cdhu/giphy.gif'
        };

    } else {
        simulation = {
            'message': 'Ainda não possuimos planos disponíveis para estes DDDs!',
            'imgNotFound': 'https://media.giphy.com/media/TU76e2JHkPchG/giphy.gif'
        };
    }

    return simulation;

} 

const excedentMinutes = (duration, plan, excedentMinute) => {

    let excedent_minutes = plan < duration ? (duration - plan) : 0;

    if (excedent_minutes >= 0) {
        excedent_minutes = (excedent_minutes * excedentMinute).toFixed(2);
    }

    return excedent_minutes;
}

const setStandardPrice = (minute, minutePrice) => {
    return minute * minutePrice;
}
