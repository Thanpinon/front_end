import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import Box from "@component/Box";
import Grid from "@component/grid/Grid";
import Icon from "@component/icon/Icon";
import Divider from "@component/Divider";
import { Header } from "@component/header";
import Typography from "@component/Typography";
import MobileNavigationBar from "@component/mobile-navigation";
import { Accordion, AccordionHeader } from "@component/accordion";
import { MobileCategoryImageBox, MobileCategoryNavStyle } from "@component/mobile-category-nav";
import navigations from "@data/navigations";

const MobileCategoryNav = () => {
  const [category, setCategory] = useState(null);
  const [suggestedList, setSuggestedList] = useState([]);
  const [subCategoryList, setSubCategoryList] = useState([]);

  const handleCategoryClick = (cat) => () => {
    let menuData = cat.menuData;
    if (menuData) setSubCategoryList(menuData.categories || menuData);
    else setSubCategoryList([]);
    setCategory(cat);
  };

  useEffect(() => setSuggestedList(suggestion), []);

  return (
    <MobileCategoryNavStyle>
      <Header className="header" />

      <Box className="main-category-holder">
        {navigations.map((item) => (
          <Box
            key={item.title}
            className="main-category-box"
            onClick={handleCategoryClick(item)}
            borderLeft={`${category?.href === item.href ? "3" : "0"}px solid`}
          >
            <Icon size="28px" mb="0.5rem">
              {item.icon}
            </Icon>

            <Typography className="ellipsis" textAlign="center" fontSize="11px" lineHeight="1">
              {item.title}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box className="container">
        <Typography fontWeight="600" fontSize="15px" mb="1rem">
          Recommended Categories
        </Typography>

        <Box mb="2rem">
          <Grid container spacing={3}>
            {suggestedList.map((item, ind) => (
              <Grid item lg={1} md={2} sm={3} xs={4} key={ind}>
                <Link href="/product/search/423423">
                  <a>
                    <MobileCategoryImageBox {...item} />
                  </a>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>

        {category?.menuComponent === "MegaMenu1" ? (
          subCategoryList.map((item, ind) => (
            <Fragment key={ind}>
              <Divider />
              <Accordion>
                <AccordionHeader px="0px" py="10px">
                  <Typography fontWeight="600" fontSize="15px">
                    {item.title}
                  </Typography>
                </AccordionHeader>

                <Box mb="2rem" mt="0.5rem">
                  <Grid container spacing={3}>
                    {item.subCategories?.map((item, ind) => (
                      <Grid item lg={1} md={2} sm={3} xs={4} key={ind}>
                        <Link href="/product/search/423423">
                          <a>
                            <MobileCategoryImageBox {...item} />
                          </a>
                        </Link>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Accordion>
            </Fragment>
          ))
        ) : (
          <Box mb="2rem">
            <Grid container spacing={3}>
              {subCategoryList.map((item, ind) => (
                <Grid item lg={1} md={2} sm={3} xs={4} key={ind}>
                  <Link href="/product/search/423423">
                    <a>
                      <MobileCategoryImageBox {...item} />
                    </a>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Box>

      <MobileNavigationBar />
    </MobileCategoryNavStyle>
  );
};

const suggestion = [
  {
    title: "Belt",
    href: "/belt",
    imgUrl: "/assets/images/products/categories/belt.png",
  },
  {
    title: "Hat",
    href: "/Hat",
    imgUrl: "/assets/images/products/categories/hat.png",
  },
  {
    title: "Watches",
    href: "/Watches",
    imgUrl: "/assets/images/products/categories/watch.png",
  },
  {
    title: "Sunglasses",
    href: "/Sunglasses",
    imgUrl: "/assets/images/products/categories/sunglass.png",
  },
  {
    title: "Sneakers",
    href: "/Sneakers",
    imgUrl: "/assets/images/products/categories/sneaker.png",
  },
  {
    title: "Sandals",
    href: "/Sandals",
    imgUrl: "/assets/images/products/categories/sandal.png",
  },
  {
    title: "Formal",
    href: "/Formal",
    imgUrl: "/assets/images/products/categories/shirt.png",
  },
  {
    title: "Casual",
    href: "/Casual",
    imgUrl: "/assets/images/products/categories/t-shirt.png",
  },
];

export default MobileCategoryNav;
