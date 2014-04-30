function GameBot(gameManager) {
	this.gameManager = gameManager;
	this.strategy = [0,1,2,1];
	this.pause = 100;
	this.interval = null;
	this.iterations = 0;
	this.running = false;

	this.start = function() {
		if(this.running) {
			return false;
		}
		this.running = true;
		var i = 0;
		bot = this;
		strat = this.strategy;
		this.interval = setInterval(function() {
			bot.iterations++;
			bot.gameManager.move(strat[i]);
			i = (i + 1) % strat.length;
		}, this.pause);
	}

	this.stop = function() {
		this.running = false;
		clearInterval(this.interval);
	}

	this.restart = function() {
		this.stop();
		this.start();
	}
}

