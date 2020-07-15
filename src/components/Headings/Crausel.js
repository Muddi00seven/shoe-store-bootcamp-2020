import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
 
const images = [
  'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/qqbgmdlp1godyiochmvx/zoom-pegasus-turbo-2-mens-running-shoe-GcDSX3.jpg',
  'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/i1-3144d5a6-0a2f-4956-8133-c30f8e80c990/zoom-rival-waffle-2019-unisex-racing-shoe-ZBZ92c.jpg',
  'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/0aaf3ec6-4f6a-405d-89cb-4e54cbbdc384/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg',
  'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/add45d4e-aa81-4d87-8f1a-862466a66b1f/zoom-pegasus-turbo-2-mens-running-shoe-GcDSX3.jpg',
  'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-dcc2e5fb-7ddd-44c4-9f43-70a5fe6c3fbb/zoom-victory-5-xc-racing-spike-BbCbrq.jpg',
  'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/cf42fe30-7c78-45b5-87bb-8ed11429faec/pegasus-trail-2-mens-trail-running-shoe-JKj6Bj.jpg',
  'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/9b2e37e8-78f3-42bb-b31d-b0cf629c9627/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg',
  'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/9dd4ebbb-8cc1-4e8f-9dab-2c769bf263b6/wildhorse-6-mens-trail-running-shoe-r5NzHQ.jpg',
  'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/e891e31b-f5c6-42e9-bfc9-44d5f4b98b06/joyride-dual-run-mens-running-shoe-Gvfp81.jpg',
  'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/i1-97cd29d5-5975-4d92-a947-ce0aa9305c35/air-zoom-wio-7-mens-running-shoe-810FRg.jpg',
  'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-a99d5bc2-fd36-437a-ad12-1bbbc59bf1a6/react-infinity-run-flyknit-mens-running-shoe-RK6JQK.jpg',
  'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/1e0e4920-a27b-40d7-b961-bc3e7fd7e302/air-zoom-wio-7-mens-running-shoe-810FRg.jpg',
  'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-561dfc71-48af-4907-a352-044b2662a55e/free-rn-5-2020-mens-running-shoe-kbZKVj.jpg',
];
 
const Slideshow = () => {
  return (
    <div className="slide-container">
    <Zoom scale={0.4}>
      {
        images.map((each, index) => <img key={index} style={{width: "100%" } } alt='shoes' className="crauseImage" src={each} />)
      }
    </Zoom>
  </div>
  )

}




export default Slideshow;

