import "./Sidebar.css"
import logo from "../../assets/logo.svg"

 const Sidebar = (sidebarOpen, closeSidebar) => {
    return (
        <div className={sidebarOpen ? "sidebar-responsive" : "" } id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                    <img src={logo} alt="logo"/>
                    <h1>codedash</h1>
                </div>
                <i className= "fa fa-times" id="sidebar-Icon" onClick={() =>(closeSidebar)}>

                </i>
            </div>
            <div className="sidebar__menu">
                <div className="sidebar__link active_menu_link">
                    <i className="fa fa-home"></i>
                    <a href="#">Dashboard</a>
                </div>
                <h2>MGT</h2>
                <div className="sidebar__link">
                    <i className="fa fa-user-secret"></i>
                    <a href="#">admin Managment</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-building-o"></i>
                    <a href="#">Company Managment</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-wrench"></i>
                    <a href="#">Empolyee Managment</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-archive"></i>
                    <a href="#">Warehouse</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-handshake-o"></i>
                    <a href="#">Contract</a>
                </div>
                <h2>Leave</h2>
                <div className="sidebar__link">
                    <i className="fa fa-user-quetion"></i>
                    <a href="#">Requests</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-sign-out"></i>
                    <a href="#">Leave Policy</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-calendar-check-o"></i>
                    <a href="#">Special Days</a>
                </div>                
                <div className="sidebar__link">
                    <i className="fa fa-files-o"></i>
                    <a href="#">Apply Leave</a>
                </div>
                <h2>PAYROLL</h2>
                <div className="sidebar__link">
                    <i className="fa fa-user-money"></i>
                    <a href="#">Payroll</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-briefcase"></i>
                    <a href="#">Pay brief</a>
                </div>
                <div className="sidebar__logout">
                    <i className="fa fa-power-off"></i>
                    <a href="#">Logout</a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
