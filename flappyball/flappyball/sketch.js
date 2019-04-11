var poulaki;
var pipes = [];
function setup() {
   createCanvas(800,600);
   poulaki = new pouli();
   pipes.push(new pipe());
}

function draw() {
   background(0);
   poulaki.update();
   poulaki.show();

   if (frameCount % 80 == 0) {
   	  pipes.push(new pipe());
   }

   for(var i = pipes.length - 1; i >= 0; i--) {
      pipes[i].show();
      pipes[i].update();
      
      if (pipes[i].hits(poulaki)) {
      	 console.log('Aits');
      	 poulaki = new pouli();
      	 for(var j = pipes.length-1; j>=0; j--){
      	 	pipes.splice(j,1); 
      	 }
      	 continue;
      } 

      if(pipes[i].x < -pipes[i].w) {
      	 pipes.splice(i, 1);
      }	
    }
}

function keyPressed() {
	if (key == ' ') {
		//console.log('Space');
		poulaki.up();
	}
}