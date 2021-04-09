import { Typography } from "@material-ui/core";
import Carousel from "react-multi-carousel";
import { Image } from "semantic-ui-react";
import { CustomButtonGroupAsArrows } from '../components/custombuttons';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
    paritialVisibilityGutter: 45
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30
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
    <Carousel
      ssr
      arrows={false}
      customButtonGroup={<CustomButtonGroupAsArrows />}
      partialVisbile
      deviceType={deviceType}
      itemClass="image-item"
      responsive={responsive}
      renderButtonGroupOutside={true}
    >
      {images.slice(0, 10).map(image => {
        return (
            <div>
            <Image
                draggable={false}
                style={{ width: "170%", height: "220px",borderRadius:'10px' }}
                src={image.path}
            />
            <Typography variant="h5">{image.name}</Typography>
            </div>
        );
      })}
    </Carousel>
  );
};

export default Simple;
