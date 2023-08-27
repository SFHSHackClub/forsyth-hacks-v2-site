'use client'
import { useEffect, useState } from 'react';
import './flipcard.scss'
import cn from 'classnames'
import  { isMobile } from 'react-device-detect'

export default function FlipCard({ title, content, content2, classname, reversed }: {title: string, content:string, content2?:string, classname?: string, reversed?: boolean}) {
  const [showBack, setShowBack] = useState(false);

  function handleClick() {
    setShowBack(!showBack);
  } 

  function handleHover() {
    if (isMobile) return;
    if (!showBack) {
      setShowBack(!showBack)
    }
  }

  useEffect(() => {
    if (reversed && !showBack) handleClick()
  })

    return (
        <div className={"flip-card-outer text-center text-sm lg:text-xl items-center justify-center"+" "+classname} onClick={handleClick} onMouseEnter={handleHover}>
          <div className={cn("flip-card-inner", {showBack})}>
              <div className="flex card front justify-center items-center">
                <div className="p-4">
                  <p><b>{title}</b></p>
                </div>
              </div>
              <div className="flex card back justify-center items-center">
                <div className="card-body d-flex justify-content-center align-items-center p-4">
                  <p className='title'><b>{title}</b></p>
                  <p className='content'>{content}<br/><br/>{content2}</p>
                </div>
              </div>
            </div>
        </div>
      )
}