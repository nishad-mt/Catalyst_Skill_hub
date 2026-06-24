const fs = require('fs');
const path = require('path');
function findFiles(dir, files = []) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) findFiles(fullPath, files);
    else if (fullPath.endsWith('.css')) files.push(fullPath);
  });
  return files;
}
const files = findFiles('./');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let inMedia = false;
  let braceDepth = 0;
  let newContent = [];
  let lines = content.split('\n');
  let modified = false;
  lines.forEach(line => {
    if (line.includes('@media') && line.includes('max-width')) {
      inMedia = true;
      braceDepth = 0;
    }
    if (inMedia) {
      braceDepth += (line.match(/\{/g) || []).length;
      braceDepth -= (line.match(/\}/g) || []).length;
      if (line.includes('font-size:')) {
        // Skip heading sizes, large sizes
        if (!line.match(/font-size:\s*(1\.[5-9]\d*rem|2.*rem|3.*rem|[2-9]\dpx|clamp)/)) {
          // Skip tiny tags
          if (!line.match(/font-size:\s*(0\.[5-7]\d*rem|10px|11px|12px|13px)/)) {
            // Replace matching lines (like 0.8rem, 0.9rem, 1rem, 14px)
            let replacement = line.replace(/font-size:\s*[^;]+;/, 'font-size: var(--font-size-mobile-base);');
            if(replacement !== line) {
              line = replacement;
              modified = true;
            }
          }
        }
      }
      if (braceDepth <= 0 && line.includes('}')) {
        inMedia = false;
      }
    }
    newContent.push(line);
  });
  if (modified) {
    fs.writeFileSync(file, newContent.join('\n'));
    console.log('Modified:', file);
  }
});
