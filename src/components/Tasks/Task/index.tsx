import { Eraser, Pencil, Strikethrough } from 'lucide-react'
import { ITask } from './task.type'

type TaskProps = {
  task: ITask
}

export default function Task({ task }: TaskProps) {
  return (
    <div className='w-full flex bg-zinc-200 border-b border-zinc-300'>
      <div className='w-12 flex flex-col shrink-0 text-zinc-400'>
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
      <div className='w-full border-l border-zinc-300 flex flex-col p-3'>
        <h4 className='text-xs font-bold pb-3'>{task.name.toUpperCase()}</h4>
        <p className='text-sm'>{task.description}</p>
      </div>
    </div>
  )
}
