import React from 'react'

const MainPage = ({pageTitle, children}) => {

  return (
    <div>
      <h1>{pageTitle}</h1>
      {children}
    </div>
  )
}

export default MainPage