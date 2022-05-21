import React from 'react'

const Navbar = ({filterItem, menuList}) => {
  return (
    <>
          <nav className='navbar'>
          <div className='btn-group'>
              {
                  menuList.map((curElem)=> {
                      return (
                        <button className='btn-group__item'
                         onClick={() =>filterItem(curElem)}>
                              {curElem}</button>  
                               
                      )
                      
                  })
              }


          </div>
          <div className='continue-shopping'>
        <span className='span-design'>1</span>
        <img src="cart1.jpg" height= "4%" width="3%"></img>
        </div>
      </nav>
      </>
  )
}

export default Navbar