import * as fs from 'fs';
import * as path from 'path';
import { createConnection, Connection, ConnectionOptionsReader } from "typeorm";
import { Category } from './models/Category';
import { Media } from './models/Media';
import { CategoryHasMedia } from './models/CategoryHasMedia';

const connectionOptionsReader = new ConnectionOptionsReader({
    // TODO: Maybe look in every folder up from CWD
    root: __dirname
});

let connectionOptions;
let connection;

export async function connect (): Promise<Connection> {
    console.info('---A>', __dirname, process.cwd())
    if (!connection) {
        connectionOptions = {
              type: "sqlite",
              database: "./db.sqlite3",
            synchronize: true,
            entities: [Category, Media, CategoryHasMedia]
        };
        connection = createConnection(connectionOptions);
    }

    return connection;
}