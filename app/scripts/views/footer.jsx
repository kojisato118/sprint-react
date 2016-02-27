var React = require('react');//React.jsのライブラリをimport

//ヘッダの定義
var Footer = React.createClass({
  render: function(){
	  return (
      <footer style={{textAlign: "center"}}>
			  <hr/>
	      <h1>Footer</h1>
      </footer>
		);
	}
});

module.exports = Footer;
