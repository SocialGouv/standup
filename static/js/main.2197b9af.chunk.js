(this["webpackJsonp@socialgouv/standup"]=this["webpackJsonp@socialgouv/standup"]||[]).push([[0],{15:function(e,t){e.exports=[{titre:"DIDOC",timeout:60,description:"D\xe9mat\xe9rialisation des Invitations au D\xe9pistage Organis\xe9 des Cancer"},{titre:"Maraudes",timeout:60,description:"Le dossier social partag\xe9 des personnes \xe0 la rue"},{titre:"MedL\xe9",slug:"medle",timeout:60,image:"images/medle.png",description:"Observatoire Interminist\xe9riel de la M\xe9decine L\xe9gale<br>Plateforme permettant aux \xe9tablissements de sant\xe9 de d\xe9clarer leur activit\xe9 m\xe9dico-l\xe9gale"},{titre:"Tumeplay",slug:"passpreservatif",timeout:60,image:"images/tumeplay.jpg",kpis:{"Nombre d'abonn\xe9s Instagram":282,"Publication avec le plus de likes":"Orgasme et jouissance : c'est la m\xeame chose ?","Nombre de jeunes rencontr\xe9s en test utilisateurs":38},description:"L'app pour (presque) tout savoir sur la sexualit\xe9 pour les moins de 25 ans !"},{titre:"TextStyle",slug:"textstyle",timeout:60,image:"images/textstyle.png",description:"TextStyle simplifie la r\xe9daction des textes juridiques."},{titre:"Work In France",slug:"workinfrance",timeout:60,image:"images/work-in-france.png",kpis:{"Nombre de demandes":24415,"Temps de traitement moyen":"10 jours","Satisfaction usagers":"9.4/10"},description:"La plateforme de demande d'autorisation provisoire de travail pour les \xe9tudiants \xe9trangers"},{titre:"e-MJPM",slug:"emjpm",timeout:60,image:"images/emjpm.png",description:"Trouver rapidement le bon professionnel pour les majeurs \xe0 prot\xe9ger."},{titre:"DomiFa",slug:"domifa",timeout:60,image:"images/domifa.png",description:"Faciliter l'acc\xe8s aux droits pour les personnes sans domicile stable, en simplifiant la gestion de la domiciliation",kpis:{"Structures inscrites":26,"Dossiers enregistr\xe9s":3480,Utilisateurs:63}},{titre:"Code du travail num\xe9rique",slug:"code-du-travail",image:"images/cdtn.png",timeout:60,kpis:{"Visites la semaine derni\xe8re":"16 482 (60 006)","Taux de satisfaction d\xe9clar\xe9":"46.6% (48.0%)"},description:"Faciliter l'acc\xe8s au droit du travail pour les employeur\xb7e\xb7s et les salari\xe9\xb7e\xb7s"},{titre:"Siao Data",slug:"siao-data",timeout:60,image:"images/datalab.png",kpis:{"Visites hebdo de la carte (moy.)":80,"Nb SIAO utilisant Dashboard":65},description:"Comment l'analyse des donn\xe9es peut aider le 115 \xe0 mieux r\xe9pondre aux demandes des personnes en d\xe9tresse"},{titre:"Ops",slug:"ops",timeout:60,image:"images/udd.png",description:"Mettre \xe0 disposition une infrastructure DevOps pour r\xe9duire le time-to-market des d\xe9veloppements et am\xe9liorer la qualit\xe9"},{titre:"FCE",slug:"fce",timeout:60,image:"images/fce.png",description:"Un portail pour faciliter l\u2019acc\xe8s aux informations disponibles sur les entreprises et les \xe9changes entre services"},{titre:"Archifiltre",slug:"archifiltre",timeout:60,image:"images/archifiltre.jpg",description:"Aider les archivistes et les producteurs de documents bureautiques \xe0 appr\xe9hender des arborescences compl\xe8tes de fichiers pour les traiter"},{titre:"EgaPro",slug:"egapro",timeout:60,image:"images/egapro.png",kpis:{"Visites par jour":370,"Index moyen 2019":"82/100","Taux de satisfaction":"78%"},description:"Calculer et transmettre l'index \xe9galit\xe9 professionnelle hommes - femmes d'une entreprise"},{titre:"RAMSES",timeout:60,kpis:{"Use cases trait\xe9s":1,"Indicateurs calcul\xe9s":"100%"},description:"R\xe9guler et Accompagner la Masse Salariale et l\u2019Emploi du Secteur social et m\xe9dico-social."},{titre:"Sujets transverses",timeout:300,entries:["\ud83d\uddf3\ufe0f Prochain s\xe9minaire (XIIe) le 28/02 \xe0 16h @L'incubateur",'\ud83e\udd50 \u2615\ufe0f \ud83e\udd64 PtitDej "RGPD" le 03/03 \xe0 9h30','\ud83d\udcc3 Wiki de l\'incubateur \xe0 compl\xe9ter sur Github \ud83d\udc49 <a href="https://github.com/SocialGouv/socialgouv.github.io/wiki">socialgouv.github.io/wiki</a>','\ud83d\udcc3 Editer le standup \ud83d\udc49 <a href="https://github.com/SocialGouv/standup">github.com/SocialGouv/standup</a>']}]},17:function(e,t,a){e.exports=a(25)},24:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var i=a(6),s=a(7),n=a(10),r=a(9),o=a(11),l=a(1),c=a.n(l),u=a(13),m=a.n(u),d=a(14),p=a.n(d),g=a(15),h=a.n(g),f=a(26),x=a(27),v=function(e){function t(){var e,a;Object(i.a)(this,t);for(var s=arguments.length,o=new Array(s),l=0;l<s;l++)o[l]=arguments[l];return(a=Object(n.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(o)))).state={start:null},a.tick=function(){a.forceUpdate()},a}return Object(o.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({start:new Date}),this.interval=setInterval(this.tick,1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"componentWillReceiveProps",value:function(){this.setState({start:new Date})}},{key:"render",value:function(){var e=this.state.start&&parseInt(((new Date).getTime()-this.state.start.getTime())/1e3,10)||0;return this.props.render({elapsed:e})}}]),t}(c.a.Component),b=function(e){return String(e<10?"0"+e:e)},y=function(e){var t=e.seconds,a=e.timeout,i=void 0===a?4:a;return c.a.createElement("div",{className:"display-1",style:{color:t>i?"#b00":"#999"}},function(e){var t=0,a=0;return a=e>=60?e-60*(t=Math.floor(e/60)):e,"".concat(b(t),":").concat(b(a))}(t))},E=a(28),k=function(e){var t=e.style,a=e.buttonText,i=e.onClick;return c.a.createElement("div",{class:"text-center",style:t},c.a.createElement(E.a,{size:"lg",outline:!0,color:"primary",onClick:i,style:{margin:"20px auto",minWidth:300,fontSize:"2em"}},"> ",a))},S=function(e){var t=e.titre,a=e.slug,i=e.description,s=e.image,n=(e.url,e.kpis,e.html),r=e.timeout,o=e.buttonText,l=e.entries;return c.a.createElement("div",{style:{display:"flex",flexDirection:"column",height:"100vh"}},c.a.createElement(f.a,{style:{flex:"0 0 auto"}},c.a.createElement(x.a,{sm:6},c.a.createElement("h1",{className:"display-4",style:{lineHeight:2}},t)),c.a.createElement(x.a,{className:"text-right",sm:6},c.a.createElement(v,{render:function(e){var t=e.elapsed;return c.a.createElement(y,{seconds:t,timeout:r})}}))),c.a.createElement("p",{style:{borderBottom:"1px solid #efefef",flex:"0 0 auto",marginBottom:20,paddingBottom:20},className:"h3",dangerouslySetInnerHTML:{__html:i}}),(s||a)&&c.a.createElement(f.a,{style:{flex:"1 0 auto"}},s&&c.a.createElement(x.a,{sm:a?6:12,className:"image-appear",style:{backgroundImage:"url(".concat(s,")"),backgroundPosition:"center center",backgroundRepeat:"no-repeat",backgroundSize:"contain",display:"block"}}),a&&c.a.createElement(x.a,{sm:s?6:12,className:"d-flex"},c.a.createElement("iframe",{id:"carnets",className:"flex-fill",title:"Carnets de bord des produits",style:{border:0},src:"https://carnets.fabrique.social.gouv.fr/standup?team=".concat(a)}))),l&&c.a.createElement("ul",{className:"h3",style:{marginTop:30,flex:"1 0 auto"}},l.map((function(e){return c.a.createElement("li",{key:e,style:{margin:"30px 0"},dangerouslySetInnerHTML:{__html:e}})}))),n&&c.a.createElement("p",{className:"h3",style:{margin:"20px 0",flex:"1 0 auto"},dangerouslySetInnerHTML:{__html:n}}),!s&&!n&&!l&&c.a.createElement("div",{className:"h1 text-center",style:{flex:"1 0 auto",color:"#999",marginTop:250}},"En construction"),o&&c.a.createElement(k,{style:{flex:"0 0 auto"},buttonText:o}))},j=(a(24),function(e){e.onClick;return c.a.createElement("div",{className:"text-center"},c.a.createElement("h1",{className:"text-intro","data-h1":"Stand up",style:{marginTop:"30%",fontSize:"10em"}},"Stand up"),c.a.createElement("h3",{style:{color:"#999"}},"standup.fabrique.social.gouv.fr"),c.a.createElement(k,{style:{},buttonText:"commencer"}))}),T=function(e){function t(){var e,a;Object(i.a)(this,t);for(var s=arguments.length,o=new Array(s),l=0;l<s;l++)o[l]=arguments[l];return(a=Object(n.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(o)))).state={index:-1},a.next=function(){Math.min(a.props.startups.length-1,a.state.index+1)!==a.state.index&&a.setState((function(e){return{index:Math.min(a.props.startups.length-1,e.index+1)}}))},a.prev=function(){Math.max(-1,a.state.index-1)!==a.state.index&&a.setState((function(e){return{index:Math.max(-1,e.index-1)}}))},a.onKeyEvent=function(e){"left"===e?a.prev():"right"===e?a.next():"space"===e&&a.next()},a}return Object(o.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.index>-1&&this.props.startups[this.state.index],t=this.state.index>-1&&this.state.index<this.props.startups.length-1&&this.props.startups[this.state.index+1];return c.a.createElement("div",{className:"container",onClick:this.next},c.a.createElement(p.a,{handleKeys:["left","right","space"],onKeyEvent:this.onKeyEvent}),-1===this.state.index?c.a.createElement(j,{onClick:this.next}):c.a.createElement(S,Object.assign({},e,{buttonText:t&&t.titre})))}}]),t}(c.a.Component),I=document.getElementById("root");m.a.render(c.a.createElement(T,{startups:h.a}),I)}},[[17,1,2]]]);
//# sourceMappingURL=main.2197b9af.chunk.js.map