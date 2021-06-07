module.exports = {
    siteMetadata: {
        title: "Woo Commerce to Facebook Shop",
        siteUrl: `https://woocommerce-to-fb-shop.nask.io/`,
    },
    plugins: [
        "gatsby-plugin-image",
        {
            resolve: "gatsby-plugin-google-analytics",
            options: {
                trackingId: "G-NQ9WG3LL2Z",
            },
        },
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/images/icon.png",
            },
        },
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
        // Material UI with a custom theme
        {
            resolve: `gatsby-plugin-material-ui`,
            options: {
                stylesProvider: {
                    injectFirst: true,
                },
            },
        },
        `custom-mui-theme`,
        // sitemap
        `gatsby-plugin-advanced-sitemap`,
        // robots-txt
        'gatsby-plugin-robots-txt',
    ],
};
