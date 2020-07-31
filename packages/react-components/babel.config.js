module.exports = api => {
    api.cache(true);

    return {
        plugins: [
            "@babel/proposal-class-properties",
            "@babel/proposal-object-rest-spread"
        ],
        presets: [
            [
                "@babel/preset-env",
                {
                    targets: { chrome: "84" }
                }
            ],
            "@babel/preset-typescript",
            "@babel/preset-react"
        ]
    }
}