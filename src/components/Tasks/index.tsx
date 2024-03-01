import { useState } from 'react'

import { ITask } from './Task/task.type'
import Task from './Task'

export default function Tasks() {
  const [tasks] = useState<ITask[]>([
    {
      id: '1',
      name: 'Task 1',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo pariatur laboriosam harum
      voluptate dolorum deleniti reprehenderit corporis nisi voluptates quos.`,
    },
    {
      id: '2',
      name: 'Task 2',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo pariatur laboriosam harum
      voluptate dolorum deleniti reprehenderit corporis nisi voluptates quos.`,
    },
    {
      id: '3',
      name: 'Task 3',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo pariatur laboriosam harum
      voluptate dolorum deleniti reprehenderit corporis nisi voluptates quos.`,
    },
    {
      id: '4',
      name: 'Task 4',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo pariatur laboriosam harum
      voluptate dolorum deleniti reprehenderit corporis nisi voluptates quos.`,
    },
  ])
  return (
    <div className='w-full h-full flex flex-col scrollbar-w-[0.2rem] scrollbar  scrollbar-thumb-indigo-500  scrollbar-track-zinc-300 overflow-y-scroll'>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  )
}
