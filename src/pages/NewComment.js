import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addComment } from "../redux/actions"

class NewComment extends Component {
    state = {
            comment:""
        
    };
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        } 
    

    handleChange = e => {
    e.preventDefault();
    this.setState({
        comment: e.target.value
    });
    };
    
    handleSubmit(e) {
      e.preventDefault();
        this.props.addComment(this.state, this.props.articleId)
        console.log(this.props.articleId);
        
      }
    
      render() {
        return (
            <>
          <form className="clearfix" id="add-comment-form" onSubmit={this.handleSubmit}>
                    <textarea 
                        className="form-control" 
                        ref="text" col="2"
                        value={this.state.comment}
                        onChange={this.handleChange} 
                        placeholder="Your comment"
                    />
                    <br />
                    <button className="btn btn-success pull-right">Send</button>
            </form>
          </>
        );
    }
}
NewComment.propTypes = {
    addComment: PropTypes.func.isRequired
};
function mapStateToProps(state) {
  return {
    message: state.message,
  };
}
export default connect(
  mapStateToProps, 
  { addComment }
)(NewComment);