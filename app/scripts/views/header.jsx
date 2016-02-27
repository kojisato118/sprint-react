var React = require('react');//React.jsのライブラリをimport

//ヘッダの定義
var Header = React.createClass({
  render: function(){
	  return (
	    <header>
			 <h1>Headerです</h1>
			 <hr/>
			</header>
		);
	}
});

module.exports = Header;
