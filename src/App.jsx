import React, { useState } from 'react'
import gsap from 'gsap'

//component
import GalleryComp from './components/gallery'
import Hobbies from "./pages/hobbies"

// images
import logo from './assets/images/logo.png'

//css
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(0);

  return (
    <>
    <div className="navbar">
        <ul className="navbarUL">
            <li className="navbarLI"><img className="logo" src={logo} alt="logo"/></li>
            <li className="navbarLI" onClick={Hobbies}><a className="active">Home</a></li>
            <li className="navbarLI"><a href="hobbies.html">Hobbies</a></li>
            <li className="navbarLI"><a href="projects.html">Projects</a></li>
            <li className="navbarLI"><a href="experience.html">Experience</a></li>
          </ul>
    </div>
    
    <div className='allContent'> 
      <div className='title'>
        <h1> Welcome.</h1>
      </div>
      <GalleryComp/>
      <div className = "text">
      Lorem ipsum odor amet, consectetuer adipiscing elit. Integer neque curabitur varius a mauris luctus bibendum dis. Lacus etiam a viverra, posuere proin arcu leo. Tellus nibh aptent blandit natoque tortor sed odio. Odio convallis lectus integer natoque convallis neque convallis laoreet. Odio netus condimentum natoque nascetur pellentesque et conubia faucibus conubia. Bibendum sit turpis parturient mauris mauris.

  Vehicula egestas eu lobortis ex iaculis nec. Nulla eget sed ultrices cras tempor nibh. Curabitur vestibulum libero consequat tempor phasellus. Morbi odio curabitur curae tortor in magna commodo eleifend libero. Volutpat nascetur aliquet hac imperdiet senectus pulvinar maecenas efficitur. Torquent quam torquent ullamcorper ullamcorper semper ultricies suscipit viverra. Montes vulputate suscipit etiam ultrices ante. Potenti magnis laoreet pharetra id nulla tincidunt facilisi.

  Purus integer facilisis imperdiet ridiculus cursus blandit. Ante id diam phasellus vivamus eleifend natoque nullam ante. Efficitur mauris fringilla semper arcu curabitur litora donec. Rutrum nec finibus quis ad per. Fermentum class imperdiet ultricies neque; congue class tempus. Viverra arcu tristique mattis ridiculus faucibus luctus laoreet? Ullamcorper fames hendrerit scelerisque nostra sit condimentum; sociosqu accumsan ultrices.

  Lacus facilisi consequat penatibus, dictum natoque ex. Sodales senectus montes nisi hac faucibus per. Morbi etiam integer sollicitudin mus consequat molestie ut. Non sem pulvinar convallis laoreet dui. Taciti risus vestibulum feugiat commodo vitae donec feugiat feugiat penatibus. Hac suscipit nascetur mattis consectetur erat purus rhoncus. Natoque taciti amet nam aliquam efficitur nisi porttitor torquent.

  Fusce elit sapien turpis vestibulum ullamcorper inceptos. Aptent inceptos mi himenaeos laoreet eros velit non taciti malesuada. Aconsequat leo nisl curae tellus. Platea potenti magnis curae; tempor natoque curabitur sed. Nostra torquent nunc per sapien gravida phasellus laoreet tellus. Diam venenatis neque amet nostra metus lobortis mus ipsum penatibus.
      
  Lorem ipsum odor amet, consectetuer adipiscing elit. Integer neque curabitur varius a mauris luctus bibendum dis. Lacus etiam a viverra, posuere proin arcu leo. Tellus nibh aptent blandit natoque tortor sed odio. Odio convallis lectus integer natoque convallis neque convallis laoreet. Odio netus condimentum natoque nascetur pellentesque et conubia faucibus conubia. Bibendum sit turpis parturient mauris mauris.

Vehicula egestas eu lobortis ex iaculis nec. Nulla eget sed ultrices cras tempor nibh. Curabitur vestibulum libero consequat tempor phasellus. Morbi odio curabitur curae tortor in magna commodo eleifend libero. Volutpat nascetur aliquet hac imperdiet senectus pulvinar maecenas efficitur. Torquent quam torquent ullamcorper ullamcorper semper ultricies suscipit viverra. Montes vulputate suscipit etiam ultrices ante. Potenti magnis laoreet pharetra id nulla tincidunt facilisi.

Purus integer facilisis imperdiet ridiculus cursus blandit. Ante id diam phasellus vivamus eleifend natoque nullam ante. Efficitur mauris fringilla semper arcu curabitur litora donec. Rutrum nec finibus quis ad per. Fermentum class imperdiet ultricies neque; congue class tempus. Viverra arcu tristique mattis ridiculus faucibus luctus laoreet? Ullamcorper fames hendrerit scelerisque nostra sit condimentum; sociosqu accumsan ultrices.

Lacus facilisi consequat penatibus, dictum natoque ex. Sodales senectus montes nisi hac faucibus per. Morbi etiam integer sollicitudin mus consequat molestie ut. Non sem pulvinar convallis laoreet dui. Taciti risus vestibulum feugiat commodo vitae donec feugiat feugiat penatibus. Hac suscipit nascetur mattis consectetur erat purus rhoncus. Natoque taciti amet nam aliquam efficitur nisi porttitor torquent.

Fusce elit sapien turpis vestibulum ullamcorper inceptos. Aptent inceptos mi himenaeos laoreet eros velit non taciti malesuada. Aconsequat leo nisl curae tellus. Platea potenti magnis curae; tempor natoque curabitur sed. Nostra torquent nunc per sapien gravida phasellus laoreet tellus. Diam venenatis neque amet nostra metus lobortis mus ipsum penatibus.
Lorem ipsum odor amet, consectetuer adipiscing elit. Integer neque curabitur varius a mauris luctus bibendum dis. Lacus etiam a viverra, posuere proin arcu leo. Tellus nibh aptent blandit natoque tortor sed odio. Odio convallis lectus integer natoque convallis neque convallis laoreet. Odio netus condimentum natoque nascetur pellentesque et conubia faucibus conubia. Bibendum sit turpis parturient mauris mauris.

  Vehicula egestas eu lobortis ex iaculis nec. Nulla eget sed ultrices cras tempor nibh. Curabitur vestibulum libero consequat tempor phasellus. Morbi odio curabitur curae tortor in magna commodo eleifend libero. Volutpat nascetur aliquet hac imperdiet senectus pulvinar maecenas efficitur. Torquent quam torquent ullamcorper ullamcorper semper ultricies suscipit viverra. Montes vulputate suscipit etiam ultrices ante. Potenti magnis laoreet pharetra id nulla tincidunt facilisi.

  Purus integer facilisis imperdiet ridiculus cursus blandit. Ante id diam phasellus vivamus eleifend natoque nullam ante. Efficitur mauris fringilla semper arcu curabitur litora donec. Rutrum nec finibus quis ad per. Fermentum class imperdiet ultricies neque; congue class tempus. Viverra arcu tristique mattis ridiculus faucibus luctus laoreet? Ullamcorper fames hendrerit scelerisque nostra sit condimentum; sociosqu accumsan ultrices.

  Lacus facilisi consequat penatibus, dictum natoque ex. Sodales senectus montes nisi hac faucibus per. Morbi etiam integer sollicitudin mus consequat molestie ut. Non sem pulvinar convallis laoreet dui. Taciti risus vestibulum feugiat commodo vitae donec feugiat feugiat penatibus. Hac suscipit nascetur mattis consectetur erat purus rhoncus. Natoque taciti amet nam aliquam efficitur nisi porttitor torquent.

  Fusce elit sapien turpis vestibulum ullamcorper inceptos. Aptent inceptos mi himenaeos laoreet eros velit non taciti malesuada. Aconsequat leo nisl curae tellus. Platea potenti magnis curae; tempor natoque curabitur sed. Nostra torquent nunc per sapien gravida phasellus laoreet tellus. Diam venenatis neque amet nostra metus lobortis mus ipsum penatibus.
  Lorem ipsum odor amet, consectetuer adipiscing elit. Integer neque curabitur varius a mauris luctus bibendum dis. Lacus etiam a viverra, posuere proin arcu leo. Tellus nibh aptent blandit natoque tortor sed odio. Odio convallis lectus integer natoque convallis neque convallis laoreet. Odio netus condimentum natoque nascetur pellentesque et conubia faucibus conubia. Bibendum sit turpis parturient mauris mauris.

  Vehicula egestas eu lobortis ex iaculis nec. Nulla eget sed ultrices cras tempor nibh. Curabitur vestibulum libero consequat tempor phasellus. Morbi odio curabitur curae tortor in magna commodo eleifend libero. Volutpat nascetur aliquet hac imperdiet senectus pulvinar maecenas efficitur. Torquent quam torquent ullamcorper ullamcorper semper ultricies suscipit viverra. Montes vulputate suscipit etiam ultrices ante. Potenti magnis laoreet pharetra id nulla tincidunt facilisi.

  Purus integer facilisis imperdiet ridiculus cursus blandit. Ante id diam phasellus vivamus eleifend natoque nullam ante. Efficitur mauris fringilla semper arcu curabitur litora donec. Rutrum nec finibus quis ad per. Fermentum class imperdiet ultricies neque; congue class tempus. Viverra arcu tristique mattis ridiculus faucibus luctus laoreet? Ullamcorper fames hendrerit scelerisque nostra sit condimentum; sociosqu accumsan ultrices.

  Lacus facilisi consequat penatibus, dictum natoque ex. Sodales senectus montes nisi hac faucibus per. Morbi etiam integer sollicitudin mus consequat molestie ut. Non sem pulvinar convallis laoreet dui. Taciti risus vestibulum feugiat commodo vitae donec feugiat feugiat penatibus. Hac suscipit nascetur mattis consectetur erat purus rhoncus. Natoque taciti amet nam aliquam efficitur nisi porttitor torquent.

  Fusce elit sapien turpis vestibulum ullamcorper inceptos. Aptent inceptos mi himenaeos laoreet eros velit non taciti malesuada. Aconsequat leo nisl curae tellus. Platea potenti magnis curae; tempor natoque curabitur sed. Nostra torquent nunc per sapien gravida phasellus laoreet tellus. Diam venenatis neque amet nostra metus lobortis mus ipsum penatibus.
  Lorem ipsum odor amet, consectetuer adipiscing elit. Integer neque curabitur varius a mauris luctus bibendum dis. Lacus etiam a viverra, posuere proin arcu leo. Tellus nibh aptent blandit natoque tortor sed odio. Odio convallis lectus integer natoque convallis neque convallis laoreet. Odio netus condimentum natoque nascetur pellentesque et conubia faucibus conubia. Bibendum sit turpis parturient mauris mauris.

  Vehicula egestas eu lobortis ex iaculis nec. Nulla eget sed ultrices cras tempor nibh. Curabitur vestibulum libero consequat tempor phasellus. Morbi odio curabitur curae tortor in magna commodo eleifend libero. Volutpat nascetur aliquet hac imperdiet senectus pulvinar maecenas efficitur. Torquent quam torquent ullamcorper ullamcorper semper ultricies suscipit viverra. Montes vulputate suscipit etiam ultrices ante. Potenti magnis laoreet pharetra id nulla tincidunt facilisi.

  Purus integer facilisis imperdiet ridiculus cursus blandit. Ante id diam phasellus vivamus eleifend natoque nullam ante. Efficitur mauris fringilla semper arcu curabitur litora donec. Rutrum nec finibus quis ad per. Fermentum class imperdiet ultricies neque; congue class tempus. Viverra arcu tristique mattis ridiculus faucibus luctus laoreet? Ullamcorper fames hendrerit scelerisque nostra sit condimentum; sociosqu accumsan ultrices.

  Lacus facilisi consequat penatibus, dictum natoque ex. Sodales senectus montes nisi hac faucibus per. Morbi etiam integer sollicitudin mus consequat molestie ut. Non sem pulvinar convallis laoreet dui. Taciti risus vestibulum feugiat commodo vitae donec feugiat feugiat penatibus. Hac suscipit nascetur mattis consectetur erat purus rhoncus. Natoque taciti amet nam aliquam efficitur nisi porttitor torquent.

  Fusce elit sapien turpis vestibulum ullamcorper inceptos. Aptent inceptos mi himenaeos laoreet eros velit non taciti malesuada. Aconsequat leo nisl curae tellus. Platea potenti magnis curae; tempor natoque curabitur sed. Nostra torquent nunc per sapien gravida phasellus laoreet tellus. Diam venenatis neque amet nostra metus lobortis mus ipsum penatibus.
  Lorem ipsum odor amet, consectetuer adipiscing elit. Integer neque curabitur varius a mauris luctus bibendum dis. Lacus etiam a viverra, posuere proin arcu leo. Tellus nibh aptent blandit natoque tortor sed odio. Odio convallis lectus integer natoque convallis neque convallis laoreet. Odio netus condimentum natoque nascetur pellentesque et conubia faucibus conubia. Bibendum sit turpis parturient mauris mauris.

  Vehicula egestas eu lobortis ex iaculis nec. Nulla eget sed ultrices cras tempor nibh. Curabitur vestibulum libero consequat tempor phasellus. Morbi odio curabitur curae tortor in magna commodo eleifend libero. Volutpat nascetur aliquet hac imperdiet senectus pulvinar maecenas efficitur. Torquent quam torquent ullamcorper ullamcorper semper ultricies suscipit viverra. Montes vulputate suscipit etiam ultrices ante. Potenti magnis laoreet pharetra id nulla tincidunt facilisi.

  Purus integer facilisis imperdiet ridiculus cursus blandit. Ante id diam phasellus vivamus eleifend natoque nullam ante. Efficitur mauris fringilla semper arcu curabitur litora donec. Rutrum nec finibus quis ad per. Fermentum class imperdiet ultricies neque; congue class tempus. Viverra arcu tristique mattis ridiculus faucibus luctus laoreet? Ullamcorper fames hendrerit scelerisque nostra sit condimentum; sociosqu accumsan ultrices.

  Lacus facilisi consequat penatibus, dictum natoque ex. Sodales senectus montes nisi hac faucibus per. Morbi etiam integer sollicitudin mus consequat molestie ut. Non sem pulvinar convallis laoreet dui. Taciti risus vestibulum feugiat commodo vitae donec feugiat feugiat penatibus. Hac suscipit nascetur mattis consectetur erat purus rhoncus. Natoque taciti amet nam aliquam efficitur nisi porttitor torquent.

  Fusce elit sapien turpis vestibulum ullamcorper inceptos. Aptent inceptos mi himenaeos laoreet eros velit non taciti malesuada. Aconsequat leo nisl curae tellus. Platea potenti magnis curae; tempor natoque curabitur sed. Nostra torquent nunc per sapien gravida phasellus laoreet tellus. Diam venenatis neque amet nostra metus lobortis mus ipsum penatibus.   
      
      </div>
    </div>
    </>
  )
}

export default App
