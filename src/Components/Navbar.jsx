import React from 'react'

const Navbar = ({setCategory, category}) => {

  const categories = ['technology', 'business', 'health', 'sports', 'entertainment'];
  console.log("Data categories", categories);
  
  
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary " data-bs-theme="dark">
  <div className="container-fluid">
    <a style={{cursor:'pointer'}} onClick={()=>setCategory('')}><span className='badge bg-light text-dark fs-4'>NewsMag</span></a>
  
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">

         {categories.map(cat => (
              <li className="nav-item" key={cat}>
                
                <div
                  className={`nav-link ${category === cat ? 'active' : ''}`}
                  style={{ cursor: 'pointer' }}
                  onClick={() => setCategory(cat)}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </div>
              </li>
            ))}
        {/* <li className="nav-item"> 
          <div className="nav-link" style={{cursor:'pointer'}} onClick={()=>setCategory("technology")}>Technology</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" style={{cursor:'pointer'}} onClick={()=>setCategory("business")}>Business</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" style={{cursor:'pointer'}} onClick={()=>setCategory("health")}>Health</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" style={{cursor:'pointer'}} onClick={()=>setCategory("sports")}>Sports</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" style={{cursor:'pointer'}} onClick={()=>setCategory("entertainment")}>Entertainment</div>
        </li> */}
      </ul>
    </div>
  </div>
</nav>
  )
}


export default Navbar
