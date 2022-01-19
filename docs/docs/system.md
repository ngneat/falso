# System

### `randHexaDecimal`

Generate a random hexa decimal.

```ts
import { randHexaDecimal } from '@ngneat/falso';

randHexaDecimal();
randHexaDecimal({ length: 10 });
```

### `randDirectoryPath`

Generate a random directory path.

```ts
import { randDirectoryPath } from '@ngneat/falso';

randDirectoryPath();
randDirectoryPath({ length: 10 });
```

### `randFileExt`

Generate a random file ext.

```ts
import { randFileExt } from '@ngneat/falso';

randFileExt();
randFileExt({ length: 10 });
```

### `randFileName`

Generate a random file name.

```ts
import { randFileName } from '@ngneat/falso';

randFileName();
randFileName({ length: 10 });
```

### `randFilePath`

Generate a random file path.

```ts
import { randFilePath } from '@ngneat/falso';

randFilePath();
randFilePath({ length: 10 });
```

### `randFileType`

Generate a random file type.

```ts
import { randFileType } from '@ngneat/falso';

randFileType();
randFileType({ length: 10 });
```

### `randMac`

Generate a random mac address.

```ts
import { randMac } from '@ngneat/falso';

randMac();
randMac({ length: 10 });
```

### `randMimeType`

Generate a random mime type.

```ts
import { randMimeType } from '@ngneat/falso';

randMimeType();
randMimeType({ length: 10 });
```

### `randPermission`

Generate a random permission.

```ts
import { randPermission } from '@ngneat/falso';

randPermission();
randPermission({ length: 10 });
randPermission({ numeric: true });
randPermission({ combination: true });
randPermission({ numeric: true, combination: true });
```
