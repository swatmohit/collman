/**
changes for, delete file automatically when max file size is 1(one)
 no delete file call needed from outside **/
function mydeleteCallback(a){var b=$n("#fileKeysAttached");hElmtVal=b.val(),b.val(hElmtVal.replace(a+",","")),""===b.val()?($("#attachTxt").html("Attach Files"),$("#isFileAttached").removeClass("dspN").addClass("dspN")):$("#attachTxt").html("Add More"),$n("#errorDiv").hide(),$("#fileInput").val(null)}function chkUploadCount(){var a=$n("#results li").length;return!(a<1)||($('<p class="fileError" style="color:red">Please Upload atleast One file</p>').insertAfter("#fileInputArea"),!1)}function chkMailContents(){var a=!0;if($n("#sendMail").isChecked()&&"block"==$n("#sendMailDiv").currObj().style.display){$n("#sendMail").val("1"),$editorExcel.viewSrc();var b=$editorExcel.cInput.val();(""==$n("#mailTemplateSubjectExcel").val()||""==b||"<br>"==b||trim(b).length>1e4)&&(a=!1)}
//alert('mail contents result' + status);
return a}function isValidInterviweeDetail(){if($n("#inp_intrvwEmail").length>0){var a=$n("#hid_intrvwEmail").val();return""==$n("#hid_intrvwEmail").val()?1:JSON.parse(a)&&JSON.parse(a).length>5?($n("#interviewEmail").html("Enter EmailId less than 5"),0):($n("#interviewEmail").html(""),1)}return 1}function beforeUploadCallback(){$n(".fileError").length>0&&$(".fileError").remove()}function myUploadCallback(){
// console.log(arguments[0]);
if("undefined"!=typeof arguments[0].ERROR)if("MAX LIMIT REACHED"==arguments[0].ERROR)$('<p class="fileError" style="color:red">Error: Number of files selected should not exceed 10. </p>').insertAfter("#fileInputArea");else if("SELECTION EXCEEDED"==arguments[0].ERROR)$('<p class="fileError" style="color:red">Error: Number of files selected should not exceed 10.</p>').insertAfter("#fileInputArea");else for(var a in arguments[0].ERROR){var b=$('<p class="fileError" style="color:red">'+arguments[0].ERROR+"</p>").insertAfter("#fileInputArea");!arguments[0].ERROR[a].name||"MAX_FILE_SIZE"!=arguments[0].ERROR[a].error&&"FILE SIZE LIMIT EXCEEDED"!=arguments[0].ERROR[a].error?arguments[0].ERROR[a].name&&"INVALID_EXTENSION"==arguments[0].ERROR[a].error?(b.html(arguments[0].ERROR[a].name),b.append(' Invalid format. File formats supported: [xls", "xlsx", "csv", "doc","docx","pdf","rtf", "zip" ,"txt"]')):""!=arguments[0].ERROR[a].name&&b.html(arguments[0].ERROR[a].name):(b.html(arguments[0].ERROR[a].name),b.append(" - Total size of attachment cannot exceed 5 MB."))}else if("undefined"!=typeof arguments[0].SUCCESS){$n("#errorDiv").hide();/*if($n('.fileError').length > 0) {
            $('.fileError').remove();
        }*/
//alert($n('#fileKeysAttached').val());
var c=$("#isFileAttached");c.hasClass("dspN")&&c.removeClass("dspN"),$("#attachTxt").html("Add More");var d=$n("#results li").length;10==d&&$("#attachTxt").length&&$("#attachTxt").html("");for(var a in arguments[0].SUCCESS){$n("#uploadMultipleFiles").removeAttr("disabled");var e=$n("#fileKeysAttached");hElmtVal=e.val(),e.val(hElmtVal+a+","),
//alert($n('#fileKeysAttached').val());
$('<span style="color:blue">'+arguments[0].SUCCESS[a].name+" </span><br>").append($("<a>").html("Download").attr({href:arguments[0].SUCCESS[a].URL,target:"_blank"})).insertAfter("#main")}}else if("undefined"!=typeof arguments[0].U42ff8b8b74fccd52478e6a2e63d01e8.ERROR)//ERROR case of basic
alert("Error: "+arguments[0].U42ff8b8b74fccd52478e6a2e63d01e8.ERROR);else{//SUCCESS case of basic
var f='<li style="color:blue"><a href="'+arguments[0].U42ff8b8b74fccd52478e6a2e63d01e8.URL+'" target="_blank">File</li>';$("#results").show().append(f)}}var ncUploader=function(a){var b,c,d,e=[],f=function(f){// change the parent of the instance to be created to 'this'
// change the parent of the instance to be created to 'this'
return f.params=a,d=f,c=a.maxNumOfFiles||0,e=a.fileKeys,g()?(ncAdvancedUploder.prototype=f,b=new ncAdvancedUploder):(c=f.params.maxNumOfFiles=1,ncBasicUploader.prototype=f,b=new ncBasicUploader),$("#"+f.params.fileId).on("change",b.upload),$.isEmptyObject(f.params.plugins)===!1&&h(a,b.pluginCallback,b.isUploadAllowed,b.getFileKey),b},g=function(){return a.forceBasicUploader!==!0&&"undefined"!=typeof File&&"undefined"!=typeof FileList},h=function(a,b,c,d){for(var e in a.plugins)pluginHandler(e,a,b,c,d)},i=function(b,c){var d={appId:a.appId,formKey:a.formKey,fileKey:b},e=a.targets.deleteUrl;$.post(e,d,function(){},"json").done(function(d,e,f){
//console.log(typeof data + data);
"undefined"!=typeof d[b].ERROR&&(callbackArguments={ERROR:{}},callbackArguments.ERROR[b]={name:c,error:"DELETE_ERROR "+d[b].ERROR},a.callback.call(window,callbackArguments))}),a.maxSize+=a.fileSizes[b],a.uploadFileLeft++,a.deleteCallback(b)};this.pluginCallback=function(b,c){var d={};if("success"===b){j("dec");d={SUCCESS:[]},c&&(d.SUCCESS=c,a.callback.call(window,d))}else"error"===b?(d={ERROR:[]},c&&(d.ERROR=c,a.callback.call(window,d))):"limitExceed"===b?(d={ERROR:"MAX LIMIT REACHED"},a.callback.call(window,d)):"selectionExceeded"===b?(d={ERROR:"SELECTION EXCEEDED"},a.callback.call(window,d)):"remove"===b&&this.deleteFile(c.fileKey,c.name)},this.deleteFile=function(a,b,c){j("inc",c),e.push(a),i(a,b)};var j=function(b,d){if(d=d||!1,"inc"==b){if(c++,1===c&&!d){for(var e in a.plugins)$("#"+a.plugins[e].buttonId).show();
//$('#' + params.dropAreaParams.id).show();
$("#"+a.fileId).show()}c===a.maxNumOfFiles&&$("#"+a.outputHolder.id).hide()}if("dec"==b&&(a.maxNumOfFiles>1&&c--,0===c)){document.ajaxq&&(document.ajaxq.q.uploadqueue=[]);for(var e in a.plugins)$("#"+a.plugins[e].buttonId).hide();$("#"+a.dropAreaParams.id).hide()}};return this.isUploadAllowed=function(){if(c<=0)return!1},this.getFileKey=function(){var b=a.maxNumOfFiles>1?e.pop():e;return b},f(this)},ncUploaderUtil={getRandomString:function(){return(new Date).getTime()+"_"+(Math.random()+"").replace(".","_")},cancel:function(){document.ajaxq.r&&document.ajaxq.r.abort()}},ncBasicUploader=function(){var a=function(a){return c=a,d=b(),$("#"+c.params.containerId).show(),c},b=function(){return $("#"+c.params.fileId)[0]};this.upload=function(){if(d=b(),d.value){var a=e();if(!a.isValid)return void c.params.callback.call(window,a.callbackArguments);f();var g=i(),h=j();k(g,h)}};var c,d,e=function(){var a=!0,b={};b={ERROR:[]};var e=!1,f=d.value.slice(d.value.lastIndexOf(".")+1).toLowerCase();if(f!=d.value)for(var g=0;g<c.params.extensions.length;++g)if(f==c.params.extensions[g]){e=!0;break}return e||(a=!1,b.ERROR={dummyFileKey:{error:"INVALID_EXTENSION"}}),{isValid:a,callbackArguments:b}},f=function(){$("#"+c.params.basicProgressBarId).show()},g=function(){return $("<input>").attr({type:"hidden",name:"uploadCallbackUrl",value:(location.origin||location.protocol+"//"+location.host)+c.params.callbackUrl})[0]},h=function(){var a="uploadCallback_"+ncUploaderUtil.getRandomString();return function(b){window[a]=function(){document.getElementById(b.params.basicProgressBarId).style.display="none","undefined"!=typeof b.params.callback&&b.params.callback.apply(window,arguments)}}(c),$("<input>").attr({type:"hidden",name:"uploadCallback",value:a})[0]},i=function(){var a="form_"+ncUploaderUtil.getRandomString(),b=$("<form>").attr({id:a,method:"POST",enctype:"multipart/form-data",action:c.params.targets.saveFileUrl}),d=$("#"+c.params.fileId);$(d.clone(!0)).insertBefore(d.next()),d.off("change"),// BUG FIX FOR 
// THIS LINE HAS TO BE KEPT JUST BEFORE file.style.display = "none" - since IE 7 @ Win XP fires a fake onchange event when file is hidden
d.hide();var e=$("<input>").attr({type:"hidden",name:"appId",value:c.params.appId});return b.append(d).append(e).append(g()).append(h()).appendTo("body"),a},j=function(){var a="iframe_"+ncUploaderUtil.getRandomString();return $('<iframe name="'+a+'">').attr({style:"position: absolute; top: -1000px; left: -1000px"}).appendTo("body"),a},k=function(a,b){$("#"+a).attr("target",b).submit()};return a(this)},ncAdvancedUploder=function(){var a,b,c=function(b){return a=b,$("#"+a.params.containerId).show(),a.params.dropAreaParams&&a.params.dropAreaParams.id&&d($("#"+a.params.dropAreaParams.id)),a},d=function(b){b.on("drop",function(b){b.preventDefault(),a.params.files=b.originalEvent.dataTransfer.files,a.upload()}),b.on("dragover",function(){return b.addClass(a.params.dropAreaParams.onHoverCssClass),!1}),b.on("dragleave",function(){return b.removeClass(a.params.dropAreaParams.onHoverCssClass),!1}),b.show()},e=function(a){var b=function(b){b.lengthComputable&&a.attr({value:b.loaded,max:b.total})};return b};this.upload=function(){if(a.params.beforeUploadCallback(),0==a.isUploadAllowed())return void a.pluginCallback("limitExceed");if("undefined"==typeof a.params.uploadFileLeft&&(a.params.uploadFileLeft={},a.params.uploadFileLeft=a.params.maxNumOfFiles),b="undefined"==typeof a.params.files?$("#"+a.params.fileId)[0].files:a.params.files,b.length){if(b.length>a.params.uploadFileLeft)return void a.pluginCallback("selectionExceeded");for(var c={appId:a.params.appId,uploadCallback:a.params.callback},d=0;d<b.length;++d){var e=f(b[d]);e.isValid?($("#"+a.params.outputHolder.id).show(),g(c,b[d]),a.params.uploadFileLeft--):a.params.callback.call(window,e.callbackArguments)}}};var f=function(b){var c=!0,d=!1,e={};e={};var f=a.params.extensions,g=b.name.slice(b.name.lastIndexOf(".")+1).toLowerCase();if(g!=b.value)for(var h=0;h<f.length;++h)if(g==f[h]){d=!0;break}return d||(c=!1,e.ERROR={dummyFileKey:{name:b.name,error:"INVALID_EXTENSION"}}),b.size>a.params.maxSize?(c=!1,e.ERROR={dummyFileKey:{name:b.name,error:"FILE SIZE LIMIT EXCEEDED"}}):a.params.maxSize=a.params.maxSize-b.size,{isValid:c,callbackArguments:e}},g=function(b,c){var d,f=new FormData,g=ncUploaderUtil.getRandomString();for(name in b)f.append(name,b[name]);$.ajaxq("uploadqueue",{type:"POST",url:a.params.targets.saveFileUrl,enctype:"multipart/form-data",data:f,processData:!1,contentType:!1,dataType:"json",beforeSend:function(){d=a.getFileKey(),f.append(a.params.formKey+"["+d+"]",c);var b=$('<li class="pt5">').attr({id:g}).html('<div class="fl mr15">'+c.name+"</div>").append($("<progress>")).append($('<button class="delIcon">').attr("data",d).on("click",function(){ncUploaderUtil.cancel(),$("#"+g).remove()}));
//sizeObj[fK] = file.size;
"undefined"==typeof a.params.fileSizes&&(a.params.fileSizes={}),a.params.fileSizes[d]=c.size,a.params.outputHolder&&$("#"+a.params.outputHolder.id).append(b)},error:function(b,d,e){a.pluginCallback("error",{dummyFileKey:{name:c.name,error:e}})},success:function(b,d,e){var f={};for(var h in b)"undefined"!=typeof b[h].ERROR?(f[h]={name:c.name,error:b[h].ERROR},a.pluginCallback("error",f),$("#"+g).remove()):(f[h]={name:c.name,URL:b[h].URL},a.pluginCallback("success",f),$("#"+g+">button").unbind("click").bind("click",function(){a.pluginCallback("remove",{fileKey:h,name:c.name}),$("#"+g).remove(),a.params.onDelete?a.params.onDelete():""}))},xhr:function(){var a=$.ajaxSettings.xhr();return a.upload&&a.upload.addEventListener("progress",e($("#"+g+">progress")),!1),a},complete:function(){$("#"+g+">progress").hide()}})};return c(this)},pluginHandler=function(a,b,c,d,e){var f=function(c){c.params=b,c.isUploadAllowed=d;window[a](b.plugins[a]);return c};return this.serverHit=function(a){var d,e=ncUploaderUtil.getRandomString();if(a.fileLink){var f={appId:b.appId,uploadCallback:b.callback.toString(),formKey:b.formKey,filename:a.fileName,url:a.fileLink};$("#"+b.outputHolder.id).show(),
// var urlFiledata = new FormData();
// for (var name in data1) {
//     urlFiledata.append(name, data1[name]);
// }
"undefined"!=typeof a.fileToken&&(f.access_token=a.fileToken),
// urlFiledata.append("access_token", fileInfo.fileToken);
$.ajaxq("uploadqueue",{type:"POST",url:b.targets.saveCloudUrl,data:f,dataType:"json",beforeSend:function(){var a=$('<li class="pt5">').attr({id:e}).html('<div class="fl mr15">'+file.name+"</div>").append($("<progress>")).append($('<button class="delIcon">').on("click",function(){ncUploaderUtil.cancel(),$("#"+e).remove()}));me.params.outputHolder&&$("#"+me.params.outputHolder.id).append(a),d=me.getFileKey(),formData.append(me.params.formKey+"["+d+"]",file)},success:function(b,d,f){var g={};for(var h in b)"undefined"!=typeof b[h].ERROR?(g[h]={name:a.fileName,error:b[h].ERROR},c("error",g),$("#"+e).remove()):(g[h]={name:a.fileName,URL:b[h].URL},c("success",g),$("#"+e+">button").unbind("click").bind("click",function(){c("remove",{fileKey:h,name:a.fileName}),$("#"+e).remove(),me.params.onDelete?me.params.onDelete():""}))},error:function(b,d,e){c("error",{dummyFileKey:{name:a.fileName,error:e}})},complete:function(){$("#"+e+">img").hide()}})}},this.validateBeforeUpload=function(a,c){var d=!0,e=!1,f={};f={};for(var g=b.extensions,h=a.slice(a.lastIndexOf(".")+1).toLowerCase(),i=0;i<g.length;++i)if(h==g[i]){e=!0;break}
// console.log(fileSize, params.maxSize);
return e||(d=!1,f.ERROR={dummyFileKey:{name:a,error:"INVALID_EXTENSION"}}),"undefined"!=typeof c&&c>b.maxSize&&(d=!1,f.ERROR={dummyFileKey:{name:a,error:"FILE SIZE LIMIT EXCEEDED"}}),{isValid:d,callbackArguments:f}},f(this)};
//////////////////////////
/*
 * jQuery AjaxQ - AJAX request queueing for jQuery
 *
 * Version: 0.0.1
 * Date: July 22, 2008
 *
 * Copyright (c) 2008 Oleg Podolsky (oleg.podolsky@gmail.com)
 * Licensed under the MIT (MIT-LICENSE.txt) license.
 *
 * http://plugins.jquery.com/project/ajaxq
 * http://code.google.com/p/jquery-ajaxq/
 */
jQuery.ajaxq=function(a,b){if(
// Initialize storage for request queues if it's not initialized yet
"undefined"==typeof document.ajaxq&&(document.ajaxq={q:{},r:null}),
// Initialize current queue if it's not initialized yet
"undefined"==typeof document.ajaxq.q[a]&&(document.ajaxq.q[a]=[]),"undefined"!=typeof b)// Request settings are given, enqueue the new request
{
// Copy the original options, because options.complete is going to be overridden
var c={};for(var d in b)c[d]=b[d];b=c;
// Override the original callback
var e=b.complete;b.complete=function(b,c){
// Dequeue the current request
// if (document.ajaxq.q[queue] !== null) //added by @shubhamsethi
document.ajaxq.q[a].shift(),document.ajaxq.r=null,
// Run the original callback
e&&e(b,c),
// Run the next request from the queue
// if (document.ajaxq.q[queue] !== null) { //added by @shubhamsethi
document.ajaxq.q[a].length>0&&(document.ajaxq.r=jQuery.ajax(document.ajaxq.q[a][0]))},
// Enqueue the request
// if (document.ajaxq.q[queue] !== null) //added by @shubhamsethi
document.ajaxq.q[a].push(b),
// Also, if no request is currently running, start it
// if (document.ajaxq.q[queue] !== null) //added by @shubhamsethi
1==document.ajaxq.q[a].length&&(document.ajaxq.r=jQuery.ajax(b))}else document.ajaxq.r&&(document.ajaxq.r.abort(),document.ajaxq.r=null),document.ajaxq.q[a]=[]};