// Considering the following functions:
//
//   readfile :: String -> String -> Task Error String
//   readdir :: String -> Task Error [String]
//
// Use traversable to rearrange and flatten the nested Tasks & Maybe

// const { readfile } = require("../support");

// readFirst :: String -> Task Error (Maybe (Task Error String))
// const readFirst = compose(map(map(readfile('utf-8'))), map(safeHead), readdir);

// readFirst :: String -> Task Error (Maybe String)
const readFirst = compose(
    chain(
        // Task Error (Task Error (Maybe String))
        traverse(Task.of, readfile('utf-8')),
    ),
    // Task Error (Maybe String)
    map(safeHead),
    readdir,
);
