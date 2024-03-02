/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Eraser, Pencil, Strikethrough } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { ITask } from './task.type'
import { deleteTask, toggleTask } from '../../../stores/features/tasksSlice'
import Modal from '../../Modal'
import Update from '../../Form/Update'

type TaskProps = {
  task: ITask
}

export default function Task({ task }: TaskProps) {
  const [isOpen, setIsOpen] = useState(false)

  const dispatch = useDispatch()

  const onCompleted = () => {
    dispatch(toggleTask(task.id))
  }

  const onDelete = () => {
    dispatch(deleteTask(task.id))
  }

  const onUpdate = () => {
    setIsOpen(true)
  }

  return (
    <>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Modal.Header>UPDATE TASK</Modal.Header>
        <Update task={task} />
      </Modal>
      <div className='w-full  flex dark:border-dark-500 border-b border-light-500'>
        <div className='w-12 flex flex-col shrink-0 text-light-100 dark:text-dark-100'>
          <div
            onClick={onCompleted}
            className={`w-12 h-12 shrink-0 ${task.completed ? 'dark:text-light-1000 text-dark-1000' : ''} flex cursor-pointer hover:text-indigo-500 justify-center items-center`}
          >
            <Strikethrough size={18} />
          </div>
          <div
            onClick={onDelete}
            className='w-12 h-12 shrink-0 flex cursor-pointer hover:text-indigo-500 justify-center items-center'
          >
            <Eraser size={18} />
          </div>
          <div
            onClick={onUpdate}
            className='w-12 h-12 shrink-0 flex cursor-pointer hover:text-indigo-500 justify-center items-center'
          >
            <Pencil size={18} />
          </div>
        </div>
        <div
          className={`w-full ${task.completed ? 'line-through' : ''} border-l dark:border-dark-500 border-light-500 flex flex-col p-3`}
        >
          <h4 className='text-xs  dark:text-light-800 text-dark-800 font-bold pb-3'>
            {task.name.toUpperCase()}
          </h4>
          <p className='text-sm hyphens-auto font-medium text-wrap whitespace-normal break-words'>
            {task.description}
          </p>
        </div>
      </div>
    </>
  )
}
