import Doz from "https://unpkg.com/doz/dist/doz.min.js"

Doz.component("my-checkbox",{
	template(h){
		return h`
		<h3>select checkbox this</h3>
		<input type="checkbox" d-bind="youchoices",
		name=youchoices > ${this.props.youchoices}
		<br/>
		`
	},
	props:{
		youchoices:false
	}

})




Doz.component("my-select",{
	template(h){
		return h`
		<select d-bind="fruits">
		<option value="" disabled="true"
		selected="true" hidden="true" >select FAvorite
		</option>

		<option value="banana">Banana</option>
		<option value="watermelon">watermelon</option>
		<option value="apple">apple</option>

		</select>
		<h3>you fruits is : ${this.props.fruits}</h3>
		`
	},
	props:{
		fruits:"banana"
	}

})



// NOW I WIL CREATE NEW COMPONENT
Doz.component("my-child",{
	template(h){
		return h`
		<div>
		<h1>this you child component</h1>
		<input type="text" d-bind="msg"/>
		<p>you type value is : ${this.props.msg}</p>
		<button onclick="this.changenow()">change name !!!</button>
		<div>
		`
	},
	props:{
		msg:"First name"
	},
	changenow(){
		this.props.msg = "Back to first name"
	}
})



new Doz({
	root:document.getElementById('app'),
	template(h){
		return h`
		<h1>You DOZ framework here</h1>
		<my-child></my-child>
		<my-select></my-select>
		<my-checkbox></my-checkbox>

		`
	}

})