import { useState } from 'react'
import Modal from '../Modal'

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='w-full h-12 flex px-2 items-center shrink-0 border-t dark:border-dark-500 border-light-300'>
      <button
        onClick={() => setIsOpen(true)}
        className='bg-indigo-500 hover:bg-indigo-600 font-bold text-white text-xs py-2 px-5 rounded-sm'
        type='button'
      >
        NEW TASKS
      </button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Modal.Header />
        <div className='w-[30rem] h-96 dark:bg-dark-900 bg-light-900 rounded-b-sm border dark:border-dark-500 border-light-500' />
      </Modal>
    </div>
  )
}
