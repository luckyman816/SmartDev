import Image from "next/image";
import Link from "next/link";
import genThumb from "@/public/images/vip.jpg";

const GenerationTwo = () => {
  return (
    <section className="section gen-two pb-0">
      <div className="container">
        <div className="row align-items-center gaper">
          <div className="col-12 col-lg-5 order-last order-lg-first">
            <div className="gen-two__thumb">
              <div className="reveal-img parallax-img">
                <Image src={genThumb} alt="Image" priority 
                style={{
                    borderRadius: "20px",
                    boxShadow: "0 0 6px 10px rgb(0,170,255)",
                  }} />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 offset-lg-1 col-xxl-5 offset-xxl-2">
            <div className="section__content">
              <span className="sub-title">Full Stack Web Developer &#40;MERN - NextJS&#41;</span>
              <h2 className="title title-animation">
              VIPTalkers LLC <br />2018/8 - 2021/6
              </h2>
              <p>
              • Lead developer team, oversaw web application development and architecture, ranging from first prototype to production-ready using state of the art web technologies. <br/>
              • Using React and Redux with reusable components to design and develop the frontend. <br/>
              • Using NodeJs, ExpressJs and MongoDB built and structured the entire backend.<br/>
              • Redesigned and built with atomic design via using NextJs and its own server to minimize load time and achieve high lighthouse ranking.<br/>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenerationTwo;
