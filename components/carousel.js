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
    items: 0,
    // slidesToSlide: 1 
    // paritialVisibilityGutter: 10
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 0,
    // slidesToSlide: 2, 
    paritialVisibilityGutter: 10
  }
};
const images = [
  {path: "/stool.jpg", name: "Norbury Scandinavian Wood Leg Ottoman"},
  {path: "https://images.unsplash.com/photo-1582389450817-001a3aaff60b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTV8fHdvb2RlbiUyMHN0b29sfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", name: "Grey Stools Wooden Leg"},
  {path: "https://images.unsplash.com/photo-1584914185960-534b55f4ac50?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=100", name: "Leather and Wooden Chair"},
  {path: "https://images.unsplash.com/photo-1580479929210-07eae66cf997?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", name: "Metal Legs"},
  {path: "https://images.unsplash.com/photo-1503602642458-232111445657?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", name: "Wood 100%"},
  {path: "https://images.unsplash.com/photo-1536639240649-1f0979e7993d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80", name: "White Wooden Stool"},
  {path: "https://images.unsplash.com/photo-1491305600982-507c64e09169?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", name: "Norbury Scandinavian Wood Leg Ottoman"},
  {path: "https://images.unsplash.com/photo-1528565698252-232af397a83c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80", name: "Brown Wooden Stool"},
  {path: "https://images.unsplash.com/photo-1531812001686-61ad8ed4e228?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=635&q=80", name: "Three Brown Wooden Stools"},
  {path: "https://images.unsplash.com/photo-1605906694887-3749751c310b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fHN0b29sfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", name: "Brown Wooden Round Table"},
  {path: "https://images.unsplash.com/photo-1551459456-12c91f20a130?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTR8fHN0b29sfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", name: "White Rolling Chair"},
  {path: "https://images.unsplash.com/photo-1611464908623-07f19927264e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTN8fHN0b29sfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", name: "White and Green Chair"},
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
    >
      {images.slice(0, 10).map(image => {
        return (
            <div>
            <Image
                draggable={false}
                style={{  height: "220px",borderRadius:'10px' }}
                src={image.path}
            />
            <Typography variant="h5">{image.name.slice(0, 20)}...</Typography>
            </div>
        );
      })}
    </Carousel>
    </Grid>
    </Grid>
  );
};

export default Simple;