import React from 'react';

class TodoList extends React.Component {
  render() {
    return (
      <div className='todo-list'>
        <ul>
          {!this.props.todoData.length && <p>No task</p>}

          {this.props.todoData.length &&
            this.props.todoData.map((item, index) => {
              return (
                <TodoItem
                  key={item.id}
                  dataItem={item}
                  index={index}
                  handleInputClick={this.props.handleInputClick}
                  removeTask={this.props.removeTask}
                  editTask={this.props.editTask}
                />
              );
            })}
        </ul>
      </div>
    );
  }
}

export default TodoList;

// function TodoItem(props) {
//   const { dataItem, index } = props;
//   const [edit, setEdit] = useState(false);
//   const [newData, setNewData] = useState(dataItem.title);

//   const handleTextariaChange = (e) => {
//     setNewData(e.target.value);
//   };

//   return (
//     <li className='todo-item'>
//       <div
//         className='item-data'
//         onClick={() => {
//           !edit &&
//             props.handleInputClick(
//               {
//                 title: dataItem['title'],
//                 completed: !dataItem.done
//               },
//               index
//             );
//         }}
//       >
//         {/* <input type='radio' checked={dataItem.done} /> */}

//         {edit === true ? (
//           <span>
//             <textarea
//               type='text'
//               value={newData}
//               onChange={handleTextariaChange}
//             />
//           </span>
//         ) : (
//           <span>
//             {`${index + 1}. `}
//             {dataItem['title']}
//           </span>
//         )}
//       </div>

//       <div className='item-action'>
//         {edit === true ? (
//           <button
//             onClick={() => {
//               setEdit(false);
//               props.editTask(dataItem.id, newData);
//             }}
//           >
//             Submit
//           </button>
//         ) : (
//           <button
//             onClick={() => {
//               setEdit(true);
//             }}
//           >
//             Edit
//           </button>
//         )}

//         <button
//           onClick={() => {
//             props.removeTask(dataItem.id);
//           }}
//         >
//           Delete
//         </button>
//       </div>
//     </li>
//   );
// }

class TodoItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      newData: props.dataItem.title
    };
  }

  handleTextariaChange = (e) => {
    this.setState({
      ...this.state,
      newData: e.target.value
    });
  };

  render() {
    return (
      <li className='todo-item'>
        <div
          className='item-data'
          onClick={() => {
            !this.state.edit &&
              this.props.handleInputClick(
                {
                  title: this.props.dataItem.title,
                  completed: !this.dataItem.done
                },
                this.props.index
              );
          }}
        >
          {/* <input type='radio' checked={dataItem.done} /> */}

          {this.state.edit === true ? (
            <span>
              <textarea
                type='text'
                value={this.state.newData}
                onChange={this.handleTextariaChange}
              />
            </span>
          ) : (
            <span>
              {`${this.props.index + 1}. `}
              {this.props.dataItem.title}
            </span>
          )}
        </div>

        <div className='item-action'>
          {this.edit === true ? (
            <button
              onClick={() => {
                this.setState({
                  ...this.state,
                  edit: false
                });
                this.props.editTask(this.dataItem.id, this.state.newData);
              }}
            >
              Submit
            </button>
          ) : (
            <button
              onClick={() => {
                this.setState({
                  ...this.state,
                  edit: true
                });
              }}
            >
              Edit
            </button>
          )}

          <button
            onClick={() => {
              this.props.removeTask(this.dataItem.id);
            }}
          >
            Delete
          </button>
        </div>
      </li>
    );
  }
}
