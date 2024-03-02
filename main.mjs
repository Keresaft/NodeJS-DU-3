import fs from 'fs/promises';

async function createFiles() {
    let n;
    const fileName = "instrukce.txt"

    try {
        const data = await fs.readFile(fileName);
        n = parseInt(data);
    } catch (err) {
        console.error(`File does not exist ${fileName}`, err);
        return;
    }

    const promises = [];

    for (let i = 0; i < n; i++) {
        promises.push(fs.writeFile(`${i}.txt`, `Soubor ${i}`));
    }


    await Promise.all(promises);
    console.log('Files created.');
}

createFiles();
