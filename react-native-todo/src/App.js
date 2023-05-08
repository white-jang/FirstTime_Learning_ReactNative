import React, { useState, useRef } from 'react';
import { StatusBar } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import { theme } from './theme';
import { useWindowDimensions, Text } from 'react-native';
import Input from './components/Input';
import Task from './components/Task';

export default function App() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hanbit', completed: false },
    { id: 2, text: 'React Native', completed: true },
    { id: 3, text: 'React Native Sample', completed: false },
    { id: 4, text: 'Edit Todo Item', completed: false },
  ]);
  const nextId = useRef(5);
  const width = useWindowDimensions().width;

  const _onBlur = () => {
    setNewTask('');
  };

  const _addTask = () => {
    const newTaskObj = { id: nextId.current, text: newTask, completed: false };
    setNewTask('');
    setTasks(tasks.concat(newTaskObj));
    nextId.current += 1;
  };

  const _handleTextChange = (text) => {
    setNewTask(text);
  };

  const _deleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  const _toggleTask = (id) => {
    const currentTasks = [...tasks]; // 불변성의 법칙을 지키기 위해 스프레드 연산자로 새로 할당
    currentTasks[id - 1].completed = !currentTasks[id - 1].completed;
    setTasks(currentTasks);
  };

  const _updateTask = (item) => {
    const currentTasks = [...tasks];
    currentTasks[item.id - 1] = item;
    setTasks(currentTasks);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar
          barStyle="light-content"
          backgroundColor={theme.background}
        />
        <Title>TODO List</Title>
        <Input
          placeholder="+ Add a Task"
          value={newTask}
          onChangeText={_handleTextChange}
          onSubmitEditing={_addTask}
          onBlur={_onBlur}
        />
        <List width={width}>
          {tasks.map((item) => {
            return (
              <Task
                key={item.id}
                item={item}
                deleteTask={_deleteTask}
                toggleTask={_toggleTask}
                updateTask={_updateTask}
              />
            );
          })}
        </List>
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.Text`
  font-size: 40px;
  font-weight: 600;
  color: ${({ theme }) => theme.main};
  align-self: flex-start;
  margin: 0px 20px;
`;

const List = styled.ScrollView`
  flex: 1;
  width: ${({ width }) => width - 40}px;
`;
