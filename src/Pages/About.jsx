import React from 'react';
import Item from '../components/Item';
import education from '../asset/education.png';
import skill from '../asset/skill.png';
import birth from '../asset/birth.png';
import hobi from '../asset/hobbie.png';
import gender from '../asset/gender.png';




function About() {
    return ( 
        <>
            <div className="container text-center">
                <div className="row d-flex justify-content-around mt-3">
                    <div className="item-about col-lg-2 col-md-2 col-sm-4 col-6">
                        <Item title={"Education"} desc={"Universitas Negeri Padang"} imgURL={education} />
                    </div>
                    <div className="item-about col-lg-2 col-md-2 col-sm-4 col-6">
                        <Item title={"Skill"} desc={"Front-End Developer"} imgURL={skill} />
                    </div>
                    <div className="item-about col-lg-2 col-md-2 col-sm-4 col-6">
                        <Item title={"Hobby"} desc={"Drawing"} imgURL={hobi} />
                    </div>
                    <div className="item-about col-lg-2 col-md-2 col-sm-4 col-6">
                        <Item title={"Gender"} desc={"Female"} imgURL={gender} />
                    </div>
                    <div className="item-about col-lg-2 col-md-2 col-sm-4 col-6">
                        <Item title={"Birth Day"} desc={"16 April 2003"} imgURL={birth} />
                    </div>
                </div>
            </div>
        </>
     );
}

export default About
