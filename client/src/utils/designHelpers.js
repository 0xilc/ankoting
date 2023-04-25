function createDefaultPic( username ) {
    if (!username || username.length < 2){
        return (<i className="far fa-user default-pic"></i>)
    }
    else {
        return (<span className="default-pic"> {username.slice(0,2)}</span>)
    }
}



export { createDefaultPic } 