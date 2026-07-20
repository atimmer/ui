import {
  ArchiveIcon,
  ArrowClockwiseIcon,
  CaretRightIcon,
  CommandIcon,
  FolderOpenIcon,
  GearIcon,
  InfoIcon,
  PlusIcon,
  SlidersHorizontalIcon,
  TrashIcon,
  WarningIcon,
} from "@24letters/ui";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
  AspectRatio,
  Badge,
  Button,
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
  Calendar,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Kbd,
  KbdGroup,
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Skeleton,
  Spinner,
} from "@24letters/ui";
import { useState, type PropsWithChildren } from "react";

const frameworks = ["React", "Vue", "Svelte", "Solid", "Astro"] as const;
const carouselItems = ["Focus", "Rhythm", "Clarity", "Momentum"];

export function GalleryScreen() {
  const [date, setDate] = useState<Date | undefined>(new Date(2026, 6, 20));

  return (
    <div className="mx-auto grid w-full max-w-7xl gap-6 p-4 md:p-8">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            60 modules · 61 catalog items
          </p>
          <h1 className="mt-2 font-serif text-3xl font-medium tracking-tight md:text-4xl">
            Component gallery
          </h1>
          <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
            Every component shipped by `@24letters/ui`, shown here or in one of the product screens.
          </p>
        </div>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                New project <MenubarShortcut>⌘N</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Open… <MenubarShortcut>⌘O</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Export</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Edit</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                Undo <MenubarShortcut>⌘Z</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>View</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Component index</MenubarItem>
              <MenubarItem>Theme tokens</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>

      <Card>
        <CardContent className="flex flex-col items-start justify-between gap-4 p-4 sm:flex-row sm:items-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Foundations</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-72 gap-1 p-2">
                    <NavigationMenuLink href="#color">
                      <span className="font-medium">Color</span>
                      <span className="text-muted-foreground">
                        Olive neutrals and emerald accents.
                      </span>
                    </NavigationMenuLink>
                    <NavigationMenuLink href="#type">
                      <span className="font-medium">Typography</span>
                      <span className="text-muted-foreground">Inter and Newsreader.</span>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#components">Components</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#patterns">Patterns</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <KbdGroup>
            <Kbd>
              <CommandIcon /> K
            </Kbd>
            <span className="text-xs text-muted-foreground">to search</span>
          </KbdGroup>
        </CardContent>
      </Card>

      <section className="grid gap-4 xl:grid-cols-2" id="components">
        <DemoCard
          title="Actions and overlays"
          description="Buttons and confirmation patterns for common product work."
        >
          <div className="flex flex-wrap gap-2">
            <ButtonGroup>
              <Button variant="outline">
                <PlusIcon /> Add
              </Button>
              <ButtonGroupSeparator />
              <Button variant="outline" size="icon" aria-label="Refresh">
                <ArrowClockwiseIcon />
              </Button>
            </ButtonGroup>
            <ButtonGroup>
              <ButtonGroupText>View</ButtonGroupText>
              <Button variant="outline">List</Button>
              <Button variant="outline">Board</Button>
            </ButtonGroup>

            <Dialog>
              <DialogTrigger render={<Button variant="outline" />}>Open dialog</DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create a collection</DialogTitle>
                  <DialogDescription>
                    Group related components into a reusable pattern.
                  </DialogDescription>
                </DialogHeader>
                <div className="rounded-md bg-muted p-4 text-sm">
                  Collection settings would live here.
                </div>
                <DialogFooter>
                  <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>
                  <Button>Create collection</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Sheet>
              <SheetTrigger render={<Button variant="outline" />}>
                <SlidersHorizontalIcon /> Open sheet
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Display options</SheetTitle>
                  <SheetDescription>
                    Choose which metadata appears in your workspace.
                  </SheetDescription>
                </SheetHeader>
                <div className="grid gap-3 px-4 text-sm">
                  <label className="flex items-center justify-between">
                    Descriptions <Badge>Visible</Badge>
                  </label>
                  <label className="flex items-center justify-between">
                    Timestamps <Badge variant="secondary">Hidden</Badge>
                  </label>
                </div>
                <SheetFooter>
                  <SheetClose render={<Button />}>Save options</SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>

            <Drawer>
              <DrawerTrigger render={<Button variant="outline" />}>Open drawer</DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Quick capture</DrawerTitle>
                  <DrawerDescription>
                    Add a thought without leaving the current view.
                  </DrawerDescription>
                </DrawerHeader>
                <div className="mx-auto min-h-24 w-full max-w-lg rounded-md bg-muted p-4 text-sm text-muted-foreground">
                  What needs your attention?
                </div>
                <DrawerFooter>
                  <Button>Capture</Button>
                  <DrawerClose render={<Button variant="outline" />}>Cancel</DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>

            <AlertDialog>
              <AlertDialogTrigger render={<Button variant="destructive" />}>
                <TrashIcon /> Delete
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogMedia>
                    <WarningIcon />
                  </AlertDialogMedia>
                  <AlertDialogTitle>Delete this collection?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. The components themselves will remain available.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Delete collection</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </DemoCard>

        <DemoCard
          title="Search and selection"
          description="Keyboard-friendly discovery and structured choices."
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Combobox items={frameworks}>
              <ComboboxInput placeholder="Select a framework" />
              <ComboboxContent>
                <ComboboxEmpty>No frameworks found.</ComboboxEmpty>
                <ComboboxList>
                  {(item) => (
                    <ComboboxItem key={item} value={item}>
                      {item}
                    </ComboboxItem>
                  )}
                </ComboboxList>
              </ComboboxContent>
            </Combobox>
            <Popover>
              <PopoverTrigger render={<Button variant="outline" />}>Show details</PopoverTrigger>
              <PopoverContent>
                <PopoverHeader>
                  <PopoverTitle>Base Mira</PopoverTitle>
                  <PopoverDescription>
                    Compact controls, subtle surfaces, and strong information density.
                  </PopoverDescription>
                </PopoverHeader>
              </PopoverContent>
            </Popover>
          </div>
          <Command className="mt-4 rounded-lg border">
            <CommandInput placeholder="Search commands…" />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Workspace">
                <CommandItem>
                  <FolderOpenIcon /> Open project <CommandShortcut>⌘O</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <PlusIcon /> New task <CommandShortcut>⌘N</CommandShortcut>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Settings">
                <CommandItem>
                  <GearIcon /> Preferences
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </DemoCard>

        <DemoCard
          title="Disclosure"
          description="Progressively reveal dense information without losing context."
        >
          <Accordion defaultValue={["item-1"]} className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is the package customizable?</AccordionTrigger>
              <AccordionContent>
                Yes. The full source is included and the theme is built from CSS variables.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Does it support dark mode?</AccordionTrigger>
              <AccordionContent>
                Yes. Add the `dark` class to the document element.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Which primitive library is used?</AccordionTrigger>
              <AccordionContent>This variant uses Base UI.</AccordionContent>
            </AccordionItem>
          </Accordion>
          <Collapsible defaultOpen className="mt-4 rounded-lg border p-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Package contents</p>
                <p className="text-xs text-muted-foreground">
                  60 modules and the mobile sidebar hook.
                </p>
              </div>
              <CollapsibleTrigger
                render={<Button variant="ghost" size="icon" aria-label="Toggle package contents" />}
              >
                <CaretRightIcon />
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="pt-3 text-xs text-muted-foreground">
              Components, TypeScript declarations, theme source, font imports, documentation, and
              the MIT license.
            </CollapsibleContent>
          </Collapsible>
        </DemoCard>

        <DemoCard
          title="Date and media"
          description="Editorial typography paired with practical content primitives."
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-lg border"
            />
            <div className="grid content-start gap-3">
              <AspectRatio
                ratio={4 / 3}
                className="overflow-hidden rounded-lg bg-[radial-gradient(circle_at_30%_20%,var(--chart-1),transparent_35%),linear-gradient(145deg,var(--primary),var(--chart-5))]"
              >
                <div className="flex h-full items-end p-4 text-primary-foreground">
                  <div>
                    <Badge variant="secondary">Aspect ratio</Badge>
                    <p className="mt-2 font-serif text-2xl">Quietly expressive.</p>
                  </div>
                </div>
              </AspectRatio>
              <HoverCard>
                <HoverCardTrigger render={<Button variant="link" className="w-fit px-0" />}>
                  Why Newsreader?
                </HoverCardTrigger>
                <HoverCardContent>
                  <p className="text-sm font-medium">An editorial counterpoint</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Its softer forms bring warmth to otherwise utilitarian screens.
                  </p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
        </DemoCard>

        <DemoCard title="Carousel" description="A compact way to move through related cards.">
          <Carousel className="mx-auto max-w-sm" opts={{ align: "start" }}>
            <CarouselContent>
              {carouselItems.map((item, index) => (
                <CarouselItem key={item} className="basis-4/5 sm:basis-2/3">
                  <Card>
                    <CardContent className="flex aspect-[4/3] flex-col justify-between p-5">
                      <Badge variant="outline">0{index + 1}</Badge>
                      <p className="font-serif text-2xl">{item}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </DemoCard>

        <DemoCard
          title="Resizable workspace"
          description="Drag the handle to redistribute the available room."
        >
          <ResizablePanelGroup orientation="horizontal" className="min-h-56 rounded-lg border">
            <ResizablePanel defaultSize="35%" minSize="25%">
              <div className="grid h-full place-items-center bg-muted/40 p-4 text-center">
                <div>
                  <ArchiveIcon className="mx-auto mb-2 size-5" />
                  <span className="text-xs font-medium">Library</span>
                </div>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize="65%">
              <div className="grid h-full place-items-center p-4 text-center">
                <div>
                  <p className="font-serif text-xl">Canvas</p>
                  <p className="text-xs text-muted-foreground">Flexible working area</p>
                </div>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </DemoCard>

        <DemoCard
          title="Context and empty states"
          description="Secondary actions stay close without cluttering the default view."
        >
          <ContextMenu>
            <ContextMenuTrigger>
              <Empty className="rounded-lg border border-dashed">
                <EmptyHeader>
                  <EmptyMedia variant="icon">
                    <InfoIcon />
                  </EmptyMedia>
                  <EmptyTitle>No archived projects</EmptyTitle>
                  <EmptyDescription>
                    Right-click this area to see contextual actions.
                  </EmptyDescription>
                </EmptyHeader>
                <EmptyContent>
                  <Button variant="outline">
                    <PlusIcon /> Create project
                  </Button>
                </EmptyContent>
              </Empty>
            </ContextMenuTrigger>
            <ContextMenuContent>
              <ContextMenuLabel>Empty state</ContextMenuLabel>
              <ContextMenuItem>
                Refresh <ContextMenuShortcut>⌘R</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>Create project</ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem variant="destructive">Clear archive</ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </DemoCard>

        <DemoCard
          title="Loading and pagination"
          description="Clear feedback while content changes or arrives."
        >
          <div className="grid gap-3">
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <Spinner />
              <div className="grid flex-1 gap-2">
                <Skeleton className="h-3 w-1/3" />
                <Skeleton className="h-2.5 w-2/3" />
              </div>
              <Badge variant="secondary">Syncing</Badge>
            </div>
            <div className="grid gap-2 rounded-lg border p-3">
              <Skeleton className="h-24 w-full" />
              <div className="grid grid-cols-3 gap-2">
                <Skeleton className="h-3" />
                <Skeleton className="h-3" />
                <Skeleton className="h-3" />
              </div>
            </div>
          </div>
          <Pagination className="mt-5">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </DemoCard>
      </section>
    </div>
  );
}

interface DemoCardProps extends PropsWithChildren {
  title: string;
  description: string;
}

function DemoCard({ title, description, children }: DemoCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
