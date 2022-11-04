const fs = require('fs')

var arg = process.argv
var args = arg.slice(3)

function node(word) {
    let co = 0
    args.forEach(x => {
        fs.readFile(x, function (err, data) {
            if (err) {
                console.log("Le dossier '" + x + "' n'existe pas.")
                co++
            } else {
                if (data.indexOf(word) >= 0) {
                    console.log('Found in: ' + x)
                } else {
                    co++
                }
                if (co == args.length) {
                    console.log("NONE")
                }
            }
        });
    });
}

node(arg[2])
