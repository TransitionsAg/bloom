import { createContext } from "svelte";

export type Theme = {
  primary: string
}

export const [theme, setTheme] = createContext()
