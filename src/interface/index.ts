// src/interface/index.ts

export interface ISpace {
  _id?: string; // Optional because MongoDB will create this automatically
  title: string;
  shortDescription: string;
  fullDescription: string;
  images: string[];
  price: number;
  rating: number;
  location: string;
  category: 'Hot Desk' | 'Meeting Room' | 'Private Office';
  amenities: string[];
  isAvailable: boolean;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
}