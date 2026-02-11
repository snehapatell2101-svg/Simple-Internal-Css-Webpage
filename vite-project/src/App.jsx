import React from 'react'
import Navbar from './component/Navbar'
import Section from './component/Section'
import Footer from './component/Footer'
import Section2 from './component/Section2'

const App = () => {
  return (
    <div>

      <div className='container-fluid'>

        <div>
          <Navbar />
        </div>
        <h2 className='mt-3 text-center text-semibold'>Internal Css</h2>
        <div className='row mt-5'>
          <div className='col-md-6'>
            <Section />
          </div>
          <div className='col-md-6'>
            <Section2 />
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
