var React = require('react');//React.jsのライブラリをimport
var ReactDOM = require('react-dom');
var Header = require('./views/header.jsx');
var Body = require('./views/body.jsx');
var Footer = require('./views/footer.jsx');

//コンポーネントを一つにまとめる
var Index = React.createClass({
	render:function(){
	  return (
      <div>
			  <Header/>
				<hr/>
				<Body/>
				<hr/>
				<Footer/>
			</div>   
		);
	}
});

ReactDOM.render(
  <Index />,
  document.getElementById('content')
);
