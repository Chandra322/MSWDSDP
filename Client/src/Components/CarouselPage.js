import React from "react";
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer,
} from "mdbreact";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import "./carous.css";
const CarouselPage = () => {
  return (
    <>
      <MDBContainer className="mt-5 mb-5">
        <MDBCarousel
          activeItem={1}
          length={3}
          showControls={true}
          showIndicators={true}
          className="z-depth-1"
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <MDBView>
                <img
                  className="d-block w-50"
                  src="https://wpmedia.roomsketcher.com/content/uploads/2021/12/07133333/RoomSketcher-High-Quality-3D-Floor-Plans.jpg"
                  alt="First slide"
                />
                <MDBMask overlay="white-light" />
              </MDBView>
              <MDBCarouselCaption>
                <h3 className="h3-responsive"></h3>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView>
                <img
                  className="d-block w-50"
                  src="https://wpmedia.roomsketcher.com/content/uploads/2021/12/14110849/2D-3D-floor-pla-combo.jpg"
                  alt="Second slide"
                />
                
              </MDBView>
              <MDBCarouselCaption>
                <h3 className="h3-responsive"></h3>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView>
                <img
                  className="d-block w-50"
                  src="https://wpmedia.roomsketcher.com/content/uploads/2022/01/06145940/What-is-a-floor-plan-with-dimensions.png"
                  alt="Third slide"
                />
                
              </MDBView>
              <MDBCarouselCaption>
                <h3 className="h3-responsive"></h3>
              </MDBCarouselCaption>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>

      <div className="untree_co-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-7 text-center">
              <h2 className="line-bottom text-center mb-4">Our Team</h2>
              <p>
                Our Team works together to build the site and provide the better
                expierience to user. User can grow more and more and make
                progress.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col col-md-6 col-sm-12">
              <div className="team text-left">
                <div className="img-3"></div>
                  <div className="person-body">
                  <h3 className="staff-name">Srivardhan</h3>
                  <span className="d-block position mb-4">
                    Full stack Developer
                  </span>
                  <p className="mb-4">
                    Without requirements or design, programming is the art of
                    adding bugs to an empty text file.
                  </p>
                  <div style={{ color: "#5cccc9" }}>
                    <FacebookIcon /> &nbsp;
                    <TwitterIcon /> &nbsp;
                    <LinkedInIcon />
                  </div>
                </div>
              </div>
            </div>

            <div className="col col-md-6 col-sm-12">
              <div className="team text-left">
                <div className="img-2"></div>
                <div className="person-body">
                  <h3 className="staff-name">Chandra Prakash</h3>
                  <span className="d-block position mb-4">
                    Full stack Developer
                  </span>
                  <p className="mb-4">
                    Perfection (in design) is achieved not when there is nothing
                    more to add, but rather when there is nothing more to take
                    away.
                  </p>
                  <div style={{ color: "#5cccc9" }}>
                    <FacebookIcon /> &nbsp;
                    <TwitterIcon /> &nbsp;
                    <LinkedInIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="untree_co-section">
        <div className="testimonial-grid">
          <div
            className="testimonial-image img-4"
            data-aos="fade-right"
            data-aos-delay="100"
          ></div>
          <div
            className="testimonial-inner"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <blockquote>
              &ldquo;The public is more familiar with bad design than good
              design. It is, in effect, conditioned to prefer bad design,
              because that is what it lives with. The new becomes threatening,
              the old reassuring.&rdquo;
              <div className="person-image mt-3 d-flex align-items-center">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
                  alt="CEO"
                  className="img-fluid"
                />
                <div>
                  <span className="name">Srivardhan</span>
                  <span className="position">Student</span>
                </div>
              </div>
            </blockquote>
          </div>
        </div>
      </div>

    </>
  );
};

export default CarouselPage;
