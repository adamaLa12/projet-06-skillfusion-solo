const path = require("path");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/js/main.js",
    admin: "./src/js/admin.js",
    connexion: "./src/js/connexion.js",
    contact: "./src/js/contact.js",
    cours: "./src/js/cours.js",
    inscription: "./src/js/inscription.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 8080,
    hot: true,
    proxy: {
      "/api": "http://localhost:3001", // Remplacez 3000 par le port de votre serveur Express
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      chunks: ["main"],
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/admin.html",
      chunks: ["admin"],
      filename: "admin.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/connexion.html",
      chunks: ["connexion"],
      filename: "connexion.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/contact.html",
      chunks: ["contact"],
      filename: "contact.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/cours.html",
      chunks: ["cours"],
      filename: "cours.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/inscription.html",
      chunks: ["inscription"],
      filename: "inscription.html",
    }),
    new MiniCssExtractPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/img", to: "img" },
        // { from: "src/404.html", to: "404.html" },
        // Copier les images
        // Ajoutez d'autres fichiers à copier si nécessaire
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]",
        },
      },
      {
        test: /\.(scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [autoprefixer],
              },
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
};
