import localFont from "next/font/local";

export const ubuntu = localFont({
  src: [
    {
      path: "./Ubuntu-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./Ubuntu-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Ubuntu-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Ubuntu-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Anton-Regular.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-ubuntu",
});
