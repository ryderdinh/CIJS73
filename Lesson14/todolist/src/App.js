import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import FormInput from './components/FormInput';
import TodoList from './components/TodoList';
import './style.css';

// function App() {
//   const [todoList, setTodoList] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const countTaskLeft = () => {
//     let countList = todoList.filter((item) => item.completed === false).length;
//     return countList;
//   };

//   const handleInputClick = (newTask, index) => {
//     const newTodoList = [...todoList];
//     newTodoList[index] = newTask;

//     setTodoList(newTodoList);
//   };

//   const addTodo = (text) => {
//     setTodoList([
//       ...todoList,
//       {
//         id: uuidv4(),
//         completed: false,
//         title: text
//       }
//     ]);
//   };

//   const removeTask = (id) => {
//     const newTodoList = todoList.filter((item) => {
//       return item.id !== id;
//     });

//     setTodoList(newTodoList);
//   };

//   const editTask = (id, newData) => {
//     const newTodoList = todoList.map((item) => {
//       let newItem = item;

//       if (newItem.id === id) {
//         newItem = { ...newItem, title: newData };
//       }

//       return newItem;
//     });

//     setTodoList(newTodoList);
//   };

// useEffect(() => {
//   setLoading(true);
//   fetch('https://jsonplaceholder.typicode.com/todos')
//     .then((response) => response.json())
//     .then((json) => {
//       console.log(json);
//       setTodoList(json);
//       setLoading(false);
//     });
// }, []);

//   return (
//     <div className='App'>
//       <FormInput onSubmit={addTodo} />
//       {!loading ? (
//         <TodoList
//           todoData={todoList}
//           handleInputClick={handleInputClick}
//           removeTask={removeTask}
//           editTask={editTask}
//         />
//       ) : (
//         'Loading task...'
//       )}
//       <br />
//       <h3 className='task-list'>Tasks Left: {countTaskLeft()}</h3>
//     </div>
//   );
// }

// export default App;

export default class App extends React.Component {
  state = {
    todoList: []
  };

  countTaskLeft = () => {
    let countList = this.state.todoList.filter(
      (item) => item.completed === false
    ).length;
    return countList;
  };

  handleInputClick = (newTask, index) => {
    const newTodoList = [...this.state.todoList];
    newTodoList[index] = newTask;

    this.setState({
      ...this.state,
      todoList: newTodoList
    });
  };

  addTodo = (text) => {
    this.setState({
      ...this.state,
      todoList: [
        ...this.state.todoList,
        {
          id: uuidv4(),
          completed: false,
          title: text
        }
      ]
    });
  };

  removeTask = (id) => {
    const newTodoList = this.state.todoList.filter((item) => {
      return item.id !== id;
    });

    this.setState({
      ...this.state,
      todoList: newTodoList
    });
  };

  editTask = (id, newData) => {
    const newTodoList = this.state.todoList.map((item) => {
      let newItem = item;

      if (newItem.id === id) {
        newItem = { ...newItem, title: newData };
      }

      return newItem;
    });

    this.setState({
      ...this.state,
      todoList: newTodoList
    });
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.setState({
          ...this.state,
          todoList: json
        });
      });
  }

  render() {
    return (
      <div className='App'>
        <FormInput onSubmit={this.addTodo} />
        <TodoList
          todoData={this.state.todoList}
          handleInputClick={this.handleInputClick}
          removeTask={this.removeTask}
          editTask={this.editTask}
        />
        <br />
        <h3 className='task-list'>Tasks Left: {this.countTaskLeft()}</h3>
      </div>
    );
  }
}
