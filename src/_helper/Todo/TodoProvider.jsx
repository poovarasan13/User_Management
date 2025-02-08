import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TodoApi } from '../../api';
import Context from './index';

const TodoProvider = (props) => {
  const [allTodos, setAllTodo] = useState([]);
  const [todoItem, setTodoItem] = useState([]);

  const fetchTodo = async () => {
    try {
      await axios.get(`${TodoApi}`).then((resp) => {
        setAllTodo(resp.data);
      });
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    fetchTodo();
  }, [setAllTodo, setTodoItem]);

  const addNewTodo = (tasks) => {
    const temp = {
      id: allTodos.length + 1,
      title: tasks.task,
      status: 'pending',
    };
    setAllTodo([...allTodos, temp]);
    setTodoItem([...allTodos, temp]);
  };

  const selectItem = (id, status) => {
    const temp = allTodos.reduce((todoAcc, item) => {
      if (item.id === id) {
        todoAcc.push({ ...item, status: status });
      } else todoAcc.push(item);
      return todoAcc;
    }, []);

    setTodoItem(temp);
    setAllTodo(temp);
  };

  const markAllItems = (markAll) => {
    const updateStatus = allTodos.reduce((cartAcc, item) => {
      if (markAll === false) {
        cartAcc.push({ ...item, status: 'completed' });
      } else {
        cartAcc.push({ ...item, status: 'pending' });
      }
      return cartAcc;
    }, []);
    updateStatus.map((todo) => {
      return axios.put(`${TodoApi}/${todo.id}`, todo);
    });
    setAllTodo(updateStatus);
    setTodoItem(updateStatus);
  };

  const removeItems = (id) => {
    // const updatedItems = allTodos.reduce((cartAcc, item) => {
    //   if (item.id === id) {
    //     cartAcc.push({ ...item, isStatus: 'deleted' })
    //   } else {
    //     cartAcc.push(item)
    //   }
    //   return cartAcc;
    // }, []);
    setAllTodo(allTodos.filter((data) => data.id !== id));
    // setTodoItem(data);
    // setAllTodo(data);
    // fetchTodo();
  };

  return (
    <Context.Provider
      value={{
        ...props,
        allTodos,
        todoItem,
        addNewTodo: addNewTodo,
        selectedItem: selectItem,
        markAllItems: markAllItems,
        removeItems: removeItems,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default TodoProvider;
