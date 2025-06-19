These are some common functions and types I use in my projects.

```
// math utilities
import { clamp, unclamp, lerp, unlerp, resolveMinMax } from "@probablyduncan/common/math";

// vector2 class with basic vector math
import Vec2 from "@probablyduncan/common/vec2";

// ts helper to handle T | T[] types.
import { toSeveral, type SingleOrSeveral } from "@probablyduncan/common/sos";

// node cmd runner utility
import { cmd } from "@probablyduncan/common/cmd";

// functions to shuffle arrays
import { shuffle, shuffleRef } from "@probablyduncan/common/shuffle";

// DateDiff class for parsing time components between dates.
import DateDiff from "@probablyduncan/common/datediff

// reduceToObject for converting arrays of object to key/value record, and an object to an array of that object's values
import { reduceToObject, reduceToArray } from "@probablyduncan/common/reduceToObject

// formatQuotes utility for turning straight quotes into directioned curly ones
import { formatQuotes } from "@probablyduncan/common/quotes
```

Publish changes:

```
> pnpm publish
```

Run tests:

```
> pnpm test
```