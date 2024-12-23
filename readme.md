These are some common functions and types I use in my projects.

```
// math utilities
using { clamp, unclamp, lerp, unlerp, resolveMinMax } from "@probablyduncan/tslib/math";

// vector2 class with basic vector math
using Vec2 from "@probablyduncan/tslib/vec2";

// ts helper to handle T | T[] types.
using { toSeveral, type SingleOrSeveral } from "@probablyduncan/tslib/single-or-several";

// node cmd runner utility
using { cmd } from "@probablyduncan/tslib/cmd";

// functions to shuffle arrays
using { shuffle, shuffleRef } from "@probablyduncan/tslib/shuffle";
```

Run tests:

```
> pnpm test
```