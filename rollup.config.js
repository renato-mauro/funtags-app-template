import { nodeResolve } from '@rollup/plugin-node-resolve';
import copy from 'rollup-plugin-copy';
import { terser } from 'rollup-plugin-terser';
import serve from 'rollup-plugin-serve';

export default argv => {
    let plugins = [ 
        nodeResolve(),
        copy({
            targets: [
                { src: 'node_modules/bootstrap/dist/js/bootstrap.min.js', dest: 'dist/js' },
                { src: 'node_modules/bootstrap/dist/js/bootstrap.min.js.map', dest: 'dist/js' },
                { src: 'node_modules/bootstrap/dist/css/bootstrap.min.css', dest: 'dist/css' },
                { src: 'node_modules/bootstrap/dist/css/bootstrap.min.css.map', dest: 'dist/css' },
            ]
        })
    ];
    if(process.env.SERVER) {
        plugins.push(serve('dist'))
    }
    return {
        input: "src/index.js",
        output: {
            file: "dist/js/funtags-app.min.js",
            format: "umd",
//            plugins: [terser()]
        },
        plugins
    }
};
