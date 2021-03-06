import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Search from './search.js';
import List from './list.js';
import '../less/zhihu.less'

var App = React.createClass ({
	getInitialState: function () {
		return {
			list: [],
			filterText: ''
		}
	},
	componentDidMount: function () {
		//给数据加上是否被邀请属性
		var data = this.props.data.invited;
		data.map((item, index) => {
			item.invited = false;
		});
		this.setState({ 
			list: data
		});
	},
	//按钮点击事件
	onChangeInvited: function (id) {
		var list = this.props.data.invited;
		//通过筛选，将属性掷反
		list.map((item) => {
			if (item.id === id) {
				item.invited = !item.invited;
			}
		})
		this.setState({
			list: list
		})
	},
	//搜索框事件
	onFilterText: function (text) {
		this.setState({
			filterText: text
		})
	},
	render: function () {
		var data = this.props.data;
		var filterData = data;
		//判断搜索框中是否有文字
		if (this.state.filterText) {
			//因为对象是引用值所以需要重新给filterData赋值，否则会改变原有data对象里的数据
			filterData = {};
			filterData.invited = data.invited.filter((item, key) => {
				return item.name.indexOf(this.state.filterText) !== -1
			})
		}
		return (
			<div className='wrapper'>
				<Search data={data} onFilterText={this.onFilterText}/>
				<List data={filterData} onChangeInvited={this.onChangeInvited}/>
			</div>
		)
	}
})

//因为没有后台接口，就把数据放本地了
var data = {
	'invited':[
		{
			"name": "陈思彤",
			"slug": "magasa",
			"avatarUrl": "../img/1.png",
			"bio": "电影杂志《虹膜》主编（支持iOS/Android平台）",
			"id": 1
		},
		{
			"name": "安震",
			"slug": "magasa",
			"avatarUrl": "../img/2.png",
			"bio": "中国历史上第一哲学家",
			"id": 2
		},
		{
			"name": "猪会飞",
			"slug": "magasa",
			"avatarUrl": "../img/3.png",
			"bio": "妇产科医生",
			"id": 3
		},
		{
			"name": "周瑜",
			"slug": "magasa",
			"avatarUrl": "../img/4.png",
			"bio": "知乎001号员工",
			"id": 4
		},
		{
			"name": "诸葛亮",
			"slug": "magasa",
			"avatarUrl": "../img/5.png",
			"bio": "知乎创始人",
			"id": 5
		},
		{
			"name": "韩梅梅",
			"slug": "magasa",
			"avatarUrl": "../img/6.png",
			"bio": "小学毕业破格被知乎录取",
			"id": 6
		},
		{
			"name": "姬成",
			"slug": "magasa",
			"avatarUrl": "../img/7.png",
			"bio": "理工第一帅",
			"id": 7
		},
	]
};
ReactDom.render(
	<App data={data}/>,
	document.getElementById('root')
)