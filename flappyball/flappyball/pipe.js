function pipe() {
	this.x = width;
	this.empty_space = height/5;
	this.top = random(height - this.empty_space);
	this.bottom = height-(this.top + this.empty_space);
	this.w = 20;
	this.speed = 4;

	this.show = function() {
		fill(255);
		rect(this.x, 0, this.w, this.top);
		rect(this.x, height-this.bottom, this.w, this.bottom);
	}

	this.update = function() {
		this.x -= this.speed;
	}

	this.hits = function(pouli) {
		if (pouli.y < this.top || pouli.y > height - this.bottom) {
			if (pouli.x > this.x && pouli.x < this.x + this.w) {
				return true;
			}
		}
		else {
			return false;
		}
	}

}