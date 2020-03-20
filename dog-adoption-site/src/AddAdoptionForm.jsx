import React, { Component } from 'react'

export default class AddAdoptionForm extends Component {
    constructor(props) {
        super(props)

    //Intialize variables and state
        this.state = {
            name:"",
            age:0,
            potty:`Dog is not potty trained`,
            breed:"",
            dogList:[]
             
        }
    }

    //Capturing changes in the input field and setting there state
    handleChange = (event)=>{
        if (event.target.name ==="name" ){
            this.setState({name:event.target.value})
        }
        else if (event.target.name ==="age"){
            this.setState({age:event.target.value})
        }
        else if (event.target.name ==="breed"){
            this.setState({breed:event.target.value})
        }
        else if(event.target.name ==="potty"){
            this.setState({potty:`Dog is potty trained`})
        }
    }
    //when the submit button is clicked the values are pushed into an array and sent to parent container
    handleSubmission = (event)=>{
        event.preventDefault();
        this.state.dogList.push({name:this.state.name,age:this.state.age,breed:this.state.breed,potty:this.state.potty})
        this.setState({dogList:this.state.dogList})
        this.props.updateDog(this.state.dogList)
        this.setState({name:"",age:0,potty:"Dog is not potty trained",breed:""})
    }


    
    render() {

        return (
            <div>
                <form action="">
                    <fieldset>
                        <legend>Add A New Dog</legend>
                        <div className="form">
                            <p>
                                <label htmlFor="name">Name: </label>
                                <input type="text" name="name" id="name" value = {this.state.name} onChange ={this.handleChange} placeholder = "Name"/>
                            </p>
                            <p>
                                <label htmlFor="age">Age: </label>
                                <input type="number" name="age" id="age" value = {this.state.age} onChange= {this.handleChange} placeholder ="Age"/>
                            </p>
                            <p>
                                <label htmlFor="potty">Is it potty trained? </label>
                                <input type="checkbox" name="potty" id="potty" value = {this.state.potty}onChange = {this.handleChange}/>
                            </p>
                            <p>
                                <select name="breed" id="breed" value = {this.state.breed} onChange={this.handleChange}>
                                    <option value="">Please Select A Breed</option>
                                    <option value="Golden Retriever">Golden Retriever</option>
                                    <option value="American Bulldog">American Bulldog</option>
                                    <option value="Tibetan Mastiff">Tibetan Mastiff</option>
                                    <option value="German Shepard">German Shepard</option>
                                </select>
                            </p>
                            <button type="submit" onClick={this.handleSubmission}>Submit</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}
