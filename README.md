# vue-cn

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
            console.log('开始'
                ,document.body.clientWidth
                ,document.body.clientHeight
                ,document.body.offsetWidth
                ,document.body.offsetHeight
                ,document.body.scrollWidth
                ,document.body.scrollHeight
                ,document.body.scrollTop
                ,document.body.scrollLeft
                ,'结束'
            );        
            //网页可见区域宽(body)
            //网页可见区域高(body)
            //网页可见区域宽(body)，包括border、margin等
            //网页可见区域宽(body)，包括border、margin等
            //网页正文全文宽，包括有滚动条时的未见区域
            //网页正文全文高，包括有滚动条时的未见区域
            //网页被卷去的Top(滚动条)
            //网页被卷去的Left(滚动条)
            console.log('开始'
                ,window.screenTop
                ,window.screenLeft
                ,window.screen.height
                ,window.screen.width
                ,window.screen.availHeight
                ,window.screen.availWidth
                ,'结束'
            );                     
            //浏览器距离Top
            //浏览器距离Left
            //屏幕分辨率的高
            //屏幕分辨率的宽
            //屏幕可用工作区的高
            //屏幕可用工作区的宽