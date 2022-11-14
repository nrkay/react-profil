const Item = ({title, desc, imgURL}) => {
    return ( 
        <div>
            <div className="card-about">
                            <h1>{title}</h1>
                            <img
                                alt=""
                                src={imgURL}
                                width="80"
                                height="80"
                                className="d-inline-block align-top m-auto"
                                />{' '}  
                            <h2>{desc}</h2>
                        </div>
        </div>
     );
}
 
export default Item;