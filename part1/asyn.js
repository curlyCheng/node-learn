/**
 * asyn.js
 * 使用setTimeout实现异步
 * 思考的同时可以做下一题，
 * 思考出答案在把结果回调处理
 */
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
