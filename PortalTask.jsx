import React from 'react'
import { createPortal } from 'react-dom'

const PortalTask = ({fun}) => {
  return (
    createPortal(
        <div id="mainContainer">
        <div id="subContainer">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore aliquam incidunt eius magni laudantium fugit ratione quae hic, dolores sed et enim eveniet quo aut, velit numquam amet pariatur impedit quis debitis voluptate exercitationem! Corporis molestiae ratione accusamus iusto commodi, laudantium excepturi </p>
            <button onClick={fun} >Close Portal</button>
           </div>
        </div>,document.getElementById("portal")
    )
  )
}

export default PortalTask