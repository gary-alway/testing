# Default export

[why we shouldn't use default exports](https://basarat.gitbook.io/typescript/main-1/defaultisbad)

## Autocomplete and refactoring

```
import blah from './component'
import React from 'react'

export const Component3: React.FC = () => (
  <>
    <blah>hello</blah>
  </>
)
```

## Test spies

```
import * as myComp from "./component";

jest.spyOn(myComp, 'MyComponnt')
```

## husky

runs tests on commit
