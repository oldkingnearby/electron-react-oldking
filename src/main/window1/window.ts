// 子窗口

import { app, BrowserWindow} from "electron";
import { resolveHtmlPath } from "../../main/util";
import path from "path";
import { window1BuildMenu } from "./menu";
let window1:BrowserWindow|null = null ;

// 创建markdown窗口
export function createWindow1(){
  if (window1!==null){
    window1.show();
    return
  }

    const RESOURCES_PATH = app.isPackaged
    ? path.join(process.resourcesPath, 'assets')
    : path.join(__dirname, '../../assets');

  const getAssetPath = (...paths: string[]): string => {
    return path.join(RESOURCES_PATH, ...paths);
  };

  let subWindow = new BrowserWindow({
    show: false,
    width: 1024,
    height: 728,
    icon: getAssetPath('icon.png'),
    webPreferences: {
      preload: app.isPackaged
        ? path.join(__dirname, 'preload.js')
        : path.join(__dirname, '../../../.erb/dll/preload.js'),
    },
  });

  let indexHtml = resolveHtmlPath('window1.html');
  subWindow.loadURL(indexHtml);
  subWindow.removeMenu()

  subWindow.on('ready-to-show', () => {
    if (!subWindow) {
      throw new Error('"mainWindow" is not defined');
    }
    if (process.env.START_MINIMIZED) {
        subWindow.minimize();
    } else {
        subWindow.show();
    }

    window1BuildMenu(subWindow);

    window1 = subWindow; 

  });

  subWindow.on('closed',()=>{
    window1 = null;

  })
}


