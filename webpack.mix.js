let mix = require('laravel-mix');
const path = require('path');
const webpack = require('webpack');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

var plugin =  'resources/plugins/';
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

mix.babelConfig({
  plugins: ['@babel/plugin-syntax-dynamic-import'],
});

mix.js('resources/js/app.js', 'public/js/app.js')
  .vue()
  .combine([
    plugin + 'sidebarmenu.js',
    plugin + 'slimscroll/jquery.slimscroll.js',
    plugin + 'waves/waves.js',
    plugin + 'sticky-kit/sticky-kit.min.js',
    plugin + 'autosize/autosize.min.js',
    plugin + 'summernote/summernote-bs4.js',
    plugin + 'duplicate.js',
    'resources/js/custom.js',
  ],'public/js/plugin.js')
    .sass('resources/sass/style.scss', 'public/css')
    .sass('resources/sass/style-rtl.scss', 'public/css')
    .sass('resources/sass/colors/blue.scss', 'public/css/colors')
    .sass('resources/sass/colors/default.scss', 'public/css/colors')
    .sass('resources/sass/colors/green.scss', 'public/css/colors')
    .sass('resources/sass/colors/megna.scss', 'public/css/colors')
    .sass('resources/sass/colors/purple.scss', 'public/css/colors')
    .sass('resources/sass/colors/red.scss', 'public/css/colors')
    .copyDirectory('resources/public', 'public')
    .webpackConfig({
        // stats: {
        //     children: true
        // },
        devtool: "cheap-module-source-map",
        plugins: [
            new CompressionPlugin({
                filename: "[path][base].gz[query]",
                algorithm: "gzip",
                test: /\.js$|\.css$|\.html$|\.svg$/,
                threshold: 10240,
                minRatio: 0.8
            }),
            new CleanWebpackPlugin({
                cleanAfterEveryBuildPatterns: ['public']
            }),
            new webpack.IgnorePlugin({
                resourceRegExp: /^\.\/locale$/,
                contextRegExp: /moment$/,
            }),
        ],
        resolve: {
            alias: {
                '@sass': path.resolve(__dirname, 'resources', 'sass'),
                '@js': path.resolve(__dirname, 'resources', 'js'),
                '@var': path.resolve(__dirname, 'resources', 'var'),
                '@components': path.resolve(__dirname, 'resources', 'js', 'components'),
                '@layouts': path.resolve(__dirname, 'resources', 'js', 'layouts'),
                '@routers': path.resolve(__dirname, 'resources', 'js', 'routers'),
                '@services': path.resolve(__dirname, 'resources', 'js', 'services'),
                '@views': path.resolve(__dirname, 'resources', 'js', 'views'),
                '@widgets': path.resolve(__dirname, 'resources', 'js', 'widgets')
            }
        },
        output: {
            chunkFilename: 'js/chunks/[name].js?id=[chunkhash]',
        },
    });

if (mix.inProduction()) {                       // In production environtment use versioning
    mix.version();
}
