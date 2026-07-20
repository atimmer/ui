import {
  BellIcon,
  EnvelopeIcon,
  GlobeHemisphereWestIcon,
  LockKeyIcon,
  UserCircleIcon,
} from "@24letters/ui";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
  Input,
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
  Label,
  NativeSelect,
  NativeSelectOption,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
  Slider,
  Switch,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  Toggle,
  ToggleGroup,
  ToggleGroupItem,
} from "@24letters/ui";

export function SettingsScreen() {
  return (
    <div className="mx-auto grid w-full max-w-5xl gap-6 p-4 md:p-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Workspace</p>
        <h1 className="mt-2 font-serif text-3xl font-medium tracking-tight md:text-4xl">
          Settings
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Manage your profile, notifications, and workspace defaults.
        </p>
      </div>

      <Tabs
        defaultValue="profile"
        orientation="vertical"
        className="grid items-start gap-6 md:grid-cols-[12rem_minmax(0,1fr)]"
      >
        <TabsList
          variant="line"
          className="h-auto w-full flex-row justify-start overflow-x-auto md:flex-col md:items-stretch"
        >
          <TabsTrigger value="profile" className="justify-start">
            <UserCircleIcon /> Profile
          </TabsTrigger>
          <TabsTrigger value="notifications" className="justify-start">
            <BellIcon /> Notifications
          </TabsTrigger>
          <TabsTrigger value="security" className="justify-start">
            <LockKeyIcon /> Security
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="m-0">
          <Card>
            <CardHeader>
              <CardTitle>Public profile</CardTitle>
              <CardDescription>This information appears across your workspace.</CardDescription>
            </CardHeader>
            <CardContent>
              <form id="profile-form">
                <FieldGroup>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field>
                      <FieldLabel htmlFor="first-name">First name</FieldLabel>
                      <Input id="first-name" defaultValue="Anton" />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="last-name">Last name</FieldLabel>
                      <Input id="last-name" defaultValue="Timmer" />
                    </Field>
                  </div>
                  <Field>
                    <FieldLabel htmlFor="email">Email address</FieldLabel>
                    <Input
                      id="email"
                      type="email"
                      defaultValue="anton@example.com"
                      aria-invalid="true"
                    />
                    <FieldDescription>Used for account notifications and sign-in.</FieldDescription>
                    <FieldError>Please verify this email address.</FieldError>
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="bio">Short bio</FieldLabel>
                    <Textarea
                      id="bio"
                      defaultValue="Designer and developer building focused tools for thoughtful teams."
                    />
                    <FieldDescription>Maximum 160 characters.</FieldDescription>
                  </Field>
                  <FieldSeparator>Regional settings</FieldSeparator>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field>
                      <FieldLabel htmlFor="timezone">Timezone</FieldLabel>
                      <Select defaultValue="amsterdam">
                        <SelectTrigger id="timezone">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="amsterdam">Amsterdam (GMT+2)</SelectItem>
                          <SelectItem value="london">London (GMT+1)</SelectItem>
                          <SelectItem value="new-york">New York (GMT-4)</SelectItem>
                        </SelectContent>
                      </Select>
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="language">Language</FieldLabel>
                      <NativeSelect id="language" defaultValue="en">
                        <NativeSelectOption value="en">English</NativeSelectOption>
                        <NativeSelectOption value="nl">Nederlands</NativeSelectOption>
                        <NativeSelectOption value="de">Deutsch</NativeSelectOption>
                      </NativeSelect>
                    </Field>
                  </div>
                </FieldGroup>
              </form>
            </CardContent>
            <CardFooter className="justify-between border-t">
              <p className="text-xs text-muted-foreground">Last updated two days ago.</p>
              <Button type="submit" form="profile-form">
                Save profile
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="m-0">
          <Card>
            <CardHeader>
              <CardTitle>Notification preferences</CardTitle>
              <CardDescription>Choose how and when the workspace should reach you.</CardDescription>
            </CardHeader>
            <CardContent>
              <FieldGroup>
                <FieldSet>
                  <FieldLegend>Email summaries</FieldLegend>
                  <FieldDescription>Receive a concise digest of recent activity.</FieldDescription>
                  <RadioGroup defaultValue="daily" className="mt-3 grid gap-2">
                    <Label className="flex items-center gap-2">
                      <RadioGroupItem value="daily" /> Daily digest
                    </Label>
                    <Label className="flex items-center gap-2">
                      <RadioGroupItem value="weekly" /> Weekly digest
                    </Label>
                    <Label className="flex items-center gap-2">
                      <RadioGroupItem value="never" /> Never
                    </Label>
                  </RadioGroup>
                </FieldSet>
                <Separator />
                <Field orientation="horizontal">
                  <FieldContent>
                    <FieldTitle>Mentions and replies</FieldTitle>
                    <FieldDescription>Notify me when someone needs my attention.</FieldDescription>
                  </FieldContent>
                  <Switch defaultChecked aria-label="Mentions and replies" />
                </Field>
                <Field orientation="horizontal">
                  <FieldContent>
                    <FieldTitle>Project updates</FieldTitle>
                    <FieldDescription>Status changes, milestones, and due dates.</FieldDescription>
                  </FieldContent>
                  <Switch aria-label="Project updates" />
                </Field>
                <Field>
                  <FieldLabel>Quiet hours</FieldLabel>
                  <Slider defaultValue={[22]} min={0} max={24} step={1} />
                  <FieldDescription>Pause non-urgent notifications after 22:00.</FieldDescription>
                </Field>
                <Field>
                  <FieldLabel>Preferred channels</FieldLabel>
                  <ToggleGroup multiple defaultValue={["email"]}>
                    <ToggleGroupItem value="email">
                      <EnvelopeIcon /> Email
                    </ToggleGroupItem>
                    <ToggleGroupItem value="browser">
                      <GlobeHemisphereWestIcon /> Browser
                    </ToggleGroupItem>
                  </ToggleGroup>
                </Field>
                <Field orientation="horizontal">
                  <Checkbox id="product-news" defaultChecked />
                  <FieldContent>
                    <FieldLabel htmlFor="product-news">Product news</FieldLabel>
                    <FieldDescription>
                      Occasional release notes and design updates.
                    </FieldDescription>
                  </FieldContent>
                </Field>
              </FieldGroup>
            </CardContent>
            <CardFooter className="justify-end border-t">
              <Button>Save preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="m-0">
          <Card>
            <CardHeader>
              <CardTitle>Security</CardTitle>
              <CardDescription>
                Configure two-factor authentication for your account.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <Field>
                <FieldLabel>Verification code</FieldLabel>
                <InputOTP maxLength={6}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
                <FieldDescription>
                  Enter the six-digit code from your authenticator.
                </FieldDescription>
              </Field>
              <Toggle variant="outline" aria-label="Trust this device">
                Trust this device for 30 days
              </Toggle>
            </CardContent>
            <CardFooter className="justify-end border-t">
              <Button>Enable two-factor authentication</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
