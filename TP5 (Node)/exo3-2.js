const fs = require('fs')

var arg = process.argv
var args = arg.slice(3)

function node(word) {
    let co = 0
    let d = 0
    let t = []
    let tab = []

    if (arg[3].match('.txt')) {
        args.forEach(x => {
            fs.readFile(x, function (err, data) {
                if (err) throw err;
                if (data.indexOf(word) >= 0) {
                    console.log('Found in: ' + x)
                } else {
                    d++
                }
                if (d == args.length) {
                    console.log("NONE")
                }
            });
        });
    } else {
        fs.readdir(args[0], function (err, files) {
            if (err) { throw err }
            for (let i = 0; i < files.length; i++) {
                if (files[i].match('.txt')) {
                    tab.push(files[i])
                }
            }

            tab.forEach(file => {
                for (let i = 0; i < args.length; i++) {
                    if (args[i].match(file)) {
                        t.push(file)
                    }
                }
            })

            t.forEach(file => {
                fs.readFile(`${args[0]}/${file}`, function (err, data) {
                    if (err) throw err;
                    if (data.indexOf(word) >= 0) {
                        console.log('Found in: ' + file)
                    } else {
                        co++
                    }
                    if (co == t.length) {
                        console.log("NONE")
                    }
                })
            })
        }
        )
    }

}

node(arg[2])





