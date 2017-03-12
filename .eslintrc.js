module.exports = {
    "extends": "airbnb",
    "env": {
        "browser": true,
        "es6": true,
    },
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    },
    "plugins": [
        "react",
    ],
    "settings": {
        "import/resolver": "webpack",
    },
};