import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';


class StoryBoard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {script: '', role: '', scene: '', date: new Date(), draft:[], currScript: 0};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		this.prev = this.prev.bind(this);
		this.next = this.next.bind(this);
	}

	handleChange(event) {
		const value = event.target.value;
		const name = event.target.name;
		this.setState({[name]: value});
	}

	handleSubmit(event) {
		alert('A name was submitted: ' + this.state.value);
		event.preventDefault();
	}

	prev() {
		let scripts = this.state.draft;
		scripts.push({"role": this.state.role});

		console.log(scripts);
	}

	next() {
		console.log('right');
	}

	render() {
		return (
			<div>
			<h1>Good morning!</h1>
			<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
			<button onClick={this.prev}>Previous</button>
			<button onClick={this.next}>Next</button>
			<form>
			<select name="role" value={this.state.role} onChange={this.handleChange}>
			<option value="小明">小明</option>
			<option value="小黄">小黄</option>
			<option value="Ivan童鞋">Ivan童鞋</option>
			<option value="Christina">Christina</option>
			</select>
			<select name="scene" value={this.state.role} onChange={this.handleChange}>
			<option value="桌面">桌面</option>
			<option value="后院">后院</option>
			<option value="CS building">CS building</option>
			</select>
			<br />
			<textarea name="script" type="text" value={this.state.script} onChange={this.handleChange} placeholder="这绝对不是bug"/>
			<br />
			<input type="submit" value="Submit" />
			</form>
			</div>
			);
	}
}

ReactDOM.render(
	<StoryBoard />,
	document.getElementById('app')
	);