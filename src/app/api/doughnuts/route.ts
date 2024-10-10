// src/app/api/doughnuts/route.ts

import { NextResponse } from 'next/server';
import knex from '@/db/db';  // Assuming you import your Knex instance like this

// Export a named function for GET
export async function GET() {
  const doughnuts = await knex('doughnuts').select('*');
  return NextResponse.json(doughnuts);
}

// Export other HTTP methods as needed
export async function POST(request) {
  const { name, flavor } = await request.json();
  await knex('doughnuts').insert({ name, flavor });
  return NextResponse.json({ success: true });
}