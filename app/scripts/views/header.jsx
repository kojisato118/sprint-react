var React = require('react');//React.jsのライブラリをimport

//ヘッダの定義
var Header = React.createClass({
  render: function(){
	  return (
	    <header>
			 <div className="container">
         <span className="title"> ポートフォリオ</span>
       </div>
			</header>
		);
	}
});

module.exports = Header;
