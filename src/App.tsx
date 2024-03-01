import Footer from './components/Footer'
import Header from './components/Header'
import Tasks from './components/Tasks'

export default function App() {
  return (
    <div className='w-screen h-screen'>
      <div className='w-full h-full font-jetbrains text-zinc-700 bg-zinc-500 p-5 flex justify-center items-center'>
        <div className='w-[30rem] h-full flex flex-col bg-zinc-200 rounded-sm shadow-md'>
          <Header />
          <Tasks />
          <Footer />
        </div>
      </div>
    </div>
  )
}
