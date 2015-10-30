
var async = require('async');
var tmp = require('tmp');
var fs = require('fs');
var shell = require('shelljs');


var temp = require('temp'),
    path = require('path');


//Run users code
exports.process = function(req, res) {
    var data = req.body;
    var code = data.code;
    var type = data.lang.toLowerCase();

    if(type == "javascript") {
        runCommand("input.js", "node ", code, res);
    }

    else if(type == "python") {
        code = "#!/usr/bin/env python" + "\n" + code;
        runCommand("input.py", "python ", code, res);
    }

    else if(type == "ruby") {
        code = "#!/usr/bin/env ruby" + "\n" + code;
        runCommand("input.rb", "ruby ", code, res);
    }
    
};


function runCommand(inputFile, cfix, code, res) {
    temp.mkdir('codereader', function(err, dirPath) {
      var inputPath = path.join(dirPath, inputFile)

      var command = cfix + "'" + inputPath + "'";

      fs.writeFile(inputPath, code, function(err) {
        if (err) throw err;
        process.chdir(dirPath);
        shell.exec(command, function(code, output) {
          console.log('Exit code:', code);
          console.log('Program output:', output);
          res.status(200).json({"code": code, "output": output})
        });
      });
    });
}
