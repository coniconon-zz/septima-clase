var url = 'http://samples.openweathermap.org/data/2.5/find?q=London&units=metric&appid=b1b15e88fa797225412429c1c50c122a1';

function setup() {
   loadJSON(url, gotData, 'json');
   canvas = createCanvas(windowWidth, windowHeight * 0.8);
   canvas.parent('top');
   canvas.position(0, 0);
   canvas.style('z-index', '-1');
   noStroke();
   noLoop();
}

function gotData(data) {
   console.log(data);
   var max_temp = 0;
   var nubes = 0;
   var humidity = 0;
   for (var a = 0; a < data.list["0"].main.temp_max; a++) {
      max_temp++;
   }
   for (var a = 0; a < data.list["0"].clouds.all; a++) {
      nubes++;
   }
   for (var a = 0; a < data.list["0"].main.humidity; a++) {
      humidity++;
   }
   textSize(20);
   text("The maximum temperature for London today is " + max_temp + "ºC, with " + nubes + "% of clouds and " + humidity + "% of humidity", width / 2, 200);
}

function draw() {
   background(237, 34, 93);
   fill(255);
   textAlign(CENTER);
}
