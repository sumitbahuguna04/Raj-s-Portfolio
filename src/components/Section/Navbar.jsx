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
import navbarContent from "@/data/navbarContent";

function Navbar({ lang, setLang }) {
  const content = navbarContent[lang];
  const [open, setOpen] = React.useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleMobileClick = (id) => {
    setOpen(false);
    setTimeout(() => scrollToSection(id), 300); // menu close hone ke baad scroll
  };

  return (
    <div className="sm:mt-10 w-full sm:w-[85%] md:w-[75%] lg:w-[60%] px-4 sm:px-6 md:px-10 bg-[#1b1b1eb5] border border-[#2e2e30] hover:border-[#84694d] transition duration-500 text-white mx-auto flex items-center justify-between rounded-3xl py-3 sm:py-4 shadow-lg">
      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center justify-between w-full">
        <div className="flex items-center sm:gap-5 md:gap-5 lg:gap-8">
          <button
            onClick={() => scrollToSection("home")}
            className="px-4 py-1 rounded-4xl hover:bg-[#5b564f76]  transition-colors duration-500 hover:text-orange-300 "
          >
            {content.home}
          </button>
          <button
            onClick={() => scrollToSection("events")}
            className="px-4 py-1 rounded-4xl hover:bg-[#5b564f76] transition-colors duration-500 hover:text-orange-300"
          >
            {content.events}
          </button>
          <button
            onClick={() => scrollToSection("awards")}
            className="px-4 py-1 rounded-4xl hover:bg-[#5b564f76] transition-colors duration-500 hover:text-orange-300"
          >
            {content.awards}
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-4 py-1 rounded-4xl hover:bg-[#5b564f76] transition-colors duration-500 hover:text-orange-300"
          >
            {content.contact}
          </button>
        </div>
        <div>
          <Select value={lang} onValueChange={(value) => setLang(value)}>
            <SelectTrigger className="bg-[#fff] text-black border border-[#d1d0d0]">
              <SelectValue placeholder="English" />
            </SelectTrigger>
            <SelectContent className="bg-[#1e1e20] text-white border-[#393737] p-1">
              <SelectItem value="en" className="bg-[#2d2d2f9a]">
                English
              </SelectItem>
              <SelectItem value="zh" className="bg-[#2d2d2f9a] mt-2">
                Chinese
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="sm:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="w-6 h-6 text-white" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="bg-[#1e1e20] text-white border-[#393737] p-5"
          >
            <div className="flex flex-col  gap-5 mt-10 mr-30 ">
              <button
                onClick={() => handleMobileClick("home")}
                className=" py-2 bg-[#5b564f76]  rounded-xl hover:bg-[#5b564f76] text-orange-300 "
              >
                {content.home}
              </button>
              <button
                onClick={() => handleMobileClick("events")}
                className="  py-2 bg-[#5b564f76] rounded-xl hover:bg-[#5b564f76] text-orange-300 "
              >
                {content.events}
              </button>
              <button
                onClick={() => handleMobileClick("awards")}
                className=" py-2 bg-[#5b564f76] rounded-xl hover:bg-[#5b564f76] text-orange-300 "
              >
                {content.awards}
              </button>
              <button
                onClick={() => handleMobileClick("contact")}
                className=" py-2 bg-[#5b564f76] rounded-xl hover:bg-[#5b564f76] text-orange-300 "
              >
                {content.contact}
              </button>
              <Select value={lang} onValueChange={(value) => setLang(value)}>
                <SelectTrigger className="w-[150px] bg-[#fff] text-black border border-[#272626]  mt-5">
                  <SelectValue placeholder="English" />
                </SelectTrigger>
                <SelectContent className="bg-[#1e1e20] text-white border-[#393737] p-1">
                  <SelectItem value="en" className="bg-[#2d2d2f9a]">
                    English
                  </SelectItem>
                  <SelectItem value="zh" className="bg-[#2d2d2f9a] mt-2">
                    Chinese
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

export default Navbar;
