module.exports = {
  root: true,
  env: {
    node: true
  },
  // 全局变量使用
  globals: {
    "android": true,
    "appScan": true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    'vue/no-side-effects-in-computed-properties': 'off',
    "no-unused-vars": 'off',
    "prettier/prettier": "off"
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
