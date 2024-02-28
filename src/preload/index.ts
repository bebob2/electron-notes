import { contextBridge } from 'electron'

if (!process.contextIsolated) {
  throw new Error('contextIsolation msut be enabled in the BrowserWindow')
}

try{
  contextBridge.exposeInMainWorld('context', {
    //TODO
  })
} catch (error) {
  console.log(error)
}
