import React from 'react'
import SpecialMenuItem from './SpecialMenuItem'

function SpecialMenu() {

const items = [{name:"Sticky Almond",
info:"Organic Sencha Green tea from China, mixed with apple, cinnamon, ginger and vanilla",
price:"5.50"},
{name:"Green Sun",
info:"Blood orange and orange bark make this a fruity and delightfully sour tea",
price:"5.50"},
{name:"Christmas Special",
info:"Organic Assam Black tea with cinnamon, caradamon and pineapple",
price:"6"}]

  return (
    <div className='special-menu-container'>
        <div className='special-menu-header'>Special this week ...</div>
        {items.map(item => <SpecialMenuItem name={item.name} info={item.info} price={item.price}/>)}
    </div>
  )
}

export default SpecialMenu