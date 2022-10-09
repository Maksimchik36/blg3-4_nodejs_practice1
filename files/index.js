const path = require('path');
const fs = require('fs/promises');

// console.log(__dirname); // D:\github\blg3-4_nodejs_practice1\files
// console.log(__filename); // D:\github\blg3-4_nodejs_practice1\files\index.js

const configPath = path.join(__dirname, '..', 'data', 'config.json'); // текущая папка, выход на уровень выше, вход в data, config.json
// console.log(configPath); // D:\github\blg3-4_nodejs_practice1\data\config.json

class FileOperations {
    constructor(configPath) {
        this.configPath = configPath;
    }

    async read() {
        try {
            const data = await fs.readFile(this.configPath, 'utf8');
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    async create(body) {
        try {
            return await fs.writeFile(this.configPath, JSON.stringify(body, null, 4), 'utf8');
        } catch (error) {
            console.log(error);
            
        }
        
    }

    async remove() {
        try {
            await fs.unlink(this.configPath)
        } catch (error) {
            console.log(error.message);
        }        
    }

    async update(body) {
        try {
            await fs.appendFile(this.configPath, `,\n${JSON.stringify(body, null, 4)}`, "utf8");
        } catch (error) {
            console.log(error.message);
        }        
    }
}


// создает экземпляр класса
const file = new FileOperations(configPath);

// читает файл
file.read()


// const newData = {
//     "name": "Zemlya",
//     "version": "2000",
//     "description": "vbn"
// }
// добавляет новый объект newData в файл config.json
// file.create(newData)


// удаляет файл
// file.remove()


// добавляет новый объект в файл config.json
// file.update(newData)