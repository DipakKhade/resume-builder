
import './App.css'
import {ThemeProvider} from './@/components/theme-provider'
import { GlobeDemo } from './@/components/World'


function App() {

  return (
   <>
   <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

   <GlobeDemo/>
   </ThemeProvider>
   </>
  )
}

export default App
