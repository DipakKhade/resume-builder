
import './App.css'
import {ThemeProvider} from './@/components/theme-provider'
import Header from './@/components/Header'
import { GlobeDemo } from './@/components/World'


function App() {

  return (
   <>
   <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <Header/>
   <GlobeDemo/>
   </ThemeProvider>
   </>
  )
}

export default App
