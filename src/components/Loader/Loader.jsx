import React from "react";
import { Jelly } from "@uiball/loaders";

export const Loader = () => {
  const styles = {
    height: "85vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={styles}>
      <Jelly
        size={47}
        speed={1}
        color="black"
      />
    </div>
  );
};