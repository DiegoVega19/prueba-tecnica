import { type LucideIcon } from "lucide-react";

export interface ButtonProps {
  onClick: () => void;
  title: string;
}

export interface NavItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  isActive?: boolean;
  items?: {
    title: string;
    url: string;
  }[];
}

export interface NavMainProps {
  items: NavItem[];
}

export interface UserMainProps {
  user: UserData;
}
export interface UserData {
  name: string;
  email: string;
  avatar: string;
}

export type Theme = "dark" | "light" | "system";

export type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

export type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};


