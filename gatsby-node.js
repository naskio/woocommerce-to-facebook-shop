exports.onCreateWebpackConfig = ({actions}) => {
    actions.setWebpackConfig({
        resolve: {
            fallback: {
                "fs": false
            },
        }
    })
}
