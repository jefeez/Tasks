/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { v4 } from 'uuid'
import { ITask } from '../../components/Tasks/Task/task.type'

const init = {
  id: v4(),
  name: 'Tasks',
  description:
    'Organize suas tarefas diárias de maneira eficiente e acompanhe seu progresso facilmente com nossa plataforma intuitiva de gerenciamento de tarefas.',
}

export interface ITasksState {
  tasks: ITask[]
}

const initialState: ITasksState = {
  tasks: [],
}

export const getTasks = createAsyncThunk<ITask[]>('getTasks', () => {
  const tasks = localStorage.getItem('@TASKS')
  if (!tasks) {
    localStorage.setItem('@TASKS', JSON.stringify([init]))
  }
  const get = localStorage.getItem('@TASKS')

  return get ? (JSON.parse(get) as ITask[]) : []
})

export const tasksSlice = createSlice({
  initialState,
  name: 'tasks',
  extraReducers(builder) {
    builder.addCase(getTasks.fulfilled, (state, action: { payload: ITask[] }) => {
      state.tasks = action.payload
    })
  },
  reducers: {
    addTask: (state, action: { payload: ITask }) => {
      state.tasks = state.tasks.reverse()
      state.tasks.push({ ...action.payload, id: v4() })
      state.tasks = state.tasks.reverse()
      localStorage.setItem('@TASKS', JSON.stringify(state.tasks))
    },

    deleteTask: (state, action: { payload: string }) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload)
      localStorage.setItem('@TASKS', JSON.stringify(state.tasks))
    },

    updateTask: (state, action: { payload: ITask }) => {
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          return action.payload
        }
        return task
      })
      localStorage.setItem('@TASKS', JSON.stringify(state.tasks))
    },
    toggleTask: (state, action: { payload: string }) => {
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload) {
          return {
            ...task,
            completed: !task.completed,
          }
        }
        return task
      })
      localStorage.setItem('@TASKS', JSON.stringify(state.tasks))
    },
  },
})

export const { addTask, deleteTask, updateTask, toggleTask } = tasksSlice.actions
export const tasksReducer = tasksSlice.reducer
