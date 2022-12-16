import { globalShortcut, BrowserWindow} from "electron";
// 全局快捷键
export function window1RegisterGlobalShortcut(mdWindow:BrowserWindow){
    // 全局快捷键 Ctrl + I 插入图片到markdown
    // globalShortcut.register('CommandOrControl+I',()=>{
    //   console.log('Global shortcut Ctrl+I')
    //   InsertClipImg2MarkdownByLocalBed(mdWindow,IPC_MARKDOWN_INSERTIMG)
    // })
  }
export function window1UnRegisterGlobalShortcut(){
    // console.log("unRegisterGlobalShortcut")
    // // 全局快捷键 Ctrl + I 插入图片到markdown
    // globalShortcut.unregister('CommandOrControl+I')
  }