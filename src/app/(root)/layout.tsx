//layout.tsx is use to set elements that appear in every sub pages
import React from "react"

//children is a component passing through this layout for it to be rendered
const layout = ({ children }: { children: React.ReactNode}) => {
  return (
    <div>
        <p>NavBar</p>
        {children}
    </div>
  )
}

export default layout