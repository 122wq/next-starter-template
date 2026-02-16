//layout.tsx is use to set elements that appear in every sub pages
//route groups: folders with paratesis, can add separate layout but does not affet the url as in regular folders
import React from "react"

//children is a component passing through this layout for it to be rendered
const layout = ({ children }: { children: React.ReactNode}) => {
  return (
    <div>
        <p>Dashboard NavBar</p>
        {children}
    </div>
  )
}

export default layout