// src/app/api/doughnuts/route.ts

import { NextResponse } from 'next/server';

// Export a named function for GET
export async function GET() {
  const doughnuts = [
    { id: 1, name: 'Pumpkin Spice Cake Doughnut', price: 2.59, type: 'cake' },
    { id: 2, name: 'Original Glazed® Doughnut', price: 2.19, type: 'glazed' },
    { id: 3, name: 'Strawberry Iced Doughnut With Sprinkles', price: 2.39, type: 'iced' },
    { id: 4, name: 'Glazed Raspberry Filled Doughnut', price: 2.59, type: 'filled' },
    { id: 5, name: 'Original Glazed Doughnut Dots - 10ct', price: 2.29, type: 'glazed' },
    { id: 6, name: 'Chocolate Iced Glazed Doughnut', price: 2.39, type: 'iced' },
    { id: 7, name: 'Glazed Blueberry Cake Doughnut', price: 2.39, type: 'filled' },
    { id: 8, name: 'Glazed Lemon Filled Doughnut', price: 2.59, type: 'filled' },
    { id: 9, name: 'Chocolate Iced Custard Filled Doughnut', price: 2.59, type: 'filled' },
    { id: 10, name: 'Chocolate Iced Doughnut With Kreme Filling', price: 2.59, type: 'filled' },
    { id: 11, name: 'Cake Batter Doughnut', price: 2.89, type: 'filled' },
    { id: 12, name: 'Mini Chocolate Iced Glazed Doughnut', price: 2.49, type: 'iced' },
  ];

  return NextResponse.json(doughnuts);
}