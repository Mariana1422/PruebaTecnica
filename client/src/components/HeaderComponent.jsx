
const HeaderComponent = () => {
  return (
    <div>
      <div>
     
        <nav className="navbar bg-dark border-bottom border-body p-3" data-bs-theme="dark"> 
            <a className="navbar-brand" href="#"><h1>Movies</h1></a>

            <div className="d-grid gap-2 d-md-block p-4">
              <button className="btn " type="button">Log in</button>
              <button className="btn btn-danger" type="button">Strart your free trial</button>
           </div>
         </nav>
           <nav className="navbar bg-secondary p-2" data-bs-theme="dark"> 
              <a className="navbar-brand" href="#"><h1>Popular Titles</h1></a>
           </nav>
      </div>
    </div>
  );
};

export default HeaderComponent;
