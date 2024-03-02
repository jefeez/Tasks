import { useState } from 'react'
import Modal from '../Modal'
import Insert from '../Form/Insert'

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='w-full h-14 flex px-2 items-center shrink-0 border-t dark:border-dark-500 border-light-300'>
      <button
        onClick={() => setIsOpen(true)}
        className='bg-indigo-500 hover:bg-indigo-600 font-bold text-white text-xs py-3 px-5 rounded-sm'
        type='button'
      >
        NEW TASKS
      </button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Modal.Header>INSET NEW TASK</Modal.Header>
        <Insert />
      </Modal>
    </div>
  )
}
