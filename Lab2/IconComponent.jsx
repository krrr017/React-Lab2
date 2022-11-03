

function IconComponent({icon, title}){
    return(
        <div className="button">
            <div className="icon">
                <i className={"fa fa-"+icon}></i>
            </div>
            <span>{title}</span>
        </div>
    );
}