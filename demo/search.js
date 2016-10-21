import React,{Component} from 'react';

var Search = React.createClass({
	onHandleChange: function () {
		this.props.onFilterText(this.refs.ref.value)
		console.log(1)
		
	},
	render: function () {
		var data = this.props.data.invited;

		var personRow = [];
		data.forEach((item, index) => {
			if (item.invited) {
				personRow.unshift(<span key={index}>{item.name}</span>)
			}
		})
		return (
			<div className="searchBar">
				<input ref="ref" type='text' placeholder='搜索你想邀请的人' onChange={this.onHandleChange}/>
				<span>您已邀请 {personRow.slice(0, 2)} 等{personRow.length}人</span>
			</div>

		)
	}
})

module.exports = Search;