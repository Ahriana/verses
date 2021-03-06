module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "@typescript-eslint/tslint"
    ],
    "rules": {
        "no-unused-expressions": "off",
        "@typescript-eslint/await-thenable": "error",
        "@typescript-eslint/consistent-type-assertions": "error",
        "@typescript-eslint/indent": "off",
        "@typescript-eslint/member-delimiter-style": [
            "off",
            {
                "multiline": {
                    "delimiter": "none",
                    "requireLast": true
                },
                "singleline": {
                    "delimiter": "semi",
                    "requireLast": false
                }
            }
        ],
        "@typescript-eslint/no-empty-function": "error",
        "@typescript-eslint/no-floating-promises": "error",
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-unnecessary-qualifier": "error",
        "@typescript-eslint/no-unnecessary-type-assertion": "error",
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "@typescript-eslint/quotes": "off",
        "semi": "off",
        "@typescript-eslint/semi": ["error"],
        "@typescript-eslint/type-annotation-spacing": "off",
        "@typescript-eslint/unified-signatures": "error",
        "arrow-parens": [
            "off",
            "as-needed"
        ],
        "camelcase": "off",
        "comma-dangle": "error",
        "curly": [
            "error",
            "multi-line"
        ],
        "eol-last": "error",
        "eqeqeq": [
            "error",
            "smart"
        ],
        "import/no-deprecated": "off",
        "linebreak-style": "off",
        "max-len": "off",
        "new-parens": "off",
        "newline-per-chained-call": "off",
        "no-caller": "error",
        "no-cond-assign": "error",
        "no-constant-condition": "error",
        "no-control-regex": "error",
        "no-duplicate-imports": "error",
        "no-empty": "error",
        "no-eval": "error",
        "no-extra-semi": "error",
        "no-fallthrough": "error",
        "no-invalid-regexp": "error",
        "no-irregular-whitespace": "off",
        "no-multiple-empty-lines": "off",
        "no-redeclare": "error",
        "no-regex-spaces": "error",
        "no-return-await": "error",
        "no-throw-literal": "error",
        "no-trailing-spaces": "off",
        "no-underscore-dangle": "error",
        "no-unused-labels": "error",
        "no-var": "error",
        "one-var": [
            "error",
            "never"
        ],
        "quote-props": "off",
        "radix": "error",
        "space-before-function-paren": "error",
        "space-in-parens": [
            "off",
            "never"
        ],
        "spaced-comment": "error",
        "use-isnan": "error",
        "@typescript-eslint/tslint/config": [
            "error",
            {
                "rules": {
                    "handle-callback-err": [
                        true,
                        "^(err|error)$"
                    ],
                    "jsdoc-format": true,
                    "no-duplicate-case": true,
                    "no-empty-character-class": true,
                    "no-ex-assign": true,
                    "no-extra-boolean-cast": true,
                    "no-inner-declarations": [
                        true,
                        "functions"
                    ],
                    "no-reference-import": true,
                    "no-unexpected-multiline": true,
                    "strict-type-predicates": true,
                    "ter-no-sparse-arrays": true,
                    "valid-typeof": true
                }
            }
        ]
    }
};
