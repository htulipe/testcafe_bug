module.exports = (api) => {
  return {
    presets: [
      ["@babel/preset-typescript"],
      [
        "@babel/preset-react",
        {
          runtime: "automatic",
          development: api.env("development"),
          useBuiltIns: true,
        },
      ],
      [
        "@babel/preset-env",
        {
          modules: false,
          targets: ["last 2 chrome version", "last 2 firefox version"],
          bugfixes: true,
        },
      ],
    ],
    plugins: [
      "@babel/proposal-class-properties",
      "@babel/proposal-object-rest-spread",
      ["@babel/plugin-proposal-optional-chaining", { loose: true }],
      ["@babel/plugin-proposal-nullish-coalescing-operator", { loose: true }],
    ],
  };
};
