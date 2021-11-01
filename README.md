Describe: Place()
Test: It should return an object with the properties of name, location, landmarks, time of year, notes.
Code: portlands = new Place("Portland", "Oregon", "Portlandia Statue", "August", "Don't go during winter")
place1.name
Expected Output: "Portland"

Describe: Place.prototype.addLandmark()
Test: It should push a new landmark value to our landmarks key.
Code: portland.addLandmark("Portlandia Statue")
  portland.landmarks[0];
Expected Output: "Portlandia Statue"

Test: It should return false if the input is not a string.
Code: portland.addLandmark(true)
Expected Output: false


Describe: Place.prototype.addNote()
Test: It should push a new note value to our notes key.
Code: portland.addNote("Winter is rainy")
  portland.notes[0];
Expected Output: "Winter is rainy"

Test: It should return false if the input is not a string.
Code: portland.addNote(true)
Expected Output: false















# _ _

#### By _**Christopher Neal &**_

#### _ _

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _Javascript_
* _jQuery_

## Description

_This page practices_

## Setup/Installation Requirements

* _Clone the repository from GitHub_
* _Open the webpage in your preferred browser_

## Known Bugs

_None_

## License

_[MIT](https://opensource.org/licenses/MIT)_

Copyright (c) _21 October 2021_ _Christopher Neal &_