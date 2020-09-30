import React, { Component } from 'react';
import axios from 'axios';
<<<<<<< Updated upstream
import * as FormData  from 'form-data'
class UploadFile extends Component {
    state = {
        file:null
      }
=======
import * as FormData from 'form-data'
//const FormData = require('form-data');
import ArticleForm from './ArticleForm.js';


class UploadFile extends Component {
    state = {
        file: "",
        fileName: "",
        fileResult: "",
    }
>>>>>>> Stashed changes

    handleFile(e){
        let file = e.target.files[0]
        this.setState({file:file})
    }  

    handleUpload(e){
        let file = this.state.file
        let formData = new FormData();
<<<<<<< Updated upstream
        formData.append("file", file);
=======
        formData.append("uploaded-file", file);
        var reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.onload = () => this.setState({
            fileResult: reader.result
        })
    }

    handleUpload(e) {

>>>>>>> Stashed changes
        const url = '/files';
        console.log(formData);

<<<<<<< Updated upstream
        axios.post(url,formData)
=======
        // reader.onload = () => this.setState({ 
        //     fileResult: reader.result
        // })

        axios.post(url, { file: this.state.fileResult })
>>>>>>> Stashed changes
            .then((response) => {
               //handle response latter
               console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
<<<<<<< Updated upstream
=======


>>>>>>> Stashed changes
    }
    render() { 
        return ( 
            <React.Fragment>
                <h1>Upload your file</h1>
                <div className="input-group">
<<<<<<< Updated upstream
   
                <div className="custom-file" onSubmit={this.onSubmit}>
                    <input type="file" className="custom-file-input" id="inputGroupFile01"
                    aria-describedby="inputGroupFileAddon01" onChange={(e) =>this.handleFile(e)}/>
                    <label className="custom-file-label" htmlFor="inputGroupFile01" >Choose file</label>
                </div>
                <button onClick={(e) =>this.handleUpload(e)}>submit</button>
                </div>
=======
                    <div className="custom-file" onSubmit={this.onSubmit}>
                        <input type="file" className="custom-file-input" id="inputGroupFile01"
                            aria-describedby="inputGroupFileAddon01" onChange={(e) => this.handleFile(e)} />
                        <label className="custom-file-label" htmlFor="inputGroupFile01" >choose a file</label>
                    </div>
                    <button onClick={(e) => this.handleUpload(e)}>submit</button>
                </div>
                <p>{this.state.fileName}</p>
                <br></br>
                <p>{this.state.fileResult}</p>

                <ArticleForm
                    fileInfo={this.state.fileResult}
                >
                </ArticleForm>

>>>>>>> Stashed changes
            </React.Fragment>
         );
    }
}
 
export default UploadFile;