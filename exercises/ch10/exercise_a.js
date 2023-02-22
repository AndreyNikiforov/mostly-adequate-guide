// Write a function that adds two possibly null numbers together using `Maybe` and `ap`.

// safeAdd :: Maybe Number -> Maybe Number -> Maybe Number
const safeAdd = curry((n1, n2) => Maybe.of(add).ap(n1).ap(n2));
