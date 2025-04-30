import { useEffect, useState } from "react";

import Section from './components/Section'

function App (){
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/data.json')
    .then(res => res.json())
    .then(setData)
  }, [])  

  if (!data) return <div className="text-center mt-10 text-lg">Loading...</div>

return (
  <div className="max-w-full  mx-aut p-4 space-y-6 text-white bg-gray-900 min-h-screen">
    <h1 className="text-3xl font-bold text-center underline">Personal Website</h1>
    <Section title='About-us' content={data.about}/>
    <Section title='Skills' content={data.skills}/>
    <Section title='Hoobies' content={data.hoobies}/>
    <Section title='Passion' content={data.passion}/>
    <Section title='Academic' content={data.academic}/>
    <Section title='Experience' content={data.experience}/>
    <Section title='Certificates' content={data.certi}/>
  </div>
)
}

export default App

