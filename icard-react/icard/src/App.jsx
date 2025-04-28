import * as React from 'react'
import { Navigation } from './routes'

import { ClientLayout } from './layouts'
import { AdminLayout } from './layouts'

export default function App() {
  return (
    <div className="flex flex-col h-screen">
      <div>
        <h1 className='text-[100px]'>Hola mundo!!</h1>
        <Navigation />
      </div>
    </div>
  )
}
