"use strict";(self.webpackChunkproject_todo=self.webpackChunkproject_todo||[]).push([[913],{8913:(F,c,s)=>{s.r(c),s.d(c,{SetDataPageModule:()=>P});var i=s(4017),n=s(95),t=s(5879),g=s(2483);let l=(()=>{class e{constructor(o){this.storage=o}checkJSONStruct(o){try{let r=!0;const u=this.parseData(o);if("Projects"in u){for(const a of u.Projects)if(!this.checkId(a)){r=!1;break}}else r=this.checkId(u);return r}catch{return!1}}setJSONData(o){const r=this.parseData(o),u=JSON.parse(this.storage.getLocalStorageProp("projects")??"[]");this.updateProjectsState(r,u),this.storage.setLocalStorageProp("projects",JSON.stringify(u))}checkIfObjectExists(o){const r=this.parseData(o);return JSON.parse(this.storage.getLocalStorageProp("projects")??"[]").some("Projects"in r?a=>r.Projects.some(v=>v.id===a.id):a=>a.id===r.id)}updateProjectsState(o,r){"Projects"in o?r.push(...o.Projects):r.push(o)}parseData(o){return JSON.parse(o)}checkId(o){return"id"in o}static#t=this.\u0275fac=function(r){return new(r||e)(t.LFG(g.V))};static#e=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac})}return e})();var d=s(2032),f=s(9157),m=s(2490),p=s(6814);function S(e,h){1&e&&(t.TgZ(0,"div",7),t._uU(1," \u041e\u0448\u0438\u0431\u043a\u0430 \u0432 JSON \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0435 "),t.qZA())}function O(e,h){1&e&&(t.TgZ(0,"div",7),t._uU(1," \u041f\u043e\u043b\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e "),t.qZA())}function J(e,h){1&e&&(t.TgZ(0,"div",7),t._uU(1," \u0412 \u0432\u0430\u0448\u0435\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0435 \u043d\u0430\u0439\u0434\u0435\u043d \u043e\u0431\u044a\u0435\u043a\u0442, ID \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0443\u0436\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d "),t.qZA())}const N=[{path:"",component:(()=>{class e{constructor(o,r,u,a){this.cdr=o,this.fb=r,this.handler=u,this.router=a}ngOnInit(){this.form=this.fb.group({JSONField:[null,[n.kI.required]]})}onSetData(){const o=this.form.value.JSONField;this.handler.checkJSONStruct(o)?this.handler.checkIfObjectExists(o)?this.form.controls.JSONField.setErrors({duplicatedId:!0}):(this.handler.setJSONData(this.form.value.JSONField),this.router.navigate(["/pages/projects"])):this.form.controls.JSONField.setErrors({invalidJSON:!0})}ngOnDestroy(){}static#t=this.\u0275fac=function(r){return new(r||e)(t.Y36(t.sBO),t.Y36(n.qu),t.Y36(l),t.Y36(i.F0))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-set-data-page"]],decls:12,vars:4,consts:[[1,"page-wrapper"],[1,"page-title"],[1,"form",3,"formGroup","ngSubmit"],[1,"textarea-field"],["matInput","","formControlName","JSONField","cdkAutosizeMinRows","10",1,"textarea-input"],["class","error",4,"ngIf"],["type","submit","btnName","\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"],[1,"error"]],template:function(r,u){1&r&&(t.TgZ(0,"section",0)(1,"h1",1),t._uU(2,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 JSON:"),t.qZA(),t.TgZ(3,"form",2),t.NdJ("ngSubmit",function(){return u.onSetData()}),t.TgZ(4,"mat-form-field",3)(5,"mat-label"),t._uU(6,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 JSON"),t.qZA(),t._UZ(7,"textarea",4),t.qZA(),t.YNc(8,S,2,0,"div",5),t.YNc(9,O,2,0,"div",5),t.YNc(10,J,2,0,"div",5),t._UZ(11,"app-btn",6),t.qZA()()),2&r&&(t.xp6(3),t.Q6J("formGroup",u.form),t.xp6(5),t.Q6J("ngIf",null==u.form.controls.JSONField.errors?null:u.form.controls.JSONField.errors.invalidJSON),t.xp6(1),t.Q6J("ngIf",(null==u.form.controls.JSONField.errors?null:u.form.controls.JSONField.errors.required)&&u.form.controls.JSONField.touched),t.xp6(1),t.Q6J("ngIf",null==u.form.controls.JSONField.errors?null:u.form.controls.JSONField.errors.duplicatedId))},dependencies:[n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u,d.Nt,f.KE,f.hX,m.r,p.O5],styles:[".form[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center}.page-title[_ngcontent-%COMP%]{text-align:center;margin:3rem}.textarea-field[_ngcontent-%COMP%]{min-width:30rem}.textarea-field[_ngcontent-%COMP%]   .textarea-input[_ngcontent-%COMP%]{min-height:20rem}.error[_ngcontent-%COMP%]{color:red;margin-bottom:1rem}"],changeDetection:0})}return e})()}];let D=(()=>{class e{static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275mod=t.oAB({type:e});static#r=this.\u0275inj=t.cJS({imports:[i.Bz.forChild(N),i.Bz]})}return e})(),P=(()=>{class e{static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275mod=t.oAB({type:e});static#r=this.\u0275inj=t.cJS({providers:[l],imports:[D,n.UX,d.c,m.r,p.ez]})}return e})()}}]);