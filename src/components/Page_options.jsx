
function PageOption(Label){
    return 	<li className="sidebar-item">
    <a className="sidebar-link" href="index.html">
      <i className="align-middle" data-feather="sliders"></i>{" "}
      <span className="align-middle">{Label.Name}</span>
    </a>
  </li>

}
export default PageOption;