import React from 'react'
import StatsCards from './StatsCards'

const Grid = () => {
  return (
    <div
    className='px-4 grid gap-3 grid-cols-12'>
        <StatsCards/>
    </div>
  )
}

export default Grid