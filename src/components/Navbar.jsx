import PageOption from "./Page_options";


function Navbar() {
	return (
	<div className="wrapper">
	  <nav id="sidebar" className="sidebar js-sidebar">
		<div className="sidebar-content js-simplebar">
		  <a className="sidebar-brand" href="index.html">
			<span className="align-middle">AdminKit</span> </a>
  
		  <ul className="sidebar-nav">
			<li className="sidebar-header">Pages</li>
  			<PageOption Name="Dashboard"/>
			  <PageOption Name="Profile"/>
			  <PageOption Name="Sign in"/>
			  <PageOption Name="Sign Up"/>
			  <PageOption Name="Blank"/>
	
  
  
			<li className="sidebar-header">Tools & Components</li>
  
			<PageOption Name="Buttons"/>
			<PageOption Name="Forms"/>
			<PageOption Name="Cards"/>
			<PageOption Name="Typography"/>
			<PageOption Name="Icons"/>
	
			
  
			
  
			<li className="sidebar-header">Plugins & Addons</li>
			<PageOption Name="Charts"/>
			<PageOption Name="Maps"/>
	
		  </ul>
  
		  <div className="sidebar-cta">
			<div className="sidebar-cta-content">
			  <strong className="d-inline-block mb-2">Upgrade to Pro</strong>
			  <div className="mb-3 text-sm">
				Are you looking for more components? Check out our premium
				version.
			  </div>
			  <div className="d-grid">
				<a href="upgrade-to-pro.html" className="btn btn-primary">
				  Upgrade to Pro
				</a>
			  </div>
			</div>
		  </div>
		</div>
	  </nav>
	  </div>
	

	);
  }
  
  export default Navbar;
  