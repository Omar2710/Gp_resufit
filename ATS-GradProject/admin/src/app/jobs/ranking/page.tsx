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
  const Id = params.get("resumeId");
  const { data } = useSession();
  const [resume, setResume] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3001/resume/${Id}`, {
        headers: {
          Authorization: `Bearer ${data?.accessToken}`,
        },
      });
      const fetchedData = await response.json();
      setResume(fetchedData);
    };

    if (data) {
      fetchData();
    }
  }, [data, Id]);

  if (!resume) {
    return null;
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
