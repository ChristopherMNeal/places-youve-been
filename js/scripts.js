//Utility functions
function toList(array) {
  let output = array.map(function(element) {
    return "<li>" + element + "</li>";
  });
  return output.join();
}

// object functions
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

Place.prototype.generateCard = function() {
  return "<div class='place-card'><h3 class='card-title'>" + this.name + "</h3><div class='hidden'><h5 class= 'location'>" + this.location + "</h5><p class='time-of-year'>" + this.timeOfYear + "</p><ul class= 'landmarks'>" + toList(this.landmarks) + "</ul><ul class='notes'>" + toList(this.notes) + "</ul></div></div>";
}

function TomeOfPlaces() {
  this.contents = [];
}

TomeOfPlaces.prototype.addPlace = function(place){
  this.contents.push(place);
};


//misc for now

let portland = new Place({name : 'Portland', location : 'OR', timeOfYear : "August", notes:["Winter is rainy"]});

let portland2AttackOfTheClones = new Place({name : 'Portland2', location : 'OR', timeOfYear : "August", notes:["Winter is rainy(I hate sand...)"]});

let portland3TokyoDrift = new Place({name : 'Portland3', location : 'OR', timeOfYear : "August", notes:["Winter is rainy (dorrriiiffto)"]});

let theBook = new TomeOfPlaces();

theBook.addPlace(portland);
theBook.addPlace(portland2AttackOfTheClones);
theBook.addPlace(portland3TokyoDrift);







// UI Logic
$(document).ready(function() {
  for (let i of theBook.contents) {
    $(".box").append(i.generateCard());
  }
  

  $(".card-title").click(function() {
    $(this.nextElementSibling).slideToggle();
  });
});

