import SidebarComponent from "../SideBar/SideBarComponent"

const HeaderComponent=()=>{

    return(
        <>
        <div className="header">
            <div>
                <h1 className="heading">
                    hava havai 
                </h1>
            </div>
            <div>
                <img className="header-image" src="" alt="profile" />
            </div>
        </div>
        <SidebarComponent />
        </>
    )
}

export default HeaderComponent