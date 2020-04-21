# Improved react snippets

Provides some basic react snippets and imports their dependencies if needed. Auto import only supports implicit default ES6 import:
```typescript
import React from 'react'
```
Any other import types will be silently ignored.

## Supported snippets

```
useState
useMemo
useEffect
useRef
useCallback
```

## Commands

As side effect of the implementation, there's command available for each of these hooks:

```
Import use{Hook}
```

Which will import specified hook if possible.

## Release Notes

### 0.0.1

Initial release
