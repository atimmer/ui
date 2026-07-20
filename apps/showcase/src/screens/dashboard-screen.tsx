import {
  ArrowUpRightIcon,
  CheckCircleIcon,
  DotsThreeIcon,
  LightningIcon,
  TrendUpIcon,
  UsersThreeIcon,
} from "@24letters/ui";
import {
  Alert,
  AlertDescription,
  AlertTitle,
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Progress,
  ProgressLabel,
  ProgressValue,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  type ChartConfig,
} from "@24letters/ui";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

const chartData = [
  { month: "Feb", completed: 108 },
  { month: "Mar", completed: 156 },
  { month: "Apr", completed: 132 },
  { month: "May", completed: 196 },
  { month: "Jun", completed: 214 },
  { month: "Jul", completed: 248 },
];

const chartConfig = {
  completed: { label: "Completed", color: "var(--chart-3)" },
} satisfies ChartConfig;

const projects = [
  { name: "Annual report", owner: "AB", status: "In review", progress: 84, due: "Today" },
  { name: "Mobile onboarding", owner: "KL", status: "On track", progress: 68, due: "Jul 24" },
  { name: "Research library", owner: "MN", status: "Planning", progress: 32, due: "Aug 2" },
  { name: "Billing refresh", owner: "ST", status: "At risk", progress: 51, due: "Aug 8" },
];

export function DashboardScreen() {
  return (
    <div className="mx-auto grid w-full max-w-7xl gap-6 p-4 md:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Workspace</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Overview</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div>
            <h1 className="font-serif text-3xl font-medium tracking-tight md:text-4xl">
              Good morning, Anton.
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Here’s what moved across your workspace this week.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <AvatarGroup>
            <Tooltip>
              <TooltipTrigger render={<Avatar size="sm" />}>
                <AvatarFallback>AT</AvatarFallback>
                <AvatarBadge />
              </TooltipTrigger>
              <TooltipContent>Anton · online</TooltipContent>
            </Tooltip>
            <Avatar size="sm">
              <AvatarFallback>KL</AvatarFallback>
            </Avatar>
            <Avatar size="sm">
              <AvatarFallback>MN</AvatarFallback>
            </Avatar>
            <AvatarGroupCount>+5</AvatarGroupCount>
          </AvatarGroup>
          <Button>
            New project <ArrowUpRightIcon data-icon="inline-end" />
          </Button>
        </div>
      </div>

      <Alert>
        <CheckCircleIcon />
        <AlertTitle>Weekly review is ready</AlertTitle>
        <AlertDescription>
          12 projects moved forward and 28 tasks were completed since Monday.
        </AlertDescription>
      </Alert>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="Workspace metrics">
        <MetricCard title="Completed" value="248" change="+18%" icon={CheckCircleIcon} />
        <MetricCard title="Active projects" value="12" change="2 new" icon={LightningIcon} />
        <MetricCard title="Collaborators" value="24" change="+4" icon={UsersThreeIcon} />
        <MetricCard title="Momentum" value="92%" change="Strong" icon={TrendUpIcon} />
      </section>

      <section className="grid gap-4 xl:grid-cols-[1.35fr_0.65fr]">
        <Card>
          <CardHeader>
            <CardTitle>Throughput</CardTitle>
            <CardDescription>Completed work over the last six months.</CardDescription>
            <CardAction>
              <Badge variant="outline">+23.4%</Badge>
            </CardAction>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="max-h-72 w-full">
              <AreaChart data={chartData} margin={{ left: 8, right: 8 }}>
                <defs>
                  <linearGradient id="completed-fill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-completed)" stopOpacity={0.38} />
                    <stop offset="95%" stopColor="var(--color-completed)" stopOpacity={0.04} />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={10} />
                <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
                <Area
                  dataKey="completed"
                  type="monotone"
                  fill="url(#completed-fill)"
                  stroke="var(--color-completed)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quarterly focus</CardTitle>
            <CardDescription>Progress across the three commitments.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-5">
            <Progress value={84}>
              <ProgressLabel>Product quality</ProgressLabel>
              <ProgressValue />
            </Progress>
            <Progress value={68}>
              <ProgressLabel>Customer research</ProgressLabel>
              <ProgressValue />
            </Progress>
            <Progress value={51}>
              <ProgressLabel>Operational clarity</ProgressLabel>
              <ProgressValue />
            </Progress>
          </CardContent>
          <CardFooter className="text-xs text-muted-foreground">Updated 12 minutes ago</CardFooter>
        </Card>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Priority projects</CardTitle>
          <CardDescription>Work that needs attention this week.</CardDescription>
          <CardAction>
            <Button variant="outline">View all</Button>
          </CardAction>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Project</TableHead>
                <TableHead>Owner</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Progress</TableHead>
                <TableHead>Due</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.map((project) => (
                <TableRow key={project.name}>
                  <TableCell className="font-medium">{project.name}</TableCell>
                  <TableCell>
                    <Avatar size="sm">
                      <AvatarFallback>{project.owner}</AvatarFallback>
                    </Avatar>
                  </TableCell>
                  <TableCell>
                    <Badge variant={project.status === "At risk" ? "destructive" : "secondary"}>
                      {project.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="min-w-36">
                    <Progress value={project.progress} />
                  </TableCell>
                  <TableCell className="text-muted-foreground">{project.due}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger
                        render={
                          <Button
                            variant="ghost"
                            size="icon"
                            aria-label={`Actions for ${project.name}`}
                          />
                        }
                      >
                        <DotsThreeIcon />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Project</DropdownMenuLabel>
                        <DropdownMenuItem>Open project</DropdownMenuItem>
                        <DropdownMenuItem>Duplicate</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem variant="destructive">Archive</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  icon: typeof CheckCircleIcon;
}

function MetricCard({ title, value, change, icon: Icon }: MetricCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardDescription>{title}</CardDescription>
        <CardAction>
          <Icon className="size-4 text-muted-foreground" />
        </CardAction>
      </CardHeader>
      <CardContent className="flex items-end justify-between gap-3">
        <span className="font-serif text-3xl font-medium tabular-nums">{value}</span>
        <Badge variant="outline">{change}</Badge>
      </CardContent>
    </Card>
  );
}
