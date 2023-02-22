// Write a natural transformation that converts `Either b a` to `Maybe a`

// eitherToMaybe :: Either b a -> Maybe a
// const eitherToMaybe = e => e.isRight ? Maybe.of(e.$value) : Maybe.of(null);

// const eitherToMaybe = either(() => Maybe.of(null), Maybe.of);

const eitherToMaybe = either(always(nothing), Maybe.of);
