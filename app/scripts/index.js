var React = require('react');//React.jsのライブラリをimport
var ReactDOM = require('react-dom');
var Header = require('./views/header.jsx');
//var Body = require('./views/body.jsx');
var Masonry = require('react-masonry-component')
var Gallery = require('./views/gallery.jsx')
var Footer = require('./views/footer.jsx');

//コンポーネントを一つにまとめる
var Index = React.createClass({
	render:function(){
	  return (
      <div>
			  <Header/>
				<div className="main">
				  <Gallery elements={[{"src": "https://avatars3.githubusercontent.com/u/4058115?v=3&s=460"},{"src" :"https://avatars3.githubusercontent.com/u/4058115?v=3&s=460"}]}/>
				</div>
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
