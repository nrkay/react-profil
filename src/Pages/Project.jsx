import React from 'react';
import Portofolio from '../components/Portofolio';
import simadu from '../asset/siMadu.png';
import profil from '../asset/web.jpg';
import bmi from '../asset/bmi.jpg';

function Project() {
    return ( 
        <>
            <div className="container text-center">
            <div className="row mt-3">
                <div className="item-project col-lg-6 col-sm-6 p-3">
                    <Portofolio img={simadu} linkURL={"https://simadu.net/"} title={"siMadu"} desc={"simadu adalah website sistem informasi yang dibuat guna memberi kemudahan untuk peternak lebah. Project ini didukung oleh Innovillage 2022 oleh Telkom"}/>
                </div>
                <div className="d-none d-lg-block col-lg-6 col-sm-6 p-3">
                </div>
                <div className="d-none d-lg-block col-lg-6 col-sm-6 p-3">
                </div>
                <div className="item-project col-lg-6 col-sm-6 p-3">
                    <Portofolio img={profil} linkURL={"https://profil-fnad29akp-nrkay.vercel.app/"} title={"Profil Web"} desc={"Website ini dibentuk guna memenuhi tugas pada Bootcamp Skilvul. Web ini hanya dibuat dari HTML dan CSS saja"}/>
                </div>
                <div className="item-project col-lg-6 col-sm-6 p-3">
                    <Portofolio img={bmi} linkURL={"https://bmi-calculate-cmyg7paw5-nrkay.vercel.app/"} title={"BMI-Calcucale"} desc={"Website ini dibentuk guna memenuhi tugas pada Bootcamp Skilvul. Konten utama web ini, dapat menghitung apakah kita memiliki berat ideal atau tidak. Web ini hanya dibuat dari HTML, CSS, JavaScrpit, dan Bootstrap."}/>
                </div>
                <div className="d-none d-lg-block col-lg-6 col-sm-6 p-3">
                </div>
                <div className="d-none d-lg-block col-lg-6 col-sm-6 p-3">
                </div>
                <div className="item-project col-lg-6 col-sm-6 p-3">
                    <Portofolio img={simadu} linkURL={"https://simadu.net/"} title={"siMadu"} desc={"simadu adalah website sistem informasi yang dibuat guna memberi kemudahan untuk peternak lebah. Project ini didukung oleh Innovillage 2022 oleh Telkom"}/>
                </div>
            </div>
        </div>
        </>
        
     );
}

export default Project;