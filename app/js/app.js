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
			}
		}
	});
}) ();