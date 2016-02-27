var React = require('react');//React.jsのライブラリをimport
var ReactDOM = require('react-dom');
var Masonry = require('react-masonry-component')

var masonryOptions = {
  gutterWidth: 0,
  isAnimated: true,
  animationOptions: {
    duration: 500,
    easing: 'swing'
  }
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

module.exports = Gallery;
