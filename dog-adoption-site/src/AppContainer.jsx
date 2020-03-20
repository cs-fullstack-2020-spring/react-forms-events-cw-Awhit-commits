import React, { Component } from 'react'
import AddAdoptionForm from './AddAdoptionForm'
import AvailableDogs from './AvailableDogs'

export default class AppContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             dogList:[]
        }
    }
    //storing doglist in parent container so it could be passed down to the available dog component
    updateDog =(updateDogList) =>{
       this.setState({ dogList:updateDogList})
    }
    render() {
        return (
            <div className="container">
                <AddAdoptionForm updateDog = {this.updateDog}/>
                <AvailableDogs dogList = {this.state.dogList}/>
            </div>
        )
    }
}
