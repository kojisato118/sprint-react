var React = require('react');//React.jsのライブラリをimport

//ボディの定義
var Body = React.createClass({
  render: function(){
	  return (
      <div style={{textAlign: "center"}}>
	      <h1>Bodyです</h1>
      </div>
		);
	}
});

module.exports = Body;
