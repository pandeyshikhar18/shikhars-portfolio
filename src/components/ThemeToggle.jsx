import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full",
        "bg-card/70 backdrop-blur-md shadow-md",
        "hover:scale-110 active:scale-95 transition-all duration-300",
        "ring-1 ring-border"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300 drop-shadow-sm" />
      ) : (
        <Moon className="h-6 w-6 text-emerald-600 drop-shadow-sm" />
      )}
    </button>
  );
};
