// https://github.com/apal21/nextjs-progressbar/issues/86
"use client";

import { useEffect } from "react";
import NProgress from "nprogress";
import useTheme from "@mui/material/styles/useTheme";
import GlobalStyles from "@mui/material/GlobalStyles";
import "nprogress/nprogress.css";

const ProgressBar = () => {
  const theme = useTheme();
  useEffect(() => {
    NProgress.configure({
      showSpinner: false
    });

    const handleAnchorClick = event => {
      const targetUrl = event.currentTarget.href;
      const currentUrl = location.href;

      if (targetUrl !== currentUrl) {
        NProgress.start();
      }
    };

    const handleMutation = () => {
      const anchorElements = document.querySelectorAll("a[href]");
      anchorElements.forEach(anchor => anchor.addEventListener("click", handleAnchorClick));
    };

    const mutationObserver = new MutationObserver(handleMutation);
    mutationObserver.observe(document, {
      childList: true,
      subtree: true
    });
    window.history.pushState = new Proxy(window.history.pushState, {
      apply: (target, thisArg, argArray) => {
        NProgress.done();
        return target.apply(thisArg, argArray);
      }
    });
  });
  return <GlobalStyles styles={{
    "#nprogress": {
      pointerEvents: "none",
      ".bar": {
        top: 0,
        left: 0,
        height: 2,
        width: "100%",
        position: "fixed",
        zIndex: 9999999999,
        background: theme.palette.primary.main
      },
      ".peg": {
        right: 0,
        opacity: 1,
        width: 100,
        height: "100%",
        display: "block",
        boxShadow: "none",
        position: "absolute",
        transform: "rotate(3deg) translate(0px, -4px)"
      }
    }
  }} />;
};

export default ProgressBar;