import { Box, Typography, Stack } from "@mui/material";
import PlatformCard from "./PlatformCard";

const platforms = [
  { content: "Paid Ads / Website", img: "PaidAds.png" },
  { content: "Instagram", img: "Instagram.png" },
  { content: "TikTok", img: "Tiktok.png" },
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
        sx={{ pt: 3 }}
        direction="row"
        spacing={{ xs: 1, sm: 2, md: 4 }}
        justifyContent="space-between"
      >
        {platforms.map(({ content, img }) => (
          <PlatformCard key={content} content={content} img={img} />
        ))}
      </Stack>
    </Box>
  );
}
