const Portofolio = ({linkURL, img, title, desc}) => {
    return ( 
        <>
            <a className="text-decoration-none" href={linkURL} target={"_blank"}>
                        <div className="card bg-transparent mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                <img src={img} width="100" height="100" className="img-fluid rounded-start mt-5" alt="..." />{''}
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h1 className="card-title">{title}</h1>
                                        <p className="card-text">{desc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
            </a>
        </>
     );
}
 
export default Portofolio;