import React from "react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Menu } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

function Navbar() {
  return (
    <>
      <div className="sm:mt-10 w-full sm:w-[85%] md:w-[75%] lg:w-[60%] px-4 sm:px-6 md:px-10 bg-[#151517] border border-[#2e2e30] hover:border-[#484374] transition duration-500 text-white mx-auto flex items-center justify-between rounded-3xl py-3 sm:py-4 shadow-lg">
        
        {/* Desktop & Medium Menu + Language Select together */}
        <div className="hidden sm:flex items-center justify-between w-full">
          <div className="flex items-center sm:gap-5 md:gap-8">
            <a href="" className="px-4 py-1 rounded-4xl hover:bg-[#272a2d] transition-colors duration-300">
              Home
            </a>
            <a href="" className="px-4 py-1 rounded-4xl hover:bg-[#272a2d] transition-colors duration-300">
              Events
            </a>
            <a href="" className="px-4 py-1 rounded-4xl hover:bg-[#272a2d] transition-colors duration-300">
              Services
            </a>
            <a href="" className="px-4 py-1 rounded-4xl hover:bg-[#272a2d] transition-colors duration-300">
              Contact
            </a>
          </div>
          <div>
            <Select>
              <SelectTrigger className="w-[120px] bg-[#ebebeb] text-black border border-[#d1d0d0]">
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent className="bg-[#1e1e20] text-white">
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="hi">Hindi</SelectItem>
                <SelectItem value="fr">French</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Mobile Sidebar Trigger */}
        <div className="sm:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6 text-white" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-[#151517] text-white">
              <div className="flex flex-col gap-6 mt-10">
                <a href="" className="px-4 py-2 rounded-4xl hover:bg-[#272a2d] transition-colors duration-300">
                  Home
                </a>
                <a href="" className="px-4 py-2 rounded-4xl hover:bg-[#272a2d] transition-colors duration-300">
                  Events
                </a>
                <a href="" className="px-4 py-2 rounded-4xl hover:bg-[#272a2d] transition-colors duration-300">
                  Services
                </a>
                <a href="" className="px-4 py-2 rounded-4xl hover:bg-[#272a2d] transition-colors duration-300">
                  Contact
                </a>

                {/* Language Select (Mobile Sidebar) */}
                <Select >
                  <SelectTrigger className="w-[150px] bg-[#ebebeb] text-black border border-[#d1d0d0]">
                    <SelectValue placeholder="Language" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1e1e20] text-white">
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="hi">Hindi</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  );
}

export default Navbar;
