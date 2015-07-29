(function ($, _) {
	$['cru'] = {
		modo: 'jugar',
		casillas : 10,
		tamanio : 40,
		posiciones : [],
		clear: function () {
			this.ctx.save();
			this.ctx.clearRect(0,0,cru.canvas.width,cru.canvas.height);
			for (var i = 0; i < this.casillas; i++) {
				this.ctx.beginPath();
				this.ctx.moveTo(i*this.tamanio,0);
				this.ctx.lineTo(i*this.tamanio, this.canvas.height);
				this.ctx.stroke();

				this.ctx.beginPath();
				this.ctx.moveTo(0,i*this.tamanio);
				this.ctx.lineTo(this.canvas.width, i*this.tamanio);
				this.ctx.stroke();
			}
			this.ctx.restore();
		},
		pintar : function () {
			this.clear();
			for (var i = 0; i < this.posiciones.length; i++) {;
				for (var b = 0; b < this.posiciones[i].length; b++) {
					if(	this.posiciones[i][b] != 0){
						this.ctx.fillRect(i * this.tamanio, b * this.tamanio, this.tamanio, this.tamanio);
					}
				}
			}
		},
		init : function () {
			console.log('etro');
			this.canvas = _.getElementById('canvas');
			this.canvas.height = this.casillas * this.tamanio;
			this.canvas.width = this.casillas * this.tamanio;
			this.ctx = cru.canvas.getContext('2d');

			for (var i = 0; i < this.casillas; i++) {
				this.posiciones.push([]);
				for (var b = 0; b < this.casillas; b++) {
					if(i % 2 == 0){
						this.posiciones[i].push([0]);
					}else{
						this.posiciones[i].push([1]);
					}
				}
			}
			this.pintar();
		}
	}
	$.onload = function () {
		cru.init();
	};
})(window, document);
