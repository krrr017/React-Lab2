

function IconComponent({icon, title}){
    return(
        <section>
            <div className="wrapper">
                <div className="button">
                    <div className="icon">
                        <i className={"fa fa-"+icon}></i>
                    </div>
                    <span>{title}</span>
                </div>
            </div>
        </section>
    );
}