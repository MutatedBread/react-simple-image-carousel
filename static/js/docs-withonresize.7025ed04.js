(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./docs/withonresize.mdx":function(e,t,n){"use strict";n.r(t);var a=n("./node_modules/react/index.js"),r=n.n(a),o=n("./node_modules/@mdx-js/tag/dist/index.js");function m(e){return(m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var c=function(e){function t(e){var n,a,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,n=!(r=(t.__proto__||Object.getPrototypeOf(t)).call(this,e))||"object"!==m(r)&&"function"!==typeof r?l(a):r,s.call(l(n));var o=n.getNextWidth(),i=n.getNextHeight();return n.state={height:i,width:o},n}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,a["Component"]),n=t,(r=[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.onResize)}},{key:"render",value:function(){var e=this.props.children,t=this.state;return e(t.width,t.height)}}])&&i(n.prototype,r),o&&i(n,o),t}(),s=function(){var e=this;Object.defineProperty(this,"onResize",{configurable:!0,enumerable:!0,writable:!0,value:function(){var t=e.getNextWidth(),n=e.getNextHeight();e.setState(function(e){return{height:n,width:t}})}}),Object.defineProperty(this,"getNextWidth",{configurable:!0,enumerable:!0,writable:!0,value:function(){var t=e.props,n=t.maxWidth,a=t.widthFactor,r=document.documentElement.clientWidth*a;return n&&r>n&&(r=n),r}}),Object.defineProperty(this,"getNextHeight",{configurable:!0,enumerable:!0,writable:!0,value:function(){var t=e.props,n=t.maxHeight,a=t.heightFactor,r=(t.useWidthForHeight?document.documentElement.clientWidth:document.documentElement.clientHeight)*a;return n&&r>n&&(r=n),r}})};try{c.displayName="WithOnResize",c.__docgenInfo={description:"",displayName:"WithOnResize",props:{widthFactor:{defaultValue:null,description:"",name:"widthFactor",required:!0,type:{name:"number"}},heightFactor:{defaultValue:null,description:"",name:"heightFactor",required:!0,type:{name:"number"}},useWidthForHeight:{defaultValue:null,description:"",name:"useWidthForHeight",required:!1,type:{name:"boolean"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"number"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"number"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["slider/utilities/WithOnResize.tsx#WithOnResize"]={docgenInfo:c.__docgenInfo,name:"WithOnResize",path:"slider/utilities/WithOnResize.tsx#WithOnResize"})}catch(e){}var h=n("./slider/components/Slider.tsx"),d=n("./node_modules/docz/dist/index.m.js");function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}t.default=function(e){var t=e.components,n=u(e,["components"]);return r.a.createElement(o.MDXTag,{name:"wrapper",components:t},r.a.createElement(o.MDXTag,{name:"h1",components:t,props:{id:"withonresize-utility"}},r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"h1",props:{"aria-hidden":!0,href:"#withonresize-utility"}},r.a.createElement(o.MDXTag,{name:"span",components:t,parentName:"a",props:{className:"icon-link"}},"#")),"WithOnResize Utility"),r.a.createElement(o.MDXTag,{name:"p",components:t},"WithOnResize is an utility that helps you to scale the carousel to full width and height according to the page.\nYou can also specify a max height and width if the screen size becomes too big."),r.a.createElement(o.MDXTag,{name:"pre",components:t},r.a.createElement(o.MDXTag,{name:"code",components:t,parentName:"pre"},'import {WithOnResize} from "react-simple-image-carousel";\n')),r.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"example"}},r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"h2",props:{"aria-hidden":!0,href:"#example"}},r.a.createElement(o.MDXTag,{name:"span",components:t,parentName:"a",props:{className:"icon-link"}},"#")),"Example"),r.a.createElement(d.d,{__position:0,__code:"<WithOnResize\n  widthFactor={1}\n  heightFactor={2 / 3}\n  useWidthForHeight={true}\n  maxHeight={540}\n  maxWidth={720}\n>\n  {(width, height) => (\n    <Slider\n      width={width}\n      height={height}\n      maxSwipeThreshold={width * 0.15}\n      minSwipeThreshold={40}\n      swipeTimeThreshold={200}\n      images={[\n        'https://www.chewy.com/petcentral/wp-content/uploads/2018/05/lucky-corgi-butts-x-596-444x.jpg',\n        'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12225919/Pembroke-Welsh-Corgi-On-White-01.jpg',\n        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Welchcorgipembroke.JPG/1200px-Welchcorgipembroke.JPG',\n      ]}\n      selectorStyle={{\n        backgroundColor: 'blue',\n        height: '50px',\n        width: '50px',\n      }}\n      slideStyle={{\n        borderRadius: '100px',\n      }}\n      selectorContainerStyle={{\n        bottom: '80px',\n      }}\n      carouselStyle={{\n        borderColor: 'black',\n        borderWidth: '10px',\n      }}\n    />\n  )}\n</WithOnResize>",__scope:{props:n,WithOnResize:c,Slider:h.a}},r.a.createElement(c,{widthFactor:1,heightFactor:2/3,useWidthForHeight:!0,maxHeight:540,maxWidth:720},function(e,t){return r.a.createElement(h.a,{width:e,height:t,maxSwipeThreshold:.15*e,minSwipeThreshold:40,swipeTimeThreshold:200,images:["https://www.chewy.com/petcentral/wp-content/uploads/2018/05/lucky-corgi-butts-x-596-444x.jpg","https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12225919/Pembroke-Welsh-Corgi-On-White-01.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Welchcorgipembroke.JPG/1200px-Welchcorgipembroke.JPG"],selectorStyle:{backgroundColor:"blue",height:"50px",width:"50px"},slideStyle:{borderRadius:"100px"},selectorContainerStyle:{bottom:"80px"},carouselStyle:{borderColor:"black",borderWidth:"10px"}})})),r.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"withonresize-props"}},r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"h2",props:{"aria-hidden":!0,href:"#withonresize-props"}},r.a.createElement(o.MDXTag,{name:"span",components:t,parentName:"a",props:{className:"icon-link"}},"#")),"WithOnResize Props"),r.a.createElement(o.MDXTag,{name:"h3",components:t,props:{id:"props-table"}},r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"h3",props:{"aria-hidden":!0,href:"#props-table"}},r.a.createElement(o.MDXTag,{name:"span",components:t,parentName:"a",props:{className:"icon-link"}},"#")),"Props Table"),r.a.createElement(o.MDXTag,{name:"table",components:t},r.a.createElement(o.MDXTag,{name:"thead",components:t,parentName:"table"},r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"thead"},r.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Prop Name"),r.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Required Level"),r.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Type"))),r.a.createElement(o.MDXTag,{name:"tbody",components:t,parentName:"table"},r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"widthFactor"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Needed"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"number")),r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"heightFactor"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Needed"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"number")),r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"useWidthForHeight"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Optional"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"boolean")),r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"maxWidth"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Optional"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"number")),r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"maxHeight"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Optional"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"number")))),r.a.createElement(o.MDXTag,{name:"h3",components:t,props:{id:"props-explaination"}},r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"h3",props:{"aria-hidden":!0,href:"#props-explaination"}},r.a.createElement(o.MDXTag,{name:"span",components:t,parentName:"a",props:{className:"icon-link"}},"#")),"Props Explaination"),r.a.createElement(o.MDXTag,{name:"table",components:t},r.a.createElement(o.MDXTag,{name:"thead",components:t,parentName:"table"},r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"thead"},r.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Prop Name"),r.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Explaination"))),r.a.createElement(o.MDXTag,{name:"tbody",components:t,parentName:"table"},r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"widthFactor"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Width factor of the screen width. ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"1")," means full width")),r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"heightFactor"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Height factor of the screen height. ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"1")," means full height")),r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"useWidthForHeight"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Use value of width as height")),r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"maxWidth"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Maximun width the underlying component will receive")),r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"maxHeight"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Maximun height the underlying component will receive")))))}}}]);