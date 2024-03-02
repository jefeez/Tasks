/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-constructed-context-values */
import { X } from 'lucide-react'
import { ReactNode, createContext, useContext } from 'react'

type IModal = {
  children: ReactNode
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

type IModalContext = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ContextModal = createContext<IModalContext>({} as IModalContext)

export const useModal = () => useContext(ContextModal)

function Modal({ children, isOpen, setIsOpen }: IModal) {
  return (
    <ContextModal.Provider value={{ isOpen, setIsOpen }}>
      {isOpen ? (
        <>
          <div className='fixed inset-0 bg-dark-1000 bg-opacity-75 transition-opacity' />
          <div className='fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>{children}</div>
        </>
      ) : (
        ''
      )}
    </ContextModal.Provider>
  )
}

Modal.Header = function Header() {
  const { setIsOpen } = useContext(ContextModal)

  return (
    <div className='w-full h-12  dark:bg-dark-900 bg-light-900  shrink-0 flex justify-between items-center border border-b-0 rounded-t-sm border-light-500 dark:border-dark-500 '>
      <div className='text-sm px-4 font-bold'>MODAL</div>
      <div
        onClick={() => setIsOpen(false)}
        className='w-12 h-12 flex cursor-pointer hover:text-indigo-500 items-center justify-center'
      >
        <X strokeWidth={3} size={15} />
      </div>
    </div>
  )
}

export default Modal
