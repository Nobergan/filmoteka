(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"1DEj":function(e,t,a){},LiJq:function(e,t,a){var n=a("mp5j");e.exports=(n.default||n).template({compiler:[8,">= 4.3.0"],main:function(e,t,a,n,o){return'<form class="filmSearch" id="query" action="" data-index="form">\n    <input class="filmSearch__input" data-index="serch" type="text" placeholder="Search films" autocomplete="off" />\n    <button type="submit" class="material-icons white search-icon">search</button>\n    <p type="submit" class="filmSearch__input-error hidden" data-index="fetchStatus">\n    </p>\n</form>'},useData:!0})},QfWi:function(e,t,a){"use strict";a.r(t),a.d(t,"genreDB",(function(){return D})),a.d(t,"startPopularFilms",(function(){return M}));a("iPZ8"),a("kypl"),a("pCzD"),a("RtS0"),a("4owi"),a("IvQZ"),a("/YXa"),a("lmye"),a("WB5j"),a("D/wG"),a("wCa+"),a("JBxO"),a("9UJh"),a("4NM0"),a("WoWj"),a("3dw1"),a("U00V"),a("1DEj");var n={homeBtn:document.querySelector('[data-index="home"]'),header:document.querySelector('[data-index="header"]'),inputQuery:document.querySelector(".filmSearch"),gallery:document.querySelector('[data-index="gallery"]'),galleryItems:function(){return document.querySelectorAll("#gallery-item")},spinner:document.querySelector("#spinner"),inputRef:document.querySelector(".filmSearch__input"),galleryRef:document.querySelector(".movie__list"),modalRef:document.querySelector(".card"),modalBoxRef:document.querySelector(".card-box"),modalBackdropRef:document.querySelector(".backdrop"),btnCloseModalRef:document.querySelector(".card__btn-close"),galContainerRef:document.querySelector(".js-container"),headerButtons:document.querySelector('[data-index="headerButtons"]'),pageHeader:document.querySelector(".header__home"),markupMyLibraty:document.querySelector('[data-index="headerСhanging"]'),watched:document.querySelector(".js-watched"),body:document.querySelector("body"),myLibraryBtn:document.querySelector('[data-index="mylibrary"]'),paginationRef:document.getElementById("pagination-container")},o=a("RsKt"),r=a.n(o);var i=function(){var e=document.querySelector('[data-index="queue"]');document.querySelector('[data-index="watched"]').classList.remove("is__active--btn"),e.classList.add("is__active--btn"),n.galleryRef.innerHTML="";var t=JSON.parse(localStorage.getItem("queue"));if(t&&0!==t.length)return n.galleryRef.insertAdjacentHTML("beforeend",r()(t));n.galleryRef.insertAdjacentHTML("beforeend","<p> This list is empty. Please add something:) </p>")},l=a("LiJq"),s=a.n(l),c=a("nK5f"),u=a.n(c),d=s()();n.header.insertAdjacentHTML("beforeend",d),n.headerButtons.addEventListener("click",(function(e){e.preventDefault();var t=document.querySelector('[data-index="form"]');if("BUTTON"!==e.target.nodeName)return;var a=n.headerButtons.querySelector(".current");a&&a.classList.remove("current");var o=e.target;o.classList.add("current");var r=o.getAttribute("id");if("myLibrary"===r){n.pageHeader.classList.remove("header__home"),n.pageHeader.classList.add("header__watched"),t.classList.add("is__hidden"),i();var l=document.querySelector('[data-index="queue"]');l.addEventListener("click",i),l.classList.add("is__active--btn")}"home"===r&&(n.pageHeader.classList.remove("header__watched"),n.pageHeader.classList.add("header__home"),t.classList.remove("is__hidden"),n.markupMyLibraty.innerHTML="",n.paginationRef.classList.remove("pagination-is-hide"),n.galleryRef.innerHTML="",M())})),n.myLibraryBtn.addEventListener("click",(function(){var e=u()();n.markupMyLibraty.innerHTML="",n.markupMyLibraty.insertAdjacentHTML("beforeend",e),n.paginationRef.classList.add("pagination-is-hide")}));a("9va6"),a("CfbV"),a("Muwe"),a("y89P"),a("aZFp"),a("SgDD");!function(e,t){void 0===t&&i("Pagination requires jQuery.");var n="pagination",o="__pagination-";t.fn.pagination&&(n="pagination2"),t.fn[n]=function(a){if(void 0===a)return this;var c=t(this),u=t.extend({},t.fn[n].defaults,a),d={initialize:function(){var e=this;if(c.data("pagination")||c.data("pagination",{}),!1!==e.callHook("beforeInit")){c.data("pagination").initialized&&t(".paginationjs",c).remove(),e.disabled=!!u.disabled;var a=e.model={pageRange:u.pageRange,pageSize:u.pageSize};e.parseDataSource(u.dataSource,(function(t){e.isAsync=r.isString(t),r.isArray(t)&&(a.totalNumber=u.totalNumber=t.length),e.isDynamicTotalNumber=e.isAsync&&u.totalNumberLocator;var n=e.render(!0);u.className&&n.addClass(u.className),a.el=n,c["bottom"===u.position?"append":"prepend"](n),e.observer(),c.data("pagination").initialized=!0,e.callHook("afterInit",n)}))}},render:function(e){var a=this.model,n=a.el||t('<div class="paginationjs"></div>'),o=!0!==e;this.callHook("beforeRender",o);var r=a.pageNumber||u.pageNumber,i=u.pageRange||0,l=this.getTotalPage(),s=r-i,c=r+i;return c>l&&(c=l,s=(s=l-2*i)<1?1:s),s<=1&&(s=1,c=Math.min(2*i+1,l)),n.html(this.generateHTML({currentPage:r,pageRange:i,rangeStart:s,rangeEnd:c})),u.hideWhenLessThanOnePage&&n[l<=1?"hide":"show"](),this.callHook("afterRender",o),n},generatePageNumbersHTML:function(e){var t,a=e.currentPage,n=this.getTotalPage(),o=e.rangeStart,r=e.rangeEnd,i="",l=u.pageLink,s=u.ellipsisText,c=u.classPrefix,d=u.activeClassName,m=u.disableClassName;if(null===u.pageRange){for(t=1;t<=n;t++)i+=t==a?'<li class="'+c+"-page J-paginationjs-page "+d+'" data-num="'+t+'"><a>'+t+"</a></li>":'<li class="'+c+'-page J-paginationjs-page" data-num="'+t+'"><a href="'+l+'">'+t+"</a></li>";return i}if(o<=3)for(t=1;t<o;t++)i+=t==a?'<li class="'+c+"-page J-paginationjs-page "+d+'" data-num="'+t+'"><a>'+t+"</a></li>":'<li class="'+c+'-page J-paginationjs-page" data-num="'+t+'"><a href="'+l+'">'+t+"</a></li>";else u.showFirstOnEllipsisShow&&(i+='<li class="'+c+"-page "+c+'-first J-paginationjs-page" data-num="1"><a href="'+l+'">1</a></li>'),i+='<li class="'+c+"-ellipsis "+m+'"><a>'+s+"</a></li>";for(t=o;t<=r;t++)i+=t==a?'<li class="'+c+"-page J-paginationjs-page "+d+'" data-num="'+t+'"><a>'+t+"</a></li>":'<li class="'+c+'-page J-paginationjs-page" data-num="'+t+'"><a href="'+l+'">'+t+"</a></li>";if(r>=n-2)for(t=r+1;t<=n;t++)i+='<li class="'+c+'-page J-paginationjs-page" data-num="'+t+'"><a href="'+l+'">'+t+"</a></li>";else i+='<li class="'+c+"-ellipsis "+m+'"><a>'+s+"</a></li>",u.showLastOnEllipsisShow&&(i+='<li class="'+c+"-page "+c+'-last J-paginationjs-page" data-num="'+n+'"><a href="'+l+'">'+n+"</a></li>");return i},generateHTML:function(e){var a=e.currentPage,n=this.getTotalPage(),o=this.getTotalNumber(),r=u.showPrevious,i=u.showNext,l=u.showPageNumbers,s=u.showNavigator,c=u.showGoInput,d=u.showGoButton,m=u.pageLink,g=u.prevText,p=u.nextText,h=u.goButtonText,f=u.classPrefix,v=u.disableClassName,b=u.ulClassName,y="",_='<input type="text" class="J-paginationjs-go-pagenumber">',S='<input type="button" class="J-paginationjs-go-button" value="'+h+'">',w=t.isFunction(u.formatNavigator)?u.formatNavigator(a,n,o):u.formatNavigator,k=t.isFunction(u.formatGoInput)?u.formatGoInput(_,a,n,o):u.formatGoInput,j=t.isFunction(u.formatGoButton)?u.formatGoButton(S,a,n,o):u.formatGoButton,L=t.isFunction(u.autoHidePrevious)?u.autoHidePrevious():u.autoHidePrevious,N=t.isFunction(u.autoHideNext)?u.autoHideNext():u.autoHideNext,x=t.isFunction(u.header)?u.header(a,n,o):u.header,q=t.isFunction(u.footer)?u.footer(a,n,o):u.footer;return x&&(y+=this.replaceVariables(x,{currentPage:a,totalPage:n,totalNumber:o})),(r||l||i)&&(y+='<div class="paginationjs-pages">',y+=b?'<ul class="'+b+'">':"<ul>",r&&(a<=1?L||(y+='<li class="'+f+"-prev "+v+'"><a>'+g+"</a></li>"):y+='<li class="'+f+'-prev J-paginationjs-previous" data-num="'+(a-1)+'" title="Previous page"><a href="'+m+'">'+g+"</a></li>"),l&&(y+=this.generatePageNumbersHTML(e)),i&&(a>=n?N||(y+='<li class="'+f+"-next "+v+'"><a>'+p+"</a></li>"):y+='<li class="'+f+'-next J-paginationjs-next" data-num="'+(a+1)+'" title="Next page"><a href="'+m+'">'+p+"</a></li>"),y+="</ul></div>"),s&&w&&(y+='<div class="'+f+'-nav J-paginationjs-nav">'+this.replaceVariables(w,{currentPage:a,totalPage:n,totalNumber:o})+"</div>"),c&&k&&(y+='<div class="'+f+'-go-input">'+this.replaceVariables(k,{currentPage:a,totalPage:n,totalNumber:o,input:_})+"</div>"),d&&j&&(y+='<div class="'+f+'-go-button">'+this.replaceVariables(j,{currentPage:a,totalPage:n,totalNumber:o,button:S})+"</div>"),q&&(y+=this.replaceVariables(q,{currentPage:a,totalPage:n,totalNumber:o})),y},findTotalNumberFromRemoteResponse:function(e){this.model.totalNumber=u.totalNumberLocator(e)},go:function(e,a){var n=this,o=n.model;if(!n.disabled){var i=e;if((i=parseInt(i))&&!(i<1)){var l=u.pageSize,s=n.getTotalNumber(),d=n.getTotalPage();if(!(s>0&&i>d))if(n.isAsync){var m={},g=u.alias||{};m[g.pageSize?g.pageSize:"pageSize"]=l,m[g.pageNumber?g.pageNumber:"pageNumber"]=i;var p=t.isFunction(u.ajax)?u.ajax():u.ajax,h={type:"get",cache:!1,data:{},contentType:"application/x-www-form-urlencoded; charset=UTF-8",dataType:"json",async:!0};t.extend(!0,h,p),t.extend(h.data,m),h.url=u.dataSource,h.success=function(e){n.isDynamicTotalNumber?n.findTotalNumberFromRemoteResponse(e):n.model.totalNumber=u.totalNumber,f(n.filterDataByLocator(e))},h.error=function(e,t,a){u.formatAjaxError&&u.formatAjaxError(e,t,a),n.enable()},n.disable(),t.ajax(h)}else f(n.getDataFragment(i))}}function f(e){if(!1===n.callHook("beforePaging",i))return!1;if(o.direction=void 0===o.pageNumber?0:i>o.pageNumber?1:-1,o.pageNumber=i,n.render(),n.disabled&&n.isAsync&&n.enable(),c.data("pagination").model=o,u.formatResult){var l=t.extend(!0,[],e);r.isArray(e=u.formatResult(l))||(e=l)}c.data("pagination").currentPageData=e,n.doCallback(e,a),n.callHook("afterPaging",i),1==i&&n.callHook("afterIsFirstPage"),i==n.getTotalPage()&&n.callHook("afterIsLastPage")}},doCallback:function(e,a){var n=this.model;t.isFunction(a)?a(e,n):t.isFunction(u.callback)&&u.callback(e,n)},destroy:function(){!1!==this.callHook("beforeDestroy")&&(this.model.el.remove(),c.off(),t("#paginationjs-style").remove(),this.callHook("afterDestroy"))},previous:function(e){this.go(this.model.pageNumber-1,e)},next:function(e){this.go(this.model.pageNumber+1,e)},disable:function(){var e=this.isAsync?"async":"sync";!1!==this.callHook("beforeDisable",e)&&(this.disabled=!0,this.model.disabled=!0,this.callHook("afterDisable",e))},enable:function(){var e=this.isAsync?"async":"sync";!1!==this.callHook("beforeEnable",e)&&(this.disabled=!1,this.model.disabled=!1,this.callHook("afterEnable",e))},refresh:function(e){this.go(this.model.pageNumber,e)},show:function(){this.model.el.is(":visible")||this.model.el.show()},hide:function(){this.model.el.is(":visible")&&this.model.el.hide()},replaceVariables:function(e,t){var a;for(var n in t){var o=t[n],r=new RegExp("<%=\\s*"+n+"\\s*%>","img");a=(a||e).replace(r,o)}return a},getDataFragment:function(e){var t=u.pageSize,a=u.dataSource,n=this.getTotalNumber(),o=t*(e-1)+1,r=Math.min(e*t,n);return a.slice(o-1,r)},getTotalNumber:function(){return this.model.totalNumber||u.totalNumber||0},getTotalPage:function(){return Math.ceil(this.getTotalNumber()/u.pageSize)},getLocator:function(e){var a;return"string"==typeof e?a=e:t.isFunction(e)?a=e():i('"locator" is incorrect. (String | Function)'),a},filterDataByLocator:function(e){var a,n=this.getLocator(u.locator);if(r.isObject(e)){try{t.each(n.split("."),(function(t,n){a=(a||e)[n]}))}catch(e){}a?r.isArray(a)||i("dataSource."+n+" must be an Array."):i("dataSource."+n+" is undefined.")}return a||e},parseDataSource:function(e,a){var n=this;r.isObject(e)?a(u.dataSource=n.filterDataByLocator(e)):r.isArray(e)?a(u.dataSource=e):t.isFunction(e)?u.dataSource((function(e){r.isArray(e)||i('The parameter of "done" Function should be an Array.'),n.parseDataSource.call(n,e,a)})):"string"==typeof e?(/^https?|file:/.test(e)&&(u.ajaxDataType="jsonp"),a(e)):i('Unexpected type of "dataSource".')},callHook:function(a){var n,o=c.data("pagination"),r=Array.prototype.slice.apply(arguments);return r.shift(),u[a]&&t.isFunction(u[a])&&!1===u[a].apply(e,r)&&(n=!1),o.hooks&&o.hooks[a]&&t.each(o.hooks[a],(function(t,a){!1===a.apply(e,r)&&(n=!1)})),!1!==n},observer:function(){var e=this,a=e.model.el;c.on(o+"go",(function(a,n,o){(n=parseInt(t.trim(n)))&&(t.isNumeric(n)||i('"pageNumber" is incorrect. (Number)'),e.go(n,o))})),a.delegate(".J-paginationjs-page","click",(function(a){var n=t(a.currentTarget),o=t.trim(n.attr("data-num"));if(o&&!n.hasClass(u.disableClassName)&&!n.hasClass(u.activeClassName))return!1!==e.callHook("beforePageOnClick",a,o)&&(e.go(o),e.callHook("afterPageOnClick",a,o),!!u.pageLink&&void 0)})),a.delegate(".J-paginationjs-previous","click",(function(a){var n=t(a.currentTarget),o=t.trim(n.attr("data-num"));if(o&&!n.hasClass(u.disableClassName))return!1!==e.callHook("beforePreviousOnClick",a,o)&&(e.go(o),e.callHook("afterPreviousOnClick",a,o),!!u.pageLink&&void 0)})),a.delegate(".J-paginationjs-next","click",(function(a){var n=t(a.currentTarget),o=t.trim(n.attr("data-num"));if(o&&!n.hasClass(u.disableClassName))return!1!==e.callHook("beforeNextOnClick",a,o)&&(e.go(o),e.callHook("afterNextOnClick",a,o),!!u.pageLink&&void 0)})),a.delegate(".J-paginationjs-go-button","click",(function(n){var r=t(".J-paginationjs-go-pagenumber",a).val();if(!1===e.callHook("beforeGoButtonOnClick",n,r))return!1;c.trigger(o+"go",r),e.callHook("afterGoButtonOnClick",n,r)})),a.delegate(".J-paginationjs-go-pagenumber","keyup",(function(n){if(13===n.which){var r=t(n.currentTarget).val();if(!1===e.callHook("beforeGoInputOnEnter",n,r))return!1;c.trigger(o+"go",r),t(".J-paginationjs-go-pagenumber",a).focus(),e.callHook("afterGoInputOnEnter",n,r)}})),c.on(o+"previous",(function(t,a){e.previous(a)})),c.on(o+"next",(function(t,a){e.next(a)})),c.on(o+"disable",(function(){e.disable()})),c.on(o+"enable",(function(){e.enable()})),c.on(o+"refresh",(function(t,a){e.refresh(a)})),c.on(o+"show",(function(){e.show()})),c.on(o+"hide",(function(){e.hide()})),c.on(o+"destroy",(function(){e.destroy()}));var n=Math.max(e.getTotalPage(),1),r=u.pageNumber;e.isDynamicTotalNumber&&(r=1),u.triggerPagingOnInit&&c.trigger(o+"go",Math.min(r,n))}};if(c.data("pagination")&&!0===c.data("pagination").initialized){if(t.isNumeric(a))return c.trigger.call(this,o+"go",a,arguments[1]),this;if("string"==typeof a){var m=Array.prototype.slice.apply(arguments);switch(m[0]=o+m[0],a){case"previous":case"next":case"go":case"disable":case"enable":case"refresh":case"show":case"hide":case"destroy":c.trigger.apply(this,m);break;case"getSelectedPageNum":return c.data("pagination").model?c.data("pagination").model.pageNumber:c.data("pagination").attributes.pageNumber;case"getTotalPage":return Math.ceil(c.data("pagination").model.totalNumber/c.data("pagination").model.pageSize);case"getSelectedPageData":return c.data("pagination").currentPageData;case"isDisabled":return!0===c.data("pagination").model.disabled;default:i("Unknown action: "+a)}return this}s(c)}else r.isObject(a)||i("Illegal options");return l(u),d.initialize(),this},t.fn[n].defaults={totalNumber:0,pageNumber:1,pageSize:10,pageRange:2,showPrevious:!0,showNext:!0,showPageNumbers:!0,showNavigator:!1,showGoInput:!1,showGoButton:!1,pageLink:"",prevText:"&laquo;",nextText:"&raquo;",ellipsisText:"...",goButtonText:"Go",classPrefix:"paginationjs",activeClassName:"active",disableClassName:"disabled",inlineStyle:!0,formatNavigator:"<%= currentPage %> / <%= totalPage %>",formatGoInput:"<%= input %>",formatGoButton:"<%= button %>",position:"bottom",autoHidePrevious:!1,autoHideNext:!1,triggerPagingOnInit:!0,hideWhenLessThanOnePage:!1,showFirstOnEllipsisShow:!0,showLastOnEllipsisShow:!0,callback:function(){}},t.fn.addHook=function(e,a){arguments.length<2&&i("Missing argument."),t.isFunction(a)||i("callback must be a function.");var n=t(this),o=n.data("pagination");o||(n.data("pagination",{}),o=n.data("pagination")),!o.hooks&&(o.hooks={}),o.hooks[e]=o.hooks[e]||[],o.hooks[e].push(a)},t[n]=function(e,a){var n;if(arguments.length<2&&i("Requires two parameters."),(n="string"!=typeof e&&e instanceof jQuery?e:t(e)).length)return n.pagination(a),n};var r={};function i(e){throw new Error("Pagination: "+e)}function l(e){e.dataSource||i('"dataSource" is required.'),"string"==typeof e.dataSource?void 0===e.totalNumberLocator?void 0===e.totalNumber?i('"totalNumber" is required.'):t.isNumeric(e.totalNumber)||i('"totalNumber" is incorrect. (Number)'):t.isFunction(e.totalNumberLocator)||i('"totalNumberLocator" should be a Function.'):r.isObject(e.dataSource)&&(void 0===e.locator?i('"dataSource" is an Object, please specify "locator".'):"string"==typeof e.locator||t.isFunction(e.locator)||i(e.locator+" is incorrect. (String | Function)")),void 0===e.formatResult||t.isFunction(e.formatResult)||i('"formatResult" should be a Function.')}function s(e){t.each(["go","previous","next","disable","enable","refresh","show","hide","destroy"],(function(t,a){e.off(o+a)})),e.data("pagination",{}),t(".paginationjs",e).remove()}t.each(["Object","Array","String"],(function(e,t){r["is"+t]=function(e){return function(e,t){return("object"==(t=typeof e)?null==e?"null":Object.prototype.toString.call(e).slice(8,-1):t).toLowerCase()}(e)===t.toLowerCase()}})),"function"==typeof define&&a("K2jg")&&define((function(){return t}))}(void 0,window.jQuery);var m,g;a("FdtR");var p=(m={searchUrl:"https://api.themoviedb.org/3/search/movie?api_key=",trendingUrl:"https://api.themoviedb.org/3/trending/movie/week?api_key=",movieDetailsUrl:"https://api.themoviedb.org/3/movie/",movieGenreList:"https://api.themoviedb.org/3/genre/movie/list?api_key=",apiKey:"3550330ecc32a34c7342dbd44dd96d6e",movieID:0,searchQuerry:"",page:1,fetchSearchRequestGallery:function(){var e=""+this.searchUrl+this.apiKey+"&language=en-US&query="+this.searchQuerry+"&page="+this.page;return fetch(e).then((function(e){if(e.ok)return e.json();throw new Error(e.status)})).then((function(e){return e})).catch((function(e){return console.log(e)}))},fetchPopularMovieGallery:function(){var e=""+this.trendingUrl+this.apiKey+"&page="+this.page;return fetch(e).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.log(e)}))},fetchMovieInfo:function(){var e=""+this.movieDetailsUrl+this.movieID+"?api_key="+this.apiKey+"&language=en-US";return fetch(e).then((function(e){return e.json()})).then((function(e){return e.results})).catch((function(e){return console.log(e)}))},fetchGenresList:function(){var e=""+this.movieGenreList+this.apiKey+"&language=en-US";return fetch(e).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.log(e)}))},resetPage:function(){this.page=1},get query(){return this.searchQuerry},set query(e){this.searchQuerry=e}},"movieID",(g={}).movieID=g.movieID||{},g.movieID.get=function(){return this.movieID},"movieID",g.movieID=g.movieID||{},g.movieID.set=function(e){this.movieID=e},function(e,t){for(var a in t){(r=t[a]).configurable=r.enumerable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,a,r)}if(Object.getOwnPropertySymbols)for(var n=Object.getOwnPropertySymbols(t),o=0;o<n.length;o++){var r,i=n[o];(r=t[i]).configurable=r.enumerable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,i,r)}}(m,g),m);a("lYjL");function h(e,t){var a=JSON.parse(localStorage.getItem(e));if(localStorage.getItem(e)){if(!(a.length<2)){var n=a.filter((function(e){return e.poster_path!==t.poster_path}));return localStorage.setItem(e,JSON.stringify(n))}localStorage.removeItem(e)}}function f(e){return e.classList.contains("added-to-watched")?e.textContent="In queue":e.textContent="Add to queue",e.textContent}var v=function(e){var t={poster_path:e.poster_path,original_title:e.original_title,genre_ids:e.genre_ids,release_date:e.release_date},a=document.querySelector(".js-queue"),o=document.querySelector(".js-watched"),i=localStorage.getItem("queue");i&&i.includes(e.poster_path)&&a.classList.add("added-to-watched"),a.addEventListener("click",(function(){if(document.querySelector(".js-watched").classList.remove("added-to-watched"),document.querySelector(".js-watched").textContent="add to watched",a.disabled||(a.addEventListener("click",h("watched",e)),document.querySelector(".js-watched").textContent="add to watched",document.querySelector(".js-watched").classList.remove("added-to-storage"),document.querySelector(".js-queue").classList.add("added-to-storage"),document.querySelector('[data-index="watched"]')&&(n.galleryRef.textContent="",n.galleryRef.insertAdjacentHTML("beforeend",r()(JSON.parse(localStorage.getItem("watched")))),JSON.parse(localStorage.getItem("watched"))||n.galleryRef.insertAdjacentHTML("afterbegin","No Watched moovies to show"))),a.classList.add("added-to-watched"),f(a),!localStorage.getItem("queue"))return localStorage.setItem("queue",JSON.stringify([t]));var o=JSON.parse(localStorage.getItem("queue"));o.push(t);JSON.parse(localStorage.getItem("watched"));return localStorage.setItem("queue",JSON.stringify(o))})),o.addEventListener("click",(function(){a.classList.remove("added-to-watched"),f(a),h("queue",e),document.querySelector(".js-queue").classList.remove("added-to-storage"),document.querySelector('[data-index="watched"]')&&(n.galleryRef.textContent="",n.galleryRef.insertAdjacentHTML("beforeend",r()(JSON.parse(localStorage.getItem("queue")))),JSON.parse(localStorage.getItem("queue"))||n.galleryRef.insertAdjacentHTML("afterbegin","No moovies in Queue to show"))}))};function b(){n.modalBackdropRef.classList.toggle("is-hidden"),n.modalBoxRef.innerHTML="",n.body.classList.remove("hide-overflow")}n.btnCloseModalRef.addEventListener("click",b),n.modalBackdropRef.addEventListener("click",(function(e){e.target===e.currentTarget&&b()})),window.addEventListener("keydown",(function(e){"Escape"!==e.code||n.modalBackdropRef.classList.contains("is-hidden")||b()}));var y=function(e){var t=r()(e);if(n.galleryRef.innerHTML="",0!==JSON.parse(localStorage.getItem("watched")))return n.galleryRef.insertAdjacentHTML("afterbegin",t);n.galleryRef.insertAdjacentHTML("afterbegin","No Watched moovies to show")};document.addEventListener("click",(function(e){if(e.target.classList.contains("js-watched")){var t=function(){var t={poster_path:document.querySelector(".card__img").src,release_date:e.target.dataset.release_date,original_title:document.querySelector(".card__title").textContent,vote_average:document.querySelector(".js-vote").textContent},a=null!=localStorage.getItem("watched")?JSON.parse(localStorage.getItem("watched")):[];a.push(t),localStorage.setItem("watched",JSON.stringify(a))},a=function(){document.querySelector(".js-watched").textContent="already watched",document.querySelector(".js-watched").classList.add("added-to-storage")};if(null===localStorage.getItem("watched"))t(),a();else if(localStorage.getItem("watched").includes(""+document.querySelector(".card__img").src)){if(localStorage.getItem("watched").includes(""+document.querySelector(".card__img").src)&&(function(){var t=document.querySelector(".card__img").src,a=(e.target.dataset.release_date,document.querySelector(".card__title").textContent,document.querySelector(".js-vote").textContent,JSON.parse(localStorage.getItem("watched")));if(!localStorage.getItem("watched")||a.length<2)localStorage.removeItem("watched");else{var n=a.filter((function(e){return e.poster_path!=t}));localStorage.setItem("watched",JSON.stringify(n))}}(),document.querySelector(".js-watched").textContent="add to watched",document.querySelector(".js-watched").classList.remove("added-to-storage"),document.querySelector('[data-index="watched"]'))){n.galleryRef.textContent="";var o=JSON.parse(localStorage.getItem("watched"));y(o),JSON.parse(localStorage.getItem("watched"))||n.galleryRef.insertAdjacentHTML("afterbegin","No Watched moovies to show")}}else t(),a()}})),document.addEventListener("click",(function(e){if("watched"===e.target.dataset.index){var t=document.querySelector('[data-index="queue"]');if(document.querySelector('[data-index="watched"]').classList.add("is__active--btn"),t.classList.remove("is__active--btn"),document.querySelector('[data-index="watched"]'))if(n.galleryRef.textContent="",localStorage.getItem("watched")){var a=JSON.parse(localStorage.getItem("watched"));y(a)}else n.galleryRef.insertAdjacentHTML("afterbegin","No Watched moovies to show")}}));a("Xlt+"),localStorage.queue,localStorage.watched;var _=a("s9S4"),S=a.n(_),w=(a("PzF0"),a("x3Br"),a("y8Ly"),a("dcBu")),k=[{avatar:"https://avatars.githubusercontent.com/u/21546375?s=400&u=8837ab4e24638d6d6fa048d588957a9a0ba7b067&v=4",link:"https://github.com/kilinich-v",name:"Vladimir Kilinich",role:"Team Lead"},{avatar:"https://raw.githubusercontent.com/kilinich-v/goit-Filmoteka-cp/dev/src/images/team-ava/vladyslav-hapon.jpg",link:"https://github.com/vladhpn",name:"Vladyslav Hapon",role:"Scrum Master"},{avatar:"https://raw.githubusercontent.com/kilinich-v/goit-Filmoteka-cp/dev/src/images/team-ava/aleksandr-priadko.jpg",link:"https://github.com/AleksandrPriadko",name:"Aleksandr Priadko",role:"Developer"},{avatar:"https://raw.githubusercontent.com/kilinich-v/goit-Filmoteka-cp/dev/src/images/team-ava/alena-laptieva.jpg",link:"https://github.com/olenaLa",name:"Alena Laptieva",role:"Developer"},{avatar:"https://raw.githubusercontent.com/kilinich-v/goit-Filmoteka-cp/dev/src/images/team-ava/avatar-nogender.jpg",link:"https://github.com/Bohdan-R",name:"Bohdan Remeniuk",role:"Developer"},{avatar:"https://raw.githubusercontent.com/kilinich-v/goit-Filmoteka-cp/dev/src/images/team-ava/filip-koza.jpg",link:"https://github.com/Fil1989",name:"Filip Koza",role:"Developer"},{avatar:"https://raw.githubusercontent.com/kilinich-v/goit-Filmoteka-cp/dev/src/images/team-ava/luba.jpg",link:"https://github.com/LiubovShpakova",name:"Liubov Shpakova",role:"Developer"},{avatar:"https://raw.githubusercontent.com/kilinich-v/goit-Filmoteka-cp/dev/src/images/team-ava/marina-permiakova.jpg",link:"https://github.com/Nickmarina",name:"Marina Permiakova",role:"Developer"},{avatar:"https://raw.githubusercontent.com/kilinich-v/goit-Filmoteka-cp/dev/src/images/team-ava/vladyslav-remeniuk.jpg",link:"https://github.com/Dr-Frame",name:"Vladyslav Remeniuk",role:"Developer"},{avatar:"https://raw.githubusercontent.com/kilinich-v/goit-Filmoteka-cp/dev/src/images/team-ava/volodymyr-kostetskyi.jpg",link:"https://github.com/Nobergan",name:"Volodymyr Kostetskyi",role:"Developer"}].reduce((function(e,t){var a=t.avatar,n=t.link,o=t.name;return e+'\n<div class="team-card">\n    <img class="team-image" src="'+a+'" alt="'+o+'-foto">\n    <h2 class="team-name">'+o+'</h2>\n     <a href="'+n+'" target="_blank" class="team-git"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n<title>github-link</title>\n<path d="M12 0.75c-6.213 0-11.25 5.037-11.25 11.25s5.037 11.25 11.25 11.25 11.25-5.037 11.25-11.25-5.037-11.25-11.25-11.25zM21.75 12c0 0.001 0 0.002 0 0.004 0 4.454-2.986 8.21-7.066 9.375l-0.069 0.017v-3.648q0-1.298-0.696-1.9c0.516-0.052 0.983-0.137 1.435-0.255l-0.064 0.014c0.479-0.134 0.897-0.312 1.284-0.536l-0.026 0.014c0.425-0.234 0.784-0.531 1.080-0.884l0.005-0.006q0.435-0.529 0.709-1.405t0.274-2.014q0-1.619-1.057-2.757 0.495-1.218-0.107-2.73-0.375-0.121-1.084 0.147c-0.475 0.176-0.88 0.374-1.263 0.607l0.032-0.018-0.509 0.321c-0.77-0.221-1.655-0.348-2.57-0.348s-1.799 0.127-2.638 0.364l0.068-0.016c-0.59-1.127-2.086-1.199-2.837-1.057-0.5 0.797-0.44 2.054-0.094 2.73q-1.057 1.138-1.057 2.757 0 1.138 0.274 2.007t0.703 1.405c0.296 0.363 0.653 0.663 1.059 0.887l0.019 0.009c0.361 0.21 0.779 0.389 1.219 0.513l0.038 0.009c0.389 0.105 0.856 0.189 1.333 0.238l0.039 0.003q-0.535 0.482-0.656 1.379c-0.173 0.084-0.374 0.153-0.585 0.198l-0.017 0.003c-0.214 0.043-0.46 0.067-0.711 0.067-0.018 0-0.036-0-0.054-0l0.003 0q-0.442 0-0.877-0.288t-0.743-0.837c-0.166-0.281-0.383-0.513-0.642-0.691l-0.007-0.005q-0.395-0.268-0.662-0.321l-0.121-0.027c-0.020-0.005-0.044-0.008-0.068-0.008-0.12 0-0.224 0.068-0.275 0.167l-0.001 0.002-0.016 0.031c-0.022 0.041-0.034 0.090-0.034 0.142 0 0.125 0.073 0.232 0.179 0.281l0.002 0.001q0.294 0.134 0.582 0.509c0.159 0.198 0.3 0.422 0.413 0.662l0.009 0.020 0.134 0.308c0.113 0.336 0.318 0.617 0.585 0.82l0.004 0.003c0.25 0.196 0.553 0.337 0.884 0.399l0.013 0.002c0.276 0.054 0.597 0.088 0.925 0.094l0.005 0c0.037 0.001 0.081 0.002 0.125 0.002 0.218 0 0.432-0.018 0.64-0.052l-0.023 0.003 0.308-0.053q0 0.508 0.007 1.191c0.003 0.276 0.005 1.027 0.006 1.582-4.213-1.141-7.262-4.93-7.262-9.431 0-4.014 2.424-7.462 5.889-8.959l0.063-0.024c1.121-0.487 2.426-0.77 3.798-0.77 5.383 0 9.747 4.364 9.747 9.747 0 0.003 0 0.006 0 0.009v-0z"></path>\n</svg>\n     </a>\n    <p class="team-role">'+t.role+"</p>\n</div>"}),"");document.querySelector('[data-index="team"]').addEventListener("click",(function(e){j.show(),window.addEventListener("keydown",(function e(t){"Escape"===t.code&&(j.close(),window.removeEventListener("keydown",e))}))}));var j=w.create('<div class="team-wrapper">'+k+"</div>");var L=a("QJ3N"),N=(a("bzha"),a("zrP5"),function(){Object(L.notice)({title:"Empty request!",delay:1e3})}),x=function(){Object(L.error)({title:"Nothing found!",delay:1e3})};function q(e,t){var a;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"==typeof e)return T(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return T(e,t)}(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(a=e[Symbol.iterator]()).next.bind(a)}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var P=document.querySelector(".filmSearch__input"),I=document.querySelector(".filmSearch"),H=n.galleryRef,R=(n.modalRef,document.querySelector("#js-backdrop"));M(),I.addEventListener("submit",(function(e){n.paginationRef.classList.remove("pagination-is-hide"),e.preventDefault(),p.searchQuerry="",p.searchQuerry=P.value,P.value?(H.innerHTML="",n.spinner.classList.remove("is-hidden"),t=p.searchUrl,a=p.searchQuerry,o=""+t+p.apiKey+"&query="+a,r=n.galleryRef,$("#pagination-container").pagination({dataSource:o,locator:"results",totalNumberLocator:function(e){return e.total_results},pageSize:20,alias:{pageNumber:"page"},prevText:"",nextText:"",callback:function(e,t){0===e.length?(x(),r.insertAdjacentHTML("afterbegin",'<div class="error">\n  <div class="error-img"><img class="js-img-error" src="https://i.ibb.co/4WvT00q/caterror.jpg" alt="" width="300"></div>\n\n  <p class="gallery__failure"> Unfortunately, no matches found. <span>Try again!</span> </p>\n</div>'),n.paginationRef.classList.add("pagination-is-hide")):(r.innerHTML="",F(A(e,D)),window.scrollTo({top:0,behavior:"smooth"}))}}),n.spinner.classList.add("is-hidden")):N();var t,a,o,r})),H.addEventListener("click",(function(e){if("IMG"!==e.target.nodeName||e.target.classList.contains("js-img-error"))return;var t=e.target.dataset.compare;O.forEach((function(e){e.poster_path===t&&(C=Object.assign({},e))})),a=C,o=S()(a),n.modalBoxRef.insertAdjacentHTML("afterbegin",o),n.body.classList.add("hide-overflow"),function(e){null!=localStorage.getItem("watched")&&localStorage.getItem("watched").includes(""+e.target.src)&&(document.querySelector(".js-watched").textContent="already watched",document.querySelector(".js-watched").classList.add("added-to-storage"));null!=localStorage.getItem("queue")&&localStorage.getItem("queue").includes(""+e.target.src)&&(document.querySelector(".js-queue").textContent="in queue",document.querySelector(".js-queue").classList.add("added-to-storage"))}(e),R.classList.remove("is-hidden"),v(C);var a,o}));var O,D=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}],C={};function M(){var e,t;I.firstElementChild.value="",n.spinner.classList.remove("is-hidden"),n.galleryRef.classList.remove("movie__list--error"),e=""+p.trendingUrl+p.apiKey,t=n.galleryRef,$("#pagination-container").pagination({dataSource:e,locator:"results",totalNumberLocator:function(e){return e.total_results},pageSize:20,alias:{pageNumber:"page"},prevText:"",nextText:"",callback:function(e,a){t.innerHTML="",F(A(e,D)),window.scrollTo({top:0,behavior:"smooth"})}}),n.spinner.classList.add("is-hidden")}function A(e,t){var a=e.map((function(e){if(null===e.poster_path)e.poster_path="https://i.ibb.co/hWJT4yj/noImage.jpg";else{var a="https://image.tmdb.org/t/p/w500/"+e.poster_path;e.poster_path=a}var n=e.release_date.slice(0,4),o=[];return e.genre_ids.forEach((function(e){for(var a,n=q(t);!(a=n()).done;){var r=a.value;r.id===e&&o.push(r.name)}})),Object.assign({},e,{genre_ids:o,release_date:n})}));return O=a,a}function F(e){var t=r()(e);H.insertAdjacentHTML("beforeend",t)}},RsKt:function(e,t,a){var n=a("mp5j");e.exports=(n.default||n).template({1:function(e,t,a,n,o){var r,i,l=null!=t?t:e.nullContext||{},s=e.hooks.helperMissing,c=e.escapeExpression,u=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<li class="poster">\n  <div class="poster__img-wrap">\n    <img src="'+c("function"==typeof(i=null!=(i=u(a,"poster_path")||(null!=t?u(t,"poster_path"):t))?i:s)?i.call(l,{name:"poster_path",hash:{},data:o,loc:{start:{line:4,column:14},end:{line:4,column:29}}}):i)+'" data-compare="'+c("function"==typeof(i=null!=(i=u(a,"poster_path")||(null!=t?u(t,"poster_path"):t))?i:s)?i.call(l,{name:"poster_path",hash:{},data:o,loc:{start:{line:4,column:45},end:{line:4,column:60}}}):i)+'" alt="movie-poster" class="poster__img" width="274">\n  </div>\n  <div class="poster__content-wrap">\n    <h3 class="poster__movie-name">'+c("function"==typeof(i=null!=(i=u(a,"original_title")||(null!=t?u(t,"original_title"):t))?i:s)?i.call(l,{name:"original_title",hash:{},data:o,loc:{start:{line:7,column:35},end:{line:7,column:53}}}):i)+'</h3>\n    <div class="poster__movie-info-wrap">\n      <ul class="poster__genre-list list">\n'+(null!=(r=u(a,"each").call(l,null!=t?u(t,"genre_ids"):t,{name:"each",hash:{},fn:e.program(2,o,0),inverse:e.noop,data:o,loc:{start:{line:10,column:8},end:{line:13,column:17}}}))?r:"")+'        <p class="poster__genre-item">&nbsp| '+c("function"==typeof(i=null!=(i=u(a,"release_date")||(null!=t?u(t,"release_date"):t))?i:s)?i.call(l,{name:"release_date",hash:{},data:o,loc:{start:{line:14,column:45},end:{line:14,column:61}}}):i)+"</p>\n      </ul>\n    </div>\n  </div>\n</li>\n"},2:function(e,t,a,n,o){return'        <li class="poster__genre-item">\n          '+e.escapeExpression(e.lambda(t,t))+"<span>,&nbsp;</span></li>\n"},compiler:[8,">= 4.3.0"],main:function(e,t,a,n,o){var r;return null!=(r=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(a,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,o,0),inverse:e.noop,data:o,loc:{start:{line:1,column:0},end:{line:19,column:9}}}))?r:""},useData:!0})},nK5f:function(e,t,a){var n=a("mp5j");e.exports=(n.default||n).template({compiler:[8,">= 4.3.0"],main:function(e,t,a,n,o){return'<div class="mylibrary">\n    <button class="mylibrary__button" data-index="watched">WATCHED</button><button class="mylibrary__button"\n        data-index="queue">QUEUE</button>\n</div>'},useData:!0})},s9S4:function(e,t,a){var n=a("mp5j");e.exports=(n.default||n).template({1:function(e,t,a,n,o){return'          <li class="card__info__genre-item">'+e.escapeExpression(e.lambda(t,t))+"<span>,&nbsp;</span></li>\n"},compiler:[8,">= 4.3.0"],main:function(e,t,a,n,o){var r,i,l=null!=t?t:e.nullContext||{},s=e.hooks.helperMissing,c="function",u=e.escapeExpression,d=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<div class="card__img-wrap">\n  <img src="'+u(typeof(i=null!=(i=d(a,"poster_path")||(null!=t?d(t,"poster_path"):t))?i:s)===c?i.call(l,{name:"poster_path",hash:{},data:o,loc:{start:{line:2,column:12},end:{line:2,column:27}}}):i)+'" alt="modal__img" class="card__img">\n</div>\n<div class="card__content-wrap">\n  <h3 class="card__title">'+u(typeof(i=null!=(i=d(a,"original_title")||(null!=t?d(t,"original_title"):t))?i:s)===c?i.call(l,{name:"original_title",hash:{},data:o,loc:{start:{line:5,column:26},end:{line:5,column:44}}}):i)+'</h3>\n  <div class="card__info-wrap">\n    <ul class="card__info-list list">\n      <li class="card__info-item">\n        <p class="card__info-title">Vote / Votes</p>\n        <p class="card__info-vote"><span class="js-vote">'+u(typeof(i=null!=(i=d(a,"vote_average")||(null!=t?d(t,"vote_average"):t))?i:s)===c?i.call(l,{name:"vote_average",hash:{},data:o,loc:{start:{line:10,column:57},end:{line:10,column:73}}}):i)+"</span>&nbsp;/&nbsp;<span>"+u(typeof(i=null!=(i=d(a,"vote_count")||(null!=t?d(t,"vote_count"):t))?i:s)===c?i.call(l,{name:"vote_count",hash:{},data:o,loc:{start:{line:10,column:99},end:{line:10,column:113}}}):i)+'</span>\n        </p>\n      </li>\n      <li class="card__info-item">\n        <p class="card__info-title">Popularity</p>\n        <p class="card__info-popularity">'+u(typeof(i=null!=(i=d(a,"popularity")||(null!=t?d(t,"popularity"):t))?i:s)===c?i.call(l,{name:"popularity",hash:{},data:o,loc:{start:{line:15,column:41},end:{line:15,column:55}}}):i)+'</p>\n      </li>\n      <li class="card__info-item">\n        <p class="card__info-title">Original Title</p>\n        <p class="card__info-movie-name">'+u(typeof(i=null!=(i=d(a,"original_title")||(null!=t?d(t,"original_title"):t))?i:s)===c?i.call(l,{name:"original_title",hash:{},data:o,loc:{start:{line:19,column:41},end:{line:19,column:59}}}):i)+'</p>\n      </li>\n      <li class="card__info-item">\n        <p class="card__info-title">Genre</p>\n        <ul class="card__info__genre-list list">\n'+(null!=(r=d(a,"each").call(l,null!=t?d(t,"genre_ids"):t,{name:"each",hash:{},fn:e.program(1,o,0),inverse:e.noop,data:o,loc:{start:{line:24,column:10},end:{line:26,column:19}}}))?r:"")+'      </li>\n    </ul>\n  </div>\n  <p class="card__description-title">About</p>\n  <p class="card__description">'+u(typeof(i=null!=(i=d(a,"overview")||(null!=t?d(t,"overview"):t))?i:s)===c?i.call(l,{name:"overview",hash:{},data:o,loc:{start:{line:31,column:31},end:{line:31,column:43}}}):i)+'</p>\n  <div class="card__btn-box">\n    <button type="button" class="button card__btn js-watched" data-release_date="'+u(typeof(i=null!=(i=d(a,"release_date")||(null!=t?d(t,"release_date"):t))?i:s)===c?i.call(l,{name:"release_date",hash:{},data:o,loc:{start:{line:33,column:81},end:{line:33,column:97}}}):i)+'">add to\n      Watched</button>\n    <button type="button" class="button card__btn js-queue">add to queue</button>\n  </div>\n</div>'},useData:!0})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.dbb9cca1710308fae919.js.map