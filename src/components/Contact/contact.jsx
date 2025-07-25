import React from 'react'

const contact = () => {
  const isLoggedIn=false;
  if (isLoggedIn) {
    return(
      <h1>Welcome</h1>
    )
  }
  else{
    return(
      <h1>please log IN</h1>
    )

  }
  

}

export default contact