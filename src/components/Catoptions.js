import React from 'react'
import { Button } from 'react-bootstrap'

function Catoptions({food,filtercategory,displayprods}) {
    const cat=[...new Set(food.map((f)=>f.category))]
  return (
    <div className='d-flex flex-column'>
        <Button variant="dark" className='rounded-pill px-3fs-5 me-4' onClick={() => displayprods()}>All</Button>
                    {

                        cat.map((c) => {
                            return (
                                <Button variant="dark" className='rounded-pill px-3fs-5 me-4' onClick={() => { filtercategory(c) }}>{c}</Button>
                            )
                        })
                    }
    </div>
  )
}

export default Catoptions