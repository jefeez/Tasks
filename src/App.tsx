import { Provider } from 'react-redux'
import Footer from './components/Footer'
import Header from './components/Header'
import Tasks from './components/Tasks'
import { store } from './stores'
import { ThemeProvider } from './contexts/ThemeContext'

export default function App() {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <Header />
        <Tasks />
        <Footer />
      </Provider>
    </ThemeProvider>
  )
}
