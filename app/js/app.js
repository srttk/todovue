"use strict";
(function(){
	var app = new Vue({
		el:'#app',
		data:{
			todo:'',
			todos:['One','Two']
		},
		methods:{
			 addTodo:function(){
				
				this.todo.trim();
				if(this.todo) {
					this.todos.unshift(this.todo);
					this.todo = '';
				}
			},
            removeTodo:function(todo){
                var index = this.todos.indexOf(todo);
                this.todos.splice(index,1);
            },
            cancelEntry:function(){
            	this.todo = '';
            }
		}
	});
}) ();