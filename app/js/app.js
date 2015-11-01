(function(){
	var app = new Vue({
		el:'#app',
		data:{
			todo:'Hello world',
			todos:['One','Two']
		},
		methods:function(){
			this.addTodo = function(){
				alert('asAS');
				this.todo.trim();
				if(this.todo) {
					this.todos.unshift(this.todo);
				}
			}
		}
	});
}) ();