import React, { useState, useEffect, useRef } from "react"

function NavMob(props) {
    const [isOpen, setIsOpen] = useState(false)
    const [currentItem, setCurrentItem] = useState(null)
    const wrapperRef = useRef(null)
  
    const navigationItems = [
      {
        linkName: "About us",
        route: '/about'
      },
      {
        linkName: "FAQ",
      },
      {
        linkName: "Contact us",
      },
      {
        linkName: "Careers",
      },
    
      {
        linkName: "Directions",
      },
      
    ]
  
    useEffect(() => {
      window.addEventListener("keydown", handleKeyDown)
      return () => {
        window.removeEventListener("keydown", handleKeyDown)
      }
    })
  
    useEffect(() => {
      function handleClickOutside(event) {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
          setIsOpen(false)
        }
      }
      document.addEventListener("mousedown", handleClickOutside)
      return () => {
        document.removeEventListener("mousedown", handleClickOutside)
      }
    }, [wrapperRef])
  
    const handleKeyDown = e => {
      if (isOpen) {
        e.preventDefault()
  
        switch (e.keyCode) {
          // KeyDown
          case 40:
            if (currentItem === navigationItems.length - 1) {
              setCurrentItem(0)
            } else {
              setCurrentItem(currentItem + 1)
            }
            break
          // KeyUp
          case 38:
            if (currentItem === 0) {
              setCurrentItem(navigationItems.length - 1)
            } else {
              setCurrentItem(currentItem - 1)
            }
            break
          // Escape
          case 27:
            setCurrentItem(1)
            setIsOpen(false)
            break
          default:
            break
        }
      }
    }
  return (
    <>
    <button
       className="inline-flex  items-center justify-center  whitespace-nowrap rounded   font-medium  text-black   "
       onClick={() => setIsOpen(!isOpen)}
       aria-expanded={isOpen ? " true" : "false"}
       ref={wrapperRef}
     >
       <span className="pr-2">Resources</span>
       <span className="relative only:-mx-5">
         <svg
           xmlns="http://www.w3.org/2000/svg"
           className="h-5 w-5"
           fill="none"
           viewBox="0 0 24 24"
           stroke="currentColor"
           strokeWidth="1.5"
           aria-labelledby="t-01 d-01"
           role="graphics-symbol"
         >
           <title id="t-01">Button icon</title>
           <desc id="d-01">An icon describing the buttons usage</desc>
           <path
             strokeLinecap="round"
             strokeLinejoin="round"
             d="M19.5 8.25l-7.5 7.5-7.5-7.5"
           />
         </svg>
       </span>
     </button>
     {/*  <!--  End Dropdown trigger --> */}
     {/*  <!-- Start Menu list --> */}
     <ul
       className={`${
         isOpen ? "flex" : "hidden"
       } nav_dropdown absolute top-full z-10 mt-1 flex w-72 transition duration-300 list-none flex-col rounded-lg  bg-white py-2 shadow-md shadow-slate-500/10 `}
     >
       {navigationItems.map((item, index) => {
         return (
           <li key={index}>
             <a
               className={` ${
                 index === currentItem
                   ? "bg-emerald-50 text-emerald-500"
                   : "bg-none text-slate-500"
               } flex items-start justify-start gap-2 p-2 px-5 transition-colors duration-300 hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50 focus:text-emerald-600 focus:outline-none focus-visible:outline-none`}
               href={item.route}
               aria-current={index + 1 === currentItem ? "page" : "false"}
             >
               <span className="flex flex-col gap-1 overflow-hidden whitespace-nowrap">
                 <span className="truncate text-black leading-5">{item.linkName}</span>
               </span>
             </a>
           </li>
         )
       })}
     </ul>
 </>
  )
}

export default NavMob
