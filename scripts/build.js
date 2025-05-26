const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);
const distDir = path.join(__dirname, '..', 'dist');

// Ensure dist directory exists
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
}

// File patterns to process
const patterns = {
    js: /\.js$/,
    css: /\.css$/,
    html: /\.html$/,
    assets: /\.(svg|ico|png|jpg|jpeg|gif)$/i
};

// Function to run npm scripts
async function runNpmScript(script, input, output) {
    const command = `npm run ${script} -- "${input}" -o "${output}"`;
    try {
        await execAsync(command);
        console.log(`✅ Minified: ${path.basename(input)}`);
    } catch (error) {
        console.error(`❌ Error processing ${input}:`, error.message);
    }
}

// Function to copy assets
function copyAsset(src, dest) {
    try {
        fs.copyFileSync(src, dest);
        console.log(`📁 Copied: ${path.basename(src)}`);
    } catch (error) {
        console.error(`❌ Error copying ${src}:`, error.message);
    }
}

// Process files recursively
function processDirectory(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    entries.forEach(entry => {
        const srcPath = path.join(dir, entry.name);        const relPath = path.relative(path.join(__dirname, '..'), srcPath);
        const destPath = path.join(distDir, relPath);

        if (entry.isDirectory()) {
            // Skip node_modules, dist, and .git directories
            if (['node_modules', 'dist', '.git', 'scripts'].includes(entry.name)) {
                return;
            }
            
            // Create corresponding directory in dist
            if (!fs.existsSync(destPath)) {
                fs.mkdirSync(destPath, { recursive: true });
            }
            
            // Process subdirectory
            processDirectory(srcPath);
        } else {
            // Process file based on extension
            if (patterns.js.test(entry.name)) {
                runNpmScript('minify:js', srcPath, destPath);
            } else if (patterns.css.test(entry.name)) {
                runNpmScript('minify:css', srcPath, destPath);
            } else if (patterns.html.test(entry.name)) {
                runNpmScript('minify:html', srcPath, destPath);
            } else if (patterns.assets.test(entry.name)) {
                copyAsset(srcPath, destPath);
            }
        }
    });
}

console.log('🚀 Starting build process...');
processDirectory(path.join(__dirname, '..'));
console.log('✨ Build complete! Check the dist folder.')
