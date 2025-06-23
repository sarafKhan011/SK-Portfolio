import React from 'react'

const NavbarLogo = () => {
  return (
    <div>
      {/* Show full name on sm and above, hide on xs */}
      <h1 className='text-white font-serif font-bold hidden sm:block'>
        M Saraf Khan
      </h1>
      {/* Show initials only on xs, hide on sm and above */}
      <h1 className='text-white font-special font-extrabold text-4xl block sm:hidden'>
        SK
      </h1>
    </div>
  )
}

export default NavbarLogo
