import React, { useState, useEffect, useRef } from "react"
import Link from 'next/link';

function NavDrop(props) {
    const [isOpen, setIsOpen] = useState(false)
  const [currentItem, setCurrentItem] = useState(null)
  const wrapperRef = useRef(null)
  const buttonRef = useRef(null);
  const menuRef = useRef(null);
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
        // If the click is not within the button and not within the dropdown menu, then close the dropdown.
        if (
            buttonRef.current && !buttonRef.current.contains(event.target) &&
            menuRef.current && !menuRef.current.contains(event.target)
        ) {
            setIsOpen(false);
        }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    }
}, []);
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
       <a
          className="inline-flex  items-center justify-center  whitespace-nowrap rounded   font-medium  text-white   "
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen ? " true" : "false"}
          ref={buttonRef}
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
        </a>
        {/*  <!--  End Dropdown trigger --> */}
        {/*  <!-- Start Menu list --> */}
        <ul ref={menuRef}
          className={`${
            isOpen ? "flex" : "hidden"
          } nav_dropdown absolute top-full z-10 mt-1 flex w-72 transition duration-300 list-none flex-col rounded-lg  bg-white py-2 shadow-md shadow-slate-500/10 `}
        >
          {navigationItems.map((item, index) => {
            return (
              <li className="pl-4 py-1 hover:bg-green-100 transition duration-200" key={index}>
                <a className='' href={item.route} >
              <p
                    className="cta-pr-btn   bg-transparent text-green-500 font-medium  rounded-full inline-flex items-center"
                   >
  <span className="truncate text-black font-medium leading-5">{item.linkName}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1 duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </p>
                <style jsx>{`
                .cta-pr-btn:hover svg {
                    transform: translateX(5px)
                }
            `}</style>
            </a>
              </li>
            )
          })}
        </ul>
    </>
  )
}

export default NavDrop
