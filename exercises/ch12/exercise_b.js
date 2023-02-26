// Using traversable, and the `validate` function, update `startGame` (and its signature)
// to only start the game if all players are valid
//
//   // validate :: Player -> Either String Player
//   validate = player => (player.name ? Either.of(player) : left('must have name'));

// startGame :: [Player] -> [Either Error String]
// const startGame = compose(map(map(always('game started!'))), map(validate));

// startGame :: [Player] -> Either Error [String]
// const startGame = traverse(Either.of, validate);

// startGame :: [Player] -> Either Error String
const startGame = compose(map(always('game started!')), traverse(Either.of, validate));