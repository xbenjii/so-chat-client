import { promisify } from 'util';
import { access, constants } from 'fs';
import { resolve } from 'path';

import * as pkg from '../package.json';

import { question } from './utils';
import { Client } from './client';

const SETTINGS_FILE = './settings.json';
const COOKIE_FILE = './cookies.json';

const accessAsync = promisify(access);
const client = new Client();

(async() => {
    try {
        await accessAsync(COOKIE_FILE, constants.R_OK);
    } catch(_) {
        const email = await question('SO Email: ');
        const password = await question('SO Password: ', true);
    }
})();