import { app, BrowserWindow, Menu, Tray } from "electron";
import path from "path";
import { createWindow1 } from "./window1/window";

var force_quit=false;

export function ShowTray(mainWindow:BrowserWindow){
    app.on('before-quit',function(e){
        console.log("before-quit:",force_quit)
        if (!force_quit){
          e.preventDefault();
          mainWindow?.hide();
        }
      })

    app.on('window-all-closed', () => {
      if (process.platform !== 'darwin') {
        app.quit();
      }
    });
      
    mainWindow.on('close', (event:any) => {
    if(!force_quit){
        event.preventDefault();
        mainWindow?.hide();
    }
    });


    const RESOURCES_PATH = app.isPackaged
  ? path.join(process.resourcesPath, 'assets')
  : path.join(__dirname, '../../assets');

  const getAssetPath = (...paths: string[]): string => {
    return path.join(RESOURCES_PATH, ...paths);
  };

  const iconPath = getAssetPath('icon.png');
//   console.log('iconpath:',iconPath)
  let tray = new Tray(iconPath);
  tray.on('click',function(){
    mainWindow.show()
  })

  let menu = Menu.buildFromTemplate([
    {
      click() { createWindow1() },
      label: '打开Window1',
      type: 'normal'
    },
    {
        click() { 
        //   console.log("退出应用")
          force_quit=true;
          tray.destroy();
          app.quit();  
        },
        label: '退出应用',
        type: 'normal'
    }]);
    tray.setContextMenu(menu);
}