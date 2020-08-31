(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{13:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__DncjJ"}},14:function(e,t,a){e.exports={Button:"Button_Button__3R1xi"}},16:function(e,t,a){e.exports={Spinner:"Spinner_Spinner__24ERy"}},17:function(e,t,a){e.exports=a(45)},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),c=a.n(o),l=a(10),i=a(2),u=a(3),s=a(5),m=a(4),h=a(12),p=a(6),d=a.n(p),b=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchQuery:""},e.handleChange=function(t){var a=t.currentTarget,n=a.name,r=a.value;e.setState(Object(h.a)({},n,r))},e.handleSubmit=function(t){t.preventDefault();var a=e.state.searchQuery;e.props.onSubmit(a),e.reset()},e.reset=function(){e.setState({searchQuery:""})},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state.searchQuery;return r.a.createElement("header",{className:d.a.Searchbar},r.a.createElement("form",{className:d.a.SearchForm,onSubmit:this.handleSubmit},r.a.createElement("button",{type:"submit",className:d.a.SearchForm_button},r.a.createElement("span",{className:d.a.SearchForm_button_label},"Search")),r.a.createElement("input",{className:d.a.SearchForm_input,type:"text",autoComplete:"off",name:"searchQuery",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleChange,value:e})))}}]),a}(n.Component),g=a(13),f=a.n(g),y=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleOpenModal=function(t){t.target!==t.currentTarget&&e.props.onClick()},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.children;return r.a.createElement("ul",{className:f.a.ImageGallery,onClick:this.handleOpenModal},e)}}]),a}(n.Component),v=a(8),_=a.n(v),S=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).modalContent=function(t){e.props.onItemClick(t)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.props.data;return r.a.createElement(r.a.Fragment,null,t&&t.map((function(t){var a=t.id,n=t.webformatURL;return r.a.createElement("li",{key:a,className:_.a.ImageGalleryItem},r.a.createElement("img",{src:n,alt:"",className:_.a.ImageGalleryItem_image,onClick:function(){return e.modalContent(a)}}))})))}}]),a}(n.Component),E=a(9),O=a.n(E),j=document.getElementById("modal-root"),C=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={src:""},e.handleBackdropClick=function(t){t.target===t.currentTarget&&e.props.onBackdrop()},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.setState({src:this.props.content})}},{key:"render",value:function(){var e=this.state.src;return Object(o.createPortal)(r.a.createElement("div",{className:O.a.Overlay,onClick:this.handleBackdropClick},r.a.createElement("div",{className:O.a.Modal},r.a.createElement("img",{src:e,alt:""}))),j)}}]),a}(n.Component),k=a(14),I=a.n(k),B=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.onPress,a=e.name;return r.a.createElement("button",{type:"button",onClick:t,className:I.a.Button}," ",a)}}]),a}(n.Component);B.defaultProps={name:"Load more"};var M=B,F=a(15),N=a.n(F),w=a(16),x=a.n(w),G=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.isEnable;return r.a.createElement("div",{className:x.a.Spinner},e&&r.a.createElement(N.a,{type:"Puff",color:"#00BFFF",height:50,width:50}))}}]),a}(n.Component);G.defaultProps={isEnable:!1};var Q=G,P=(a(43),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={url:"https://pixabay.com/api/?",api:"16865907-bf97a2667d97724c7c41d2d46",modalContent:"",searchQuery:"",page:1,data:[],openModal:!1,spinnerEnable:!1,btnEnable:!1},e.toggleModal=function(){e.setState((function(e){return{openModal:!e.openModal}}))},e.toggleSpinner=function(){e.setState((function(e){return{spinnerEnable:!e.spinnerEnable}}))},e.toggleButton=function(){e.setState((function(e){return{btnEnable:!e.btnEnable}}))},e.hadleChangeQuery=function(t){e.setState({searchQuery:t,page:1,data:[]})},e.handleNextPage=function(){e.toggleSpinner(),e.toggleButton(),e.setState((function(e){return{page:e.page+1}}))},e.handleScroll=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e.modalContentSet=function(t){var a=e.state.data.find((function(e){return e.id===t}));e.setState({modalContent:a.largeImageURL})},e.getData=function(){var t=e.state,a=t.url,n=t.searchQuery,r=t.page,o=t.api,c="".concat(a,"q=").concat(n,"&page=").concat(r,"&key=").concat(o,"&image_type=photo&orientation=horizontal&per_page=12");e.toggleSpinner(),fetch(c).then((function(e){return e.json()})).then((function(t){var a=t.hits;return e.setState((function(e){var t=e.data;return{data:[].concat(Object(l.a)(t),Object(l.a)(a))}}))})).then(e.handleScroll).then(e.toggleButton)},e}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=t.searchQuery,n=t.page;a!==this.state.searchQuery&&this.getData(),n!==this.state.page&&this.getData()}},{key:"render",value:function(){var e=this.state,t=e.data,a=e.openModal,n=e.btnEnable,o=e.spinnerEnable,c=e.modalContent;return r.a.createElement("div",{className:"App"},r.a.createElement(b,{onSubmit:this.hadleChangeQuery}),r.a.createElement(y,{onClick:this.toggleModal},r.a.createElement(S,{data:t,onItemClick:this.modalContentSet})),a&&r.a.createElement(C,{content:c,onBackdrop:this.toggleModal}),n?r.a.createElement(M,{name:"Load more",onPress:this.handleNextPage}):r.a.createElement(Q,{isEnable:o}))}}]),a}(n.Component));a(44);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root"))},6:function(e,t,a){e.exports={Searchbar:"SearchBar_Searchbar__19WMJ",SearchForm:"SearchBar_SearchForm__1k1JW",SearchForm_button:"SearchBar_SearchForm_button__lS3c7",SearchForm_button_label:"SearchBar_SearchForm_button_label__2V9MA",SearchForm_input:"SearchBar_SearchForm_input__Hbv-v"}},8:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3CvRl",ImageGalleryItem_image:"ImageGalleryItem_ImageGalleryItem_image__1P7Nb"}},9:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2AxMb",Modal:"Modal_Modal__2WBTT"}}},[[17,1,2]]]);
//# sourceMappingURL=main.c902bb34.chunk.js.map