# Date

### `randMonth`

Generate a random month.

```ts
import { randMonth } from '@ngneat/falso';

month();
month({ length: 10 });
```

### `randBetween`

Generate a random date between ranges.

```ts
import { randBetween } from '@ngneat/falso';

randBetween();
randBetween({ from: Date, to: Date });
between({ length: 10 });
```

### `randFuture`

Generate a random future.

```ts
import { randFuture } from '@ngneat/falso';

randFuture();
randFuture({ length: 10 });
future({ years: 10 });
```

### `randPast`

Generate a random past.

```ts
import { randPast } from '@ngneat/falso';

randPast();
randPast({ length: 10 });
```

### `randRecent`

Generate a random recent.

```ts
import { randRecent } from '@ngneat/falso';

randRecent();
randRecent({ length: 10 });
```

### `randSoon`

Generate a random soon.

```ts
import { randSoon } from '@ngneat/falso';

randSoon();
randSoon({ length: 10 });
```

### `randWeekday`

Generate a random weekday.

```ts
import { randWeekday } from '@ngneat/falso';

randWeekday();
randWeekday({ length: 10 });
```
