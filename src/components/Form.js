import React, { Component } from 'react'
import "../styles/form.css"
const axios = require('axios')
//const FormData = require('form-data')
export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            file: '',
            fileToSend: '',
            columnData: { 0: 'A', 1: 'C', 2: 'T', 3: 'G' },
            resultSequence: '',
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.previewImage = this.previewImage.bind(this)
        this.handleDropDownChange = this.handleDropDownChange.bind(this)
    }
    componentDidMount() {
        axios.get("https://genseq-backend.herokuapp.com/").then(
            res => {
                console.log(res.data)
            }
        ).catch(error => console.log(error))
    }
    onSubmit() {
        let h2Elt=document.createElement('h2')
        h2Elt.innerHTML="The Sequence is:"
        let result=document.getElementById('result')
        result.insertBefore(h2Elt,result.childNodes[0])

        let formData = new FormData()
        formData.append("username", "sidd")
        formData.append('image', this.state.fileToSend, this.state.fileToSend.name)
        formData.append('columnOrder', JSON.stringify(this.state.columnData))
        console.log(formData.get('image'))
        this.setState({ resultSequence: 'Loading ...' })
        axios.post("http://genseq-backend.herokuapp.com/getSequence", formData, { headers: { 'content-type': 'multipart/form-data' } })
            .then(response => {
                console.log(response.data)
                this.setState({ resultSequence: response.data.sequence })

            }).catch(err => {
                console.log(err)
            })

    }
    handleDropDownChange(event) {
        const key = event.target.id[event.target.id.length - 1] - 1
        const value = event.target.value
        const newColumnData = { ...this.state.columnData }
        newColumnData[key] = value;
        this.setState({ columnData: newColumnData })
        console.log(this.state.columnData)
    }
    previewImage(event) {
        this.setState({ file: URL.createObjectURL(event.target.files[0]) })
        this.setState({ fileToSend: event.target.files[0] })

    }
    render() {
        return (
            <div className="form">
                <div className="columns">
                    <h2>Please enter the base column as in the image(left to right):</h2>
                    <h4 className="warning">*Ignore if order is correct*</h4>
                    <div>
                        Column 1:<select id="column1" name="column1" onChange={this.handleDropDownChange}>
                            <option value="A">A</option>
                            <option value="C">C</option>
                            <option value="T">T</option>
                            <option value="G">G</option>
                        </select>
                    </div>
                    <div>
                        Column 2:<select id="column2" name="column2" onChange={this.handleDropDownChange}>
                            <option value="C">C</option>
                            <option value="A">A</option>
                            <option value="T">T</option>
                            <option value="G">G</option>
                        </select>
                    </div>
                    <div>
                        Column 3:<select id="column3" name="column3" onChange={this.handleDropDownChange}>
                            <option value="T">T</option>
                            <option value="A">A</option>
                            <option value="C">C</option>
                            <option value="G">G</option>
                        </select>
                    </div>
                    <div>
                        Column 4:<select id="column4" name="column4" onChange={this.handleDropDownChange}>
                            <option value="G">G</option>
                            <option value="A">A</option>
                            <option value="C">C</option>
                            <option value="T">T</option>
                        </select>
                    </div>
                    <p className="warning">*Please Verify that the above are correct*</p>
                    <h3>Please upload the result of the experiment:</h3>
                    <div id="uploadImage" style={{ fontSize: "20px" }}>
                        <div>
                            <img src={this.state.file} className="previewImage" alt="" />
                        </div>
                        Upload Image:<input type="file" id="img" name="img" accept="image/*" onChange={this.previewImage}></input>
                    </div>
                    <div>
                        <button onClick={this.onSubmit}>Submit</button>
                    </div>
                </div>
                <div id="result" className="result">
                    <p id="result_para">{this.state.resultSequence}</p>
                </div>
            </div>
        )
    }
}
