import * as read from 'read';

export async function question(text, silent = false) {
    return new Promise((resolve, reject) => {
        read({
            silent,
            prompt: text
        }, (error, response) => {
            if(error) {
                return reject(error);
            }
            resolve(response);
        });
    });
}