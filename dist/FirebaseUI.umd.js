!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("firebaseui"),require("firebase/app"),require("firebase/auth")):"function"==typeof define&&define.amd?define(["exports","firebaseui","firebase/app","firebase/auth"],t):t((e||self).reactUseAuth={},e.firebaseui,e.Firebase)}(this,function(e,t,i){function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=n(i);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}e.FirebaseUI=function(){function e(e){this.dispatch=e.dispatch,this.signInOptions=e.signInOptions,this.firebase=s.default.initializeApp({apiKey:"AIzaSyCdtQ6V3qDxpgDO-usa3zWvBhIJKpAd4mM",authDomain:"useauth-demo.firebaseapp.com",projectId:"useauth-demo",storageBucket:"useauth-demo.appspot.com",messagingSenderId:"520315046120",appId:"1:520315046120:web:4384141e88f49e638c215d"},"useAuth"),this.ui=new t.auth.AuthUI(this.firebase.auth()),this.firebase.auth().onAuthStateChanged(this.onAuthStateChanged)}var i=e.prototype;return i.onAuthStateChanged=function(e){console.log("HAI",e.toJSON())},e.addDefaultParams=function(e,t){return r({signInOptions:[s.default.auth.EmailAuthProvider.PROVIDER_ID]},e)},i.authorize=function(){var e=this;this.dispatch("LOGIN"),this.ui.start("#firebaseui-auth-container",{signInOptions:this.signInOptions,signInFlow:"popup",callbacks:{signInSuccessWithAuthResult:function(t){return console.log({authResult:t}),e.dispatch("AUTHENTICATED",{user:e.firebase.auth().currentUser.toJSON(),authResult:{expiresIn:3600}}),!1}}})},i.signup=function(){},i.logout=function(e){},i.userId=function(e){var t;return null==(t=this.firebase.auth().currentUser)?void 0:t.uid},i.userRoles=function(e){return[]},i.handleLoginCallback=function(){return Promise.resolve(!1)},i.checkSession=function(){try{var e=this.firebase.auth().currentUser.toJSON();if(console.log("checkSession",e),e)return Promise.resolve({user:e,authResult:{expiresIn:3600}});throw new Error("Session invalid")}catch(e){return Promise.reject(e)}},e}()});
//# sourceMappingURL=FirebaseUI.umd.js.map
