var React = require('react');//React.jsのライブラリをimport

//コンポーネントを定義
var Index = React.createClass({
	render:function(){
	    return (
        <p>hoge</p>
		    );
	}
    });

//id='content'の要素にコンポーネント「Index」を挿入してレンダリング
React.render(
	     <Index />,
	     document.getElementById('content')
	     );