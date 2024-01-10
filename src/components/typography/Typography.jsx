import React from 'react'
export default function Typography({children , fontSize , bold , marginTop}) {
  return (
    <div style={{fontSize: fontSize , fontWeight: bold? "700" : "500" , marginTop: marginTop}}>
      {children}
    </div>
  )
}
