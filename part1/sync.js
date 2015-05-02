function Person(){
	this.think = function(time,callback){
		var second = 0;
		var start = new Date();
		while(second < time){
			var now = new Date();
			second = now - start;
		}
		callback();
	}
	this.answer = function(){
		console.log("i am answering next question");
	}
}

var person = new Person();
person.think(5000,function(){
	console.log("i am thinking of this question");
})
person.answer();