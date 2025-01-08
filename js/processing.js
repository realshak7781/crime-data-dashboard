import * as d3 from 'd3';
import fs from 'fs/promises';

const DATASET_PATH = './data/nd-dataset.csv';

// Example: Reading and parsing a CSV file
fs.readFile(DATASET_PATH, 'utf8')
    .then((data) => {
        const parsedData = d3.csvParse(data);
        console.log(parsedData);
    })
    .catch((err) => {
        console.error('Error reading file:', err);
    });
