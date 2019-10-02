import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addArticle } from "../redux/actions"

class NewArticle extends Component {
    state = {
        data:{
            title:"",
            body:"",
            category:""
        }
    };
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        } 
    

    handleChange = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
    };
    
    handleSubmit(e) {
      e.preventDefault();
        this.props.addArticle(this.state.data)
        console.log(this.props);
        
      }
    
      render() {
        return (
            <>
          <form onSubmit={this.handleSubmit} className="form-group needs-validation" noValidate>
            <label htmlFor="title">
              Title:
              <input 
                type="text"
                className="form-control" 
                name="title" 
                value={this.state.data.title} 
                onChange={this.handleChange} 
                required 
              />
            </label><br/>
            <label>
              Body:
              <textarea 
              type='text' 
              name="body" 
              placeholder="Remember, make it interesting" 
              cols="100" rows="5" 
              value={this.state.data.body} onChange={this.handleChange} 
              className="form-control"
              required
              />
            </label><br/>
            <label>
            Category:
            <input 
              name="category" 
              className="form-control" 
              value={this.state.data.category} 
              onChange={this.handleChange}
              required
            />
            </label><br/>
            <input type="submit" value="Submit" />
          </form>
          </>
        );
    }
}
NewArticle.propTypes = {
  addArticle: PropTypes.func.isRequired
};
function mapStateToProps(state) {
  return {
    article: state.article,
  };
}
export default connect(
  mapStateToProps, 
  { addArticle }
)(NewArticle);