import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogItem from '../components/Blog';
import profil from '../asset/web.jpg';

function Blog() {

    const [article, setArticle] = useState([]);

    useEffect(() => {
            console.log("Hiii")
            axios.get('https://6350d871dfe45bbd55afb4ff.mockapi.io/MuseumAsia/blog')
            .then(res => {
                setArticle(res.data)
            })

        }, []);
    return ( 
        <>
                <div className="container text-center">
                        <div className="row">
                            {article.map((item,index) =>
                                <div key={index} className="col-6 mt-3">
                                    <BlogItem img={item.img} title={item.title} />
                                </div>
                            )};
                        </div>
                </div> 
            
            {/* <div className="container text-center">
                <div className="row">
                    <div className="col-6">
                       <BlogItem img={profil} title={"ggggg"} />
                    </div>

                    <div className="col-6">
                        <BlogItem />
                    </div>
                </div>
            </div> */}
        </>
     );
}

export default Blog;