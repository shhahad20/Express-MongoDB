# Express X Typescript X MongoDB
- npm init 
- npm install express typescript @types/node @types/express ts-node
- npm install --save-dev typescript @types/node @types/express nodemon
- "start": "nodemon --watch 'src/**/*.ts' --exec 'ts-node' src/index.ts" (add this line in package.json file), the signle qoutes may cause an error
- Create tsconfig.json file (in the root dir) and copy past.
- tsc -w <- this will create the dist file and watch the changes.
- add gitignore and copy past.
- npm start
----------------------------
