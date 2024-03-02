import { Provider } from 'react-redux'
import Footer from './components/Footer'
import Header from './components/Header'
import Tasks from './components/Tasks'
import { store } from './stores'

export default function App() {
  return (
    <div className='dark w-screen h-screen'>
      <div className=' w-full h-full font-jetbrains text-dark-200 bg-light-1000  dark:text-light-100 dark:bg-dark-1000 p-5 flex justify-center items-center'>
        <div className='w-[30rem] h-full flex flex-col bg-light-900 dark:bg-dark-800 border dark:border-dark-500 border-light-500 rounded-sm'>
          <Provider store={store}>
            <Header />
            <Tasks />
            <Footer />
          </Provider>
        </div>
      </div>
    </div>
  )
}
