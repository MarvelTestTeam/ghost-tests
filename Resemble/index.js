const playwright = require('playwright');
const compareImages = require("resemblejs/compareImages")
const config = require("./config.json");
const fs = require('fs');

const { viewportHeight, viewportWidth, browsers, options } = config;

const rootPath = '/Users/afifferetamozo/Documents/Maestria/cypressrapidly/cypress/screenshots/2-advanced-examples/'

const folderTest1 = 'Escenario3.spec.js';
const folderTest2 = 'Escenario33001.spec.js';

async function executeTest(){
    let filesTest1 = [];
    fs.readdirSync(rootPath + folderTest1).forEach(file => {
        filesTest1.push(file);
    });
    let filesTest2 = [];
    fs.readdirSync(rootPath + folderTest2).forEach(file => {
        filesTest2.push(file);
        console.log(file);
    });
    let lstFiles = [];
    let primaryArray = filesTest1.length >= filesTest2.length ? filesTest1 : filesTest2;
    let secondaryArray = filesTest1.length >= filesTest2.length ? filesTest2 : filesTest1;
    let resultInfo = {}
    let datetime = new Date().toISOString().replace(/:/g,".");
    for (let i = 0; i < primaryArray.length; i++) {
        const file = primaryArray[i];
        let j = i >= secondaryArray.length ? secondaryArray.length - 1 : i;
        console.log('j: ' + j + ', i: ' + i);
        const file2 = secondaryArray[j];
        lstFiles.push([file, file2]);
        if (!fs.existsSync(`./results/${datetime}`)){
            fs.mkdirSync(`./results/${datetime}`, { recursive: true });
        }
        
        copyFile(fs, rootPath + folderTest1 + '/' + file, `./results/${datetime}/${file}`);
        copyFile(fs, rootPath + folderTest2 + '/' + file2, `./results/${datetime}/test_${file2}`);
        
        const data = await compareImages(
            fs.readFileSync(`./results/${datetime}/${file}`),
            fs.readFileSync(`./results/${datetime}/test_${file2}`),
            options
        );
        resultInfo[file] = {
            isSameDimensions: data.isSameDimensions,
            dimensionDifference: data.dimensionDifference,
            rawMisMatchPercentage: data.rawMisMatchPercentage,
            misMatchPercentage: data.misMatchPercentage,
            diffBounds: data.diffBounds,
            analysisTime: data.analysisTime
        }
        fs.writeFileSync(`./results/${datetime}/compare-${file}-${file2}.png`, data.getBuffer());

    }
    console.log('------------------------------------------------------------------------------------');

    fs.writeFileSync(`./results/${datetime}/report.html`, createReport(datetime, resultInfo, lstFiles));
    fs.copyFileSync('./Resemble/index.css', `./results/${datetime}/index.css`);

    console.log('------------------------------------------------------------------------------------')
    console.log("Execution finished. Check the report under the results folder")
    return resultInfo;  
  }
(async ()=>console.log(await executeTest()))();

function browser(file, file2, info){
    return `<div class=" browser" id="test0">
    <div class=" btitle">
        <p>Data: ${JSON.stringify(info)}</p>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Reference</span>
        <img class="img2" src="./${file}" id="refImage" label="Reference">
      </div>
      <div class="imgcontainer">
        <span class="imgname">Test</span>
        <img class="img2" src="./test_${file2}" id="testImage" label="Test">
      </div>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Diff</span>
        <img class="imgfull" src="./compare-${file}-${file2}.png" id="diffImage" label="Diff">
      </div>
    </div>
  </div>`
}

function createReport(datetime, resInfo, lstFiles){
    return `
    <html>
        <head>
            <title> VRT Report </title>
            <link href="index.css" type="text/css" rel="stylesheet">
        </head>
        <body>
            <h1>Report for 
                 <a href="${rootPath + folderTest1}"> ${rootPath + folderTest1}</a>
                 <a href="${rootPath + folderTest2}"> ${rootPath + folderTest2}</a>
            </h1>
            <p>Executed: ${datetime}</p>
            <div id="visualizer">
                ${lstFiles.map(files=>browser(files[0], files[1], resInfo[files[0]]))}
            </div>
        </body>
    </html>`
}

function copyFile(fs, origin, destination) {
    console.log("Copied " + destination);
    if (!fs.existsSync(destination)){
        fs.copyFileSync(origin, destination, (err) => {
            if (err) {
            console.log("Error Found:", err);
            }
            else {
            console.log("Copied " + destination);
            }
        });
    }
}