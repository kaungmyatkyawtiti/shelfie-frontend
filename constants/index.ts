import { Product } from "@/types";
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  FileText,
  Users,
  Settings,
} from "lucide-react";

export const NAV_LINKS = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboard,
  },
  {
    title: "ShopCart",
    url: "/shop-cart",
    icon: ShoppingCart,
  },
  {
    title: "Products",
    url: "/products",
    icon: Package,
  },
  {
    title: "Reports",
    url: "/reports",
    icon: FileText,
  },
  {
    title: "Users",
    url: "/users",
    icon: Users,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Potato",
    category: "Grocery",
    price: 0.34,
    stock: 30,
  },
  {
    id: 2,
    name: "Onion",
    category: "Grocery",
    price: 0.71,
    stock: 50,
  },
  {
    id: 3,
    name: "Cooking Oil",
    category: "General",
    price: 1.57,
    stock: 15,
  },
  {
    id: 4,
    name: "Rice (1kg)",
    category: "Grocery",
    price: 1.14,
    stock: 100,
  },
  {
    id: 5,
    name: "Coffee Mix",
    category: "Beverage",
    price: 0.1,
    stock: 200,
  },
  {
    id: 6,
    name: "Coca Cola",
    category: "Beverage",
    price: 0.43,
    stock: 45,
  },
  {
    id: 7,
    name: "Soap",
    category: "Household",
    price: 0.23,
    stock: 60,
  },
  {
    id: 8,
    name: "Toothpaste",
    category: "Household",
    price: 0.63,
    stock: 25,
  },
  {
    id: 9,
    name: "Instant Noodles",
    category: "Grocery",
    price: 0.17,
    stock: 120,
  },
  {
    id: 10,
    name: "Eggs (10pcs)",
    category: "Grocery",
    price: 0.86,
    stock: 40,
  },
];

