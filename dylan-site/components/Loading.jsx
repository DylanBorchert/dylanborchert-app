import React from 'react'

function Loading() {
  return (
    <div className='w-full h-[100dvh] bg-black/50 flex justify-center align-middle fixed backdrop-blur-sm z-50 top-0'>
      <div aria-label="Orange and tan hamster running in a metal wheel" role="img" class="wheel-and-hamster top-[50%] translate-y-[-50%] scale-50">
        <div class="wheel"></div>
        <div class="hamster">
          <div class="hamster__body">
            <div class="hamster__head">
              <div class="hamster__ear"></div>
              <div class="hamster__eye"></div>
              <div class="hamster__nose"></div>
            </div>
            <div class="hamster__limb hamster__limb--fr"></div>
            <div class="hamster__limb hamster__limb--fl"></div>
            <div class="hamster__limb hamster__limb--br"></div>
            <div class="hamster__limb hamster__limb--bl"></div>
            <div class="hamster__tail"></div>
          </div>
        </div>
        <div class="spoke"></div>
      </div>
    </div>
  )
}

export default Loading