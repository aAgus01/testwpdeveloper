;(function($){
	function extp_masonry(){
		if (typeof imagesLoaded === "function"){
			var $container = $('.extp-masonry:not(.column-1) .ctgrid');
			$container.imagesLoaded( function() {
				$container.masonry({
					itemSelector: '.item-grid',
					horizontalOrder: true
				});
			});
		}
	}
    $(window).load(function() {
		extp_masonry();
	});
	$(document).ready(function() {
    	function extp_lightbox(){
			$('.exlightbox').each(function(){
			var $class = $(this).data('class');
			var lightbox = GLightbox();
			/*var isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i);*/
			var lightboxDescription = GLightbox({
			  selector: $class,
			  moreLength:0,
			  touchNavigation: true,
			  lightboxHtml : '<div id="glightbox-body" class="exteam-lb glightbox-container">\
			      <div class="gloader visible"></div>\
			      <div class="goverlay"></div>\
			      <div class="gcontainer">\
			         <div id="glightbox-slider" class="gslider"></div>\
			         <a class="gnext"></a>\
			         <a class="gprev"></a>\
			         <a class="gclose"></a>\
			      </div>\
			  </div>',
			  onOpen: function(slide, data) {
			    $('.exteam-lb .ginner-container .gslide-description').each(function(){
					var $this = $(this);
					/*if(isMobile){
						$this.css('overflow','scroll');
					}else{*/
						$this.closest(".gslide ").addClass('ehd-scroll');
						$this.niceScroll({cursorcolor:"rgb(66, 66, 66)",horizrailenabled:false});
						setTimeout(function(){
							$this.getNiceScroll().resize();
						$this.closest(".gslide ").removeClass('ehd-scroll');
						}, 800);
					/*}*/
			    });
			  },
			});
			});
		};
		extp_lightbox();
		// End lightbox js

		//Start ex-hidden(modal)
		$('.fct-modal .ctgrid, .fct-modal .ctlist').on("click",".item-grid", function(event){
				$id_act = $(this).data('id');
				$id_parent = $(this).closest(".ex-tplist ").attr('id');
				event.preventDefault();
				$('.item-modl').removeClass('md-active').hide();
				$('#'+$id_act).addClass('md-active').show();
				$('.exp-modal-info').getNiceScroll().resize();
				$("#"+$id_parent+" .ex-hidden").addClass('ex-hidden-active');
				$("#"+$id_parent+" .ex-overlay").addClass('ex-overlay-active');
				setTimeout(function(){
					$('html').addClass('extp-hidden-scroll');
				}, 400);
			});
		function extp_modal_info(){
			$('.exp-modal-info').each(function(){
				var $this = $(this);
				$this.niceScroll({
					cursorcolor:"rgba(66, 66, 66, .8)",
					autohidemode:'false', 
					background:"rgba(0, 0, 0,.15)",
					cursorwidth: "6px",
					});
				setTimeout(function(){
				  $this.getNiceScroll().resize();
				}, 800);
			});
		};
		$('.fct-modal .extp-mdbutton').on("click",".extp-mdleft", function(event){
				var $crr = $('.item-modl.md-active');
				var $prev = $('.item-modl.md-active').prev();
				if(!$prev.length){ return;}
				$crr.fadeOut(300);
				$prev.addClass('md-active').fadeIn(300);
				setTimeout(function(){
					$('.exp-modal-info').getNiceScroll().resize();
				}, 400);
				$crr.removeClass('md-active');
			});
		$('.fct-modal .extp-mdbutton').on("click",".extp-mdright", function(event){
				var $crr = $('.item-modl.md-active');
				var $nex = $('.item-modl.md-active').next();
				if(!$nex.length){ return;}
				$crr.fadeOut(300);
				$nex.addClass('md-active').fadeIn(300)
				setTimeout(function(){
					$('.exp-modal-info').getNiceScroll().resize();
				}, 400);
				$crr.removeClass('md-active');
			});
		$('.fct-modal .extp-mdbutton ').on("click",".extp-mdclose", function(event){
				$id_parent = $(this).closest(".ex-tplist ").attr('id');
				$("#"+$id_parent+" .ex-overlay").removeClass('ex-overlay-active');
				$("#"+$id_parent+" .ex-hidden").removeClass('ex-hidden-active');
				setTimeout(function(){
					$('html').removeClass('extp-hidden-scroll');
				}, 400);
			});
		function extp_modal_overlay(){
			$('.fct-modal .ex-overlay').on("click", function(event){
				$(this).removeClass('ex-overlay-active');
				$id_parent = $(this).closest(".ex-tplist ").attr('id');
				$("#"+$id_parent+" .ex-hidden").removeClass('ex-hidden-active');
				setTimeout(function(){
					$('html').removeClass('extp-hidden-scroll');
				}, 400);
			});
		};
		extp_modal_info();
		extp_modal_overlay();
		//End ex-hidden(modal)

		//Start collaps(expand)
		$('.ex-tplist.fct-collapse .ctgrid').on("click",".exp-arrow", function(event){
			event.preventDefault();
			$parent = $(this).closest(".item-grid");
			if ($parent.hasClass('active-collaps')) {
				$parent.removeClass('active-collaps');
			}else{
				$('.fct-collapse .item-grid').removeClass('active-collaps');
				$parent.addClass('active-collaps');
			}
			$('html').addClass('ehd-scroll');
			$('.fct-collapse .item-grid .exp-expand-des').niceScroll({
				cursorcolor:"rgba(66, 66, 66, .8)",
				//background: "rgba(0, 0, 0,.15)",
				cursorwidth: "6px",
				horizrailenabled:false,
				autohidemode:false,
				//railpadding: {top: '25px', right: 0, left: 0, bottom: '25px'}
			});
			setTimeout(function(){
				$('.fct-collapse .item-grid .exp-expand-des').getNiceScroll().resize();
				$('html').removeClass('ehd-scroll');
			}, 500);
		});
		$('.ex-tplist.fct-collapse .ctgrid').on("click",".exp-expand-close",function(event){
			event.preventDefault();
			$parent = $(this).closest(".active-collaps");
			$parent.removeClass('active-collaps');
			setTimeout(function(){
				$('.fct-collapse .item-grid .exp-expand-des').getNiceScroll().resize();
				$('html').removeClass('ehd-scroll');
			}, 300);
		});
		$('.ex-tplist.fct-collapse .ctgrid').on("click",".exp-expand-next", function(event){
			event.preventDefault();
			$parent = $(this).closest(".active-collaps");
			$parent.removeClass('active-collaps');
			if ($parent.next().length > 0) {
				$next = $parent.next().addClass('active-collaps');
			}
			setTimeout(function(){
				$('.fct-collapse .item-grid .exp-expand-des').getNiceScroll().resize();
				$('html').removeClass('ehd-scroll');
			}, 300);
			
		});
		$('.ex-tplist.fct-collapse .ctgrid').on("click",".exp-expand-pre", function(event){
			event.preventDefault();
			$parent = $(this).closest(".active-collaps");
			$parent.removeClass('active-collaps');
			if ($parent.prev().length > 0) {
				$prev = $parent.prev().addClass('active-collaps');
			}
			setTimeout(function(){
				$('.fct-collapse .item-grid .exp-expand-des').getNiceScroll().resize();
				$('html').removeClass('ehd-scroll');
			}, 300);
		});
		//End collaps


		// Carousel
		function extp_carousel(id_clas,infinite,start_on,rtl_mode,slidesshow,auto_play,auto_speed,$slidestoscroll){
		  jQuery(id_clas).EX_ex_s_lick({
			infinite: infinite,
			initialSlide:start_on,
			rtl: rtl_mode =='yes' ? true : false,
			prevArrow:'<button type="button" class="ex_s_lick-prev"><i class="fa fa-angle-left"></i></button>',
			nextArrow:'<button type="button" class="ex_s_lick-next"><i class="fa fa-angle-right"></i></button>',	
			slidesToShow: slidesshow,
			slidesToScroll: $slidestoscroll!='' ? $slidestoscroll : slidesshow,
			dots: false,
			autoplay: auto_play==1 ? true : false,
			autoplaySpeed: auto_speed!='' ? auto_speed : 3000,
			arrows: true,
			centerMode:  false,
			focusOnSelect: true,
			adaptiveHeight: true,
			responsive: [
			  {
				breakpoint: 1024,
				settings: {
				  slidesToShow: slidesshow,
				  slidesToScroll: $slidestoscroll!='' ? $slidestoscroll : slidesshow,
				}
			  },
			  {
				breakpoint: 768,
				settings: {
				  slidesToShow: 2,
				  slidesToScroll: 1
				}
			  },
			  {
				breakpoint: 480,
				settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1
				}
			  }
			]
			  
		  });
		}
		jQuery('.ex-tpcarousel').each(function(){
			var $this = jQuery(this);
			var id =  $this.attr('id');
			var slidesshow =  $this.data('slidesshow');
			if(slidesshow==''){ slidesshow = 3;}
			var startit =  $this.data('startit') > 0 ? $this.data('startit') : 1;
			var auto_play = $this.data('autoplay');
			var auto_speed = $this.data('speed');
			var slidestoscroll = $this.data('slidestoscroll');
			var rtl_mode = $this.data('rtl');
			var start_on =  $this.data('start_on') > 0 ? $this.data('start_on') : 0;
			if($this.data('infinite')=='0'){
			  var infinite = 0;
			}else{
			  var infinite =  $this.data('infinite') == 'yes' || $this.data('infinite') == '1' ? true : false;
			}
			extp_carousel('#'+id+' .ctgrid',infinite,start_on,rtl_mode,slidesshow,auto_play,auto_speed,slidestoscroll);
		});
		// End Carousel

		//DataTable
		
		function extp_table_modal(){
			$('.fct-modal tbody').on("click", ".exp-td-first", function(event){
				event.preventDefault();
				var $next = $(this).next();
				$next.find(".item-grid").trigger('click');
			});
		};
		function extp_table_lightbox(){
			$('.fct-lightbox tbody').on("click",".exp-td-first", function(event){
				event.preventDefault();
				var $next = $(this).next();
				$next.find(".exlightbox").trigger('click');
			});
		};
		extp_table_modal();
		extp_table_lightbox();
		//End datatable
		// ajax loadmore
		function extp_ajax_load_page($style,$this_click,id_crsc,$page_link){
			if($style !='loadmore'){
				$('#'+id_crsc+' .page-numbers').removeClass('disable-click');
			}
			if($('#'+id_crsc).hasClass('fct-collapse')){
				$('#'+id_crsc+'.fct-collapse .item-grid').removeClass('active-collaps');
				setTimeout(function(){
					$('#'+id_crsc+'.fct-collapse .item-grid .exp-expand-des').getNiceScroll().resize();
				}, 300);
			}
			$this_click.addClass('disable-click');
			var n_page = $('#'+id_crsc+' input[name=num_page_uu]').val();
			if($style=='loadmore'){
				$('#'+id_crsc+' .loadmore-exbt').addClass("loading");
			}else{
				$('#'+id_crsc).addClass("loading");
			}
			var layout = $('#'+id_crsc).hasClass('table-layout') ? 'table' : '';
			if($('#'+id_crsc).hasClass('list-layout')){ layout = 'list';}
			var param_query  		= $('#'+id_crsc+' input[name=param_query]').val();
			var param_ids  		= $('#'+id_crsc+' input[name=param_ids]').val();
			var page  		= $('#'+id_crsc+' input[name=current_page]').val();
			var num_page  		= $('#'+id_crsc+' input[name=num_page]').val();
			var ajax_url  		= $('#'+id_crsc+' input[name=ajax_url]').val();
			var param_shortcode  		= $('#'+id_crsc+' input[name=param_shortcode]').val();
			var char_ft = $('#'+id_crsc+' .etp-alphab a').length ? $('#'+id_crsc+' .etp-alphab a.current').data('value') : '';
				var param = {
					action: 'extp_loadmore',
					param_query: param_query,
					param_ids: param_ids,
					id_crsc: id_crsc,
					page: $page_link!='' ? $page_link : page*1+1,
					param_shortcode: param_shortcode,
					layout: layout,
					char: char_ft,
				};
				$.ajax({
					type: "post",
					url: ajax_url,
					dataType: 'json',
					data: (param),
					success: function(data){
						if(data != '0')
						{
							if($style=='loadmore'){
								n_page = n_page*1+1;
								$('#'+id_crsc+' input[name=num_page_uu]').val(n_page)
								if(data.html_content == ''){ 
									$('#'+id_crsc+' .loadmore-exbt').remove();
								}else{
									$('#'+id_crsc+' input[name=current_page]').val(page*1+1);
									if(layout=='table'){
										var $g_container = $('#'+id_crsc+' table tbody');
										$g_container.append(data.html_content);
									}else if(layout=='list'){
										var $g_container = $('#'+id_crsc+' .ctlist');
										$g_container.append(data.html_content);
									}else{
										var $g_container = $('#'+id_crsc+' .ctgrid');
										$g_container.append(data.html_content);
										setTimeout(function(){ 
											$('#'+id_crsc+' .item-grid').addClass("active");
										}, 200);
									}
									$('#'+id_crsc+' .loadmore-exbt').removeClass("loading");
									$this_click.removeClass('disable-click');
								}
								if(n_page == num_page){
									$('#'+id_crsc+' .loadmore-exbt').remove();
								}
							}else{
								if(layout=='table'){
									$showin = $('#'+id_crsc+' table tbody');
								}else if(layout=='list'){
									$showin = $('#'+id_crsc+' .ctlist');
								}else{
									$showin = $('#'+id_crsc+' .ctgrid');
								}
								$($showin).fadeOut({
									duration:0,
									complete:function(){
										$( this ).empty();
									}
								});
								$('#'+id_crsc).removeClass("loading");
								$showin.append(data.html_content).fadeIn();

							}
							if(data.html_modal!=''){
								// $('#'+id_crsc+' .ex-hidden .exp-mdcontaner').fadeOut({
								// 	duration:0,
								// 	complete:function(){
								// 		$( this ).empty();
								// 	}
								// });
								$('#'+id_crsc+' .ex-hidden .exp-mdcontaner').append(data.html_modal).fadeIn();
							}
							extp_lightbox();
							extp_modal_info();
							extp_table_modal();
							extp_table_lightbox();
							
							if($('#'+id_crsc).hasClass('extp-masonry') && !$('#'+id_crsc).hasClass('column-1')){
								if (typeof imagesLoaded === "function"){
									$('#'+id_crsc+'.extp-masonry .ctgrid').imagesLoaded( function() {
										$('#'+id_crsc+'.extp-masonry .ctgrid').masonry('reloadItems');
										$('#'+id_crsc+'.extp-masonry .ctgrid').masonry({
											isInitLayout : false,
											horizontalOrder: true,
											itemSelector: '.item-grid'
										});
									});
								}
							}
						}else{$('#'+id_crsc+' .loadmore-exbt').html('error');}
					}
				});
			return false;	
		}
		function extp_loadmore(){
			$('.loadmore-exbt').on('click',function() {
				if($(this).hasClass('disable-click')){
					return;
				}
				var $this_click = $(this);
				var id_crsc  = $this_click.closest(".ex-tplist").attr('id');
				extp_ajax_load_page($style ='loadmore' ,$this_click,id_crsc,'');
			});
		}
		extp_loadmore();
		// End load more

		//Start paging
		$('.ex-tplist .extp-pagination-parent').on('click','.page-numbers',function(event) {
			event.preventDefault();
			var $this_click = $(this);
			var id_crsc  		= $this_click.closest(".ex-tplist").attr('id');
			$('#'+id_crsc+' .page-numbers').removeClass('current');
			$($this_click).addClass('current');
			$page_link = $this_click.text();
			if($page_link*1 > 1){
				$('#'+id_crsc+' .prev-ajax').removeClass('disable-click');
			}
			$('#'+id_crsc+' .next-ajax').removeClass('disable-click');
			extp_ajax_load_page($style ='page_link',$this_click,id_crsc,$page_link);
		});
		$('.ex-tplist .extp-pagination-parent').on('click','.next-ajax',function(event) {
			event.preventDefault();
			var $this_click = $(this);
			var id_crsc = $this_click.closest(".ex-tplist").attr('id');
			var $current =  $('#'+id_crsc+' .current');
			var current_page =  $current.text();
			$('#'+id_crsc+' .prev-ajax').removeClass('disable-click');

			$current.removeClass('current');
			$current.next().addClass('current');
			$page_link = current_page*1+1;
			extp_ajax_load_page($style ='page_link',$this_click,id_crsc,$page_link);
			$this_click.removeClass('disable-click');
		});
		$('.ex-tplist .extp-pagination-parent').on('click','.prev-ajax',function(event) {
			event.preventDefault();
			var $this_click = $(this);
			var id_crsc = $this_click.closest(".ex-tplist").attr('id');
			var $current =  $('#'+id_crsc+' .page-navi .current');
			var current_page =  parseInt($current.text());
			$('#'+id_crsc+' .next-ajax').removeClass('disable-click');
			if (current_page == 1) {
				$('#'+id_crsc+' .prev-ajax').addClass('disable-click');
				return false;
			}
			$current.removeClass('current');
			$current.prev().addClass('current');
			$page_link = current_page-1;
			extp_ajax_load_page($style ='page_link',$this_click,id_crsc,$page_link);
			if($page_link*1 > 1){
				$('#'+id_crsc+' .prev-ajax').removeClass('disable-click');
			}
		});
		$('.etp-alphab ul li a').on('click',function(event) {
			event.preventDefault();
			var $this_click = $(this);
			var char_ft = $(this).data('value');
			var id_crsc = $this_click.closest(".ex-tplist").attr('id');
			var cat = $('#'+id_crsc+' select[name=extp_cat]').val();
			var loc = $('#'+id_crsc+' select[name=extp_location]').val();
			if (loc == undefined) {loc ='';}
			var key_word = $('#'+id_crsc+' input[name=s]').val();
			var mode = 'alphab';
			extp_ajax_search($this_click,char_ft,key_word,cat,mode,loc);
			return false;
		});
		function extp_ajax_search($this_click,$char_ft, $key_word,$cat,mode,location){
			var id_crsc = $this_click.closest(".ex-tplist").attr('id');
			if($('#'+id_crsc).hasClass('fct-collapse')){
				$('#'+id_crsc+'.fct-collapse .item-grid').removeClass('active-collaps');
				setTimeout(function(){
					$('#'+id_crsc+'.fct-collapse .item-grid .exp-expand-des').getNiceScroll().resize();
				}, 300);
			}
			$('#'+id_crsc+' .etp-alphab a').removeClass('current');
			if(mode=='alphab'){
				$($this_click).addClass('current');
			}else{
				$('#'+id_crsc+' .etp-alphab li:first-child a').addClass('current');
			}
			var layout = $('#'+id_crsc).hasClass('table-layout') ? 'table' : '';
			$('#'+id_crsc).addClass("loading");
			if($('#'+id_crsc).hasClass('list-layout')){ layout = 'list';}
			var param_query  		= $('#'+id_crsc+' input[name=param_query]').val();
			var ajax_url  		= $('#'+id_crsc+' input[name=ajax_url]').val();
			var param_shortcode  		= $('#'+id_crsc+' input[name=param_shortcode]').val();
			var param = {
				action: 'extp_filter_alphab',
				param_query: param_query,
				id_crsc: id_crsc,
				param_shortcode: param_shortcode,
				layout: layout,
				char: $char_ft,
				key_word: $key_word,
				cat: $cat,
				location: location,
			};
			$.ajax({
				type: "post",
				url: ajax_url,
				dataType: 'json',
				data: (param),
				success: function(data){
					if(data != '0')
					{
						if($('#'+id_crsc+' .ex-loadmore').length){
							var $loadmore=1;
							if(data.page_navi =='off'){
								$('#'+id_crsc+' .ex-loadmore .loadmore-exbt').remove();
							}else{
								$('#'+id_crsc+' .ex-loadmore').remove();	
							}
							
						};
						$('#'+id_crsc+' input[name=num_page_uu]').val('1');
						$('#'+id_crsc+' input[name=current_page]').val('1');
						if(layout=='table'){
							$showin = $('#'+id_crsc+' table tbody');
						}else if(layout=='list'){
							$showin = $('#'+id_crsc+' .ctlist');
						}else{
							$showin = $('#'+id_crsc+' .ctgrid');
						}
						$($showin).fadeOut({
							duration:0,
							complete:function(){
								$( this ).empty();
							}
						});
						if(data.page_navi !='' && data.page_navi !='off'){
							if ($loadmore ==1) {
								$('#'+id_crsc).append(data.page_navi);
							}
							else{
								$('#'+id_crsc+' .extp-pagination').fadeOut({
									duration:0,
									complete:function(){
										$( this ).remove();
									}
								});
								$('#'+id_crsc+' .extp-pagination-parent').append(data.page_navi);
							}
						}else if(data.page_navi=='off'){
								$('#'+id_crsc+' .extp-pagination .page-navi').fadeOut({
									duration:0,
									complete:function(){
										$( this ).remove();
									}
								});
						}
						$('#'+id_crsc).removeClass("loading");
						$showin.append(data.html_content).fadeIn();
						if(data.html_modal!=''){
							$('#'+id_crsc+' .ex-hidden .exp-mdcontaner').fadeOut({
								duration:0,
								complete:function(){
									$( this ).empty();
								}
							});
							$('#'+id_crsc+' .ex-hidden .exp-mdcontaner').append(data.html_modal).fadeIn();
						}
						extp_lightbox();
						extp_modal_info();
						extp_table_modal();
						extp_table_lightbox();
						extp_loadmore();
						if($('#'+id_crsc).hasClass('extp-masonry') && !$('#'+id_crsc).hasClass('column-1')){
							if (typeof imagesLoaded === "function"){
								$('#'+id_crsc+'.extp-masonry .ctgrid').imagesLoaded( function() {
									$('#'+id_crsc+'.extp-masonry .ctgrid').masonry('reloadItems');
									$('#'+id_crsc+'.extp-masonry .ctgrid').masonry({
										isInitLayout : false,
										horizontalOrder: true,
										itemSelector: '.item-grid'
									});
								});
							}
						}
					}else{$('#'+id_crsc+' .loadmore-exbt').html('error');}
				}
			});
			
		};
		//search 
		$('.ex-tplist .tp-search-submit').on('click',function(event) {
			event.preventDefault();
			var $this_click = $(this);
			var id_crsc = $this_click.closest(".ex-tplist").attr('id');
			var cat = $('#'+id_crsc+' select[name=extp_cat]').val();
			var loc = $('#'+id_crsc+' select[name=extp_location]').val();
			if (loc == undefined) {loc ='';}
			var key_word = $('#'+id_crsc+' input[name=s]').val();
			var mode = 'search';
			extp_ajax_search($this_click,'',key_word,cat,mode,loc);
			return false;
		});
		$('.ex-tplist select[name=extp_cat]').on('change',function(event) {
			event.preventDefault();
			var $this_click = $(this);
			var id_crsc = $this_click.closest(".ex-tplist").attr('id');
			var cat = $('#'+id_crsc+' select[name=extp_cat]').val();
			var loc = $('#'+id_crsc+' select[name=extp_location]').val();
			if (loc == undefined) {loc ='';}
			var key_word = $('#'+id_crsc+' input[name=s]').val();
			var mode = 'search';
			extp_ajax_search($this_click,'',key_word,cat,mode,loc);
			return false;
		});
		// location filter
		$('.ex-tplist select[name=extp_location]').on('change',function(event) {
			event.preventDefault();
			var $this_click = $(this);
			var id_crsc = $this_click.closest(".ex-tplist").attr('id');
			var cat = $('#'+id_crsc+' select[name=extp_cat]').val();
			var loc = $('#'+id_crsc+' select[name=extp_location]').val();
			if (cat == undefined) {cat ='';}
			var key_word = $('#'+id_crsc+' input[name=s]').val();
			if (key_word == undefined) {key_word ='';}
			var mode = 'search';
			extp_ajax_search($this_click,'',key_word,cat,mode,loc);
			return false;
		});
		// child cat category click
		$('.ex-tplist .extp-search .extp-child_cat.extp-cat-box .extp-child-click').on('click',function(event) {
			event.preventDefault();
			var $this_click = $(this);
			var id_crsc = $this_click.closest(".ex-tplist").attr('id');
			var $parent = $this_click.closest(".extp-child_cat");
			$parent.find('.extp-child-click').removeClass('extp-child-active');
			$this_click.addClass('extp-child-active');
			$this_click.parents('li.extp-child-click').addClass('extp-child-active');
			var val = $(this).data('value');
			jQuery('#'+id_crsc+' .extp-search-group > select option').each(function(){
				if($(this).val() == val){
					$('#'+id_crsc+' .extp-search-group > select').val(val).trigger('change');
				}
			});
			return false;
		});
		// child cat location
		$('.ex-tplist .extp-loc_parent .extp-child_cat .extp-child-click').on('click',function(event) {
			event.preventDefault();
			var $this_click = $(this);
			var id_crsc = $this_click.closest(".ex-tplist").attr('id');
			var $parent = $this_click.closest(".extp-child_cat");
			$parent.find('.extp-child-click').removeClass('extp-child-active');
			$this_click.addClass('extp-child-active');
			$this_click.parents('li.extp-child-click').addClass('extp-child-active');
			var val = $(this).data('value');
			jQuery('#'+id_crsc+' .extp-loc > select option').each(function(){
				if($(this).val() == val){
					$('#'+id_crsc+' .extp-loc > select').val(val).trigger('change');
				}
			});
			return false;
		});

    });    
}(jQuery));