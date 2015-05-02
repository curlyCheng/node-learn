/**
 * sync.js
 * 使用回调函数，但仍是同步处理
 * 思考出答案才可以继续下一题
 */
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
