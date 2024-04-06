import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { FaShoppingCart } from "react-icons/fa";

function Search() {
    const [searchdata, setSearchdata] = useState([])
    const location = useLocation()
    console.log(location.state.s)
    useEffect(() => {
        dispsearch()
    }, [])
    function dispsearch() {
        fetch("http://localhost:3000/fooditems").then((resp1) => {
            resp1.json().then((resp2) => {
                const sprods = resp2.filter((f) => f.name.toLowerCase().includes(location.state.s))
                setSearchdata(sprods)
                console.log(sprods)
                
            })
            
        })
       

    }
    return (
        <div className='container'>
            {searchdata?
                <div className='row row-cols-1 row-cols-md-3 g-3 mt-5'>
                    {
                        searchdata.map((sp, i) => {
                            return (
                                <div className='col' key={i}>
                                    <Card style={{ width: '17rem' }} className='h-100  bg-dark text-white border-0 rounded-4'>
                                        <div className='bg-light h-75 p-4 rounded-top-4' style={{ WebkitBorderBottomLeftRadius: "50px" }}>
                                            <Card.Img variant="top" src={sp.image} className='img-fluid mx-auto d-block h-100 w-50' />
                                        </div>
                                        <Card.Body>
                                            <Card.Title>{sp.name}</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                            </Card.Text>
                                            <div className='d-flex justify-content-between'>
                                                <p>${sp.price}</p>
                                                <Button variant="warning" className='text-white rounded-circle fs-5'><FaShoppingCart /></Button>
                                            </div>

                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        })
                    }
                </div> : <h2 className='text-danger'>No Product Found</h2>}
        </div>
    )
}

export default Search