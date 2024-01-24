"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { set } from "react-hook-form";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState("dark");
	// Update theme based on system preference
	useEffect(() => {
		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

		const handleChange = (e) => {
			setTheme(e.matches ? "dark" : "light");
		};

		// Initial check
		handleChange(mediaQuery);

		// Listen for changes
		mediaQuery.addListener(handleChange);

		// Clean up
		return () => mediaQuery.removeListener(handleChange);
	}, []);

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => useContext(ThemeContext);
