import React from 'react'

function component1() {
  return (
    <div>
            <nav class="navbar ">
  <div class="container-fluid">
    <div style={{
        display:"flex",
        gap:"20px"
    }}>
    <img className='logo' src="https://1000logos.net/wp-content/uploads/2018/02/BMW-Logo-1997.png" alt="" />
    <a class="navbar-brand text-white">BMW</a>
    </div>
    <div class="d-flex links">
     <a href="">Home</a>
     <a href="">Download</a>
     <a href="">Pricing</a>
     <a href="">Features</a>
     <a href="">Contact</a>
    
    <div className='buttonslist'>
    <button className='btn btn-primary'>Signin</button>
    <i id='hamburger' class="bi bi-list text-center" style={{
    color:"white",
    cursor:"pointer",
    fontSize:"25px"
    }}></i>
</div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default component1
