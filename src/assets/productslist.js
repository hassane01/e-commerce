import gamingHeadphone1 from '../assets/images/gamingheadphone.jpg'
import earPod from '../assets/images/earpord.jpg'
import mouse from '../assets/images/mouse.jpg'
import vrGlasses from '../assets/images/vrglasses.jpg'
import cameraScoop from '../assets/images/camerascoop.jpg'
import controller1 from '../assets/images/control.jpg'
import controller2 from '../assets/images/control2.jpg'
import drone from '../assets/images/drone.jpg'
import gamingHeadphone2 from '../assets/images/gamingheadphone2.jpg'
import gamingHeadphone3 from '../assets/images/gamingheadphone3.jpg'
import headphone from '../assets/images/headphone.jpg'
import tv from '../assets/images/tv.jpg'

const products = [
  {
    name: "Pro Gaming Headset X1",
    price: 129.99,
    image: gamingHeadphone1,
    discount: 15,    // 15% off
    status: "hot",
  },
  {
    name: "True Wireless EarPods Z",
    price: 79.99,
    image: earPod,
    discount: 10,
    status: "new",
  },
  {
    name: "Ergo Gaming Mouse S",
    price: 49.99,
    image: mouse,
    discount: 0,
    status: "sale",
  },
  {
    name: "Immersive VR Glasses V2",
    price: 299.99,
    image: vrGlasses,
    discount: 20,
    status: "hot",
  },
  {
    name: "UltraZoom Camera Scoop",
    price: 219.00,
    image: cameraScoop,
    discount: 60,
    status: "hot",
  },
  {
    name: "DualShock Controller A",
    price: 59.50,
    image: controller1,
    discount: 10,
    status: "new",
  },
  {
    name: "DualSense Controller B",
    price: 64.50,
    image: controller2,
    discount: 17,
    status: "hot",
  },
  {
    name: "Quad-Copter Drone Pro",
    price: 349.99,
    image: drone,
    discount: 10,
    status: "hot",
  },
  {
    name: "Pro Gaming Headset X2",
    price: 149.99,
    image: gamingHeadphone2,
    discount: 15,
    status: "hot",
  },
  {
    name: " Gaming Headset X2003",
    price: 149.99,
    image: gamingHeadphone3,
    discount: 15,
    status: "hot",
  },
  {
    name: "Surround Sound Headphones",
    price: 89.99,
    image: headphone,
    discount: 20,
    status: "sale",
  },
  {
    name: "Smart LED TV 55\" QLED",
    price: 649.99,
    image: tv,
    discount: 5,
    status: "hot",
  },
  {
    name: "Precision Gaming Mouse Elite",
    price: 59.99,
    image: mouse,
    discount: 10,
    status: "sale",
  }
]

export default products
