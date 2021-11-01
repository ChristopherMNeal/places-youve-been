function Place({name = "", location = "", landmarks = [], timeOfYear = "", notes = []}) {
  this.name = name;
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}

Place.prototype.addLandmark = function(landmark) {
  if (typeof landmark != "string") {
    return false;
  }
  this.landmarks.push(landmark);
};

Place.prototype.addNote = function(note) {
  if (typeof note != "string") {
    return false;
  }
  this.notes.push(note);
};

portland = new Place({name : 'Portland', location : 'OR', timeOfYear : "August"});

portland.addNote("Winter is rainy");
portland.notes[0];
portland.addNote(true);