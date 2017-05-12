import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from  '../actions';
import ReactDOM  from 'react-dom';

class CommentBox extends Component {
	constructor(props) {
		super(props);
		this.state = { comment: '' };
	}

	handleChange(event) {
		this.setState( { comment: event.target.value });
	}

  	handleSubmit(event) {
  		event.preventDefault();
  		this.props.saveComment({"name":"Tarun","avatar":"/image/profile-1.jpg","comment":this.state.comment});
  		this.setState({comment: ''});
			console.log(this);
			//this.refs[event].scrollIntoView({block: 'end', behavior: 'smooth'});
			//ReactDOM.findDOMNode(this).scrollTop = 23;

  	}

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="comment-box form-inline">
				<div className="form-group">
      <textarea placeholder="write comment" className="form-control" value={this.state.comment} onChange={ this.handleChange.bind(this) }/>
			</div><div className="form-group second">
			<button className="btn" action="submit"><i className="icon-paper-plane"></i></button></div>
      </form>
    );
  }
}

export default connect(null, actions)(CommentBox);
