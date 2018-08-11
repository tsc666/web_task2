# web_task2

#### 本次修改主要有一下几点  
#### 1.实现鼠标滑过自动停止  
#### 2.针对代码耦合性较高的问题使用事件代理方法
       window.onload = function(){
        var oBox = document.getElementById("option");
        oBox.onmouseover = function (ev) {     
            var ev = ev || window.event;
            var target = ev.target || ev.srcElement;
            if(target.nodeName.toLocaleLowerCase() == 'li'){
                switch(target.id){
                    case 'op1' :
                        op1.className="active";
                        op4.className="";
                        ol1.className="block";
                        ol4.className="";
                        break;
                    case 'op2' :
                        op2.className="active";
                        op1.className="";
                        ol2.className="block";
                        ol1.className="";
                        break;
                    case 'op3' :
                        op3.className="active";
                        op2.className="";
                        ol3.className="block";
                        ol2.className="";
                        break;
                    case 'op4' :
                        op4.className="active";
                        op3.className="";
                        ol4.className="block";
                        ol3.className="";
                        break;
                    }
                }
            }
        }
        并使用ES6语法  
####  3.将轮播功能封装成一个插件
      <script type="text/javascript">
        $(function () {
            $("#lb1").lunbotu();
        });
     </script>
####  4.重新使用webpack打包，将所有css、js文件打包成一个在html页面中引入
    module.exports = {
    entry: __dirname + "/app/main.js",//已多次提及的唯一入口文件
    output: {
        path: __dirname + "/public",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader"
                    }
                ]
            },
             {
              test: /\.scss$/,
              use: [
                  {
                      loader: "style-loader"
                  }, {
                      loader: "css-loader"
                  },
                  {
                      loader: "sass-loader"
   
                  }
              ]}

        ]
    }
};
####  5.学习了import require的使用并在main.js中使用
