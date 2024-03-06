const VideoSection = () => {
  return (
    <section className="section video-s pb-0">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="video-s__inner">
              <div className="row justify-content-center">
                <div className="col-12 col-lg-9 col-xxl-7">
                  <div className="section__header text-center">
                    <h2 className="title mt-0 title-animation">
                       Senoa.io Project succeeded through team cooperation
                    </h2>
                    <p>
                      A Utility Rich Deflationary Token Connecting Digital
                      Assets To The Real World Unlocking Your Financial Freedom
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="video-s__content">
                    <video autoPlay loop muted>
                      <source src="/images/video.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
