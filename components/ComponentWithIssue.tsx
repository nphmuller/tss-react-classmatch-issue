"use client";

import React from "react";
import { tss } from "tss-react/mui";

const useStyles = tss
  .withName("ComponentWithIssue")
  .withNestedSelectors<"icon">()
  .create(({ classes }) => ({
    link: {
      // Removing this fixes the issue
      [`& .${classes.icon}`]: {
        color: "blue",
      },
    },
    icon: {},
  }));

const ComponentWithIssue = () => {
  const { classes } = useStyles();

  return (
    <a className={classes.link}>
      <span className={classes.icon}>Icon</span>
    </a>
  );
};

export default ComponentWithIssue;
