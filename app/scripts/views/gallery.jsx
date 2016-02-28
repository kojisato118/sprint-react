var React = require('react');//React.jsのライブラリをimport
var ReactDOM = require('react-dom');
var Masonry = require('react-masonry-component')
var $ = require("jquery");
var page = 1;
// TODO: developmentとproductionで切り分け
//var url = "http://localhost:3000";
var url = "https://sprint-koji.herokuapp.com";

var masonryOptions = {
  gutterWidth: 0,
  isAnimated: true,
  animationOptions: {
    duration: 500,
    easing: 'swing'
  }
};

var Gallery = React.createClass({
    getInitialState: function(){
      return {data: []};
    },
    componentDidMount: function() {
      $.ajax({
        url: url + "/api/contents/",
        type: "GET",
        xhrFields: {
          withCredentials: true
        },
        data: {page : page},
        dataType: "json",
        success: function(data) {
          this.setState({data: data});
        }.bind(this),
        error: function(xht, status, err) {
          alert("errror: ");
          console.error(url + "/api/contents/", status, err.toString());
          // TODO: エラー時の処理
        }.bind(this)
      });
    },
    render: function () {
        var childElements = this.state.data.map(function(element){
            var src;
            if(element.image.search(/http/) == -1){
              src = url + element.image;
            }else{
              src = element.image;
            }
            var tags = element.tag_list.map(function(tag){
              return (
                <span>
                  {tag}
                </span>
              );
            });
            return (
                <div className="grid-item">
                  <h3> 
                    {element.title}
                  </h3>
                  <div className="tag">
                    {tags}
                  </div>
                  <div className="img">
                    <img src={src} /> 
                  </div>
                  <div className="description">
                    {element.description} 
                  </div>
                  <div className="more">
                    <a className="button" href={element.url}>詳細を読む</a>
                  </div>
                </div>
            );
        });

        return (
            <Masonry
                className={'masonry'}
                id={"grid"}
                elementType={'div'} // default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
            >
                {childElements}
            </Masonry>
        );
    }
});

module.exports = Gallery;
