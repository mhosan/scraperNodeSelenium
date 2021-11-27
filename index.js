const {Builder} = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
const proxy = require('selenium-webdriver/proxy');

const options = new firefox.Options();
options.setPreference('browser.download.dir', 'C:\\seleniumDownloads');
options.setPreference('browser.download.folderList', 2);
options.setPreference('browser.helperApps.neverAsk.saveToDisk', 'application/x-csv'); /*ojo con los content-type. Ver en el navegador
el tipo de archivo que se quiere bajar y agregar aqui con una coma:  */ 

const proxyServer = '185.104.252.10:9090';

const driver = new Builder()
    .forBrowser('firefox')
    .setFirefoxOptions(options)
    .setProxy(proxy.manual({
        http: proxyServer, 
        https: proxyServer
    }))
    .build();

driver.get('http://google.com/');
