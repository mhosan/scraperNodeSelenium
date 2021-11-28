const {Builder, By} = require('selenium-webdriver');
/* const firefox = require('selenium-webdriver/firefox');
const proxy = require('selenium-webdriver/proxy');
const options = new firefox.Options();
options.setPreference('browser.download.dir', 'C:\\seleniumDownloads');
options.setPreference('browser.download.folderList', 2);
options.setPreference('browser.helperApps.neverAsk.saveToDisk', 'application/x-csv');
/*ojo con los content-type. Ver en el navegador
, con f12, en network, el tipo de archivo que se quiere bajar y agregar aqui con una coma:*/ 

/* const proxyServer = '185.104.252.10:9090';
const driver = new Builder()
    .forBrowser('firefox')
    .setFirefoxOptions(options)
    .setProxy(proxy.manual({
        http: proxyServer, 
        https: proxyServer
    }))
    .build();
 */
const driver = new Builder()
    .forBrowser('firefox')
    .build();
//driver.get('http://google.com/');
/* async function openWebSites(){
    try{
        await driver.get('http://yahoo.com/');
        await driver.get('http://google.com/');
    }catch(error){
        console.log(error);
    }
}
openWebSites();
 */
async function simpleRegistration(){
    try{
        await driver.get('https://rori4.github.io/selenium-practice/#/pages/practice/simple-registration');
        await driver.findElement(By.name("email")).sendKeys("example@gmail.com");
        await driver.findElement(By.id("password")).sendKeys("12345");
        await driver.findElement(By.name("submit")).click();
    }catch(error){
        console.log(error);
    } 
}
simpleRegistration();
