/**
 * jQuery.fullBg
 * Version 1.0
 * Copyright (c) 2010 c.bavota - http://bavotasan.com
 * Dual licensed under MIT and GPL.
 * Date: 02/23/2010
**/
(function(a){a.fn.fullBg=function(){function c(){var c=b.width(),d=b.height(),e=a(window).width(),f=a(window).height(),g=e/c,h=f/d,i=h*c,j=g*d;j>f?b.css({width:e+"px",height:j+"px"}):b.css({width:i+"px",height:f+"px"})}var b=a(this);c(),a(window).resize(function(){c()})}})(jQuery)