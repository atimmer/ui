# @24letters/ui

The complete shadcn component catalog in the compact 24letters Base Mira theme: Base UI primitives, Phosphor icons, olive tokens, Inter interface text, and Newsreader editorial accents.

## Installation

```sh
pnpm add @24letters/ui react react-dom
```

Import the Tailwind CSS v4 theme once in your application stylesheet:

```css
@import "@24letters/ui/styles.css";
```

Then import the components you need:

```tsx
import { Button, Card, CardContent } from "@24letters/ui";

export function Example() {
  return (
    <Card>
      <CardContent>
        <Button>Continue</Button>
      </CardContent>
    </Card>
  );
}
```

The package ships all component sources so Tailwind can discover their classes. Applications must process the imported stylesheet with Tailwind CSS v4.

## License

MIT. This is a derivative distribution of shadcn/ui and retains the original shadcn copyright and license notice.
