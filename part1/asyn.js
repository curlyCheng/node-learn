function Person(){
	this.think = function(callback){
		setTimeout(function(){
			console.log("i am thinking");
			callback();
		},5000);
	}
	this.answer = function(){
		console.log("i am answering other question");
	}
}

var person = new Person();
person.think(function(){
	console.log("i get the answer of first question");
});
person.answer();