var t=require("firebaseui"),e=require("firebase/app");function n(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}require("firebase/auth");var i=n(e);function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}exports.FirebaseUI=function(){function e(e){this.dispatch=e.dispatch,this.signInOptions=e.signInOptions,this.firebase=i.default.initializeApp({apiKey:"AIzaSyCdtQ6V3qDxpgDO-usa3zWvBhIJKpAd4mM",authDomain:"useauth-demo.firebaseapp.com",projectId:"useauth-demo",storageBucket:"useauth-demo.appspot.com",messagingSenderId:"520315046120",appId:"1:520315046120:web:4384141e88f49e638c215d"},"useAuth"),this.ui=new t.auth.AuthUI(this.firebase.auth()),this.firebase.auth().onAuthStateChanged(this.onAuthStateChanged)}var n=e.prototype;return n.onAuthStateChanged=function(t){console.log("HAI",t)},e.addDefaultParams=function(t,e){return r({signInOptions:[i.default.auth.EmailAuthProvider.PROVIDER_ID]},t)},n.authorize=function(){var t=this;this.dispatch("LOGIN"),this.ui.start("#firebaseui-auth-container",{signInOptions:this.signInOptions,signInFlow:"popup",callbacks:{signInSuccessWithAuthResult:function(e,n){return console.log({authResult:e,redirectUrl:n}),t.dispatch("AUTHENTICATED",{user:t.firebase.auth().currentUser,authResult:e}),!1}}})},n.signup=function(){},n.logout=function(t){},n.userId=function(t){var e;return null==(e=this.firebase.auth().currentUser)?void 0:e.uid},n.userRoles=function(t){return[]},n.handleLoginCallback=function(){return Promise.resolve(!1)},n.checkSession=function(){try{return Promise.resolve({user:{},authResult:{}})}catch(t){return Promise.reject(t)}},e}();
//# sourceMappingURL=FirebaseUI.js.map
