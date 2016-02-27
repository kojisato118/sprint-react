var React = require('react');//React.jsのライブラリをimport
var ReactDOM = require('react-dom');
var Header = require('./views/header.jsx');
//var Body = require('./views/body.jsx');
var Masonry = require('react-masonry-component')
var Footer = require('./views/footer.jsx');

var masonryOptions = {
  transitionDuration: 0
};

var Gallery = React.createClass({
    render: function () {
        var childElements = this.props.elements.map(function(element){
           return (
                <li className="image-element-class">
                    <img src={element.src} />
                </li>
            );
        });

        return (
            <Masonry
                className={'my-gallery-class'} // default ''
                elementType={'ul'} // default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
            >
                {childElements}
            </Masonry>
        );
    }
});

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
