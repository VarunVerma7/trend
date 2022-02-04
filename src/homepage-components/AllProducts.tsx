import { Grid } from "@mui/material";
import MediaCard from "./Card";

const products = [
  {
    productName: "Amazon beauty product pack",
    credits: "15 credits",
    strikeThroughPrice: "$1500",
    realPrice: "$1080",
    topLevel: "Up to 13 images or 4 videos",
    midLevel: "Up to 20 images or 8 videos",
    bottomLevel: "Up to 35 images or 12 videos",
  },
  {
    productName: "Amazon product launch",
    credits: "35 credits",
    strikeThroughPrice: "$4500",
    realPrice: "$3080",
    topLevel: "Up to 25 images or 8 videos",
    midLevel: "Up to 50 images or 15 videos",
    bottomLevel: "Up to 100 images or 30 videos",
  },
  {
    productName: "Product Reviews",
    credits: "85 credits",
    strikeThroughPrice: "$7500",
    realPrice: "$6580",
    topLevel: "Up to 50 images or 16 videos",
    midLevel: "Up to 100 images or 30 videos",
    bottomLevel: "Up to 200 images or 60 videos",
  },
];

export default function AllProducts() {
  return (
    <Grid container spacing={4}>
      {products.map(
        ({
          realPrice,
          productName,
          credits,
          strikeThroughPrice,
          topLevel,
          midLevel,
          bottomLevel,
        }) => (
          <Grid item key={realPrice} xs={12} sm={6} md={4}>
            <MediaCard
              realPrice={realPrice}
              productName={productName}
              credits={credits}
              strikeThroughPrice={strikeThroughPrice}
              toplevel={topLevel}
              midLevel={midLevel}
              bottomLevel={bottomLevel}
            />
          </Grid>
        )
      )}
    </Grid>
  );
}
