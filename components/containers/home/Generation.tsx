import Image from "next/image";
import GenThumb from "@/public/images/xyz.webp";

const Generation = () => {
  return (
    <section className="section gen pb-0">
      <div className="container">
        <div className="row align-items-center gaper">
          <div className="col-12 col-lg-7 col-xxl-4">
            <div className="section__content">
              <span className="sub-title">Frontend Developer &#40;React-Typescript-Cypress-Gatling&#41;</span>
              <h2 className="title title-animation">XYZ Reality <br />&#40;2021/11 - 2022/8&#41;</h2>
              <p>
              • Designed and developed a front-end architecture to enable user interface ideas with 100% accuracy.<br/>
              • Built reusable components and front-end libraries for future usage in addition to the most recent user-facing features in React.<br/>
              • Participated in meetings on potential user interfaces and applications with the 11 developer.<br/>
              • Reduced application testing time 50% by automating shorter testing phases.<br/>
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-5 col-xxl-7 offset-xxl-1">
            <div className="gen__thumb">
              <div className="reveal-img parallax-img">
                <Image
                  src={GenThumb}
                  alt="Image"
                  className="unset"
                  style={{
                    borderRadius: "20px",
                    boxShadow: "0 0 6px 10px rgb(0,170,255)",
                    width: '90%'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Generation;
