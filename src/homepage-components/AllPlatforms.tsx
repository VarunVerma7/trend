import { Box, Typography, Stack } from "@mui/material";
import PlatformCard from "./PlatformCard";

const platforms = [
  { content: "Paid Ads / Website", img: "PaidAds.png" },
  { content: "instagram", img: "Instagram.png" },
  { content: "TikTok", img: "TikTok.png" },
  { content: "Facebook", img: "Facebook.png" },
  { content: "Youtube", img: "Youtube.png" },
  { content: "Amazon", img: "Amazon.png" },
];

export default function AllPlatforms() {
  return (
    <Box
      sx={{
        pb: 6,
      }}
    >
      <Typography variant="h4">I need content for my</Typography>

      <Stack
        sx={{ pt: 4 }}
        direction="row"
        spacing={2}
        justifyContent="space-between"
      >
        {platforms.map(({ content, img }) => (
          <PlatformCard content={content} img={img} />
        ))}
      </Stack>
    </Box>
  );
}
