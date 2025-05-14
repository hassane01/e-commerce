import React from 'react'
import shsirtslider from './images/shirt_slider.png'
import headphnesider  from'./images/headphones_slider.jpg'
import homegadget from'./images/homegadget.jpeg'
import phonecaseslider from'./images/phonecase_slider.jpg'


export const slides = [
    {
      label: 'Trending',
      title: (
      <>
      Latest Inventions,<br/> 
      Dazzling Design.
      </>
    ),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: shsirtslider,
    },
    {
      label: 'Best Sellers',
      title: 'Top Products Loved by Customers',
      description: 'Discover the items our customers can’t stop raving about—hand-picked for quality and popularity.',
      image: headphnesider,
    },
    {
      label: 'New Arrivals',
      title: 'Fresh Styles Just Landed',
      description: 'Be the first to shop our latest collection, featuring cutting-edge designs and innovative technology.',
      image: homegadget,
    },
    {
      label: 'Staff Picks',
      title: 'Curated Favorites from Our Team',
      description: 'Explore our experts’ personal favorites—premium quality, exceptional performance.',
      image: phonecaseslider,
    },
  ];
  