
import { Menu, BrowserWindow} from "electron";

export function window1BuildMenu(window:BrowserWindow|null){
    const menuTemplate = [
        {
          label: '&关于',
          submenu:[
              {
                label:"帮助文档",
                click: async ()=>{
                }
            },
          ]
        },
      ];

    const menu = Menu.buildFromTemplate(menuTemplate);
    window?.setMenu(menu);
}