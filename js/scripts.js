function Place({name = "", location = "", landmarks = [], timeOfYear = "", notes = []}) {
  this.name = name;
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}

Place.prototype.addLandmark = function(landmark) {
  this.landmarks.push(landmark);
};

portland = new Place({name : 'Portland', location : 'OR', timeOfYear : "August"});