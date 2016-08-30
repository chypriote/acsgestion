(function(c,b){var a=function(e){var f=this;this.panel=e;this.selectedItem=null;this.init=function(){c("#md-toolbar a").click(function(){if(c(this).hasClass("mdt-text")){f.panel.addBoxItem("text")}else{if(c(this).hasClass("mdt-image")){f.panel.addBoxItem("image")}else{if(c(this).hasClass("mdt-video")){f.panel.addBoxItem("video")}else{if(c(this).hasClass("mdt-align-left")){f.panel.alignLeftSelectedBox()}else{if(c(this).hasClass("mdt-align-right")){f.panel.alignRightSelectedBox()}else{if(c(this).hasClass("mdt-align-center")){f.panel.alignCenterSelectedBox()}else{if(c(this).hasClass("mdt-align-top")){f.panel.alignTopSelectedBox()}else{if(c(this).hasClass("mdt-align-bottom")){f.panel.alignBottomSelectedBox()}else{if(c(this).hasClass("mdt-align-vcenter")){f.panel.alignMiddleSelectedBox(c("input.mdt-spacei","#md-toolbar").val())}else{if(c(this).hasClass("mdt-spacev")){f.panel.spaceVertical(c("input.mdt-spacei","#md-toolbar").val())}else{if(c(this).hasClass("mdt-spaceh")){f.panel.spaceHorizontal(c("input.mdt-spacei","#md-toolbar").val())}}}}}}}}}}}return false});c("input.mdt-width","#md-toolbar").keyup(function(){if(c("a.mdt-proportions","#md-toolbar").hasClass("mdt-proportions-yes")){var h=c("a.mdt-proportions","#md-toolbar").data("proportions");if(h>0){c("input.mdt-height","#md-toolbar").val(Math.round(c(this).val()/h))}}});c("input.mdt-height","#md-toolbar").keyup(function(){if(c("a.mdt-proportions","#md-toolbar").hasClass("mdt-proportions-yes")){var h=c("a.mdt-proportions","#md-toolbar").data("proportions");if(h>0){c("input.mdt-width","#md-toolbar").val(Math.round(c(this).val()*h))}}});c("input, select","#md-toolbar").keypress(function(h){var i=h.keyCode||h.which;if(i==13){c(this).trigger("change");h.preventDefault()}});c("input.mdt-input, select.mdt-input","#md-toolbar").change(function(){var h=c(this).attr("name");switch(h){case"background-transparent":case"background-color":f.panel.setItemBackground(h,c(this).val());return true;break;case"left":case"top":f.panel.setItemAttribute(h,c(this).val());break;case"width":case"height":f.panel.setItemSize(c("input.mdt-width","#md-toolbar").val(),c("input.mdt-height","#md-toolbar").val());break;case"font-size":f.panel.setItemFontSize(h,c(this).val());break;case"style":f.panel.setItemStyle(h,c(this).val());break;case"opacity":f.panel.setItemOpacity(h,c(this).val());break;case"mdtclass":f.panel.setItemClass(h,c(this).val());break;case"color":f.panel.setItemColor(c(this).val());break;case"border-color":f.panel.setItemBorderColor(h,c(this).val());break;case"border-width":f.panel.setItemCssPx(h,c(this).val());break;case"border-style":f.panel.changeBorderStyle(c(this).val());break;default:f.panel.setItemCss(h,c(this).val())}return false});c("a.button-style","#md-toolbar").click(function(){if(c(this).hasClass("active")){f.panel.setItemCss(c(this).attr("name"),c(this).attr("normal"));c(this).removeClass("active")}else{f.panel.setItemCss(c(this).attr("name"),c(this).attr("active"));c(this).addClass("active")}return false});c("a.button-align","#md-toolbar").click(function(){if(c(this).hasClass("active")){if(c(this).hasClass("mdt-left-alignment")){return}f.panel.setItemCss("text-align","left");c("a.mdt-left-alignment","#md-toolbar").addClass("active");c(this).removeClass("active")}else{f.panel.setItemCss("text-align",c(this).attr("value"));c("a.button-align","#md-toolbar").removeClass("active");c(this).addClass("active")}return false});c("textarea","#md-toolbar").keyup(function(){f.panel.setItemTitle(c(this).val())});c("a.mdt-proportions","#md-toolbar").click(function(){if(!(c("#md-toolbar").attr("disabled"))||c("#md-toolbar").attr("disabled")=="false"){if(c(this).hasClass("mdt-proportions-yes")){c(this).removeClass("mdt-proportions-yes")}else{var i=c("input.mdt-width","#md-toolbar").val();var h=c("input.mdt-height","#md-toolbar").val();var j=1;if(i>0&&h>0){j=i/h}c(this).data("proportions",j);c(this).addClass("mdt-proportions-yes")}}});c("#dlg-video").dialog({resizable:false,autoOpen:false,draggable:false,modal:true,width:680,buttons:{OK:function(){f.updateVideo(c("#videoid").val(),c("#videoname").val(),c("#videothumb").attr("src"));c(this).dialog("close")}},open:function(){var h=f.getVideoValue();c("#videoid").val(h.id);c("#videoname").val(h.name);c("#videothumb").attr("src",h.thumbsrc)},close:function(){c(this).empty()}});c("input[name=background-color]","#md-toolbar").spectrum({showInput:true,allowEmpty:true,preferredFormat:"hex",showButtons:false,move:function(h){if(h){c("input[name=background-color]","#md-toolbar").val(h.toHexString()).trigger("change")}else{c("input[name=background-color]","#md-toolbar").val("").trigger("change")}},hide:function(){var h=c("input[name=background-color]","#md-toolbar").val();if(h!=""){c("input[name=background-transparent]","#md-toolbar").removeAttr("disabled");c("input[name=background-color]","#md-toolbar").spectrum("set",h)}else{c("input[name=background-transparent]","#md-toolbar").attr("disabled","disabled");c("input[name=background-color]","#md-toolbar").spectrum("set","")}}});c("input.mdt-color","#md-toolbar").spectrum({showInput:true,allowEmpty:true,preferredFormat:"hex",showButtons:false,move:function(h){if(h){c("input.mdt-color","#md-toolbar").val(h.toHexString()).trigger("change")}else{c("input.mdt-color","#md-toolbar").val("").trigger("change")}},hide:function(){var h=c("input.mdt-color","#md-toolbar").val();if(h!=""){c("input.mdt-color","#md-toolbar").spectrum("set",h)}else{c("input.mdt-color","#md-toolbar").spectrum("set","")}}});c("#btn-search").live("click",function(){var i=c("#txtvideoid").val();var h=drupalSettings.MDSlider.jsonConfigURL;c.post(h,{action:"getVideoInfo",url:i},function(j){switch(j.type){case"youtube":if(j.data){var k=j.data;c("#videoid").val(j.fid);c("#videoname").val(k.title);c("#videothumb").attr("src",k.thumbnail_url)}break;case"vimeo":if(j.data){var k=j.data[0];console.log(k);c("#videoid").val(k.id);c("#videoname").val(k.title);c("#videothumb").attr("src",k.thumbnail_large)}break;default:alert("Could not find video info for this link. Try again!");break}if(c("#videothumb").size()<=0){c("#videothumb").parent().append('<a class="panel-change-videothumb" href="#">[Change video thumb]</a>')}})});c("#change-video").click(function(){var i=f.getVideoValue(),j=(i.id!="")?1:0,h=drupalSettings.MDSlider.htmlConfigURL;c.post(h,{action:"formVideoSettings",change:j},function(k){c("#dlg-video").append(k).dialog("open")});return false});c(".video-display-mode","#md-toolbar").change(function(){if(f.panel.selectedItem){c(f.panel.selectedItem).data("displayMode",c(this).val())}});c(".mdt-type-image").change(function(){var j=c("input.mdt-image-fileid").val(),i=c("img.mdt-imgsrc").attr("src"),h=c("textarea.mdt-imgalt").val();f.panel.setImageData(j,h,i)});c("#md-toolbar select.mdt-font-family").change(function(){f.panel.changeFontFamily(c(this).val());f.changeFontWeightOption(c("option:selected",this).data("fontweight"))});c("#md-toolbar select.mdt-font-weight").change(function(){var h=c(this).val();c(this).data("value",h);f.panel.setItemFontWeight(h)});c("#border-position a").click(function(){if(c(this).hasClass("bp-all")){var h=c(this).siblings();if(h.filter(".active").size()<4){h.addClass("active")}else{h.removeClass("active")}}else{c(this).toggleClass("active")}f.changeBorderPosition()});c("#border-color","#md-toolbar").spectrum({showInput:true,preferredFormat:"hex",showButtons:false,move:function(h){if(h){c("#border-color","#md-toolbar").val(h.toHexString()).trigger("change")}else{c("#border-color","#md-toolbar").val("").trigger("change")}},hide:function(h){var h=c("#border-color","#md-toolbar").val();c("#border-color","#md-toolbar").spectrum("set",h)}});c("#md-toolbar input.mdt-border-radius").change(function(){if(c(this).val()!=""&&!isNaN(c(this).val())){if(c(this).siblings("input.mdt-border-radius").filter('[value=""]').size()==3){var h=parseInt(c(this).val());c(this).siblings("input.mdt-border-radius").each(function(){c(this).val(h);f.panel.setItemCssPx(c(this).attr("name"),h)})}}else{c(this).val(0)}f.panel.setItemCssPx(c(this).attr("name"),c(this).val())});c("#md-toolbar input.mdt-padding").change(function(){if(c(this).val()!=""&&!isNaN(c(this).val())){if(c(this).siblings("input.mdt-padding").filter('[value=""]').size()==3){var h=parseInt(c(this).val());c(this).siblings("input.mdt-padding").each(function(){c(this).val(h);f.panel.setItemCssPx(c(this).attr("name"),h)})}}else{c(this).val(0)}f.panel.setItemCssPx(c(this).attr("name"),c(this).val())});c("#md-toolbar input.mdt-custom-class").change(function(){var h=c(this).val();c(this).data("value",h);f.panel.setItemClass(h)});c("#md-toolbar a.mdt-addlink").click(function(){var h=f.selectedItem.getItemValues();var i=c.extend({value:"",title:"",color:"",background:"",transparent:"",border:"",target:""},h.link);c("#mdt-linkexpand input.mdt-link-value").val(i.value);c("#mdt-linkexpand input.mdt-link-title").val(i.title);c("#mdt-linkexpand input.link-color").val(i.color);c("#mdt-linkexpand select.mdt-link-target").val(i.target);if(i.color){c("#mdt-linkexpand input.link-color").spectrum("set","#"+i.color)}else{c("#mdt-linkexpand input.link-color").spectrum("set","")}c("#mdt-linkexpand input.link-background").val(i.background);if(i.background){c("#mdt-linkexpand input.link-background").spectrum("set","#"+i.background)}else{c("#mdt-linkexpand input.link-background").spectrum("set","")}c("#mdt-linkexpand input.link-background-transparent").val(i.transparent);c("#mdt-linkexpand input.link-border").val(i.border);if(i.border){c("#mdt-linkexpand input.link-border").spectrum("set","#"+i.border)}else{c("#mdt-linkexpand input.link-border").spectrum("set","")}c("#mdt-linkexpand").data("item",f.selectedItem).show();c(document).bind("click",g)});c("#mdt-linkexpand a.mdt-link-close").click(function(){c("#mdt-linkexpand").data("item",null);c("#mdt-linkexpand").hide()});c("#link-color, #link-background, #link-border").spectrum({allowEmpty:true,preferredFormat:"hex",showInput:true,showButtons:false,move:function(h){if(h){c(this).val(h.toHexString())}else{c(this).val("")}},hide:function(){var h=c(this).val();c(this).spectrum("set",h)}});c("#mdt-linkexpand a.mdt-link-save").click(function(){f.saveLinkData();c("#mdt-linkexpand").hide();c(document).unbind("click",g)});c("#mdt-linkexpand a.mdt-link-remove").click(function(){var h=c("#mdt-linkexpand").data("item");if(h!=null){c(h).data("link",null)}c("#mdt-linkexpand").data("item",null);c("#mdt-linkexpand").hide()});f.disableToolbar()};this.saveLinkData=function(){var i=c("#mdt-linkexpand").data("item"),h={value:c("#mdt-linkexpand input.mdt-link-value").val(),title:c("#mdt-linkexpand input.mdt-link-title").val(),target:c("#mdt-linkexpand select.mdt-link-target").val(),color:c("#mdt-linkexpand input.link-color").val(),background:c("#mdt-linkexpand input.link-background").val(),transparent:c("#mdt-linkexpand input.link-background-transparent").val(),border:c("#mdt-linkexpand input.link-border").val()};c("#link-color, #link-background, #link-border").spectrum("hide");if(h.value!=""&&i!=null){c(i).data("link",h)}};this.changeBorderPosition=function(){var k=c("#border-position a.bp-top").hasClass("active")?1:0,h=c("#border-position a.bp-right").hasClass("active")?2:0,i=c("#border-position a.bp-bottom").hasClass("active")?4:0,j=c("#border-position a.bp-left").hasClass("active")?8:0;f.panel.changeBorderPosition(k+h+i+j)};this.weightArray={"100":"Thin","100italic":"Thin Italic","200":"Extra Light","200italic":"Extra Light Italic","300":"Light","300italic":"Light Italic","400":"Normal","400italic":"Italic","500":"Medium","500italic":"Medium Italic","600":"Semi Bold","600italic":"Semi Bold Italic","700":"Bold","700italic":"Bold Italic","800":"Extra Bold","800italic":"Extra Bold Italic","900":"Heavy","900italic":"Heavy Italic"};this.changeFontWeightOption=function(l){var j='<option value=""></option>';var n=c("#md-toolbar select.mdt-font-weight").data("value");if(l){var l=""+l+"",o=(l.search(",")!=-1)?l.split(","):[l],h=f.weightArray;for(var k=0;k<o.length;k++){var m=o[k];j+='<option value="'+m+'">'+h[m]+"</option>"}}c("#md-toolbar select.mdt-font-weight").html(j).val(n)};this.changeSelectItem=function(h){this.selectedItem=h;this.triggerChangeSelectItem()};this.triggerChangeSelectItem=function(){f.saveLinkData();c("#mdt-linkexpand").hide();if(this.selectedItem==null){this.disableToolbar()}else{this.changeToolbarValue();if(c("#md-toolbar").attr("disabled")){this.enableToolbar()}}};this.disableToolbar=function(){c("input, select, textarea","#md-toolbar").not("input.mdt-spacei").val("").attr("disabled",true);c("#md-toolbar div.mdt-item-type").hide();c("#md-toolbar").attr("disabled",true)};this.enableToolbar=function(){c("input, select, textarea","#md-toolbar").removeAttr("disabled");c("#md-toolbar").attr("disabled",false)};this.changeToolbarValue=function(){if(this.selectedItem!=null){var h=this.selectedItem.getItemValues();c("input.mdt-width","#md-toolbar").val(h.width);c("input.mdt-height","#md-toolbar").val(h.height);c("input.mdt-left","#md-toolbar").val(h.left);c("input.mdt-top","#md-toolbar").val(h.top);c("input.mdt-starttime","#md-toolbar").val(h.starttime);c("input.mdt-stoptime","#md-toolbar").val(h.stoptime);c("select.mdt-startani","#md-toolbar").val(h.startani);c("select.mdt-stopani","#md-toolbar").val(h.stopani);c("input.mdt-opacity","#md-toolbar").val(h.opacity);c("input.mdt-custom-class","#md-toolbar").val(h.mdtclass);c("select.mdt-style","#md-toolbar").val(h.style);c("input.mdt-background","#md-toolbar").val(h.backgroundcolor);if(h.backgroundcolor){c("input[name=background-color]","#md-toolbar").spectrum("set","#"+h.backgroundcolor)}else{c("input[name=background-color]","#md-toolbar").spectrum("set","")}c("input.mdt-background-transparent","#md-toolbar").val(h.backgroundtransparent);c("#border-position a").removeClass("active");var i=h.borderposition;if(i&1){c("#border-position a.bp-top").addClass("active")}if(i&2){c("#border-position a.bp-right").addClass("active")}if(i&4){c("#border-position a.bp-bottom").addClass("active")}if(i&8){c("#border-position a.bp-left").addClass("active")}c("input.mdt-border-width","#md-toolbar").val(h.borderwidth);c("select.mdt-border-style","#md-toolbar").val(h.borderstyle);if(h.bordercolor){c("#border-color","#md-toolbar").spectrum("set","#"+h.bordercolor)}else{c("#border-color","#md-toolbar").spectrum("set","")}c("input.border-color","#md-toolbar").val(h.bordercolor);c("input.mdt-br-topleft","#md-toolbar").val(h.bordertopleftradius);c("input.mdt-br-topright","#md-toolbar").val(h.bordertoprightradius);c("input.mdt-br-bottomright","#md-toolbar").val(h.borderbottomrightradius);c("input.mdt-br-bottomleft","#md-toolbar").val(h.borderbottomleftradius);c("input.mdt-p-top","#md-toolbar").val(h.paddingtop);c("input.mdt-p-right","#md-toolbar").val(h.paddingright);c("input.mdt-p-bottom","#md-toolbar").val(h.paddingbottom);c("input.mdt-p-left","#md-toolbar").val(h.paddingleft);var j=1;if(h.width>0&&h.height>0){j=h.width/h.height}c("a.mdt-proportions","#md-toolbar").data("proportions",j);var k=c("#md-toolbar div.mdt-item-type").hide();c('select.mdt-startani > option[value="shuffleLetter"]',"#md-toolbar").hide();if(h.type=="text"){c('select.mdt-startani > option[value="shuffleLetter"]',"#md-toolbar").show();c("textarea.mdt-textvalue","#md-toolbar").val(h.title);c(k).filter(".mdt-type-text").show();c("input.mdt-fontsize","#md-toolbar").val(h.fontsize);c("select.mdt-font-family","#md-toolbar").val(h.fontfamily).trigger("change");c("select.mdt-font-weight","#md-toolbar").val(h.fontweight);c("a.mdt-font-bold","#md-toolbar").toggleClass("active",(h.fontweight=="bold"));c("a.mdt-font-italic","#md-toolbar").toggleClass("active",(h.fontstyle=="italic"));c("a.mdt-font-underline","#md-toolbar").toggleClass("active",(h.textdecoration=="underline"));c("a.mdt-font-allcaps","#md-toolbar").toggleClass("active",(h.texttransform=="uppercase"));c("a.mdt-left-alignment","#md-toolbar").toggleClass("active",(h.textalign=="left"));c("a.mdt-center-alignment","#md-toolbar").toggleClass("active",(h.textalign=="center"));c("a.mdt-right-alignment","#md-toolbar").toggleClass("active",(h.textalign=="right"));c("a.mdt-justified-alignment","#md-toolbar").toggleClass("active",(h.textalign=="justified"));c("input.mdt-color","#md-toolbar").val(h.color);if(h.color){c("input.mdt-color","#md-toolbar").spectrum("set","#"+h.color)}else{c("input.mdt-color","#md-toolbar").spectrum("set","")}}else{if(h.type=="image"){c("textarea.mdt-imgalt","#md-toolbar").val(h.title);c("img.mdt-imgsrc","#md-toolbar").attr("src",h.thumb);c("input.mdt-fileid","#md-toolbar").val(h.fileid);c(k).filter(".mdt-type-image").show()}else{if(h.type=="video"){c("textarea.mdt-videoname","#md-toolbar").val(h.title);c("input.mdt-video-fileid","#md-toolbar").val(h.fileid);c("img.mdt-videosrc","#md-toolbar").attr("src",h.thumb);c(k).filter(".mdt-type-video").show();c("#md-toolbar input.mdt-color").attr("disabled",true);if(h.displayMode!=undefined){c("select.video-display-mode","#md-toolbar").val(h.displayMode)}else{c("select.video-display-mode","#md-toolbar").val("inline")}}}}}};this.changePositionValue=function(i,h){c("input.mdt-left","#md-toolbar").val(Math.round(i));c("input.mdt-top","#md-toolbar").val(Math.round(h))};this.changeSizeValue=function(i,h){c("input.mdt-width","#md-toolbar").val(Math.round(i));c("input.mdt-height","#md-toolbar").val(Math.round(h))};this.getItemSetting=function(){return{starttime:c("input.mdt-starttime","#md-toolbar").val(),stoptime:c("input.mdt-stoptime","#md-toolbar").val(),startani:c("select.mdt-startani","#md-toolbar").val(),stopani:c("select.mdt-stopani","#md-toolbar").val(),customclass:c("input.mdt-custom-class","#md-toolbar").val(),style:c("select.mdt-style","#md-toolbar").val()}};this.changeTimelineValue=function(){if(this.selectedItem!=null){c("input.mdt-starttime","#md-toolbar").val(Math.round(this.selectedItem.data("starttime")));c("input.mdt-stoptime","#md-toolbar").val(Math.round(this.selectedItem.data("stoptime")))}};this.updateVideo=function(j,h,i){c("textarea.mdt-videoname","#md-toolbar").val(h);c("input.mdt-video-fileid","#md-toolbar").val(j);c("img.mdt-videosrc","#md-toolbar").attr("src",i);f.panel.setVideoData(j,h,i)};this.getVideoValue=function(){return{name:c("textarea.mdt-videoname","#md-toolbar").val(),thumbsrc:c("img.mdt-videosrc","#md-toolbar").attr("src"),id:c("input.mdt-video-fileid","#md-toolbar").val(),}};this.focusEdit=function(){if(this.selectedItem!=null){var h=this.selectedItem.data("type");if(h=="text"){c("textarea.mdt-textvalue","#md-toolbar").focus()}else{if(h=="image"){c("#change-image").trigger("click")}else{if(h=="video"){c("#change-video").trigger("click")}}}}};var g=function(h){if(!d(c("#mdt-linkexpand").get(0),h.target,c("#mdt-linkexpand").get(0))){f.saveLinkData();c("#mdt-linkexpand").data("item",null);c("#mdt-linkexpand").hide();c(document).unbind("click",g)}},d=function(j,i,h){if(j==i){return true}if(j.contains){return j.contains(i)}if(j.compareDocumentPosition){return !!(j.compareDocumentPosition(i)&16)}var k=i.parentNode;while(k&&k!=h){if(k==j){return true}k=k.parentNode}return false};this.init()};window.MdSliderToolbar=a})(jQuery,Drupal);