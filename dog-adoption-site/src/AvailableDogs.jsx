import React, { Component } from 'react'

export default class AvailableDogs extends Component {
    render() {
        return (
            <div className="dogList">
                <h1>List of Available Dogs</h1>
                {/* Using the map function to iterate through the list */}
                {this.props.dogList.map((dog,indx)=>{
                    return(<div>
                        <p>{dog.name}</p>
                        <p>{dog.age}</p>
                        <p>{dog.breed}</p>
                        <p>{dog.potty}</p>
                    </div>)
                } )

                }
            </div>
        )
    }
}
