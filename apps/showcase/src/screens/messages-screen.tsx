import {
  ArrowUpIcon,
  FilePdfIcon,
  LinkIcon,
  MagnifyingGlassIcon,
  PaperclipIcon,
  SmileyIcon,
  SparkleIcon,
  XIcon,
} from "@24letters/ui";
import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
  Avatar,
  AvatarBadge,
  AvatarFallback,
  Badge,
  Bubble,
  BubbleContent,
  BubbleGroup,
  BubbleReactions,
  Button,
  Card,
  CardContent,
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupTextarea,
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
  Marker,
  MarkerContent,
  MarkerIcon,
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageGroup,
  MessageHeader,
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
  ScrollArea,
  Separator,
} from "@24letters/ui";

const conversations = [
  {
    initials: "KL",
    name: "Kim Lewis",
    preview: "The research notes are ready.",
    time: "4m",
    active: true,
  },
  { initials: "MN", name: "Maya Noor", preview: "I left comments on the flow.", time: "22m" },
  { initials: "ST", name: "Sam Taylor", preview: "Can we move this to Friday?", time: "1h" },
  { initials: "JL", name: "Jo Lin", preview: "That version looks much clearer.", time: "3h" },
];

export function MessagesScreen() {
  return (
    <div className="mx-auto grid h-[calc(100svh-3.5rem)] w-full max-w-7xl p-0 md:p-6">
      <Card className="grid min-h-0 overflow-hidden rounded-none md:grid-cols-[18rem_minmax(0,1fr)] md:rounded-xl">
        <aside className="hidden min-h-0 border-r md:flex md:flex-col">
          <div className="grid gap-3 p-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="font-serif text-2xl font-medium">Messages</h1>
                <p className="text-xs text-muted-foreground">Four active conversations</p>
              </div>
              <Button size="icon" aria-label="New message">
                <SparkleIcon />
              </Button>
            </div>
            <InputGroup>
              <InputGroupAddon>
                <MagnifyingGlassIcon />
              </InputGroupAddon>
              <InputGroupInput placeholder="Search messages" aria-label="Search messages" />
            </InputGroup>
          </div>
          <Separator />
          <ScrollArea className="min-h-0 flex-1">
            <ItemGroup className="p-2">
              {conversations.map((conversation) => (
                <Item
                  key={conversation.name}
                  variant={conversation.active ? "muted" : "default"}
                  size="sm"
                  render={<button type="button" />}
                >
                  <ItemMedia>
                    <Avatar>
                      <AvatarFallback>{conversation.initials}</AvatarFallback>
                      {conversation.active ? <AvatarBadge /> : null}
                    </Avatar>
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle>{conversation.name}</ItemTitle>
                    <ItemDescription>{conversation.preview}</ItemDescription>
                  </ItemContent>
                  <Badge variant="outline">{conversation.time}</Badge>
                </Item>
              ))}
            </ItemGroup>
          </ScrollArea>
        </aside>

        <section className="grid min-h-0 grid-rows-[auto_minmax(0,1fr)_auto]">
          <header className="flex items-center gap-3 border-b px-4 py-3">
            <Avatar>
              <AvatarFallback>KL</AvatarFallback>
              <AvatarBadge />
            </Avatar>
            <div className="min-w-0">
              <h2 className="truncate text-sm font-semibold">Kim Lewis</h2>
              <p className="text-xs text-muted-foreground">Product research · online</p>
            </div>
            <Badge variant="secondary" className="ml-auto">
              Research
            </Badge>
          </header>

          <MessageScrollerProvider>
            <MessageScroller>
              <MessageScrollerViewport>
                <MessageScrollerContent className="p-4 md:p-6">
                  <MessageScrollerItem>
                    <Marker variant="separator">
                      <MarkerContent>Today</MarkerContent>
                    </Marker>
                  </MessageScrollerItem>

                  <MessageScrollerItem>
                    <MessageGroup>
                      <Message>
                        <MessageAvatar>
                          <Avatar size="sm">
                            <AvatarFallback>KL</AvatarFallback>
                          </Avatar>
                        </MessageAvatar>
                        <MessageContent>
                          <MessageHeader>Kim · 09:42</MessageHeader>
                          <BubbleGroup>
                            <Bubble variant="secondary">
                              <BubbleContent>
                                The five customer interviews are synthesized. Two themes were much
                                stronger than I expected.
                              </BubbleContent>
                            </Bubble>
                            <Bubble variant="secondary">
                              <BubbleContent>
                                People want a calmer starting point, but they still need to see
                                momentum immediately.
                              </BubbleContent>
                              <BubbleReactions>💡 3</BubbleReactions>
                            </Bubble>
                          </BubbleGroup>
                          <MessageFooter>Delivered</MessageFooter>
                        </MessageContent>
                      </Message>
                    </MessageGroup>
                  </MessageScrollerItem>

                  <MessageScrollerItem>
                    <Message align="end">
                      <MessageContent>
                        <BubbleGroup>
                          <Bubble align="end">
                            <BubbleContent>
                              That matches the direction we were testing. Could you send the
                              synthesis?
                            </BubbleContent>
                          </Bubble>
                        </BubbleGroup>
                        <MessageFooter>Read · 09:48</MessageFooter>
                      </MessageContent>
                    </Message>
                  </MessageScrollerItem>

                  <MessageScrollerItem>
                    <Message>
                      <MessageAvatar>
                        <Avatar size="sm">
                          <AvatarFallback>KL</AvatarFallback>
                        </Avatar>
                      </MessageAvatar>
                      <MessageContent>
                        <MessageHeader>Kim · 09:51</MessageHeader>
                        <Bubble variant="secondary">
                          <BubbleContent>
                            Here you go. I included the clips we should play in tomorrow’s review.
                          </BubbleContent>
                        </Bubble>
                        <AttachmentGroup>
                          <Attachment>
                            <AttachmentMedia>
                              <FilePdfIcon />
                            </AttachmentMedia>
                            <AttachmentContent>
                              <AttachmentTitle>research-synthesis.pdf</AttachmentTitle>
                              <AttachmentDescription>2.4 MB · PDF</AttachmentDescription>
                            </AttachmentContent>
                            <AttachmentActions>
                              <AttachmentAction aria-label="Remove attachment">
                                <XIcon />
                              </AttachmentAction>
                            </AttachmentActions>
                          </Attachment>
                          <Attachment>
                            <AttachmentMedia>
                              <LinkIcon />
                            </AttachmentMedia>
                            <AttachmentContent>
                              <AttachmentTitle>Interview highlights</AttachmentTitle>
                              <AttachmentDescription>12 timestamped clips</AttachmentDescription>
                            </AttachmentContent>
                          </Attachment>
                        </AttachmentGroup>
                      </MessageContent>
                    </Message>
                  </MessageScrollerItem>

                  <MessageScrollerItem scrollAnchor>
                    <Marker variant="border">
                      <MarkerIcon>
                        <SparkleIcon />
                      </MarkerIcon>
                      <MarkerContent>Kim shared 2 attachments</MarkerContent>
                    </Marker>
                  </MessageScrollerItem>
                </MessageScrollerContent>
              </MessageScrollerViewport>
              <MessageScrollerButton />
            </MessageScroller>
          </MessageScrollerProvider>

          <CardContent className="border-t p-3 md:p-4">
            <InputGroup className="h-auto">
              <InputGroupTextarea rows={2} placeholder="Write a message…" aria-label="Message" />
              <InputGroupAddon align="block-end">
                <div className="flex w-full items-center gap-1">
                  <InputGroupButton size="icon-xs" aria-label="Attach file">
                    <PaperclipIcon />
                  </InputGroupButton>
                  <InputGroupButton size="icon-xs" aria-label="Add emoji">
                    <SmileyIcon />
                  </InputGroupButton>
                  <span className="ml-auto text-[0.625rem] text-muted-foreground">
                    Shift + Enter for a new line
                  </span>
                  <Button size="icon-sm" aria-label="Send message">
                    <ArrowUpIcon />
                  </Button>
                </div>
              </InputGroupAddon>
            </InputGroup>
          </CardContent>
        </section>
      </Card>
    </div>
  );
}
