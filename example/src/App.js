import React, { useState } from 'react'

import WhatsAppWidget from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'


const App = () => {

const [count, setCount] = useState(0)

  return (
    <>
      <h1>{count}</h1>
      <WhatsAppWidget
        phoneNumber='593959299792'
        callback={() => setCount(count + 1)}
      />
    </>
  )
}

export default App
