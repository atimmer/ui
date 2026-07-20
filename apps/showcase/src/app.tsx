import {
  BookOpenIcon,
  ChatCircleDotsIcon,
  CirclesFourIcon,
  GearSixIcon,
  MoonIcon,
  SidebarSimpleIcon,
  SparkleIcon,
  SunIcon,
} from "@24letters/ui";
import {
  Badge,
  Button,
  DirectionProvider,
  Separator,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
  Spinner,
  Toaster,
  TooltipProvider,
} from "@24letters/ui";
import { lazy, Suspense, useEffect, useState } from "react";

const DashboardScreen = lazy(async () => ({
  default: (await import("./screens/dashboard-screen")).DashboardScreen,
}));
const MessagesScreen = lazy(async () => ({
  default: (await import("./screens/messages-screen")).MessagesScreen,
}));
const SettingsScreen = lazy(async () => ({
  default: (await import("./screens/settings-screen")).SettingsScreen,
}));
const GalleryScreen = lazy(async () => ({
  default: (await import("./screens/gallery-screen")).GalleryScreen,
}));

const navigation = [
  { id: "dashboard", label: "Dashboard", icon: CirclesFourIcon },
  { id: "messages", label: "Messages", icon: ChatCircleDotsIcon, badge: "3" },
  { id: "settings", label: "Settings", icon: GearSixIcon },
  { id: "gallery", label: "All components", icon: BookOpenIcon, badge: "60" },
] as const;

type ScreenId = (typeof navigation)[number]["id"];

const screens = {
  dashboard: DashboardScreen,
  messages: MessagesScreen,
  settings: SettingsScreen,
  gallery: GalleryScreen,
} as const;

export function App() {
  const [screenId, setScreenId] = useState<ScreenId>("dashboard");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const Screen = screens[screenId];
  const activeLabel = navigation.find(({ id }) => id === screenId)?.label ?? "Showcase";

  return (
    <DirectionProvider direction="ltr">
      <TooltipProvider>
        <SidebarProvider>
          <Sidebar collapsible="icon">
            <SidebarHeader>
              <div className="flex h-10 items-center gap-2 px-2">
                <div className="flex size-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <SparkleIcon className="size-4" weight="fill" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight group-data-[collapsible=icon]:hidden">
                  <span className="truncate font-semibold">24letters UI</span>
                  <span className="truncate text-xs text-muted-foreground">Base Mira · olive</span>
                </div>
              </div>
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Showcase</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {navigation.map((item) => (
                      <SidebarMenuItem key={item.id}>
                        <SidebarMenuButton
                          isActive={item.id === screenId}
                          tooltip={item.label}
                          onClick={() => setScreenId(item.id)}
                        >
                          <item.icon />
                          <span>{item.label}</span>
                        </SidebarMenuButton>
                        {"badge" in item ? <SidebarMenuBadge>{item.badge}</SidebarMenuBadge> : null}
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    tooltip={darkMode ? "Use light theme" : "Use dark theme"}
                    onClick={() => setDarkMode((current) => !current)}
                  >
                    {darkMode ? <SunIcon /> : <MoonIcon />}
                    <span>{darkMode ? "Light theme" : "Dark theme"}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarFooter>
            <SidebarRail />
          </Sidebar>

          <SidebarInset>
            <header className="sticky top-0 z-20 flex h-14 items-center gap-3 border-b bg-background/90 px-4 backdrop-blur md:px-6">
              <SidebarTrigger>
                <SidebarSimpleIcon />
                <span className="sr-only">Toggle navigation</span>
              </SidebarTrigger>
              <Separator orientation="vertical" className="h-4" />
              <span className="text-sm font-medium">{activeLabel}</span>
              <Badge variant="secondary" className="ml-auto hidden sm:inline-flex">
                Development preview
              </Badge>
              <Button
                variant="ghost"
                size="icon"
                aria-label={darkMode ? "Use light theme" : "Use dark theme"}
                onClick={() => setDarkMode((current) => !current)}
              >
                {darkMode ? <SunIcon /> : <MoonIcon />}
              </Button>
            </header>
            <main className="min-w-0 flex-1 bg-muted/20">
              <Suspense
                fallback={
                  <div className="grid min-h-[50svh] place-items-center">
                    <Spinner className="size-5" />
                  </div>
                }
              >
                <Screen />
              </Suspense>
            </main>
          </SidebarInset>
        </SidebarProvider>
        <Toaster />
      </TooltipProvider>
    </DirectionProvider>
  );
}
