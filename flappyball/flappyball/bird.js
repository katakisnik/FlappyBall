function pouli() {
	this.y = height/2;
	this.x = 64;
	this.gravity = 0.7;
	this.force = 15;
	this.velocity = 0;

	this.show = function() {
		fill(255);
		ellipse(this.x, this.y, 33, 33);
	}

	this.update = function() {
		this.velocity += this.gravity;
		this.velocity *= 0.9;
		this.y += this.velocity;
		if (this.y > height) {
			this.velocity = 0;
			this.y = height;
		}
		if (this.y < 0) {
			this.velocity = 0;
			this.y = 0;
		}
		
	}

	this.up = function () {
		this.velocity -= this.force;
	}
}

