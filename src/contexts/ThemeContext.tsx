import { createContext, useCallback, useContext, useMemo, useState } from 'react'

export interface IContextTheme {
  theme: string
  toggleTheme: () => void
}

export const ThemeContext = createContext<IContextTheme>({} as IContextTheme)
export const useTheme = () => useContext(ThemeContext)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState('light')

  const toggleTheme = useCallback(() => setTheme(theme === 'light' ? 'dark' : 'light'), [theme])

  return (
    <ThemeContext.Provider value={useMemo(() => ({ theme, toggleTheme }), [toggleTheme, theme])}>
      <div className={`${theme} w-screen h-screen`}>
        <div className=' w-full h-full font-jetbrains text-dark-200 bg-light-1000  dark:text-light-100 dark:bg-dark-1000 p-5 flex justify-center items-center'>
          <div className='w-[30rem] h-full flex flex-col bg-light-900 dark:bg-dark-800 border dark:border-dark-500 border-light-500 rounded-sm'>
            {children}
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  )
}
