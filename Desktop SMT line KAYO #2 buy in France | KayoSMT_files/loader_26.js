;(function () {
;(function () {
(function(){if(!window.b24form){window.b24form=function(e){b24form.forms=b24form.forms||[];b24form.forms.push(e);if(e.ref&&b24form.Loader&&!this.loaded){this.loaded=true;b24form.Loader.loadJs(e.ref,true)}}}if(window.b24form.Loader){return}function e(){this.requested=false;this.queue=[]}e.prototype={run:function(e){e=e||{};var o=e.resources||{};this.queue.push(e.form);if(!this.requested){var t=this.loadApp.bind(this,o.app);this.requested=true;if(o.polyfill&&!this.checkPolyfills()){this.loadJs(o.polyfill,true,t)}else{t()}}this.loadForms()},loadApp:function(e){if(!e){return}window.b24form.App?this.loadForms():this.loadJs(e,true,this.loadForms.bind(this))},loadForms:function(){if(!this.checkPolyfills()){return}if(!window.b24form.App){return}var e=this.queue;this.queue=[];e.forEach(this.loadForm,this)},loadForm:function(e){b24form.App.initFormScript24(e)},checkBabelHelpers:function(){return window.babelHelpers},checkPolyfills:function(){return window.fetch&&window.Request&&window.Response&&window.Promise&&Object.assign&&Array.prototype.find&&Array.prototype.includes},loadJs:function(e,o,t){var i=document.createElement("SCRIPT");i.setAttribute("type","text/javascript");i.setAttribute("async","");if(o){i.setAttribute("src",e+"?"+(Date.now()/864e5|0));if(t){i.onload=t}this.appendToHead(i)}else{i.appendChild(document.createTextNode(e));this.appendToHead(i)}},appendToHead:function(e){(document.getElementsByTagName("head")[0]||document.documentElement).appendChild(e)}};window.b24form.Loader=new e})();
//# sourceMappingURL=https://smttech.bitrix24.ru/bitrix/js/crm/site/form/embed/unit/script.map.js

window.b24form.Loader.run({"form":{"id":"26","sec":"6nireb","lang":"ru","address":"https:\/\/smttech.bitrix24.ru","views":{"click":{"type":"panel","position":"right","vertical":"bottom"},"auto":{"type":"popup","position":"center","vertical":"bottom","delay":"5"}},"data":{"language":"ru","design":{"shadow":true,"border":{"bottom":true},"color":{"primary":"#23527c","primaryText":"#FFFFFF","text":"#000000","background":"#FFFFFF","fieldBorder":"#00000019","fieldBackground":"#00000014","fieldFocusBackground":"#ffffffff"}},"title":"SEND YOUR CONTACT, PLEASE. WE WILL RESPOND TO YOU FOR 15 MINUTES","desc":"","buttonCaption":"Get price","useSign":false,"date":{"dateFormat":"DD.MM.YYYY","dateTimeFormat":"DD.MM.YYYY HH:MI:SS","sundayFirstly":false},"currency":{"code":"RUB","title":"\u0420\u0443\u0431\u043b\u044c","format":"# \u0440\u0443\u0431."},"fields":[{"id":"CONTACT_NAME","name":"CONTACT_NAME","label":"Your name","visible":true,"required":true,"multiple":false,"type":"name","placeholder":"","value":"","items":[],"bigPic":false},{"id":"CONTACT_PHONE","name":"CONTACT_PHONE","label":"Phone","visible":true,"required":true,"multiple":false,"type":"phone","placeholder":"","value":"","items":[],"bigPic":false},{"id":"CONTACT_EMAIL","name":"CONTACT_EMAIL","label":"E-mail","visible":true,"required":true,"multiple":false,"type":"email","placeholder":"","value":"","items":[],"bigPic":false}],"agreements":[{"id":"AGREEMENT_18","name":"AGREEMENT_18","label":"By clicking the \u00abREQUEST A CALL\u00bb button I hereby give permision to process my personal data in accordance with GDPR law on conditions and for purposes stated at Agreement for processing of personal data.","value":"Y","required":true,"checked":true,"content":{"title":"We never sell personal data and we carry out all p","url":null,"text":"We never sell personal data and we carry out all processing operations in strict compliance with the EU General Data Protection Regulation (GDPR).\r\n\r\nCookies are stored on your individual device and you have full control over their use. You may deactivate or restrict the transmission of cookies by changing the settings of your web browser. Cookies data that are already stored may be deleted (only if you are a registered user or provide us with the full cookie identificator) at any time by appealing to our support team \u2014 info@kayosmt.eu.\r\n\r\nIf you visit KAYO SMT site with cookies deactivated, you may possibly not be able to use all of the functions of our site to the full extent. You will not be able to opt-out of any cookies or other technologies that are \u201cstrictly necessary\u201d for the functioning of our website and services.\r\n\r\nYou can exercise any of the rights mentioned in this Privacy Policy in your Account and\/or by contact with KAYO SMT team info@kayosmt.eu:\r\nWhere you have provided consent, you may withdraw it at any time, without affecting the lawfulness of the processing that was carried out prior to withdrawing it. Whenever you withdraw consent, you acknowledge and accept that this may have a negative influence on the quality of the KAYO SMT Site and\/or Services. You further agree that KAYO SMT shall not be held liable with respect to any loss and\/or damage to your Personal Data if you choose to withdraw consent.\r\n\r\nWhere Personal Data is processed for the above purposes on the basis of KAYO SMT legitimate interests, under the GDPR, you may object to such processing at any time. To do so please contact: info@kayosmt.eu.\r\n\r\nYou may opt-out from having KAYO SMT collect your information when visiting an KAYO SMT Enabled Site at any time by contact with or KAYO SMT support team: info@kayosmt.eu"}}],"dependencies":[],"recaptcha":{"use":false}}},"resources":{"app":"https:\/\/cdn-ru.bitrix24.ru\/b664753\/crm\/form\/app.js","polyfill":"https:\/\/cdn-ru.bitrix24.ru\/b664753\/crm\/form\/polyfill.js"}});
})();


})();