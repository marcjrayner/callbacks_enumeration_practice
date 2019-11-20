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
  return this.journeys.filter ((journey) => {
    return minDistance < journey.distance
  });
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce( (total, journey) => {
    return total + journey.distance
  }, 0);

};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const transports = this.journeys.map(journey => journey.transport);
  const uniqueTransports = [...new Set(transports)];
  return uniqueTransports
  };


  // const modes = []
  // this.journeys.forEach( (journey) => {
  //   if (!modes.include(journey.transport)) {
  //     modes.push(journey.transport)
  //   }
  // });
  // return modes

// };


module.exports = Traveller;
