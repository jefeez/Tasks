import { Eraser, Pencil, Strikethrough } from 'lucide-react'
import { ITask } from './task.type'

type TaskProps = {
  task: ITask
}

export default function Task({ task }: TaskProps) {
  return (
    <div className='w-full flex dark:border-dark-500 border-b border-light-500'>
      <div className='w-12 flex flex-col shrink-0 text-light-100 dark:text-dark-100'>
        <div className='w-12 h-12 shrink-0 flex cursor-pointer hover:text-indigo-500 justify-center items-center'>
          <Strikethrough size={18} />
        </div>
        <div className='w-12 h-12 shrink-0 flex cursor-pointer hover:text-indigo-500 justify-center items-center'>
          <Eraser size={18} />
        </div>
        <div className='w-12 h-12 shrink-0 flex cursor-pointer hover:text-indigo-500 justify-center items-center'>
          <Pencil size={18} />
        </div>
      </div>
      <div className='w-full border-l dark:border-dark-500 border-light-500 flex flex-col p-3'>
        <h4 className='text-xs dark:text-light-800 text-dark-800 font-bold pb-3'>
          {task.name.toUpperCase()}
        </h4>
        <p className='text-sm font-medium'>{task.description}</p>
      </div>
    </div>
  )
}
