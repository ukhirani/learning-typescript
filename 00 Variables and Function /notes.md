tsc - the command that compiles the typescript file
--noEmit flag = doesn't emit the js output file (which is the default if you don't pass this flag)
--strict = more strict checking
--target = which version of the many js (ecmascripts) should be compiled in the output js file
--removeComments = does what it says
--checkJs = also type checks the js files (default will check only ts files)

we can't put all these flags in just one line (we can but it's not practical)

- there we use tsconfig.json
