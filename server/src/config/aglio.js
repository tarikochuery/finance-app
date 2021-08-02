const Aglio = require("aglio");
const path =  require("path")

const docsPath = path.join(__dirname, "/../docs/docs.apib")
const buildPath = path.join(__dirname, "/../docs/build/index.html")

const generate = () => new Promise((ok, bad) => {
    const options = {
        themeTemplate: "triple"
    }
    
    Aglio.renderFile(docsPath, buildPath, options, (err, warnings) => {
        if(err) bad(err)
        ok()
    })
})

module.exports = {
    generate,
    buildPath
}