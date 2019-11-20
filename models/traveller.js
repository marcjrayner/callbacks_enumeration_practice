const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map( (journey) => {
    return journey.startLocation
  });
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map( (journey) => {
    return journey.endLocation
  });
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const result = this.journeys.filter ( (journey) => {
    return transport === journey.transport
  });
  return result
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {

};

Traveller.prototype.calculateTotalDistanceTravelled = function () {

};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
