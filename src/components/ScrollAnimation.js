import React, { Fragment, useEffect, useRef } from 'react'

const ScrollAnimation = () => {
  const nodes = new Map()

  const addAnimation = (rect, node) => {
    node.classList.add('show')
  }

  const getPosition = (node) => {
    const triggerBottom = (window.innerHeight / 5) * 4
    const rect = node.getBoundingClientRect()

    if (rect.top < triggerBottom) {
      node.classList.add('show')
    } else {
      node.classList.remove('show')
    }
  }

  const handleScroll = (e) => {
    Array.from(nodes.values())
      .filter((node) => node != null)
      .forEach((node) => {
        getPosition(node)
      })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Fragment>
      <h1>Scroll to see the animation</h1>
      <div ref={(c) => nodes.set(1, c)} className='box' id='box1'>
        <h2>Content</h2>
      </div>
      <div ref={(c) => nodes.set(2, c)} className='box' id='box2'>
        <h2>Content</h2>
      </div>
      <div ref={(c) => nodes.set(3, c)} className='box' id='box3'>
        <h2>Content</h2>
      </div>

      <div ref={(c) => nodes.set(5, c)} className='box' id='box4'>
        <h2>Content</h2>
      </div>
      <div ref={(c) => nodes.set(6, c)} className='box' id='box5'>
        <h2>Content</h2>
      </div>
      <div ref={(c) => nodes.set(7, c)} className='box' id='box6'>
        <h2>Content</h2>
      </div>
      <div ref={(c) => nodes.set(8, c)} className='box' id='box7'>
        <h2>Content</h2>
      </div>
      <div ref={(c) => nodes.set(9, c)} className='box' id='box8'>
        <h2>Content</h2>
      </div>
      <div ref={(c) => nodes.set(4, c)} className='box' id='box9'>
        <h2>Content</h2>
      </div>
    </Fragment>
  )
}

export default ScrollAnimation
