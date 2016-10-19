var batwing = {
  status: "Ready",
  rescueBatman: function() {
    document.write("Locating his transponder ... initializing launch ...");
  }
}

/*if (batwing.status === "Ready") {
  batwing.rescueBatman();
}
*/

var utilities = {
  printAllMembers: function(targetObject) {
    for (i in targetObject) {
      document.write("<br />" + targetObject[i]);
    }
  }
}

//utilities.printAllMembers(batwing);


/*var i_am_empty = { };

utilities.printAllMembers(i_am_empty);
*/

var planet = {
  id: 34,
  name: "Imtempesta Nox",
  faction: {
    factionID: 2,
    name: "Nex",
    notification: function() {
      document.write("Nex alliance ... unite!");
    }
  },
  cities: [
    { locationID: 15, name: "Gladius" },
    { locationID: 16, name: "Chalybs" },
    { locationID: 17, name: "Ensis" }

  ]
};

//planet.faction.notification();
//document.write(planet.cities[1].name);

/*
document.write("<br/>" + planet.name);
planet.name = "Vultus";
document.write("<br/>" + planet.name);
*/

/*
var z = planet;       //you can pass objects around by a reference (variable name) to that object.
document.write(z.name);
*/


/*
if (typeof planet.defense === "undefined") {  //adding a new property to the old object "Planet")
  planet.defense = "Ion Canon";
}
document.write(planet.defense);
*/


for (member in planet) {         
  document.write("<br/>" + member + " ==> " + planet[member]);
}


/*function car (myMake, myModel, myYear) {   //defining a constructor & inside defining properties of an object (ex:make) by the same name as the constructor.
  this.make = myMake;
  this.model = myModel;
  this.year = myYear;
}

var myCar = new car("Eagle", "Talon TSi", 1993);
var myOtherCar = new car("Dodge", "Dart", 1971);

alert(myCar.model);
alert(myOtherCar.model);
*/














































