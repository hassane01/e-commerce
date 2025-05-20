// src/assets/productslist.js

import gamingHeadphone1 from './images/gamingheadphone.jpg'; // Used as a black controller placeholder thumbnail
import gamingHeadphone2 from './images/gamingheadphone2.jpg';
import gamingHeadphone3 from './images/gamingheadphone3.jpg';
import earPod from './images/earpord.jpg';
import mouse from './images/mouse.jpg';
import vrGlasses from './images/vrglasses.jpg';
import cameraScoop from './images/camerascoop.jpg';
import controller1 from './images/control.jpg'; // Represents the main (e.g., red) controller
import controller2 from './images/control2.jpg'; // Represents a variant (e.g., gold) thumbnail
import drone from './images/drone.jpg';
import headphone from './images/headphone.jpg';
import tv from './images/tv.jpg';

const productslist = [
  {
    id: 1,
    name: "Pro Gaming Headset X1",
    price: 129.99,
    image: gamingHeadphone1,
    images: [gamingHeadphone1, gamingHeadphone2, gamingHeadphone3],
    discount: 15,
    status: "hot",
    category: "ACCESSORIES",
    dateAdded: "2025-05-01",
    sales: 245,
    description: "High-fidelity pro gaming headset with noise-cancelling mic and RGB lighting."
  },
  {
    id: 2,
    name: "True Wireless EarPods Z",
    price: 79.99,
    image: earPod,
    images: [earPod],
    discount: 10,
    status: "new",
    category: "EARPHONES",
    dateAdded: "2025-05-03",
    sales: 180,
    description: "Ergonomic true wireless earbuds with up to 8 hours playtime and charging case."
  },
  // ... (other existing products remain unchanged) ...
  {
    id: 6,
    name: "Gaming Controller", // Changed to match image
    price: 999.00, // Changed to match image
    image: controller1, // Main image (e.g., Red controller from image)
    // Thumbnails: gold, black, red (selected) using available images
    images: [controller2, gamingHeadphone1, controller1], 
    discount: 0, // No discount in image example
    status: "hot",
    category: "CONTROLLERS",
    dateAdded: "2025-05-02",
    sales: 150,
    description: "Sed id interdum urna. Nam ac elit a ante commodo tristique. Itum vehicula a hendrerit ac nisi. Hendrerit ac nisi Lorem ipsum dolor sit. Perdiet nibh vel magna lacinia ultrices. Sed id interdum urna.", // Short description from image
    availableColors: [ // Colors from image
      { name: 'Light Grey', class: 'bg-gray-300 hover:ring-2 hover:ring-gray-400' },
      { name: 'Black', class: 'bg-black hover:ring-2 hover:ring-gray-400' },
      { name: 'Purple', class: 'bg-purple-500 hover:ring-2 hover:ring-purple-600' }
    ],
    availableSizes: ["X", "XR", "XS", "XM"], // Sizes from image
    reviewCount: 3, // From "03 customer reviews"
    averageRating: 3.5, // Example: 3.5 stars
    specifications: [ // From image
      "5.5” screen size",
      "170 x 80 x15 cm",
      "iOS 13 pre-installed",
      "3 Cameras Installed"
    ],
    // Longer description for the "Description" tab, from image
    longDescription: "Sed id interdum urna. Nam ac elit a ante commodo tristique, condimentum vehicula a hendrerit ac nisi, hendrerit ac nisi Lorem ipsum dolor sit amet Vestibulum imperdiet nibh vel magna lacinia ultrices. Sed id interdum urna.\n\nNullam lacinia faucibus risus, a euismod lorem tincidunt id. Donec maximus placerat tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse faucibus sed dolor eget posuere.Sed id interdum urna. Nam ac elit a ante commodo tristique. Duis lacus urna, condimentum a vehicula a, hendrerit ac nisi Lorem ipsum dolor sit amet."
  },
  {
    id: 7,
    name: "DualSense Controller B",
    price: 64.50,
    image: controller2,
    images: [controller2],
    discount: 17,
    status: "hot",
    category: "CONTROLLERS",
    dateAdded: "2025-05-04",
    sales: 130,
    description: "DualSense controller featuring adaptive triggers and immersive haptics."
  },
  // ... (rest of the products)
   {
    id: 3,
    name: "Ergo Gaming Mouse S",
    price: 49.99,
    image: mouse,
    images: [mouse],
    discount: 0,
    status: "sale",
    category: "MICE",
    dateAdded: "2025-04-28",
    sales: 320,
    description: "Ergonomic gaming mouse with adjustable DPI and customizable side buttons."
  },
  {
    id: 4,
    name: "Immersive VR Glasses V2",
    price: 299.99,
    image: vrGlasses,
    images: [vrGlasses],
    discount: 20,
    status: "hot",
    category: "VR",
    dateAdded: "2025-05-05",
    sales: 95,
    description: "Next-gen VR headset with 4K display and integrated audio for ultimate immersion."
  },
  {
    id: 5,
    name: "UltraZoom Camera Scoop",
    price: 219.00,
    image: cameraScoop,
    images: [cameraScoop],
    discount: 60,
    status: "hot",
    category: "CAMERAS",
    dateAdded: "2025-04-30",
    sales: 60,
    description: "Compact camera with 30x optical zoom and stabilization for crisp shots."
  },
  {
    id: 8,
    name: "Quad-Copter Drone Pro",
    price: 349.99,
    image: drone,
    images: [drone],
    discount: 10,
    status: "hot",
    category: "DRONES",
    dateAdded: "2025-04-25",
    sales: 75,
    description: "Professional drone with 4K camera, GPS auto-return, and 30-min flight time."
  },
  {
    id: 9,
    name: "Pro Gaming Headset X2",
    price: 149.99,
    image: gamingHeadphone2,
    images: [gamingHeadphone2, gamingHeadphone1],
    discount: 15,
    status: "hot",
    category: "ACCESSORIES",
    dateAdded: "2025-05-06",
    sales: 210,
    description: "Upgraded X2 headset with enhanced bass and wireless connectivity."
  },
  {
    id: 10,
    name: "Gaming Headset X2003",
    price: 149.99,
    image: gamingHeadphone3,
    images: [gamingHeadphone3],
    discount: 15,
    status: "hot",
    category: "ACCESSORIES",
    dateAdded: "2025-05-07",
    sales: 190,
    description: "Limited edition gaming headset with carbon-fiber accents and surround sound."
  },
  {
    id: 11,
    name: "Surround Sound Headphones",
    price: 89.99,
    image: headphone,
    images: [headphone],
    discount: 20,
    status: "sale",
    category: "ACCESSORIES",
    dateAdded: "2025-04-27",
    sales: 260,
    description: "Over-ear headphones delivering rich surround sound and deep bass."
  },
  {
    id: 12,
    name: "Smart LED TV 55\" QLED",
    price: 649.99,
    image: tv,
    images: [tv],
    discount: 5,
    status: "hot",
    category: "COMPUTERS",
    dateAdded: "2025-05-01",
    sales: 85,
    description: "55-inch QLED TV with smart streaming, HDR10+, and voice control."
  },
  {
    id: 13,
    name: "Precision Gaming Mouse Elite",
    price: 59.99,
    image: mouse,
    images: [mouse],
    discount: 10,
    status: "sale",
    category: "MICE",
    dateAdded: "2025-04-29",
    sales: 300,
    description: "High-precision gaming mouse with customizable RGB lighting and weights."
  }
];

export default productslist;