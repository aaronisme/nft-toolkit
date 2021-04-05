const solc = require("solc");
const fs = require("fs");
const path = require("path");

const target = process.argv[2];

const source = fs.readFileSync(target, { encoding: "utf-8" });
var input = {
  language: "Solidity",
  sources: {
    "Nft.sol": {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};

const findImports = (p) => {
  const s = p.split("/");
  if (s[0].startsWith("openzeppelin")) {
    const path_pre = path.resolve(
      __dirname,
      "..",
      "node_modules",
      "openzeppelin-solidity"
    );
    return {
      contents: fs.readFileSync(path.join(path_pre, ...s.slice(1)), "utf-8"),
    };
  } else {
    const new_path = path.resolve(__dirname, "..", "contracts", p);
    return {
      contents: fs.readFileSync(new_path, "utf-8"),
    };
  }
};

var output = JSON.parse(
  solc.compile(JSON.stringify(input), {
    import: findImports,
  })
);
console.log(output);
