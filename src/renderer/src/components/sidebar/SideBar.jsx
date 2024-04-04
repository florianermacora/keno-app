import React, { createContext, useContext, useState } from 'react'
import logo from '../../assets/img/keno-club.svg'
import { ChevronFirst, ChevronLast } from 'lucide-react'

const SideBarContext = createContext()

export default function SideBar({ children }) {
  const [expanded, setExpanded] = useState(true)
  return (
    <aside className="object-right  h-lvh">
      <nav className="h-full inline-flex items-center flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justity-between items-center">
          <img
            src={logo}
            className={`overflow-hidden transition-all
          ${expanded ? 'w-20 h-20' : 'w-0 h-20'}`}
            alt=""
          />

          <button
             onClick={() => setExpanded((curr) => !curr)}
            className="p-2 rouded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>
        <SideBarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SideBarContext.Provider>
      </nav>
    </aside>
  )
}

export function SideBarItem({ icon, text, active}) {
  const { expanded } = useContext(SideBarContext)
  console.log(expanded)
  return (
    <li
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? 'bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800'
            : 'hover:bg-indigo-50 text-gray-600'
        }
    `}
    >
      {icon}
      <span className={`overflow-hidden transition-all ${expanded ? 'w-52 ml-3'  : 'w-0 h-0'}`}>
        {text}
      </span>
      
      {!expanded && (
        <div 
            className={`
            absolute left-full rounded-md px-2 py-1 ml-6
            bg-indigo-100 text-indigo-800 text-sm
            invisible opacity-20 -translate-x-3 transition-all
            group-hover:visible group-hover:opacity-100 group-hover:translation-x-0
            `}
                >
                    {text}
                </div>
        )}
    </li>
  )
}
