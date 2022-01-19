# General

### `randBoolean`

Generate a random boolean.

```ts
import { randBoolean } from '@ngneat/falso';

randBoolean();
randBoolean({ length: 10 });
```

### `randImg`

Generate a random img.

```ts
import { randImg } from '@ngneat/falso';

randImg();
randImg({ length: 10 });
```

### `randFloat`

Generate a random random float.

```ts
import { randFloat } from '@ngneat/falso';

randFloat();
randFloat({ length: 10 });
```

### `randNumber`

Generate a random random number.

```ts
import { randNumber } from '@ngneat/falso';

randNumber();
randNumber({ min: 10, max: 1000 });
randNumber({ length: 10 });
```

### `rand`

Get a random item from array.

```ts
import { rand } from '@ngneat/falso';

rand([1, 2, 3]);
```

### `random`

Create a seed.

```ts
import { random } from '@ngneat/falso';

randRandom();
```

### `randPriority`

Generate a random priority.

```ts
import { randPriority } from '@ngneat/falso';

randPastDate();
randPastDate({ length: 10 });
```

### `randSequence`

Generate a random random sequence.

```ts
import { randSequence } from '@ngneat/falso';

randSequence();
randSequence({ size: 10 });
randSequence({ chars: 'aAbBcC@#' });
randSequence({ length: 10 });
```

### `randUuid`

Generate a random random uuid.

```ts
import { randUuid } from '@ngneat/falso';

randUuid();
randUuid({ length: 10 });
```
