const { get } = require("axios");

const vehiclesAPI = 'https://vpic.nhtsa.dot.gov/api';

const isVINValid = (vin) => {
    if (!vin) {
        return false;
    }
    if (vin.length !== 17) {
        return false;
    }
    if (vin.includes('O') || vin.includes('I') || vin.includes('Q')) {
        return false;
    }
    return true;
}

const getVehicleByVIN = async (vin) => {
    const { data } = await get(`${vehiclesAPI}/vehicles/DecodeVin/${vin}?format=json`);
    const { Results } = data;
    const vehicle = Results.filter((obj) => obj.Variable === 'Make'
    || obj.Variable === 'Model'
    || obj.Variable === 'Model Year'
    || obj.Variable === 'Fuel Type - Primary'
    || obj.Variable === 'Fuel Type - Secondary');
    let finalMessage = 'Here you have your car details! :car:\n';
    for (let detail of vehicle) {
        finalMessage += `${detail.Variable}: ${detail.Value}\n`;
    }
    return finalMessage;
}

const getModelsForMake = async (make) => {
    const { data } = await get(`${vehiclesAPI}/vehicles/getmodelsformake/${make}?format=json`);
    const { Results } = data;
    let finalMessage = 'There are the models for this make :car:\n';
    Results.map((obj) => finalMessage+= `${obj.Model_Name}\n`);
    return finalMessage;
}

module.exports = {
    isVINValid,
    getVehicleByVIN,
    getModelsForMake,
};
