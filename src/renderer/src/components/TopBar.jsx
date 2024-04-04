import React from 'react'


export default function TopBar() {
  const handleMinimize = () => {
    window.electron.ipcRenderer.send('minimize-window')
  }

  const handleMaximize = () => {
    window.electron.ipcRenderer.send('maximize-window')
  }

  const handleClose = () => {
    window.electron.ipcRenderer.send('close-window')
  }

  return (
    <div className='object-top'>
      <div id="control-buttons" className="top-bar text-stone-200 absolute top-1 right-0 pe-2">
        <button id="minimize" className="p-1" onClick={handleMinimize}>
          &#128469;
        </button>
        <button id="maximize" className="p-1" onClick={handleMaximize}>
          &#128470;
        </button>
        <button id="close" className="p-1" onClick={handleClose}>
          &#x2715;
        </button>
      </div>
      <div
        className="rounded-t-xl bg-blue-400 w-screen h-5"
        style={{ WebkitAppRegion: 'drag' }}
      ></div>
      <div className="bg-blue-400 w-screen h-3"></div>
    </div>
  )
}
