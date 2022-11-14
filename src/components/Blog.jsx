import React from 'react';
 const BlogItem = ({img, title}) => {
    
    return ( 
        <>
            <div className="card p-3">
                            <div className="row">
                                <div className="col-6">
                                    <img src={img} alt="" width="150" height="100" />
                                </div>
                                <div className="col-6">
                                    <div className="card-body">
                                        <h5 className="Blog-card-title">{title}</h5>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
             </div>
        </>
     );
 }
  
 export default BlogItem;


// function BlogItem() {
//     return ( 
//         <>
            // <div className="card">
            //                 <div className="row">
            //                     <div className="col-6">
            //                         <img src={profil} alt="" width="100" height="150" />
            //                     </div>
            //                     <div className="col-6">
            //                         <div className="card-body">
            //                             <h5 className="Blog-card-title">Special title treatment</h5>
            //                             <p className="Blog-card-text">With supporting text below as a natural lead-in to additional content.</p>
            //                             <a href="#" className="btn btn-primary">Go somewhere</a>
            //                         </div>
            //                     </div>
            //                 </div>
            //             </div>
//         </>
//      );
// }

// export default BlogItem;