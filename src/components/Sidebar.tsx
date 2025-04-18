
import { Link } from "react-router-dom";
import { Home, ShoppingBag, MessageSquare, MapPin, Info, Mail } from "lucide-react";
import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Collections", href: "/collections", icon: ShoppingBag },
  { name: "Blog", href: "/blog", icon: MessageSquare },
  { name: "Store Location", href: "/store-location", icon: MapPin },
  { name: "About", href: "/#about", icon: Info },
  { name: "Contact", href: "/#contact", icon: Mail },
];

const SidebarComponent = () => {
  return (
    <ShadcnSidebar>
      <SidebarHeader className="p-4">
        <h2 className="text-lg font-semibold">The Fashion World</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.name}>
              <SidebarMenuButton asChild tooltip={item.name}>
                <Link to={item.href} className="flex items-center gap-2">
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </ShadcnSidebar>
  );
};

export default SidebarComponent;
