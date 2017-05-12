import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from  '../actions';
import ReactDOM from 'react-dom';

const CommentList = (props) => {

	const list = props.comments.map((comment,key)  => <li key={key} id={'comment'+key} >

    <div className="media">
      <div className="media-left media-middle">
        <img className="img-circle" src={comment.avatar} width="58" height="58"/>
      </div>
      <div className="media-body media-middle">
        {comment.comment}
      </div>

    </div>
  </li>)

	return (
		<ul className="comment-list nav">{list}</ul>
	);


};


  function mapStateToProps(state,ownProps) {
    return {
      comments: state.comments
    };
  }


  export default connect(mapStateToProps)(CommentList);
