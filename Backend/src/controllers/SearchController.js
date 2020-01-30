const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
   //buscar todos devs um raio de 10km
    //filtrar por tec
  async index(request,response){
    const {latitude, longitude, techs} = request.query;

    const techsArray = parseStringAsArray(techs);
    
    const devs = await Dev.find({
        techs: {
          $in: techsArray,
        },//filtrar as tecs
        location:{
          $near: {
            $geometry: {
              type: 'Point',
              coordinates: [longitude,latitude],
            },//achar devs proximos
            $maxDistance: 10000,//distancia maxima de 10km
          }
        }
    });

    return response.json({ devs })

  }
}