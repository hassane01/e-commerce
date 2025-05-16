// src/assets/Categorie.js
import {
    IoCameraOutline,
    IoGameControllerOutline
  } from "react-icons/io5";
  import { GiDeliveryDrone } from "react-icons/gi";
  import { FiTv } from "react-icons/fi";
  import { BsRouter } from "react-icons/bs";
  import { GrPersonalComputer } from "react-icons/gr";

  // The variable name can be anything here, but the `export default` is key
  const categoriesData = [ // Changed variable name for clarity, but it's not strictly necessary
    {
      icon: IoCameraOutline, // Store the component reference itself
      name: "Camera",
    },
    {
      icon: GiDeliveryDrone,
      name: "Drones",
    },
    {
      icon: IoGameControllerOutline,
      name: "Gaming",
    },
    {
      icon: FiTv,
      name: "LED TV",
    },
    {
      icon: BsRouter,
      name: "Routers",
    },
    {
      icon: GrPersonalComputer,
      name: "Computers",
    },
  ];

  export default categoriesData; // Use default export