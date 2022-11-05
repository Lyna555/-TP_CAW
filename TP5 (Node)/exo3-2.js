const fs = require('fs')

var arg = process.argv
var args = arg.slice(3)

function node(word) {
    let co = 0
    let d = 0
    let t = []
    let tab = []
    let e = []
    let cp

    if (arg[3].match('.txt')) {
        args.forEach(file => {
            fs.readFile(file, function (err, data) {
                if (err) {
                    console.log("Le fichier '" + file + "' n'existe pas.")
                } else {
                    if (data.indexOf(word) >= 0) {
                        console.log('Found in: ' + file)
                    } else {
                        d++
                    }
                    if (d == args.length) {
                        console.log("NONE")
                    }
                }
            });
        });
    } else {
        fs.readdir(args[0], function (err, files) {
            if (err) {
                console.log("Le dossier '" + args[0] + "' n'existe pas.")
            } else {
                for (let i = 0; i < files.length; i++) {
                    if (files[i].match('.txt')) {
                        tab.push(files[i])
                    }
                }

                for (let i = 1; i < args.length; i++) {
                    cp = 0
                    for (let j = 0; j < tab.length; j++) {
                        if (args[i] != tab[j]) {
                            cp++
                        }
                    }
                    if (cp == tab.length) {
                        e.push(args[i])
                    } else {
                        t.push(args[i])
                    }
                }
                
                t.forEach(file => {
                    fs.readFile(`${args[0]}/${file}`, function (err, data) {
                        if (err) {
                            console.log("Le fichier '" + file + "' n'existe pas.")
                            co++
                        } else {
                            if (data.indexOf(word) >= 0) {
                                console.log('Found in: ' + file)
                            } else {
                                co++
                            }
                            if (co == t.length) {
                                console.log("NONE")
                            }
                        }
                    })
                })
                e.forEach(file => {
                    console.log("Le fichier '" + file + "' n'existe pas dans le dossier '" + args[0] + "'.")
                })
            }
        })
    }

}

node(arg[2])
