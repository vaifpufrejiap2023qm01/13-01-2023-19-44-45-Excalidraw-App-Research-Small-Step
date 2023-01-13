let tree;

fetch(
  "https://api.github.com/repos/excalidraw/excalidraw/git/trees/master?recursive=1",
  {
    method: "GET",
    headers: {
      Authorization: "token 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",
    },
  }
)
  .then((res) => res.json())
  .then((res) => {
    // res keys: (4) ['sha', 'url', 'tree', 'truncated']

    tree = res.tree;
  });


// Step 1
// Get All Files, Get All Directories

// Get All Files Types

// Get All Directories by Levels, by file types, file child nested deep, by is nested deep lv

// For each file: get info: size, lang; code details: imports & exports; all 1st level / main level (to be determined manually) var & funcs, all functions declared (also group by level), all vars declard, all expressions, all functions executions, all variable assignments, all conditional statements, all loops, all scopes
// For each folder: get all files, group, get order (check index.js) / check any main file; check html pages, check other entry
// Get all entry points for each file / folder

// Get app entry point

// Get app scripts, try build