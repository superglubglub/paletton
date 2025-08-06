import { useState } from 'preact/hooks'
import './app.css'

interface ColorOptionParams {
    title: string;
}

const ColorOption = ({title: title}: ColorOptionParams) => {
    return(
        <div class="w-full flex flex-row items-center">
            <h2 class="w-auto text-xl text-black font-bold px-3 pb-1">{title}</h2>
            <div class="bg-red-500 w-full rounded-r-lg h-1/2"></div>
        </div>
    )
}

export function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="w-screen h-screen flex flex-row bg-white">
          <div className="w-1/4 h-screen flex flex-col border border-red-500 bg-slate-100">
              <div className="h-auto w-full px-6">
                  <h1 className="text-black text-xl font-black text-left">_palleton</h1>
                  <h1 className="text-black text-xl font-black text-right">tester</h1>
              </div>
              <div className="h-auto w-full px-6 flex flex-col">
                  <ColorOption title=".classname"/>
                  <ColorOption title=".bg"/>
                  <ColorOption title=".primary"/>
              </div>
          </div>
          <div className="w-full h-screen flex flex-col border border-red-500 bg-white">
          </div>
      </div>
  )
}
