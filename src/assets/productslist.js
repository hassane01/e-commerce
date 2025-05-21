// src/assets/productslist.js

import gamingHeadphone1 from './images/gamingheadphone.jpg';
import gamingHeadphone2 from './images/gamingheadphone2.jpg';
import gamingHeadphone3 from './images/gamingheadphone3.jpg';
import earPod from './images/earpord.jpg';
import mouse from './images/mouse.jpg';
import vrGlasses from './images/vrglasses.jpg';
import cameraScoop from './images/camerascoop.jpg';
import controller1 from './images/control.jpg'; // Red controller
import controller2 from './images/control2.jpg'; // Gold controller
import drone from './images/drone.jpg';
import headphone from './images/headphone.jpg';
import tv from './images/tv.jpg';

// Placeholder images for gallery if a product has only one specific image
const placeholderImg1 = "https://via.placeholder.com/600x600.png?text=Alt+View+1";
const placeholderImg2 = "https://via.placeholder.com/600x600.png?text=Alt+View+2";

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
    description: "High-fidelity pro gaming headset with noise-cancelling mic and RGB lighting.",
    longDescription: "Experience immersive gaming audio with the Pro Gaming Headset X1. This headset features high-fidelity sound drivers for crystal-clear audio, a noise-cancelling microphone to ensure your voice is heard perfectly, and customizable RGB lighting to match your gaming setup.\n\nThe ergonomic design and plush earcups provide comfort for long gaming sessions. Durable construction ensures it can withstand intense use. Compatible with PC, PS5, Xbox Series X/S, and Nintendo Switch.",
    specifications: [
      "Driver Size: 50mm Neodymium",
      "Frequency Response: 20Hz - 20kHz",
      "Microphone: Unidirectional Noise-Cancelling",
      "Connectivity: USB & 3.5mm Jack",
      "Cable Length: 2.2m",
      "Lighting: Customizable RGB"
    ],
    availableColors: [
      { name: 'Stealth Black', class: 'bg-gray-800' },
      { name: 'Arctic White', class: 'bg-gray-100 border border-gray-300' },
      { name: 'RGB Special', class: 'bg-gradient-to-r from-purple-500 via-pink-500 to-red-500' }
    ],
    availableSizes: ['Adjustable Headband'],
    averageRating: 4.7,
    reviewCount: 188,
  },
  {
    id: 2,
    name: "True Wireless EarPods Z",
    price: 79.99,
    image: earPod,
    images: [earPod, placeholderImg1, placeholderImg2],
    discount: 10,
    status: "new",
    category: "EARPHONES",
    dateAdded: "2025-05-03",
    sales: 180,
    description: "Ergonomic true wireless earbuds with up to 8 hours playtime and charging case.",
    longDescription: "Enjoy freedom with the True Wireless EarPods Z. These ergonomic earbuds offer a comfortable and secure fit, perfect for workouts or daily commutes. Get up to 8 hours of playtime on a single charge, with an additional 24 hours from the compact charging case.\n\nFeaturing Bluetooth 5.2 for a stable connection and high-quality audio drivers for rich sound. Intuitive touch controls allow easy management of music and calls.",
    specifications: [
      "Bluetooth Version: 5.2",
      "Playtime (Earbuds): Up to 8 hours",
      "Total Playtime (with Case): Up to 32 hours",
      "Driver Type: Dynamic",
      "Water Resistance: IPX5",
      "Charging Port: USB-C"
    ],
    availableColors: [
      { name: 'Classic White', class: 'bg-white border border-gray-300' },
      { name: 'Midnight Black', class: 'bg-black' },
      { name: 'Sky Blue', class: 'bg-sky-400' }
    ],
    availableSizes: ['S', 'M', 'L (Ear Tips)'],
    averageRating: 4.5,
    reviewCount: 120,
  },
  {
    id: 3,
    name: "Ergo Gaming Mouse S",
    price: 49.99,
    image: mouse,
    images: [mouse, placeholderImg1, placeholderImg2],
    discount: 0,
    status: "sale",
    category: "MICE",
    dateAdded: "2025-04-28",
    sales: 320,
    description: "Ergonomic gaming mouse with adjustable DPI and customizable side buttons.",
    longDescription: "The Ergo Gaming Mouse S is engineered for comfort and precision. Its ergonomic design fits naturally in your hand, reducing fatigue during long gaming sessions. Featuring an adjustable DPI sensor (up to 12000 DPI) for precise tracking and customizable side buttons for quick access to your commands.\n\nDurable switches and a braided cable ensure longevity. Compatible with all major operating systems.",
    specifications: [
      "Sensor Type: Optical",
      "DPI Range: 200 - 12000 DPI",
      "Programmable Buttons: 6",
      "Polling Rate: 1000Hz",
      "Cable: Braided, 1.8m",
      "Lighting: RGB (customizable)"
    ],
    availableColors: [
      { name: 'Black', class: 'bg-black' },
      { name: 'Gunmetal Grey', class: 'bg-gray-600' }
    ],
    availableSizes: ['Standard'],
    averageRating: 4.6,
    reviewCount: 215,
  },
  {
    id: 4,
    name: "Immersive VR Glasses V2",
    price: 299.99,
    image: vrGlasses,
    images: [vrGlasses, placeholderImg1, placeholderImg2],
    discount: 20,
    status: "hot",
    category: "VR",
    dateAdded: "2025-05-05",
    sales: 95,
    description: "Next-gen VR headset with 4K display and integrated audio for ultimate immersion.",
    longDescription: "Step into new realities with the Immersive VR Glasses V2. This next-generation headset boasts a stunning 4K display per eye for unparalleled visual clarity and integrated spatial audio for a truly immersive experience.\n\nLightweight design and adjustable head strap ensure comfort. Wide field of view and precise tracking allow for natural interaction with virtual environments. Compatible with a growing library of VR games and experiences.",
    specifications: [
      "Display Resolution: 4K per eye (3840 x 2160)",
      "Field of View (FOV): 110 degrees",
      "Refresh Rate: 90Hz / 120Hz",
      "Audio: Integrated Spatial Audio",
      "Tracking: Inside-out, 6DoF",
      "Connectivity: USB-C, DisplayPort"
    ],
    availableColors: [
      { name: 'Obsidian Black', class: 'bg-gray-900' },
      { name: 'Lunar White', class: 'bg-gray-200 border border-gray-400' }
    ],
    availableSizes: ['Adjustable Fit'],
    averageRating: 4.8,
    reviewCount: 75,
  },
  {
    id: 5,
    name: "UltraZoom Camera Scoop",
    price: 219.00,
    image: cameraScoop,
    images: [cameraScoop, placeholderImg1, placeholderImg2],
    discount: 60,
    status: "hot",
    category: "CAMERAS",
    dateAdded: "2025-04-30",
    sales: 60,
    description: "Compact camera with 30x optical zoom and stabilization for crisp shots.",
    longDescription: "Capture stunning photos and videos from afar with the UltraZoom Camera Scoop. This compact camera features an impressive 30x optical zoom lens and advanced image stabilization, ensuring your shots are always crisp and clear, even at full zoom.\n\nWith a 20MP sensor, 4K video recording, and various shooting modes, it's perfect for travel, wildlife, and everyday moments. Wi-Fi and Bluetooth connectivity for easy sharing.",
    specifications: [
      "Sensor: 20 Megapixel CMOS",
      "Optical Zoom: 30x",
      "Image Stabilization: Optical (OIS)",
      "Video Resolution: 4K UHD @ 30fps",
      "LCD Screen: 3-inch Tilting Touchscreen",
      "Connectivity: Wi-Fi, Bluetooth"
    ],
    availableColors: [
      { name: 'Graphite Black', class: 'bg-gray-700' },
      { name: 'Silver', class: 'bg-silver-500' } // Assuming silver is a common camera color
    ],
    availableSizes: ['Compact Body'],
    averageRating: 4.4,
    reviewCount: 45,
  },
  {
    id: 6,
    name: "Gaming Controller Pro", // Name slightly adjusted for clarity
    price: 59.99, // Price adjusted to be more typical for a controller
    image: controller1, // Main image (Red controller)
    images: [controller1, controller2, gamingHeadphone1], // Red, Gold, Black (placeholder)
    discount: 0,
    status: "hot",
    category: "CONTROLLERS",
    dateAdded: "2025-05-02",
    sales: 150,
    description: "Ergonomic gaming controller with customizable buttons and haptic feedback.", // Updated short description
    longDescription: "Elevate your gaming with the Gaming Controller Pro. Designed for comfort and precision, it features an ergonomic grip, responsive analog sticks, and pressure-sensitive triggers. Customize your gameplay with programmable buttons and experience immersive haptic feedback.\n\nEnjoy wireless connectivity with low latency for seamless gameplay on PC, consoles, and mobile devices. Long-lasting battery ensures you stay in the game longer.",
    specifications: [ // Controller-specific specifications
      "Connectivity: Wireless (Bluetooth 5.0), Wired (USB-C)",
      "Compatibility: PC, PS4/PS5 (limited), Xbox (limited), Android, iOS",
      "Battery Life: Up to 20 hours",
      "Haptic Feedback: Advanced Rumble Motors",
      "Special Features: Programmable Buttons, Turbo Mode"
    ],
    availableColors: [ // Kept user's colors, added Red for main image
      { name: 'Crimson Red', class: 'bg-red-600 hover:ring-2 hover:ring-red-700' },
      { name: 'Light Grey', class: 'bg-gray-300 hover:ring-2 hover:ring-gray-400' },
      { name: 'Stealth Black', class: 'bg-black hover:ring-2 hover:ring-gray-400' },
      { name: 'Royal Purple', class: 'bg-purple-500 hover:ring-2 hover:ring-purple-600' }
    ],
    availableSizes: ["Standard Fit"], // Controller size is usually standard
    reviewCount: 88, // Adjusted review count
    averageRating: 4.6, // Adjusted rating
  },
  {
    id: 7,
    name: "DualSense Controller B", // Assuming B for black or a variant
    price: 64.50,
    image: controller2, // Gold controller as main image, but name implies 'B' (maybe black?)
    images: [controller2, controller1, gamingHeadphone1], // Gold, Red, Black
    discount: 17,
    status: "hot",
    category: "CONTROLLERS",
    dateAdded: "2025-05-04",
    sales: 130,
    description: "DualSense-inspired controller featuring adaptive triggers and immersive haptics.",
    longDescription: "Experience next-level immersion with the DualSense-inspired Controller B. This controller brings adaptive triggers that simulate varying levels of force and tension, and advanced haptic feedback for a rich sensory experience.\n\nIts iconic design is both comfortable and stylish. Built for precision and responsiveness, it's perfect for a wide range of games. Connect wirelessly or via USB.",
    specifications: [
      "Triggers: Adaptive Force Feedback",
      "Haptics: Dual Actuators",
      "Connectivity: Bluetooth, USB-C",
      "Built-in: Microphone, Speaker",
      "Motion Sensor: Six-axis",
      "Touchpad: Capacitive"
    ],
    availableColors: [
      { name: 'Cosmic Gold', class: 'bg-yellow-500' }, // To match controller2 image
      { name: 'Midnight Black', class: 'bg-black' },
      { name: 'Starlight Blue', class: 'bg-blue-700' }
    ],
    availableSizes: ['Standard'],
    averageRating: 4.9,
    reviewCount: 110,
  },
  {
    id: 8,
    name: "Quad-Copter Drone Pro",
    price: 349.99,
    image: drone,
    images: [drone, placeholderImg1, placeholderImg2],
    discount: 10,
    status: "hot",
    category: "DRONES",
    dateAdded: "2025-04-25",
    sales: 75,
    description: "Professional drone with 4K camera, GPS auto-return, and 30-min flight time.",
    longDescription: "Capture breathtaking aerial footage with the Quad-Copter Drone Pro. Equipped with a 4K camera on a 3-axis gimbal for smooth, cinematic shots. Intelligent flight modes, GPS auto-return, and obstacle avoidance make flying safe and easy, even for beginners.\n\nEnjoy up to 30 minutes of flight time per battery. The foldable design makes it portable and convenient for adventures. Control via the included remote or a smartphone app.",
    specifications: [
      "Camera: 4K UHD, 12MP Photos",
      "Gimbal: 3-axis Stabilization",
      "Flight Time: Up to 30 minutes",
      "Max Range: 5km",
      "GPS: Yes, with Auto-Return Home",
      "Sensors: Obstacle Avoidance (Forward, Downward)"
    ],
    availableColors: [
      { name: 'Dark Grey', class: 'bg-gray-700' },
      { name: 'Alpine White', class: 'bg-gray-100 border border-gray-300' }
    ],
    availableSizes: ['Foldable Design'], // Not a selectable size, but a feature
    averageRating: 4.7,
    reviewCount: 65,
  },
  {
    id: 9,
    name: "Pro Gaming Headset X2",
    price: 149.99,
    image: gamingHeadphone2,
    images: [gamingHeadphone2, gamingHeadphone1, gamingHeadphone3],
    averageRating: 4.5, // Already present
    reviewCount: 435, // Already present
    discount: 15,
    status: "hot",
    category: "ACCESSORIES",
    dateAdded: "2025-05-06",
    sales: 210,
    description: "Upgraded X2 headset with enhanced bass and wireless connectivity.",
    longDescription: "The Pro Gaming Headset X2 takes your audio to the next level. This upgraded model features enhanced bass drivers for deeper, more impactful sound, and reliable wireless connectivity for freedom of movement.\n\nStill retaining the comfort and clarity of the X1, the X2 adds premium materials and extended battery life. The detachable noise-cancelling mic ensures clear communication. Perfect for competitive and immersive gaming.",
    specifications: [
      "Connectivity: 2.4GHz Wireless, Bluetooth, 3.5mm",
      "Battery Life: Up to 24 hours (wireless)",
      "Drivers: 50mm Enhanced Bass",
      "Microphone: Detachable, Noise-Cancelling",
      "Surround Sound: 7.1 Virtual Surround (PC)",
      "Compatibility: PC, PS5, Xbox, Switch, Mobile"
    ],
    availableColors: [
      { name: 'Carbon Black', class: 'bg-gray-900' },
      { name: 'Glacier White', class: 'bg-white border border-gray-300' },
      { name: 'Crimson Red Accent', class: 'bg-gray-800 border-2 border-red-500' }
    ],
    availableSizes: ['Adjustable ProFit'],
    // averageRating and reviewCount already provided for this item
  },
  {
    id: 10,
    name: "Gaming Headset X2003 LE", // Added LE for Limited Edition
    price: 149.99,
    image: gamingHeadphone3,
    images: [gamingHeadphone3, gamingHeadphone1, placeholderImg1],
    discount: 15,
    status: "hot",
    category: "ACCESSORIES",
    dateAdded: "2025-05-07",
    sales: 190,
    description: "Limited edition gaming headset with carbon-fiber accents and surround sound.",
    longDescription: "Own a piece of gaming history with the X2003 Limited Edition Headset. This exclusive model features premium carbon-fiber accents for a sleek look and robust 7.1 surround sound for ultimate audio immersion.\n\nCrafted for discerning gamers, it offers exceptional comfort, crystal-clear microphone quality, and a unique design. Each unit is individually numbered. Don't miss out on this collector's item.",
    specifications: [
      "Sound Profile: 7.1 Surround Sound",
      "Materials: Carbon Fiber Accents, Premium Leatherette",
      "Microphone: Studio-Grade, Retractable",
      "Connectivity: USB, Braided Cable",
      "Special: Limited Edition Numbering",
      "Audio Controls: In-line Remote"
    ],
    availableColors: [
      { name: 'Carbon Fiber Black', class: 'bg-black' }, // Single color for LE usually
    ],
    availableSizes: ['Universal Comfort Fit'],
    averageRating: 4.9,
    reviewCount: 92,
  },
  {
    id: 11,
    name: "Surround Sound Headphones H7",
    price: 89.99,
    image: headphone, // Generic headphone image
    images: [headphone, placeholderImg1, placeholderImg2],
    discount: 20,
    status: "sale",
    category: "ACCESSORIES",
    dateAdded: "2025-04-27",
    sales: 260,
    description: "Over-ear headphones delivering rich surround sound and deep bass.",
    longDescription: "Immerse yourself in music and movies with the H7 Surround Sound Headphones. These over-ear headphones are designed for comfort and deliver rich, detailed audio with deep bass and clear highs. Experience virtual surround sound that brings your entertainment to life.\n\nSoft padded earcups and an adjustable headband ensure a comfortable fit for hours of listening. Foldable design for easy portability.",
    specifications: [
      "Driver Type: 40mm Dynamic",
      "Impedance: 32 Ohms",
      "Frequency Range: 15Hz - 25kHz",
      "Cable Type: Detachable 3.5mm",
      "Earcups: Over-Ear, Plush Padding",
      "Special: Foldable Design"
    ],
    availableColors: [
      { name: 'Classic Black', class: 'bg-black' },
      { name: 'Metallic Silver', class: 'bg-gray-400' },
      { name: 'Ocean Blue', class: 'bg-blue-600' }
    ],
    availableSizes: ['Adjustable'],
    averageRating: 4.3,
    reviewCount: 155,
  },
  {
    id: 12,
    name: "Smart LED TV 55\" QLED Quantum",
    price: 649.99,
    image: tv,
    images: [tv, placeholderImg1, placeholderImg2],
    discount: 5,
    status: "hot",
    category: "COMPUTERS", // Should probably be "ELECTRONICS" or "TVS"
    dateAdded: "2025-05-01",
    sales: 85,
    description: "55-inch QLED TV with smart streaming, HDR10+, and voice control.",
    longDescription: "Transform your viewing experience with the 55-inch Quantum QLED Smart TV. Quantum Dot technology delivers over a billion shades of color for lifelike picture quality. Enjoy stunning contrast and brightness with HDR10+ support.\n\nAccess all your favorite streaming apps with the built-in smart platform. Control your TV and search for content using voice commands. Sleek, minimalist design complements any living space.",
    specifications: [
      "Screen Size: 55 inches",
      "Display Technology: QLED (Quantum Dot)",
      "Resolution: 4K UHD (3840 x 2160)",
      "HDR Support: HDR10+, HLG",
      "Smart Platform: Tizen OS (or similar)",
      "Ports: 3x HDMI, 2x USB, Ethernet, Optical Audio"
    ],
    availableColors: [
      { name: 'Black Bezel', class: 'bg-black' }, // TVs usually have standard bezel colors
    ],
    availableSizes: [], // Size is fixed for this product ID, not a user choice here
    averageRating: 4.8,
    reviewCount: 102,
  },
  {
    id: 13,
    name: "Precision Gaming Mouse Elite",
    price: 59.99,
    image: mouse, // Same mouse image as ID 3, assume it's a different model
    images: [mouse, placeholderImg1, placeholderImg2], // Should ideally be different alt images for Elite model
    discount: 10,
    status: "sale",
    category: "MICE",
    dateAdded: "2025-04-29",
    sales: 300,
    description: "High-precision gaming mouse with customizable RGB lighting and weights.",
    longDescription: "The Precision Gaming Mouse Elite is engineered for peak performance. It features an ultra-precise optical sensor (up to 16000 DPI), customizable RGB lighting across multiple zones, and an adjustable weight system to fine-tune the feel to your preference.\n\nWith 8 programmable buttons and on-board memory for profile storage, you can take your settings anywhere. Designed for durability and comfort for pro-level gaming.",
    specifications: [
      "Sensor: High-Precision Optical (Up to 16000 DPI)",
      "Buttons: 8 Programmable",
      "Lighting: Multi-Zone RGB (16.8 million colors)",
      "Weight System: Adjustable (e.g., 3x 5g weights)",
      "On-board Memory: Yes, for profiles",
      "Switches: Omron (or similar durable switches)"
    ],
    availableColors: [
      { name: 'Matte Black', class: 'bg-gray-800' },
      { name: 'White Edition', class: 'bg-white border border-gray-300' }
    ],
    availableSizes: ['Standard Ergonomic'],
    averageRating: 4.7,
    reviewCount: 250,
  }
];

export default productslist;