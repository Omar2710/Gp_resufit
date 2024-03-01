"use client";
import * as React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import {
  Button,
} from "@mui/material";
import CircularWithValueLabel from "@/component/circularProgressLabel";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function Ranking() {
  const params = useSearchParams();
  const rank=parseInt(params.get("rank") ?? "0") ?? 0
  const rankPercentage=(100/5)* rank
  let message;

  if (rankPercentage < 50) {
    message = (
      <Typography variant="h6" textAlign="center" color="text.secondary">
        Keep pushing! 🚀 Achieving a {rankPercentage}% match in your CV against the job
        requirements shows there is room for improvement. Consider revisiting your CV to
        better align your skills, experience, and qualifications with what the position demands.
        Tailoring your CV more closely to the job&apos;s expectations can significantly enhance your
        chances. Don&apos;t give up — use this as an opportunity to refine your presentation and
        highlight your strengths! 💪✨
      </Typography>
    );
  } else if (rankPercentage >= 50 && rankPercentage <= 70) {
    message = (
      <Typography variant="h6" textAlign="center" color="text.secondary">
        Good effort! 🌟 You&apos;ve achieved a {rankPercentage}% match in your CV against the job
        requirements, which is a solid foundation. There&apos;s potential for growth, and with a bit
        more hard work to refine and enhance your CV, you can increase your alignment with the
        job&apos;s demands. Focus on areas where you can demonstrate more relevant skills, experiences,
        or qualifications. Keep striving for the best match possible! 👍📈
      </Typography>
    );
  } else {
    message = (
      <Typography variant="h6" textAlign="center" color="text.secondary">
        Congratulations! 🎉 Achieving an {rankPercentage}% match in your CV against the job
        requirements is a remarkable accomplishment. Your skills, experience,
        and qualifications align closely with what the position demands,
        showcasing a strong compatibility. This outstanding match reflects
        your careful consideration of the job&apos;s expectations and your
        ability to present a well-tailored CV. Best of luck as you progress
        through the recruitment process — your dedication to a precise fit is
        sure to make a positive impact! 👏🌟
      </Typography>
    );
  }
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Container
        id="faq"
        sx={{
          pt: { xs: 4, sm: 12 },
          pb: { xs: 8, sm: 16 },
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Typography
          component="h2"
          variant="h4"
          color="text.primary"
          sx={{
            width: { sm: "100%", md: "60%" },
            textAlign: { sm: "left", md: "center" },
          }}
        >
          Ranking Against Job Required
        </Typography>
        <CircularWithValueLabel rank={rank}/>
        <Rating
          name="half-rating-read"
          defaultValue={rank}
          precision={1}
          readOnly
        />
          {message}
        <Link href={"/jobs"}>
        <Button
          variant="contained"
          color="primary"
          sx={{ width: "300px" }}
        >
          Continue
        </Button>
        </Link>
      </Container>
    </Box>
  );
}
