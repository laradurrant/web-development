function Vehicle(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = false
}


Vehicle.prototype.turnOn = function() {
    this.isRunning = true;
}
Vehicle.prototype.turnOff = function() {
    this.isRunning = false;
}
Vehicle.prototype.honk = function () {
   if(this.isRunning) {
        console.log("beep");
   }
   else{
       console.log("silence");
   }
}

function counter(){
    var count = 0;
    return function(){
        return ++count
    }
}

counter1 = counter()
counter1()
counter1()
counter1()

counter2 = counter()
counter2()
counter2()
counter2()

counter1()