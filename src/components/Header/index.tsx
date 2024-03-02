/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { ToggleLeft, ToggleRight } from 'lucide-react'
import { useTheme } from '../../contexts/ThemeContext'

export default function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className='w-full h-12 border-b dark:border-dark-500 border-zinc-300'>
      <div className='w-full h-12 flex justify-between items-center pl-5'>
        <h5 className='text-sm font-semibold'>TASKS</h5>
        <div
          onClick={toggleTheme}
          className='w-12 h-12 hover:text-indigo-500 cursor-pointer flex items-center justify-center'
        >
          {theme === 'light' ? <ToggleLeft /> : <ToggleRight />}
        </div>
      </div>
    </div>
  )
}
