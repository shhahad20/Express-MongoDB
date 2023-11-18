import "dotenv/config";

export const dev ={
    app:{port : Number(process.env.PORT) || 3002},
    db:{url: process.env.MOGODB_URL || 'mongodb://127.0.0.1:27017/expressxmongo',},
};