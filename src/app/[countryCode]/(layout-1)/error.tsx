"use client";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button"; // GLOBAL CUSTOM COMPONENTS
import Card from "@mui/material/Card";
import { useRouter } from "next/navigation";
import { H1 } from "components/Typography";

export default function Error({ error, reset }) {
  console.log(error, error.message);
  const [err, setError] = useState(false);
  console.log(error, error.message);
  const router = useRouter();
  const handleError = () => {
    router.refresh();
  };
  const handleGoBack = () => {
    router.back();
  };
  if (typeof error === "string") {
    setError(true);
  }

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      <Card
        sx={{
          p: 4,
          textAlign: "center",
        }}
      >
        <H1 mb={2}>{err ? error : "Something went wrong!"}</H1>
        <Button color="error" variant="contained" onClick={handleGoBack}>
          Go Back
        </Button>

        <Button color="error" variant="contained" onClick={handleError}>
          Try again
        </Button>
      </Card>
    </div>
  );
}
