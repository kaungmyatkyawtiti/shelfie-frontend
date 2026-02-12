"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Minus, Plus, ShoppingCart, X } from "lucide-react";
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Badge } from "@/components/ui/badge";

export default function POSPageUI() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const categories = [
    { id: "1", name: "All", icon: "🛍️" },
    { id: "2", name: "Fashion", icon: "👕" },
    { id: "3", name: "Health and Beauty", icon: "🧴" },
    { id: "4", name: "Gaming", icon: "🎮" },
    { id: "5", name: "Bags", icon: "👜" },
    { id: "6", name: "Computers", icon: "💻" },
    { id: "7", name: "Electronics", icon: "🔌" },
    { id: "8", name: "Phones", icon: "📱" },
  ];

  return (
    <div>
      {/* Top Filterings */}
      <div>
        <div className="p-4 sm:p-6 border-b space-y-3">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <Button
                variant="outline"
                key={cat.id}
              >
                <span className="text-base">{cat.icon}</span>
                {cat.name}
              </Button>
            ))}
          </div>

          <div className="flex items-center justify-between gap-4">
            <Input
              type="text"
              placeholder="Search products..."
              className="flex-1 max-w-sm"
            />

            <Drawer direction="right">
              <DrawerTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon-lg"
                  onClick={() => setIsCartOpen(!isCartOpen)}
                  className="relative"
                >
                  <ShoppingCart size={26} />
                  <span className="absolute -top-3 -right-2 bg-brand text-white text-[11px] w-5 h-5 flex items-center justify-center rounded-full">4</span>
                </Button>
              </DrawerTrigger>

              <DrawerContent>
                <DrawerHeader className="border-b flex flex-row justify-between items-center">
                  <DrawerTitle className="text-xl font-bold">Order Details</DrawerTitle>
                  <DrawerClose asChild>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <X size={22} />
                    </Button>
                  </DrawerClose>
                </DrawerHeader>

                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                    <div key={i} className="flex items-center gap-4 p-3 rounded-xl border bg-stone-100 dark:bg-stone-700">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-xl">🛒</div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold truncate">Product Item {i}</p>
                        <p className="text-xs text-foreground/80 font-medium">2,300 Ks</p>
                      </div>
                      <div className="flex items-center gap-2 rounded-lg border border-brand-accent/70 px-1">
                        <Button size="icon-sm" className="bg-brand-accent hover:opacity-85 text-white">
                          <Minus size={16} />
                        </Button>
                        <span className="text-sm font-bold w-4 text-center">1</span>
                        <Button size="icon-sm" className="bg-brand-accent hover:opacity-85 text-white">
                          <Plus size={16} />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Checkout section */}
                <div className="p-6 border-t space-y-4">
                  <div className="flex justify-between items-center text-sm font-semibold text-foreground/85">
                    <span>Subtotal</span>
                    <span>9,200 Ks</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="font-bold text-lg">Total Amount</span>
                    <span className="text-2xl font-black text-brand leading-none">
                      12,450 <span className="text-sm font-normal text-foreground">Ks</span>
                    </span>
                  </div>
                  <Button className="w-full py-6 rounded-2xl bg-brand-primary hover:bg-brand-primary text-white font-semibold text-lg shadow-lg">
                    Proceed to Checkout
                  </Button>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="flex-1 overflow-y-auto py-4 px-6 sm:py-6 sm:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="relative bg-card rounded-lg shadow-sm border hover:shadow-md transition cursor-pointer flex flex-col group"
              >
                <span className="absolute top-2 right-2 z-10 bg-brand-accent text-white text-[15px] font-bold w-8 h-8 flex items-center justify-center rounded-full shadow-sm">
                  2
                </span>
                <div className="aspect-square flex items-center justify-center rounded-t-2xl overflow-hidden border-b">
                  <span className="text-4xl group-hover:scale-110 transition-transform">🛒</span>
                </div>
                <div className="p-3">
                  <h2 className="text-lg font-semibold truncate">
                    Product {i + 1}
                  </h2>
                  <div className="flex justify-between items-start mt-2 gap-1">
                    <span className="font-bold text-brand text-[15px] whitespace-nowrap">
                      2,300 Ks
                    </span>
                    <Badge className="text-[12px] font-medium text-black bg-brand-secondary px-2 py-0.5 rounded-md border border-border/70">
                      40 left
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
