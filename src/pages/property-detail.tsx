import styled from "styled-components";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import { useLocation } from "react-router-dom";

import {
  ImageObj,
  ImageListComponent,
  Property,
  randomRoom,
} from "../components/property-detail";
import { PropertyDetail } from "../constants";

export const DUMMY_IMAGES: ImageObj[] = [
  {
    url: "https://images.unsplash.com/photo-1549388604-817d15aa0110?",
    title: randomRoom(),
  },
  {
    url: "https://images.unsplash.com/photo-1525097487452-6278ff080c31?",
    title: randomRoom(),
  },
  {
    url: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?",
    title: randomRoom(),
  },
  {
    url: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?",
    title: randomRoom(),
  },
  {
    url: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?",
    title: randomRoom(),
  },
  {
    url: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622?",
    title: randomRoom(),
  },
  {
    url: "https://images.unsplash.com/photo-1530731141654-5993c3016c77?",
    title: randomRoom(),
  },
  {
    url: "https://images.unsplash.com/photo-1481277542470-605612bd2d61?",
    title: randomRoom(),
  },
  {
    url: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62?",
    title: randomRoom(),
  },
  {
    url: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?",
    title: randomRoom(),
  },
  {
    url: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?",
    title: randomRoom(),
  },
  {
    url: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?",
    title: randomRoom(),
  },
];

const Wrapper = styled.div`
  margin: auto;
  padding: 0;
`;

export const PropertyDetailPage = () => {
  const { id: address } = useParams();
  const { state } = useLocation();
  const property = state as PropertyDetail;
  console.log(property);

  return (
    <Wrapper className="w-2/3 border-indigo-600 flex-column">
      <Box sx={{ display: "flex", width: "100%" }}>
        {/* <Carousel centerMode dynamicHeight>
          {renderRooms()}
        </Carousel> */}
        {ImageListComponent(DUMMY_IMAGES)}
      </Box>
      <Box>{Property(property)}</Box>
      <Box>Footer</Box>
    </Wrapper>
  );
};
