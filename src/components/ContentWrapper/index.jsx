import React from 'react'
import './index.css'
export default function ContentWrapper({children}) {
  return (
    <div className='grid'>{children}</div>
  )
}
