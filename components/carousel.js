import { Grid, Typography } from "@material-ui/core";
import Carousel from "react-multi-carousel";
import { Image } from "semantic-ui-react";
import { CustomButtonGroupAsArrows } from '../components/custombuttons';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    paritialVisibilityGutter: 45
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    // slidesToSlide: 1 
    // paritialVisibilityGutter: 10
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 5,
    // slidesToSlide: 2, 
    paritialVisibilityGutter: 10
  }
};
const images = [
  {path: "/stool.jpg", name: "Norbury Scandinavian Wood Leg Ottoman"},
  {path: "/stool.jpg", name: "Norbury Scandinavian Wood Leg Ottoman"},
  {path: "/stool.jpg", name: "Norbury Scandinavian Wood Leg Ottoman"},
  {path: "/stool.jpg", name: "Norbury Scandinavian Wood Leg Ottoman"},
  {path: "/stool.jpg", name: "Norbury Scandinavian Wood Leg Ottoman"},
  {path: "/stool.jpg", name: "Norbury Scandinavian Wood Leg Ottoman"},
  {path: "/stool.jpg", name: "Norbury Scandinavian Wood Leg Ottoman"},
  {path: "/stool.jpg", name: "Norbury Scandinavian Wood Leg Ottoman"},
  {path: "/stool.jpg", name: "Norbury Scandinavian Wood Leg Ottoman"},
  {path: "/stool.jpg", name: "Norbury Scandinavian Wood Leg Ottoman"},
  {path: "/stool.jpg", name: "Norbury Scandinavian Wood Leg Ottoman"},
  {path: "/stool.jpg", name: "Norbury Scandinavian Wood Leg Ottoman"},
];

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const Simple = ({ deviceType }) => {
  return (
    <Grid container>
      <Grid item sm={12}>
    <Carousel
      ssr={true}
      arrows={false}
      customButtonGroup={<CustomButtonGroupAsArrows />}
      partialVisbile
      deviceType={deviceType}
      itemClass="image-item"
      responsive={responsive}
      renderButtonGroupOutside={true}
      // style={{width: '100%'}}
    >
      {images.slice(0, 10).map(image => {
        return (
            <div>
            <Image
                draggable={false}
                style={{  height: "220px",borderRadius:'10px' }}
                src={image.path}
            />
            <Typography variant="h5">{image.name.slice(20)}...</Typography>
            </div>
        );
      })}
    </Carousel>
    </Grid>
    </Grid>
  );
};

export default Simple;
