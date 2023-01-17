import { useState } from "react";
import React from "react";
function Home() {
  const [nama, setNama] = useState("Nur Khairiyah");
  return (
    <>
        <div className="container text-center">
          <div className="row m-3">
            <div className="col-lg-6 col-sm-12">
              <img
                alt=""
                src="https://i.pinimg.com/564x/7c/02/d8/7c02d8361f7acd759f197fcb243b0800.jpg"
                width="150"
                height="150"
                className="d-inline-block align-top m-3"
              />{" "}
            </div>
            <div className="col-lg-6 col-sm-12 p-2">
              <h1>Hallo Guys!!</h1>
              <h2>
                I'm {nama}. I'm a Student Informatic Engineering in Universitas
                Negeri Padang. I'm Interest in Front-End Web Development.
              </h2>
            </div>
          </div>
        </div>
    </>
  );
}

export default Home;
<></>;
