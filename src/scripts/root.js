const files = [
    "./src/scripts/header.js",
    "./src/scripts/main.js",
    "./src/scripts/footer.js"
]

console.log(files);

// create script file
files.forEach(file=>{
    const script = document.createElement('script');
    script.src = file;
    document.body.appendChild(script);
})