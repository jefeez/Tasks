import { useDispatch, useSelector } from 'react-redux'

import { useEffect } from 'react'
import Task from './Task'
import { AppDispatch, RootState } from '../../stores'
import { getTasks } from '../../stores/features/tasksSlice'

export default function Tasks() {
  const tasks = useSelector((state: RootState) => state.tasks.tasks)

  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(getTasks())
  }, [dispatch])

  return (
    <div className='w-full h-full flex flex-col scrollbar-w-[0.15rem] scrollbar  scrollbar-thumb-indigo-500  scrollbar-track-light-800 dark:scrollbar-track-dark-800 overflow-y-scroll'>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  )
}
