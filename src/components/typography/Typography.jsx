import React from 'react'
export default function Typography({children , fontSize , bold , marginTop , marginBottom}) {
  return (
    <div style={{fontSize: fontSize , fontWeight: bold? "700" : "500" , marginTop: marginTop ,marginBottom: marginBottom}}>{children}</div>
  )
}
