export interface SidebarItem {
  label: string;
  icon: string;
  route: string;
}

export interface HeaderAction {
  icon: string;
  label?: string;
  actionType: string;
  show?: boolean;
}

export interface LayoutConfig {
  title: string;
  actions: HeaderAction[];
  menuItems: SidebarItem[];
}
