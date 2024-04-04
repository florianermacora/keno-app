import './App.css'
import TopBar from './components/TopBar'
import SideBar from './components/sidebar/SideBar'
import { SideBarItem } from './components/sidebar/SideBar'
import { Boxes, Package, BarChart3, LayoutDashboard } from 'lucide-react'

function App() {
  return (
    <>
      <div className="app">
        <div className="topbar-container">
          <TopBar />
        </div>
        <div className="sidebar-container">
          <SideBar>
            <SideBarItem icon={<LayoutDashboard size={20} />} text="DashBoard" />
            <SideBarItem icon={<BarChart3 size={20} />} text="Stat" />
            <SideBarItem icon={<Package size={20} />} text="Tirage" />
          </SideBar>
        </div>
      </div>
    </>
  )
}

export default App
