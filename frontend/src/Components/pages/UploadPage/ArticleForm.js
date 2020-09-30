import React, { Component } from 'react';
const Cite = require('citation-js');

class form extends Component {
    sortData(){
        // let example = new Cite(this.props.fileInfo)
        // // Should implicitly display 
        // example.format('bibliography', {
        //   format: 'html',
        //   template: 'citation-apa',
        //   lang: 'en-US'
        // })
        console.log(fileInfo)
    }
    render() { 
        const{fileInfo} = this.props;
        console.log(fileInfo);
        return ( 
            <React.Fragment>
                <form>
                    <button onClick={this.sortData()}> sort the data</button>
                    <div className="form-group">
                        <label >Author</label>
                        <textarea className="form-control"  rows="1"></textarea>
                    </div>
                    <div className="form-group">
                        <label>Title</label>
                        <textarea className="form-control" rows="1"></textarea>
                    </div>
                    <div className="form-group">
                        <label >Publisher</label>
                        <textarea className="form-control"  rows="1"></textarea>
                    </div>
                    <div className="form-group">
                        <label >Year</label>
                        <textarea className="form-control"  rows="1"></textarea>
                    </div>
                    <div className="form-group">
                        <label >Month</label>
                        <textarea className="form-control"  rows="1"></textarea>
                    </div>
                    <div className="form-group">
                        <label >Journal</label>
                        <textarea className="form-control"  rows="1"></textarea>
                    </div>
                    </form>
            </React.Fragment>
            
         );
    }

}
 

export default form;