import {
  Box,
  Button,
  Flex,
  IconButton,
  Icon,
  SimpleGrid,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Content from "../Components/Content";
import image from "../assets/images/small-notebook-companion 1.png";
import image1 from "../assets/images/41e3YGKg-3L1.png";
import image2 from "../assets/images/71QKe7SASRL1.png";
import image3 from "../assets/images/DF-500056_191_011.png";
import image4 from "../assets/images/5SQBywSBs8iHUNYLPh50j0oCJzkoBogttQjCcSS8 1.png";
import { MdShoppingCart, MdKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const NoteBook = () => {
  const arr = [
    {
      image: image,
      price: "$300",
      title: "misolo cleaner",
      icon: <MdShoppingCart size={"25px"} color={" #8417B8"} />,
    },
    {
      image: image1,
      price: "$300",
      title: "misolo cleaner",
      icon: <MdShoppingCart size={"25px"} color={" #8417B8"} />,
    },
    {
      image: image2,
      price: "$300",
      title: "misolo cleaner",
      icon: <MdShoppingCart size={"25px"} color={" #8417B8"} />,
    },
    {
      image: image3,
      price: "$300",
      title: "misolo cleaner",
      icon: <MdShoppingCart size={"25px"} color={" #8417B8"} />,
    },
    {
      image: image4,
      price: "$300",
      title: "misolo cleaner",
      icon: <MdShoppingCart size={"25px"} color={" #8417B8"} />,
    },
  ];

  const [slide, setSlide] = useState(0);
  const [slideItems, setSlideItems] = useState([]);

 
  const prevSlide = () => {
    if (slide) {
      setSlide(slide - 1);
    }
  };

  const nextSlide = () => {
    if (slide < arr?.length) {
      setSlide(slide + 1);
    }
  };

  useEffect(() => {
    let index = slide;
    let newArray = arr;
    // console.log("CURRENT SLIDES =>", categories?.slice(slide, 3))
    setSlideItems(newArray?.splice(index, 5));
    // setSlideItems(categories?.slice(slide, 3))
  }, [slide, arr]);
  return (
    <>
    
      <Flex py={{ base: 5, sm: 10, md: 15 }} gap={7} p={"4"}>{slide > 0?
        <Box mt={"-5rem"} ml={"37rem"}>
          <IconButton 
          position={"absolute"}
          left={"530px"}
           rounded={"full "}
          transform={"tanslateY(-50%"}
          onClick={prevSlide}
          disabled={slide <= 0}>
            <Icon as={IoIosArrowBack} />
          </IconButton>
        </Box>: <Box mt={"5rem"} ml={"27rem"}></Box>
}
       <SimpleGrid columns={[1, 2, 3,4,5]} spacing={60}>
       {slideItems?.map((item, i) => (
            <Content key={i} {...item} />
          ))}

        {/* {arr?.map((item, i) => (
            <Bags
              key={i}
              image={item.image}
              price={item.price}
              title={item.title}
              icon={item.icon}
            />
          ))} */}
       </SimpleGrid>

        <Box mt={"-3rem"} ml={"245px"}  >
          <IconButton   rounded={"full "}
          position={"absolute"}
          right={"140px"}
          boxShadow={"lg"}
          onClick={nextSlide}
          transform={"tanslateY(-50%"}
          disabled={(slide + 3) == arr?.length}>
            <Icon as={IoIosArrowForward} />
            </IconButton>
        </Box>

        {/* {
      new Array(1).fill("_").map((_, index) => (
      <Books 
        key={index}
        image={image}
        price={"$300"}
        title={"Red Bubble postal bag"}    
        />
      ))
  } */}
      </Flex>
    </>

  );
}

export default NoteBook
