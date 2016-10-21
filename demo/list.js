import React,{Component} from 'react';
import Item from './item.js';
class List extends Component {
	render () {
		var data = this.props.data;
		var row = [];
		var _self = this;
		data.invited.forEach((item, index) => {
			row.push(<Item onChangeInvited={_self.props.onChangeInvited}person={item} key={index}></Item>)
		});
		return (
			<div className="listWrapper">
				<ul>
					{row}
				</ul>
			</div>

		)
	}
}

module.exports = List;