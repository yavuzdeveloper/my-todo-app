import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddForm';

class App extends Component {

state={
  todos:[]
}
// state ler props ile gelir onun için todos=this.state.todos
//container ile sayfayı ortalatıyoruz
//silme fonk yazıyoruz içine aldığı id yi silecek. ve bu fonk todos a göndermeliyiz. deleteTodo propsuyla
//state te silme işlemi: silinen state hariç diğerleri state e geri eklenerek yapılır
//dolayısıyla todos filtrelenerekve delete in tutuğu id ye eşit olmayan id li statleri döndürecek ve state güncellencek
// böylece delete in tuttuğu id hariç diğer elemanlar state in yeni elemanları olur..
//eklemek için add todo fun. inputtan gelen todo yu içine alacak

deleteTodo = (id) => {
  //console.log(id);
  const todos = this.state.todos.filter(todo=>{
    return todo.id !==id
    
  })

  this.setState({
    todos:todos
  })
  //alert("Congratulations you did another job");
}


addTodo = (todo) => {
  todo.id=Math.random();//addtodo nun id sine bir değer atadık
  let todos=[...this.state.todos,todo]//yukarıdaki todos a todo yu ekleyip todos u güncelliyoruz
  this.setState({
    todos:todos 
  })
  
}
//yukarda oluşturduğumuz todos stateini, aşağıda todos propertyle props olarak Todosjs. ye gönderdik
  render(){
    return (
      <div className="App container">
     
        <h1 className="center blue-text">Todo List</h1>
      <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      <AddTodo addTodo={this.addTodo} />
      </div>
      
    );
  }
}
export default App;
