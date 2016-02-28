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

function reload(bindTargget){
  $.ajax({
    url: url + "/api/contents/",
    type: "GET",
    xhrFields: {
      withCredentials: true
    },
    data: {page : page},
    dataType: "json",
    success: function(data) {
      d = this.state.data
      this.setState({data:d.concat(data)});
    }.bind(bindTargget),
      error: function(xht, status, err) {
      alert("errror: ");
      console.error(url + "/api/contents/", status, err.toString());
      // TODO: エラー時の処理
    }.bind(bindTargget)
  });
}

var Gallery = React.createClass({
    getInitialState: function(){
      return {data: []};
    },
    componentDidMount: function() {
      reload(this);    
    },
    onMoreButtonClick(e) {
    // e is SyntheticEvent
      page += 1;
      reload(this);
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
          <div>
            <Masonry
              className={'masonry'}
              id={"grid"}
              elementType={'div'} // default 'div'
              options={masonryOptions} // default {}
              disableImagesLoaded={false} // default false
            >
              {childElements}
            </Masonry>
            <div id="more">
              <button onClick={this.onMoreButtonClick}>もっと見る</button>
            </div>
          </div>
        );
    }
});

module.exports = Gallery;
