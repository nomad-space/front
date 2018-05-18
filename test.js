var Ug = function(a, b, c) {
    var d = a;
    if (a instanceof Fk || a instanceof Ek || a instanceof Gk || a instanceof Hk) return a.resolve(b, c);
    if (!(a instanceof Ik))
      if (bb(a)) {
        d = [];
        for (var e = 0; e < a.length; e++) d[e] = Ug(a[e], b, c)
      } else if (a && "object" == typeof a) {
        d = {};
        for (var f in a) a.hasOwnProperty(f) && (d[f] = Ug(a[f], b, c))
      }
    return d
  },
  Lk = function() {
    for (var a = [__jsm, 'wt_cg5_plattform',
 '1',
 '(function(){return WebtrekkController.Parameter.contentGroup[5]})();',
 _T(3), 'cookie_cpn_auslesen',
 '(function(){for(var b\x3d/(?:^|\x26)cpn\x3d([^\x26]*)(?:\x26|$)/i,d\x3d\x22hdesession\\x3d\x22,e\x3ddocument.cookie.split(\x22;\x22),c\x3d0;c\x3ce.length;c++){for(var a\x3de[c];\x22 \x22\x3d\x3da.charAt(0);)a\x3da.substring(1,a.length);if(0\x3d\x3da.indexOf(d))var f\x3da.substring(d.length,a.length)}return(b\x3db.exec(f))?b[1]:\x22\x22})();',
 _T(6), 'cookie_han_auslesen',
 '(function(){for(var b\x3d/(?:^|\x26)han\x3d([^\x26]*)(?:\x26|$)/i,d\x3d\x22hdesession\\x3d\x22,e\x3ddocument.cookie.split(\x22;\x22),c\x3d0;c\x3ce.length;c++){for(var a\x3de[c];\x22 \x22\x3d\x3da.charAt(0);)a\x3da.substring(1,a.length);if(0\x3d\x3da.indexOf(d))var f\x3da.substring(d.length,a.length)}return(b\x3db.exec(f))?b[1]:\x22\x22})();',
 _T(9), 'cookie_subagentcode_auslesen',
 '(function(){for(var b\x3d/(?:^|\x26)SubAgentCode\x3d([^\x26]*)(?:\x26|$)/i,d\x3d\x22hdesession\\x3d\x22,e\x3ddocument.cookie.split(\x22;\x22),c\x3d0;c\x3ce.length;c++){for(var a\x3de[c];\x22 \x22\x3d\x3da.charAt(0);)a\x3da.substring(1,a.length);if(0\x3d\x3da.indexOf(d))var f\x3da.substring(d.length,a.length)}return(b\x3db.exec(f))?b[1]:\x22\x22})();',
 _T(12), 'wt_frontendsprache',
 '(function(){for(var b\x3d/(?:^|\x26)lng\x3d([^\x26]*)(?:\x26|$)/i,d\x3d\x22SHOPPERMANAGER%2FAT\\x3d\x22,e\x3ddocument.cookie.split(\x22;\x22),c\x3d0;c\x3ce.length;c++){for(var a\x3de[c];\x22 \x22\x3d\x3da.charAt(0);)a\x3da.substring(1,a.length);if(0\x3d\x3da.indexOf(d))var f\x3da.substring(d.length,a.length)}return(b\x3db.exec(f))?b[1]:\x22\x22})();',
 _T(15), 'wt_business_segment',
 '(function(){for(var b\x3d/(?:^|\x26)bs\x3d([^\x26]*)(?:\x26|$)/i,d\x3d\x22businesssegment2\\x3d\x22,e\x3ddocument.cookie.split(\x22;\x22),c\x3d0;c\x3ce.length;c++){for(var a\x3de[c];\x22 \x22\x3d\x3da.charAt(0);)a\x3da.substring(1,a.length);if(0\x3d\x3da.indexOf(d))var f\x3da.substring(d.length,a.length)}return(b\x3db.exec(f))?b[1]:\x22Unknown\x22})();',
 _T(18), 'wt_locationid_search',
 '(function(){var a\x3dWebtrekkController.Parameter.customEcommerceParameter[18];if(-1\x3d\x3da.indexOf(\x22_\x22))return a;var b\x3da.lastIndexOf(\x22_\x22);return a\x3da.substring(b+1)})();',
 _T(21), 'wt_locationid_hds',
 '(function(){var a\x3dWebtrekkController.Parameter.productCategory[1];if(-1\x3d\x3da.indexOf(\x22_\x22))return a;var b\x3da.lastIndexOf(\x22_\x22);return a\x3da.substring(b+1)})();',
 _T(24), 'wt_hotel_stars',
 '(function(){return WebtrekkController.Parameter.customEcommerceParameter[1]})();',
 _T(27), 'wt_roomnights',
 '(function(){var a\x3dWebtrekkController.Parameter.customEcommerceParameter[10],b\x3dWebtrekkController.Parameter.customEcommerceParameter[11];return a*b})();',
 _T(30), 'wt_arrivaldate_unixtimestamp',
 '(function(){daystoarrival\x3dparseInt(WebtrekkController.Parameter.customEcommerceParameter[12]);var a\x3dnew Date;a.setDate(a.getDate()+daystoarrival);return a\x3dMath.round(a.getTime()/1E3)})();',
 _T(33), 'wt_warenkorb_averageroomnight_eur',
 '(function(){total\x3dWebtrekkController.Parameter.productCost;staydays\x3dparseInt(WebtrekkController.Parameter.customEcommerceParameter[11]);rooms\x3dparseInt(WebtrekkController.Parameter.customEcommerceParameter[10]);return total/(staydays*rooms)})();',
 _T(36), 'cookie_eid_auslesen',
 '(function(){var a\x3ddocument.cookie,b\x3d\x22wt3_eid\\x3d\x22;if(-1\x3d\x3da.indexOf(b))newcust\x3d\x221\x22;else{b\x3da.indexOf(b)+b.length;var c\x3da.indexOf(\x22;\x22,b);-1\x3d\x3dc\x26\x26(c\x3da.length);c-\x3db;a\x3dunescape(a.substr(b,c));-1\x3d\x3da.indexOf(\x22|\x22)?-1\x3d\x3da.indexOf(\x22#\x22)?newcust\x3da:(b\x3da.lastIndexOf(\x22#\x22),newcust\x3da.substring(0,b)):(c\x3da.lastIndexOf(\x22|\x22),-1\x3d\x3da.indexOf(\x22#\x22)?newcust\x3da.substring(c+1):(b\x3da.lastIndexOf(\x22#\x22),newcust\x3da.substring(c+1,b)))}return newcust})();',
 _T(39), 'wt_business_segment_sociomantic',
 '(function(){for(var b\x3d/(?:^|\x26)bs\x3d([^\x26]*)(?:\x26|$)/i,d\x3d\x22businesssegment2\\x3d\x22,e\x3ddocument.cookie.split(\x22;\x22),c\x3d0;c\x3ce.length;c++){for(var a\x3de[c];\x22 \x22\x3d\x3da.charAt(0);)a\x3da.substring(1,a.length);if(0\x3d\x3da.indexOf(d))var f\x3da.substring(d.length,a.length)}b\x3d(b\x3db.exec(f))?b[1]:\x22Unknown\x22;switch(b){case \x22Leisure\x22:return\x221\x22;case \x22SME\x22:return\x222\x22;default:return\x220\x22}})();',
 _T(42), 'wt_departuredate_unixtimestamp',
 '(function(){staydays\x3dparseInt(WebtrekkController.Parameter.customEcommerceParameter[11]);daystoarrival\x3dparseInt(WebtrekkController.Parameter.customEcommerceParameter[12]);daystodeparture\x3dstaydays+daystoarrival;var a\x3dnew Date;a.setDate(a.getDate()+daystodeparture);return a\x3dMath.round(a.getTime()/1E3)})();',
 _T(45), 'test_bookingnumber',
 '(function(){return BookingNumber.value})();',
 _T(48), 'test_hmid1',
 '(function(){return SearchController.HotelModels[0].HMID})();',
 _T(51), 'test_hmid2',
 '(function(){return SearchController.HotelModels[1].HMID})();',
 _T(54), 'test_hmid3',
 '(function(){return SearchController.HotelModels[2].HMID})();',
 _T(57), 'test_hotelcount_result',
 '(function(){return SearchController.FilteredHotelCount})();',
 _T(60), 'wt_arrivaldate_yyyymmdd',
 '(function(){daystoarrival\x3dparseInt(WebtrekkController.Parameter.customEcommerceParameter[12]);if(isNaN(daystoarrival))return daystoarrival;var a\x3dnew Date;a.setDate(a.getDate()+daystoarrival);var b\x3da.getDate(),c\x3da.getMonth()+1;a\x3da.getFullYear();return b\x3da+\x22-\x22+(9\x3e\x3dc?\x220\x22+c:c)+\x22-\x22+(9\x3e\x3db?\x220\x22+b:b)})();',
 _T(63), 'wt_departuredate_yyyymmdd',
 '(function(){staydays\x3dparseInt(WebtrekkController.Parameter.customEcommerceParameter[11]);daystoarrival\x3dparseInt(WebtrekkController.Parameter.customEcommerceParameter[12]);if(isNaN(staydays))return staydays;daystodeparture\x3dstaydays+daystoarrival;var a\x3dnew Date;a.setDate(a.getDate()+daystodeparture);var b\x3da.getDate(),c\x3da.getMonth()+1;a\x3da.getFullYear();return b\x3da+\x22-\x22+(9\x3e\x3dc?\x220\x22+c:c)+\x22-\x22+(9\x3e\x3db?\x220\x22+b:b)})();',
 _T(66), 'wt_newregistered_customertype',
 '(function(){return WebtrekkController.Parameter.customEcommerceParameter[19]})();',
 _T(69), 'cookie_gtagreg_auslesen',
 '(function(){var a\x3d\x22gtagreg\x22,b\x3ddocument.cookie;if(-1\x3d\x3db.indexOf(a))return\x22\x22;a\x3db.indexOf(a)+a.length+1;var c\x3db.indexOf(\x22;\x22,a);-1\x3d\x3dc\x26\x26(c\x3db.length);c-\x3da;return b\x3dunescape(b.substr(a,c))})();',
 _T(72), 'wt_unit_price_average',
 '(function(){var a\x3dWebtrekkController.Parameter.customEcommerceParameter[10],b\x3dWebtrekkController.Parameter.customEcommerceParameter[11];a*\x3db;return a\x3dMath.round(WebtrekkController.Parameter.orderValue/a*100)/100})();',
 _T(75), 'test_publicorcorporate',
 '(function(){urlspar\x3d[];strGET\x3ddocument.location.search.substr(1,document.location.search.length);if(\x22\x22!\x3dstrGET)for(gArr\x3dstrGET.split(\x22\\x26\x22),i\x3d0;i\x3cgArr.length;++i)v\x3d\x22\x22,vArr\x3dgArr[i].split(\x22\\x3d\x22),1\x3cvArr.length\x26\x26(v\x3dvArr[1]),urlspar[unescape(vArr[0])]\x3dunescape(v);var b\x3d\x22Corporate\x22,a\x3dwindow.location.hostname.replace(/([a-zA-Z0-9]+.)/,\x22\x22);if(\x22hotel.de\x22\x3d\x3da||\x22hotel.info\x22\x3d\x3da||\x22hotels.cz\x22\x3d\x3da)urlspar.cnr?(a\x3dstrGET.indexOf(\x22cnr\\x3d2140\x22),0\x3c\x3da\x26\x26(b\x3d\x22Public\x22)):b\x3d\x22Public\x22;return b})();',
 _T(78), 'wt_numberrooms',
 '(function(){var a\x3dWebtrekkController.Parameter.customEcommerceParameter[10];return a})();',
 _T(81), 'wt_staydays',
 '(function(){var a\x3dWebtrekkController.Parameter.customEcommerceParameter[11];return a})();',
 _T(84), 'test_top3hotels',
 '(function(){var a\x3d[SearchController.HotelModels[0].HMID,SearchController.HotelModels[1].HMID,SearchController.HotelModels[2].HMID];return a})();',
 _T(87), 'media_Retargeting_Weiche',
 '(function(){var a\x3ddocument.cookie,b\x3d\x22wt3_eid\\x3d\x22;if(-1\x3d\x3da.indexOf(b))newcust\x3d\x2212345\x22;else{b\x3da.indexOf(b)+b.length;var c\x3da.indexOf(\x22;\x22,b);-1\x3d\x3dc\x26\x26(c\x3da.length);c-\x3db;a\x3dunescape(a.substr(b,c));-1\x3d\x3da.indexOf(\x22|\x22)?-1\x3d\x3da.indexOf(\x22#\x22)?newcust\x3da:(b\x3da.lastIndexOf(\x22#\x22),newcust\x3da.substring(0,b)):(c\x3da.lastIndexOf(\x22|\x22),-1\x3d\x3da.indexOf(\x22#\x22)?newcust\x3da.substring(c+1):(b\x3da.lastIndexOf(\x22#\x22),newcust\x3da.substring(c+1,b)))}parseInt(newcust.substr(newcust.length-1,newcust.length-1),10);return\x22Criteo\x22})();',
 _T(90), 'wt_hotelcity',
 '(function(){return encodeURIComponent(WebtrekkController.Parameter.productCategory[1].substring(0,WebtrekkController.Parameter.productCategory[1].indexOf(\x22_\x22)))})();',
 _T(93), 'wt_hotelcountry',
 '(function(){return encodeURIComponent(WebtrekkController.Parameter.productCategory[2])})();',
 _T(96), 'wt_guests',
 '(function(){return WebtrekkController.Parameter.customEcommerceParameter[9]})();',
 _T(99), 'wt_hotelname_skyscanner_only',
 '(function(){return CookieController.GetCookieSubValue(\x22gtaghotel\x22,WebtrekkController.Parameter.product)})();',
 _T(102), 'SEM_Remarketing_Weiche',
 '(function(){var a\x3ddocument.cookie,b\x3d\x22wt3_eid\\x3d\x22;if(-1\x3d\x3da.indexOf(b))newcust\x3d\x2212345\x22;else{b\x3da.indexOf(b)+b.length;var c\x3da.indexOf(\x22;\x22,b);-1\x3d\x3dc\x26\x26(c\x3da.length);c-\x3db;a\x3dunescape(a.substr(b,c));-1\x3d\x3da.indexOf(\x22|\x22)?-1\x3d\x3da.indexOf(\x22#\x22)?newcust\x3da:(b\x3da.lastIndexOf(\x22#\x22),newcust\x3da.substring(0,b)):(c\x3da.lastIndexOf(\x22|\x22),-1\x3d\x3da.indexOf(\x22#\x22)?newcust\x3da.substring(c+1):(b\x3da.lastIndexOf(\x22#\x22),newcust\x3da.substring(c+1,b)))}return 0\x3d\x3dparseInt(newcust.substr(newcust.length-5),10)%2?0:1})();',
 _T(105), 'wt_daystoarrival',
 '(function(){return WebtrekkController.Parameter.customEcommerceParameter[12]})();',
 _T(108), 'wt_weekday_arrival',
 '(function(){daystoarrival\x3dparseInt(WebtrekkController.Parameter.customEcommerceParameter[12]);if(isNaN(daystoarrival))return daystoarrival;var a\x3dnew Date;a.setDate(a.getDate()+daystoarrival);return 0\x3d\x3da.getDay()?7:a.getDay()})();',
 _T(111), 'wt_weekday_departure',
 '(function(){staydays\x3dparseInt(WebtrekkController.Parameter.customEcommerceParameter[11]);daystoarrival\x3dparseInt(WebtrekkController.Parameter.customEcommerceParameter[12]);if(isNaN(staydays))return staydays;daystodeparture\x3dstaydays+daystoarrival;var a\x3dnew Date;a.setDate(a.getDate()+daystodeparture);return 0\x3d\x3da.getDay()?7:a.getDay()})();',
 _T(114), 'wt_numberpersons',
 '(function(){var a\x3dWebtrekkController.Parameter.customEcommerceParameter[9];return parseInt(a)})();',
 _T(117), 'searchlist_basketprice',
 '(function(){for(var b\x3dSearchController.FilteredHotelCount,c\x3d0,a\x3d0;a\x3cb;a++)c+\x3dSearchController.HotelModels[a].Price.ValueEUR;return Math.round(c/b*WebtrekkController.Parameter.customEcommerceParameter[11]*WebtrekkController.Parameter.customEcommerceParameter[10])})();',
 _T(120), 'hds_basketprice',
 '(function(){var a\x3dHotelDetailController.GroupedRoomRates;var d\x3dHotelDetailController.FilteredNumberOfRooms;var e\x3dHotelDetailController.Nights;var b;for(b in a)if(void 0\x3d\x3dc||c\x3ea[b][0].RoomPrice.Value)var c\x3da[b][0].RoomPrice.Value;return a\x3dc*d*e})();',
 _T(123), 'hds_basketprice_currency',
 '(function(){var a\x3dHotelDetailController.GroupedRoomRates,b;for(b in a)if(void 0\x3d\x3dc||c\x3ea[b][0].RoomPrice.Value){var c\x3da[b][0].RoomPrice.Value;var d\x3da[b][0].RoomPrice.Currency}return d})();',
 _T(126), 'wt_ordervalue',
 '(function(){var a\x3dWebtrekkController.Parameter.productCost;return a})();',
 _T(129), 'test_hkey',
 '(function(){if(null!\x3d\x3ddocument.getElementById(\x22HKEY\x22)){var a\x3d\x22lasthkey\x22,b\x3ddocument.getElementById(\x22HKEY\x22).innerText,c\x3dwindow.location.hostname.replace(/([a-zA-Z0-9]+.)/,\x22\x22);window.location.hostname.replace(/([a-zA-Z0-9]+.)/,\x22\x22);var d\x3dnew Date;d.setTime(d.getTime());var e\x3d864E8;d\x3dnew Date(d.getTime()+e);document.cookie\x3da+\x22\\x3d\x22+escape(b)+(e?\x22; expires\\x3d\x22+d.toGMTString():\x22\x22)+\x22; path\\x3d/\x22+(c?\x22; domain\\x3d\x22+c:\x22\x22);return document.getElementById(\x22HKEY\x22).innerText}a\x3d\x22lasthkey\x22;b\x3ddocument.cookie;if(-1\x3d\x3d\nb.indexOf(a))return\x22\x22;a\x3db.indexOf(a)+a.length+1;c\x3db.indexOf(\x22;\x22,a);-1\x3d\x3dc\x26\x26(c\x3db.length);c-\x3da;return a\x3dunescape(b.substr(a,c))})();',
 _T(132), 'pii',
 '(function(){return\x22undefined\x22!\x3dtypeof ',
 __u, 'query_bcemro',
 'QUERY',
 'bcemro',
 _E(_M(44), 8, 16), '?\x22Not OK\x22:\x22undefined\x22!\x3dtypeof ',
 'query_bmrecipientid',
 'bmrecipientid',
 _E(_M(45), 8, 16), 'query_cai_e',
 'cai_e',
 _E(_M(46), 8, 16), 'query_cai_na',
 'cai_na',
 _E(_M(47), 8, 16), 'query_customeremail',
 'customeremail',
 _E(_M(48), 8, 16), 'query_email',
 'email',
 _E(_M(49), 8, 16), 'query_emailorusername',
 'emailorusername',
 _E(_M(50), 8, 16), 'query_tabce',
 'tabce',
 _E(_M(51), 8, 16), 'query_tl_email',
 'tl_email',
 _E(_M(52), 8, 16), 'query_tl_password',
 'tl_password',
 _E(_M(53), 8, 16), '?\n\x22Not OK\x22:\x22OK\x22})();',
 _T(135, 140, 141, 144, 141, 147, 141, 150, 141, 153, 141, 156, 141, 159, 141, 162, 141, 165, 141, 168, 169), _re, 'g_url',
 'URL',
 _M(55), '.*',
 _eq, __e, '_event',
 _M(56), 'timer',
 '543662_30',
 _M(25), 'Corporate',
 '543662_3',
 __c, 'google_remaketing_ein_aus_schalter',
 'ein',
 _M(57), 'aus',
 '543662_17',
 'http://www\\.hotel\\.(de|info)/(designhotels|lieblingshotels)',
 true, '543662_36',
 _cn, __j, 'wt_contentId_auslesen',
 'WebtrekkController.Parameter.contentId',
 _M(58), 'BookingStep1',
 '543662_81',
 'BookingStep3',
 'wt_orderid',
 'WebtrekkController.Parameter.orderId',
 _M(59), 'null',
 '543662_82',
 '.*(_Hoteldetail_Date).*|.*(_Hoteldetail_Rate).*',
 '543662_83',
 _ew, 'Homepage',
 '543662_84',
 '.*(_ResultList_).*|.*(_Search_).*',
 '543662_85',
 _M(54), 'Not OK',
 '543662_113',
 __sp, 'key',
 'value',
 'hotel_pagetype',
 'siteview',
 {
      218: 220,
      219: 221
    }, 'visit', {
      218: 223,
      219: 2
    }, 'business_segment', _M(5), {
      218: 225,
      219: 226
    }, 'campaignids', _M(2), '|', _M(1), _T(229, 230, 231), {
      218: 228,
      219: 232
    }, 'hrental_pagetype', 'other', {
      218: 234,
      219: 235
    }, 'user_language', _M(4), {
      218: 237,
      219: 238
    }, 'Splittest', _M(34), {
      218: 240,
      219: 241
    },
      [222, 224, 227, 233, 236, 239, 242], '995752455', 'USER_SPECIFIED', '_url', _M(60), 1, 'home', {
        218: 220,
        219: 249
      }, {
        218: 234,
        219: 249
      },
      [227, 233, 250, 224, 251, 239, 242], 5, 'searchresults', {
        218: 220,
        219: 254
      }, 'hotel_destination', _M(6), {
        218: 256,
        219: 257
      }, 'roomnights', _M(9), {
        218: 259,
        219: 260
      }, {
        218: 234,
        219: 254
      }, 'hrental_id', _M(28), {
        218: 263,
        219: 264
      }, 'Booking_window', _M(35), {
        218: 266,
        219: 267
      }, 'Dayofweek_arrival', _M(36), {
        218: 269,
        219: 270
      }, 'Dayofweek_departure', _M(37), {
        218: 272,
        219: 273
      }, 'Nr_of_persons', _M(38), {
        218: 275,
        219: 276
      }, 'Basketsize', _M(39), {
        218: 278,
        219: 279
      }, 'Basketsize_Currency', '\x22EUR\x22', {
        218: 281,
        219: 282
      }, 'hrental_startdate', _M(20), {
        218: 284,
        219: 285
      }, 'hrental_enddate', _M(21), {
        218: 287,
        219: 288
      },
      [227, 233, 255, 224, 239, 258, 261, 262, 265, 242, 268, 271, 274, 277, 280, 283, 286, 289], 6, 'wt_hmid', 'WebtrekkController.Parameter.product', _M(61), {
        218: 263,
        219: 294
      }, 'property', {
        218: 220,
        219: 296
      }, 'hotel_id', {
        218: 298,
        219: 294
      },
      _M(7), {
        218: 256,
        219: 300
      }, 'offerdetail', {
        218: 234,
        219: 302
      }, 'hotel_stars', _M(8), {
        218: 304,
        219: 305
      },
      _M(40), {
        218: 278,
        219: 307
      }, 'Basketsize_currency', _M(41), {
        218: 309,
        219: 310
      },
      [227, 233, 295, 297, 224, 299, 239, 301, 261, 303, 306, 242, 268, 271, 274, 277, 308, 311, 286, 289], 7, 'conversionintent', {
        218: 234,
        219: 314
      }, 'cart', {
        218: 220,
        219: 316
      }, 'Booking_Window', {
        218: 318,
        219: 267
      }, 'Dayofweek_depature', {
        218: 320,
        219: 273
      },
      _M(42), {
        218: 278,
        219: 322
      }, 'EUR', {
        218: 281,
        219: 324
      },
      [233, 315, 306, 317, 224, 239, 301, 261, 227, 295, 299, 242, 319, 271, 321, 277, 323, 325, 286, 289], 8, 'purchase', {
        218: 220,
        219: 328
      }, 'conversion', {
        218: 234,
        219: 330
      }, 'wt_ordervalue_eur', 'WebtrekkController.Parameter.orderValue', _M(62), {
        218: 278,
        219: 334
      },
      [227, 233, 295, 329, 224, 299, 239, 301, 261, 331, 306, 242, 268, 271, 274, 277, 325, 335, 286, 289], 9, 'gtm.dom', '543662_1', __tl, '1000', 17, '543662_12', '543662_13', '543662_14', '543662_15', '543662_16', 'DE', {
        218: 237,
        219: 348
      },
      [233, 227, 224, 222, 236, 349], 21, '4731563',
 '543662_56',
 __img, false, '//www.mundi.com.br/tracking/tracking.gif?aid\x3d59\x26tid\x3d1\x26value\x3d',
 _E(_M(62), 12), '\x26oid\x3d',
 _E(_M(15), 12), '\x26payment\x3dBL\x26num_tickets\x3d',
 _E(_M(26), 12), '\x26hotel_id\x3d',
 _E(_M(61), 12), '\x26location_id\x3d',
 _E(_M(7), 12), '\x26checkin\x3d',
 _E(_M(20), 12), '\x26checkout\x3d',
 _E(_M(21), 12), '\x26og\x3d',
 _E(_M(3), 12), _T(356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371), 36, '6152595',
 '543662_59',
 '//hotelscan.com/api/pixel/?vendor\x3dhtde\x26id\x3d',
 '\x26hotelid\x3d',
 '\x26from\x3d',
 '\x26nights\x3d',
 _E(_M(27), 12), '\x26total\x3d',
 '\x26cur\x3dEUR',
 _T(376, 359, 377, 363, 378, 367, 379, 380, 381, 357, 382), 38, 'timer2000',
 '2000',
 39, '3638796',
 '543662_80',
 'https://t.skyscnr.com/hotels/track/booking?fclid\x3d',
 '\x26partner\x3dh_if\x26order_id\x3d',
 __d, 'DOM_bookReservationNumber',
 'bookReservationNumber',
 'ID',
 _E(_M(63), 12), '\x26hotel_name\x3d',
 _E(_M(33), 12), '\x26hotel_city\x3d',
 _E(_M(30), 12), '\x26hotel_country\x3d',
 _E(_M(31), 12), '\x26guests\x3d',
 _E(_M(32), 12), '\x26rooms\x3d',
 '\x26amount\x3d',
 '\x26currency\x3dEUR',
 _T(390, 371, 391, 396, 362, 363, 397, 398, 399, 400, 401, 402, 366, 367, 368, 369, 403, 404, 405, 361, 406, 357, 407), 43, __awct, '_gcl',
 '1060253278',
 'kYfECI_bhGQQ3tzI-QM',
 56, 'gtm.js',
 '543662_2147479553',
 __gclidw, 57, '1772|1773|1774|1775|1776|1777|1778|1779|1780|1781|1782|1786|1787|1788|1789|1790|1792|1793|1794|1795|1796|1797|1798|1799|259|2752|2755|2756|2758',
 '543662_5',
 __html, '\x3cscript type\x3d\x22text/javascript\x22\x3evar _bdhmProtocol\x3d\x22https:\x22\x3d\x3ddocument.location.protocol?\x22 https://\x22:\x22 http://\x22;document.write(unescape(\x22%3Cscript src\\x3d\x27\x22+_bdhmProtocol+\x22hm.baidu.com/h.js%3F933aef03173f263ee5b7eb84a5dd19e1\x27 type\\x3d\x27text/javascript\x27%3E%3C/script%3E\x22));\x3c/script\x3e',
 2, '543662_2',
 'ga_ein_aus_schalter',
 _M(64), '543662_44',
 '543662_57',
 '543662_60',
 '\x3cscript type\x3d\x22text/gtmscript\x22\x3evar gaProperty\x3d\x22UA-50446714-1\x22,disableStr\x3d\x22ga-disable-\x22+gaProperty;-1\x3cdocument.cookie.indexOf(disableStr+\x22\\x3dtrue\x22)\x26\x26(window[disableStr]\x3d!0);window.gaOptout\x3dfunction(){document.cookie\x3ddisableStr+\x22\\x3dtrue; expires\\x3dThu, 31 Dec 2099 23:59:59 UTC; path\\x3d/\x22;window[disableStr]\x3d!0;alert(\x22Google Analytics Tracking has been disabled in your Browser.\x22)};\x3c/script\x3e\n\n\n\x3cscript type\x3d\x22text/gtmscript\x22\x3e(function(a,e,f,g,b,c,d){a.GoogleAnalyticsObject\x3db;a[b]\x3da[b]||function(){(a[b].q\x3da[b].q||[]).push(arguments)};a[b].l\x3d1*new Date;c\x3de.createElement(f);d\x3de.getElementsByTagName(f)[0];c.async\x3d1;c.src\x3dg;d.parentNode.insertBefore(c,d)})(window,document,\x22script\x22,\x22//www.google-analytics.com/analytics.js\x22,\x22ga\x22);ga(\x22create\x22,\x22UA-50446714-1\x22,\x22auto\x22);ga(\x22set\x22,\x22anonymizeIp\x22,!0);ga(\x22require\x22,\x22displayfeatures\x22);ga(\x22send\x22,\x22pageview\x22);\x3c/script\x3e',
 3, '543662_31',
 '2852|3291',
 '543662_20',
 'sociomantic_retargeting_ein_aus_schalter',
 _M(65), '543662_26',
 '543662_32',
 '543662_33',
 '543662_34',
 '543662_35',
 _M(29), 'Criteo',
 '543662_65',
 '\x3cscript type\x3d\x22text/gtmscript\x22\x3evar customer\x3d{identifier:\x22',
 _E(_M(12), 7), '\x22,segment:',
 _E(_M(13), 8, 16), '};\x3c/script\x3e\n\n\x3cscript type\x3d\x22text/gtmscript\x22\x3e(function(){var a\x3ddocument.createElement(\x22script\x22),b\x3ddocument.getElementsByTagName(\x22script\x22)[0];a.type\x3d\x22text/javascript\x22;a.async\x3d!0;a.src\x3d(\x22https:\x22\x3d\x3ddocument.location.protocol?\x22https://\x22:\x22http://\x22)+\x22eu-sonar.sociomantic.com/js/2010-07-01/adpan/',
 'sociomantic_advertiser_token',
 'hotel-de',
 _E(_M(66), 7), '\x22;b.parentNode.insertBefore(a,b)})();\x3c/script\x3e',
 _T(445, 446, 447, 448, 449, 452, 453), 11, '\x3cscript type\x3d\x22text/gtmscript\x22\x3evar product\x3disNaN(',
 _E(_M(10), 8, 16), ')?{category:\x22',
 _E(_M(6), 7), '\x22}:{category:\x22',
 '\x22,date:\x22',
 _E(_M(10), 7), '\x22};\x3c/script\x3e\n\n\x3cscript type\x3d\x22text/gtmscript\x22\x3evar customer\x3d{identifier:\x22',
 _T(456, 457, 458, 459, 460, 459, 461, 462, 463, 446, 447, 448, 449, 452, 453), 12, ')?{identifier:\x22',
 _E(_M(61), 7), '\x22}:{identifier:\x22',
 _T(456, 457, 466, 467, 468, 467, 461, 462, 463, 446, 447, 448, 449, 452, 453), 13, '\x3cscript type\x3d\x22text/gtmscript\x22\x3evar basket\x3d{products:[{identifier:\x22',
 '\x22,quantity:',
 _E(_M(9), 8, 16), '}]};\x3c/script\x3e\n\n\x3cscript type\x3d\x22text/gtmscript\x22\x3evar customer\x3d{identifier:\x22',
 _T(471, 467, 472, 473, 474, 446, 447, 448, 449, 452, 453), 14, '\x22,amount:',
 _E(_M(11), 8, 16), ',currency:\x22EUR\x22,quantity:',
 '}],transaction:\x22',
 _E(_M(59), 7), _E(_M(62), 8, 16), ',currency:\x22EUR\x22};\x3c/script\x3e\n\n\n\n\x3cscript type\x3d\x22text/gtmscript\x22\x3eif(\x222852\x22\x3d\x3d',
 _E(_M(1), 8, 16), '||\x223291\x22\x3d\x3d',
 ')var sale\x3d{confirmed:!0};\x3c/script\x3e\n\n\x3cscript type\x3d\x22text/gtmscript\x22\x3evar customer\x3d{identifier:\x22',
 _T(471, 467, 477, 478, 479, 473, 480, 481, 477, 482, 483, 484, 485, 484, 486, 446, 447, 448, 449, 452, 453), 16, 'performancemedia_ein_aus_schalter',
 _M(67), '543662_29',
 '\x3ciframe src\x3d\x22https://ad2.adfarm1.adition.com/track?tid\x3d4025\x26amp;sid\x3d9466\x26amp;type\x3dhtml\x26amp;orderid\x3d',
 _E(_M(59), 12), '\x26amp;itemno\x3d\x26amp;descr\x3d\x26amp;quantity\x3d\x26amp;price\x3d0.00\x26amp;total\x3d',
 '\x22 scrolling\x3d\x22no\x22 width\x3d\x221\x22 height\x3d\x221\x22 marginheight\x3d\x220\x22 marginwidth\x3d\x220\x22 frameborder\x3d\x220\x22\x3e\x3c/iframe\x3e',
 _T(492, 493, 494, 357, 495), 18, '543662_21',
 '\x3ciframe src\x3d\x22',
 'g_aktuelles_protokoll',
 'PROTOCOL',
 _E(_M(68), 14, 3), '://ad2.adfarm1.adition.com/track?tid\x3d4025\x26amp;sid\x3d12506\x26amp;type\x3dhtml\x26amp;orderid\x3d\x26amp;itemno\x3d\x26amp;descr\x3d\x26amp;quantity\x3d\x26amp;price\x3d0.00\x26amp;total\x3d0.00\x22 scrolling\x3d\x22no\x22 width\x3d\x221\x22 height\x3d\x221\x22 marginheight\x3d\x220\x22 marginwidth\x3d\x220\x22 frameborder\x3d\x220\x22\x3e\x3c/iframe\x3e',
 _T(499, 502, 503), 19, '\x22,segment:0};\x3c/script\x3e\n\n\x3cscript type\x3d\x22text/gtmscript\x22\x3e(function(){var a\x3ddocument.createElement(\x22script\x22),b\x3ddocument.getElementsByTagName(\x22script\x22)[0];a.type\x3d\x22text/javascript\x22;a.async\x3d!0;a.src\x3d(\x22https:\x22\x3d\x3ddocument.location.protocol?\x22https://\x22:\x22http://\x22)+\x22eu-sonar.sociomantic.com/js/2010-07-01/adpan/',
 _T(445, 446, 506, 452, 453), 20, '543662_42',
 'criteo_retargeting_ein_aus_schalter',
 _M(69), '543662_40',
 'Socio',
 '543662_66',
 '\x3cscript type\x3d\x22text/gtmscript\x22 data-gtmsrc\x3d\x22//static.criteo.net/js/ld/ld.js\x22 async\x3d\x22true\x22\x3e\x3c/script\x3e \n\x3cscript type\x3d\x22text/gtmscript\x22\x3ewindow.criteo_q\x3dwindow.criteo_q||[];window.criteo_q.push({event:\x22setAccount\x22,account:8400},{event:\x22setHashedEmail\x22,email:\x22',
 'media_criteo_hashedemail',
 '(function(){function I(t){if(null\x3d\x3d\x3dt||\x22undefined\x22\x3d\x3d\x3dtypeof t)return\x22\x22;t+\x3d\x22\x22;var h\x3d\x22\x22,k;var m\x3dk\x3d0;var n\x3dt.length;for(var l\x3d0;l\x3cn;l++){var a\x3dt.charCodeAt(l),g\x3dnull;if(128\x3ea)k++;else if(127\x3ca\x26\x262048\x3ea)g\x3dString.fromCharCode(a\x3e\x3e6|192,a\x2663|128);else if(55296!\x3d(a\x2663488))g\x3dString.fromCharCode(a\x3e\x3e12|224,a\x3e\x3e6\x2663|128,a\x2663|128);else{if(55296!\x3d(a\x2664512))throw new RangeError(\x22Unmatched trail surrogate at \x22+l);g\x3dt.charCodeAt(++l);if(56320!\x3d(g\x2664512))throw new RangeError(\x22Unmatched lead surrogate at \x22+(l-1));a\x3d((a\x26\n1023)\x3c\x3c10)+(g\x261023)+65536;g\x3dString.fromCharCode(a\x3e\x3e18|240,a\x3e\x3e12\x2663|128,a\x3e\x3e6\x2663|128,a\x2663|128)}null!\x3d\x3dg\x26\x26(k\x3em\x26\x26(h+\x3dt.slice(m,k)),h+\x3dg,m\x3dk\x3dl+1)}k\x3em\x26\x26(h+\x3dt.slice(m,n));return h}function H(g){var h\x3dfunction(a,c){var b\x3da\x262147483648;var e\x3dc\x262147483648;var d\x3da\x261073741824;var f\x3dc\x261073741824;var g\x3d(a\x261073741823)+(c\x261073741823);return d\x26f?g^2147483648^b^e:d|f?g\x261073741824?g^3221225472^b^e:g^1073741824^b^e:g^b^e},k\x3dfunction(a,b,e,c,d,f,g){a\x3dh(a,h(h(b\x26e|~b\x26c,d),g));return h(a\x3c\x3cf|a\x3e\x3e\x3e32-f,b)},m\x3dfunction(a,b,e,\nc,d,f,g){a\x3dh(a,h(h(b\x26c|e\x26~c,d),g));return h(a\x3c\x3cf|a\x3e\x3e\x3e32-f,b)},n\x3dfunction(a,b,c,e,d,f,g){a\x3dh(a,h(h(b^c^e,d),g));return h(a\x3c\x3cf|a\x3e\x3e\x3e32-f,b)},l\x3dfunction(a,b,c,e,d,f,g){a\x3dh(a,h(h(c^(b|~e),d),g));return h(a\x3c\x3cf|a\x3e\x3e\x3e32-f,b)},a\x3dfunction(a){var b\x3da.length;var c\x3db+8;c\x3d(c-c%64)/64;for(var e\x3d16*(c+1),d\x3dArray(e-1),f,g\x3d0;g\x3cb;)c\x3d(g-g%4)/4,f\x3dg%4*8,d[c]|\x3da.charCodeAt(g)\x3c\x3cf,g++;c\x3d(g-g%4)/4;f\x3dg%4*8;d[c]|\x3d128\x3c\x3cf;d[e-2]\x3db\x3c\x3c3;d[e-1]\x3db\x3e\x3e\x3e29;return d},p\x3dfunction(a){var c\x3d\x22\x22,b;for(b\x3d0;3\x3e\x3db;b++){var d\x3da\x3e\x3e\x3e8*b\x26255;d\x3d\x220\x22+d.toString(16);\nc+\x3dd.substr(d.length-2,2)}return c},f\x3d[],q\x3d7,r\x3d12,t\x3d17,u\x3d22,v\x3d5,w\x3d9,x\x3d14,y\x3d20,z\x3d4,A\x3d11,B\x3d16,C\x3d23,D\x3d6,E\x3d10,F\x3d15,G\x3d21;g\x3dI(g);f\x3da(g);var c\x3d1732584193;var b\x3d4023233417;var e\x3d2562383102;var d\x3d271733878;g\x3df.length;for(a\x3d0;a\x3cg;a+\x3d16){var H\x3dc;var J\x3db;var K\x3de;var L\x3dd;c\x3dk(c,b,e,d,f[a+0],q,3614090360);d\x3dk(d,c,b,e,f[a+1],r,3905402710);e\x3dk(e,d,c,b,f[a+2],t,606105819);b\x3dk(b,e,d,c,f[a+3],u,3250441966);c\x3dk(c,b,e,d,f[a+4],q,4118548399);d\x3dk(d,c,b,e,f[a+5],r,1200080426);e\x3dk(e,d,c,b,f[a+6],t,2821735955);b\x3dk(b,e,d,c,\nf[a+7],u,4249261313);c\x3dk(c,b,e,d,f[a+8],q,1770035416);d\x3dk(d,c,b,e,f[a+9],r,2336552879);e\x3dk(e,d,c,b,f[a+10],t,4294925233);b\x3dk(b,e,d,c,f[a+11],u,2304563134);c\x3dk(c,b,e,d,f[a+12],q,1804603682);d\x3dk(d,c,b,e,f[a+13],r,4254626195);e\x3dk(e,d,c,b,f[a+14],t,2792965006);b\x3dk(b,e,d,c,f[a+15],u,1236535329);c\x3dm(c,b,e,d,f[a+1],v,4129170786);d\x3dm(d,c,b,e,f[a+6],w,3225465664);e\x3dm(e,d,c,b,f[a+11],x,643717713);b\x3dm(b,e,d,c,f[a+0],y,3921069994);c\x3dm(c,b,e,d,f[a+5],v,3593408605);d\x3dm(d,c,b,e,f[a+10],w,38016083);e\x3dm(e,d,c,b,f[a+\n15],x,3634488961);b\x3dm(b,e,d,c,f[a+4],y,3889429448);c\x3dm(c,b,e,d,f[a+9],v,568446438);d\x3dm(d,c,b,e,f[a+14],w,3275163606);e\x3dm(e,d,c,b,f[a+3],x,4107603335);b\x3dm(b,e,d,c,f[a+8],y,1163531501);c\x3dm(c,b,e,d,f[a+13],v,2850285829);d\x3dm(d,c,b,e,f[a+2],w,4243563512);e\x3dm(e,d,c,b,f[a+7],x,1735328473);b\x3dm(b,e,d,c,f[a+12],y,2368359562);c\x3dn(c,b,e,d,f[a+5],z,4294588738);d\x3dn(d,c,b,e,f[a+8],A,2272392833);e\x3dn(e,d,c,b,f[a+11],B,1839030562);b\x3dn(b,e,d,c,f[a+14],C,4259657740);c\x3dn(c,b,e,d,f[a+1],z,2763975236);d\x3dn(d,c,b,e,f[a+4],\nA,1272893353);e\x3dn(e,d,c,b,f[a+7],B,4139469664);b\x3dn(b,e,d,c,f[a+10],C,3200236656);c\x3dn(c,b,e,d,f[a+13],z,681279174);d\x3dn(d,c,b,e,f[a+0],A,3936430074);e\x3dn(e,d,c,b,f[a+3],B,3572445317);b\x3dn(b,e,d,c,f[a+6],C,76029189);c\x3dn(c,b,e,d,f[a+9],z,3654602809);d\x3dn(d,c,b,e,f[a+12],A,3873151461);e\x3dn(e,d,c,b,f[a+15],B,530742520);b\x3dn(b,e,d,c,f[a+2],C,3299628645);c\x3dl(c,b,e,d,f[a+0],D,4096336452);d\x3dl(d,c,b,e,f[a+7],E,1126891415);e\x3dl(e,d,c,b,f[a+14],F,2878612391);b\x3dl(b,e,d,c,f[a+5],G,4237533241);c\x3dl(c,b,e,d,f[a+12],D,1700485571);\nd\x3dl(d,c,b,e,f[a+3],E,2399980690);e\x3dl(e,d,c,b,f[a+10],F,4293915773);b\x3dl(b,e,d,c,f[a+1],G,2240044497);c\x3dl(c,b,e,d,f[a+8],D,1873313359);d\x3dl(d,c,b,e,f[a+15],E,4264355552);e\x3dl(e,d,c,b,f[a+6],F,2734768916);b\x3dl(b,e,d,c,f[a+13],G,1309151649);c\x3dl(c,b,e,d,f[a+4],D,4149444226);d\x3dl(d,c,b,e,f[a+11],E,3174756917);e\x3dl(e,d,c,b,f[a+2],F,718787259);b\x3dl(b,e,d,c,f[a+9],G,3951481745);c\x3dh(c,H);b\x3dh(b,J);e\x3dh(e,K);d\x3dh(d,L)}k\x3dp(c)+p(b)+p(e)+p(d);return k.toLowerCase()}if(-1\x3d\x3dWebtrekkController.Parameter.contentId.indexOf(\x22BookingStep2\x22)){for(var q\x3d\n/(?:^|\x26)lc_e\x3d([^\x26]*)(?:\x26|$)/i,r\x3d\x22si\\x3d\x22,v\x3ddocument.cookie.split(\x22;\x22),u\x3d0;u\x3cv.length;u++){for(var g\x3dv[u];\x22 \x22\x3d\x3dg.charAt(0);)g\x3dg.substring(1,g.length);if(0\x3d\x3dg.indexOf(r))var p\x3dg.substring(r.length,g.length)}q\x3d(p\x3dq.exec(p))?p[1]:\x22\x22}else p\x3d/Adresse\x3c\\/div\x3e\x3cdiv class\x3d\x22 bold\x22\x3e(.*?)\x3c\\/div\x3e/,r\x3ddocument.getElementById(\x22booknav\x22).innerHTML,null!\x3d\x3d(r\x3dp.exec(r))\x26\x26(r.index\x3d\x3d\x3dp.lastIndex\x26\x26p.lastIndex++,q\x3dr[1]);p\x3d\x22\x22\x3d\x3dq?\x22',
 _E(_M(23), 7), '\x22:H(q.toLowerCase());q\x3d\x22',
 '\x22;if(q\x3d\x3dp)return q;q\x3d\x22gtagreg\x22;\nr\x3dp;v\x3dwindow.location.hostname.replace(/([a-zA-Z0-9]+.)/,\x22\x22);window.location.hostname.replace(/([a-zA-Z0-9]+.)/,\x22\x22);g\x3dnew Date;g.setTime(g.getTime());u\x3d864E8;g\x3dnew Date(g.getTime()+u);document.cookie\x3dq+\x22\\x3d\x22+escape(r)+(u?\x22; expires\\x3d\x22+g.toGMTString():\x22\x22)+\x22; path\\x3d/\x22+(v?\x22; domain\\x3d\x22+v:\x22\x22);return p})();',
 _T(517, 518, 519, 518, 520), _E(_M(70), 7), '\x22},{event:\x22setSiteType\x22,type:\x22d\x22},{event:\x22viewHome\x22});\x3c/script\x3e',
 _T(515, 522, 523), 22, '\x3cscript type\x3d\x22text/gtmscript\x22 data-gtmsrc\x3d\x22//static.criteo.net/js/ld/ld.js\x22 async\x3d\x22true\x22\x3e\x3c/script\x3e\n\x3cscript type\x3d\x22text/gtmscript\x22\x3eisNaN(',
 ')?(window.criteo_q\x3dwindow.criteo_q||[],window.criteo_q.push({event:\x22setAccount\x22,account:8400},{event:\x22setHashedEmail\x22,email:\x22',
 '\x22},{event:\x22setSiteType\x22,type:\x22d\x22},{event:\x22viewList\x22,item:[\x22',
 _E(_M(16), 7), '\x22,\x22',
 _E(_M(17), 7), _E(_M(18), 7), '\x22]})):(window.criteo_q\x3dwindow.criteo_q||[],window.criteo_q.push({event:\x22setAccount\x22,account:8400},{event:\x22setHashedEmail\x22,email:\x22',
 '\x22},{event:\x22setSiteType\x22,type:\x22d\x22},{event:\x22viewList\x22,\nitem:[\x22',
 '\x22]},{event:\x22viewSearch\x22,checkin_date:\x22',
 _E(_M(20), 7), '\x22,checkout_date:\x22',
 _E(_M(21), 7), '\x22}));\x3c/script\x3e',
 _T(526, 457, 527, 522, 528, 529, 530, 531, 530, 532, 533, 522, 534, 529, 530, 531, 530, 532, 535, 536, 537, 538, 539), 24, '\x3cscript type\x3d\x22text/gtmscript\x22 data-gtmsrc\x3d\x22//static.criteo.net/js/ld/ld.js\x22 async\x3d\x22true\x22\x3e\x3c/script\x3e \n\x3cscript type\x3d\x22text/gtmscript\x22\x3eif(\x22',
 _E(_M(41), 7), '\x22!\x3d\x22EUR\x22)var avrn\x3d0;else var avrn\x3d',
 _E(_M(40), 8, 16), '/',
 ';\nif(isNaN(',
 ')){window.criteo_q\x3dwindow.criteo_q||[];window.criteo_q.push({event:\x22setAccount\x22,account:8400},{event:\x22setHashedEmail\x22,email:\x22',
 '\x22},{event:\x22setSiteType\x22,type:\x22d\x22},{event:\x22viewItem\x22,item:\x22',
 '\x22})}else{window.criteo_q\x3dwindow.criteo_q||[];window.criteo_q.push({event:\x22setAccount\x22,account:8400},{event:\x22setHashedEmail\x22,email:\x22',
 '\x22},{event:\x22viewSearch\x22,\ncheckin_date:\x22',
 '\x22},{event:\x22viewBasket\x22,item:[{id:\x22',
 '\x22,price:avrn,quantity:',
 '}]})};\x3c/script\x3e',
 _T(542, 543, 544, 545, 546, 473, 547, 457, 548, 522, 549, 467, 550, 522, 549, 467, 551, 536, 537, 538, 552, 467, 553, 473, 554), 25, '\x22},{event:\x22setSiteType\x22,type:\x22d\x22},{event:\x22viewSearch\x22,checkin_date:\x22',
 '\x22,price:',
 ',quantity:',
 '}]});\x3c/script\x3e',
 _T(515, 522, 557, 536, 537, 538, 552, 467, 558, 478, 559, 473, 560), 26, '\x22},{event:\x22setSiteType\x22,type:\x22d\x22},{event:\x22trackTransaction\x22,id:\x22',
 '\x22,item:[{id:\x22',
 _E(_M(24), 8, 16), _T(515, 522, 563, 481, 564, 467, 558, 565, 559, 473, 560), 28, '543662_45',
 '\x3cscript type\x3d\x22text/gtmscript\x22\x3evar gaProperty\x3d\x22UA-50446714-1\x22,disableStr\x3d\x22ga-disable-\x22+gaProperty;-1\x3cdocument.cookie.indexOf(disableStr+\x22\\x3dtrue\x22)\x26\x26(window[disableStr]\x3d!0);window.gaOptout\x3dfunction(){document.cookie\x3ddisableStr+\x22\\x3dtrue; expires\\x3dThu, 31 Dec 2099 23:59:59 UTC; path\\x3d/\x22;window[disableStr]\x3d!0;alert(\x22Google Analytics Tracking has been disabled in your Browser.\x22)};\x3c/script\x3e\n\n\n\x3cscript type\x3d\x22text/gtmscript\x22\x3e(function(a,e,f,g,b,c,d){a.GoogleAnalyticsObject\x3db;a[b]\x3da[b]||function(){(a[b].q\x3da[b].q||[]).push(arguments)};a[b].l\x3d1*new Date;c\x3de.createElement(f);d\x3de.getElementsByTagName(f)[0];c.async\x3d1;c.src\x3dg;d.parentNode.insertBefore(c,d)})(window,document,\x22script\x22,\x22//www.google-analytics.com/analytics.js\x22,\x22ga\x22);ga(\x22create\x22,\x22UA-50446714-1\x22,\x22auto\x22);ga(\x22set\x22,\x22anonymizeIp\x22,!0);ga(\x22require\x22,\x22ecommerce\x22,\x22ecommerce.js\x22);ga(\x22ecommerce:addItem\x22,{id:',
 _E(_M(59), 8, 16), ',name:',
 _E(_M(61), 8, 16), ',sku:',
 '});\nga(\x22ecommerce:addTransaction\x22,{id:',
 ',revenue:',
 '});ga(\x22send\x22,\x22pageview\x22);ga(\x22ecommerce:send\x22);\x3c/script\x3e',
 _T(569, 570, 571, 572, 573, 572, 574, 570, 575, 482, 576), 29, 'BookingStep2',
 '2743',
 'gtm.load',
 '543662_52',
 'Confirmation',
 '543662_54',
 '\x3cscript type\x3d\x22text/gtmscript\x22\x3evar _vwo_code\x3dfunction(){var e\x3d85833,f\x3d2E3,g\x3d2500,h\x3d!1,d\x3d!1,c\x3ddocument;return{use_existing_jquery:function(){return h},library_tolerance:function(){return g},finish:function(){if(!d){d\x3d!0;var a\x3dc.getElementById(\x22_vis_opt_path_hides\x22);a\x26\x26a.parentNode.removeChild(a)}},finished:function(){return d},load:function(a){var b\x3dc.createElement(\x22script\x22);b.src\x3da;b.type\x3d\x22text/javascript\x22;b.innerText;b.onerror\x3dfunction(){_vwo_code.finish()};c.getElementsByTagName(\x22head\x22)[0].appendChild(b)},init:function(){settings_timer\x3d\nsetTimeout(\x22_vwo_code.finish()\x22,f);this.load(\x22//dev.visualwebsiteoptimizer.com/j.php?a\\x3d\x22+e+\x22\\x26u\\x3d\x22+encodeURIComponent(c.URL)+\x22\\x26r\\x3d\x22+Math.random());var a\x3dc.createElement(\x22style\x22),b\x3d\x22body{opacity:0 !important;filter:alpha(opacity\\x3d0) !important;background:none !important;}\x22,d\x3dc.getElementsByTagName(\x22head\x22)[0];a.setAttribute(\x22id\x22,\x22_vis_opt_path_hides\x22);a.setAttribute(\x22type\x22,\x22text/css\x22);a.styleSheet?a.styleSheet.cssText\x3db:a.appendChild(c.createTextNode(b));d.appendChild(a);return settings_timer}}}();\n_vwo_settings_timer\x3d_vwo_code.init();\x3c/script\x3e',
 33, 'RegisterSuccessful',
 '543662_64',
 '\x3ciframe src\x3d\x22https://ad2.adfarm1.adition.com/track?tid\x3d4025\x26amp;sid\x3d28484\x26amp;type\x3dhtml\x26amp;orderid\x3d\x26amp;itemno\x3d\x26amp;descr\x3d\x26amp;quantity\x3d\x26amp;price\x3d0.00\x26amp;total\x3d0.00\x22 scrolling\x3d\x22no\x22 width\x3d\x221\x22 height\x3d\x221\x22 marginheight\x3d\x220\x22 marginwidth\x3d\x220\x22 frameborder\x3d\x220\x22\x3e\x3c/iframe\x3e',
 41, '543662_79',
 '\x3cscript type\x3d\x22text/gtmscript\x22\x3eCookieController.SetCookieSubValue(\x22gtaghotel\x22,WebtrekkController.Parameter.product,encodeURIComponent(WebtrekkController.Parameter.productCategory[3]));\x3c/script\x3e',
 42, '\x3cscript type\x3d\x22text/gtmscript\x22\x3e(function(b,c,e,f,d){b[d]\x3db[d]||[];var g\x3dfunction(){var a\x3d{ti:\x225061219\x22};a.q\x3db[d];b[d]\x3dnew UET(a);b[d].push(\x22pageLoad\x22)};var a\x3dc.createElement(e);a.src\x3df;a.async\x3d1;a.onload\x3da.onreadystatechange\x3dfunction(){var b\x3dthis.readyState;b\x26\x26\x22loaded\x22!\x3d\x3db\x26\x26\x22complete\x22!\x3d\x3db||(g(),a.onload\x3da.onreadystatechange\x3dnull)};c\x3dc.getElementsByTagName(e)[0];c.parentNode.insertBefore(a,c)})(window,document,\x22script\x22,\x22//bat.bing.com/bat.js\x22,\x22uetq\x22);window.uetq\x3dwindow.uetq||[];window.uetq.push({ec:\x22remarketing\x22,ea:\x22Corporate\x22});\x3c/script\x3e',
 44, 'hotelde_VicinitySearchResult_WithoutDate',
 '534991',
 '543662_89',
 '\x3cscript data-gtmsrc\x3d\x22https://www.hotel.de/media/Affiliates/messende.js?1\x22 type\x3d\x22text/gtmscript\x22\x3e',
 45, '\x3cscript type\x3d\x22text/gtmscript\x22\x3e(function(b,c,e,f,d){b[d]\x3db[d]||[];var g\x3dfunction(){var a\x3d{ti:\x225163331\x22};a.q\x3db[d];b[d]\x3dnew UET(a);b[d].push(\x22pageLoad\x22)};var a\x3dc.createElement(e);a.src\x3df;a.async\x3d1;a.onload\x3da.onreadystatechange\x3dfunction(){var b\x3dthis.readyState;b\x26\x26\x22loaded\x22!\x3d\x3db\x26\x26\x22complete\x22!\x3d\x3db||(g(),a.onload\x3da.onreadystatechange\x3dnull)};c\x3dc.getElementsByTagName(e)[0];c.parentNode.insertBefore(a,c)})(window,document,\x22script\x22,\x22//bat.bing.com/bat.js\x22,\x22uetq\x22);\x3c/script\x3e',
 48, __f, 'g_referrer',
 _M(71), 'trivago|tripadvisor',
 '543662_91',
 '\x3cscript type\x3d\x22text/gtmscript\x22\x3edocument.addEventListener(\x22scroll\x22,function(){\x22undefined\x22\x3d\x3dtypeof beingmax\x26\x26(top.moveTo\x26\x26top.moveTo(0,0),top.resizeTo\x26\x26top.resizeTo(screen.availWidth,screen.availHeight),top.outerWidth\x26\x26(top.outerWidth\x3dscreen.availWidth),top.outerHeight\x26\x26(top.outerHeight\x3dscreen.availHeight),beingmax\x3d1)},!1);\ndocument.addEventListener(\x22wheel\x22,function(){\x22undefined\x22\x3d\x3dtypeof beingmax\x26\x26(top.moveTo\x26\x26top.moveTo(0,0),top.resizeTo\x26\x26top.resizeTo(screen.availWidth,screen.availHeight),top.outerWidth\x26\x26(top.outerWidth\x3dscreen.availWidth),top.outerHeight\x26\x26(top.outerHeight\x3dscreen.availHeight),beingmax\x3d1)},!1);\ndocument.addEventListener(\x22click\x22,function(){\x22undefined\x22\x3d\x3dtypeof beingmax\x26\x26(top.moveTo\x26\x26top.moveTo(0,0),top.resizeTo\x26\x26top.resizeTo(screen.availWidth,screen.availHeight),top.outerWidth\x26\x26(top.outerWidth\x3dscreen.availWidth),top.outerHeight\x26\x26(top.outerHeight\x3dscreen.availHeight),beingmax\x3d1)},!1);\x3c/script\x3e',
 49, '\x3cscript type\x3d\x22text/gtmscript\x22\x3efunction getParams(){var d\x3d[],b\x3dlocation.href;if(-1!\x3db.indexOf(\x22?\x22)){b\x3db.split(\x22?\x22)[1].split(\x22\\x26\x22);for(var c\x3d0;c\x3cb.length;c++){var a\x3db[c].split(\x22\\x3d\x22);a[0]\x26\x26(d[a[0]]\x3da[1]?a[1]:\x22\x22)}}return d}function createCookie(d,b,c){if(c){var a\x3dnew Date;a.setTime(a.getTime()+864E5*c);c\x3d\x22; expires\\x3d\x22+a.toGMTString()}else c\x3d\x22\x22;a\x3dlocation.hostname.split(\x22.\x22);a\x3da[a.length-1];document.cookie\x3dd+\x22\\x3d\x22+b+c+\x22; domain\\x3d.hotel.\x22+a+\x22; path\\x3d/;\x22}\nfunction qc_load_js(d){var b\x3ddocument.createElement(\x22script\x22);b.type\x3d\x22text/javascript\x22;b.async\x3d!0;b.src\x3dd;(document.getElementsByTagName(\x22head\x22)[0]||document.body).appendChild(b);qualityclick_done\x3dsetInterval(function(){qc_idcheck()},500)}function qc_idcheck(){\x22undefined\x22!\x3dtypeof window.clickid\x26\x26(createCookie(\x22qc_cid\x22,window.clickid,30),clearInterval(qualityclick_done))}\nfunction readCookie(d){d+\x3d\x22\\x3d\x22;for(var b\x3ddocument.cookie.split(\x22;\x22),c\x3d0;c\x3cb.length;c++){for(var a\x3db[c];\x22 \x22\x3d\x3da.charAt(0);)a\x3da.substring(1,a.length);if(0\x3d\x3da.indexOf(d))return a.substring(d.length,a.length)}return null}for(var allparams\x3dgetParams(),key,keys\x3dObject.keys(allparams),n\x3dkeys.length,params\x3d{};n--;)key\x3dkeys[n],params[key.toLowerCase()]\x3dallparams[key];var pid,subid,clickid,done;pid\x3dnull!\x3dreadCookie(\x22pid\x22)?readCookie(\x22pid\x22):\x22\x22;pid\x3dvoid 0!\x3dparams.pid\x26\x26\x22\x22!\x3dparams.pid?params.pid:pid;\npid\x3dvoid 0!\x3dparams.hotelagentllc\x26\x26\x22\x22!\x3dparams.hotelagentllc?params.hotelagentllc:pid;pid\x3dvoid 0!\x3dparams.hotelagentnr\x26\x26\x22\x22!\x3dparams.hotelagentnr?params.hotelagentnr:pid;pid\x3dvoid 0!\x3dparams.han\x26\x26\x22\x22!\x3dparams.han?params.han:pid;\nif(\x2299999999\x22!\x3dpid\x26\x264\x3cpid.length){subid\x3dpid!\x3dreadCookie(\x22pid\x22)\x26\x26\x22\x22!\x3dpid?\x22\x22:null!\x3dreadCookie(\x22subid\x22)?readCookie(\x22subid\x22):\x22\x22;subid\x3dvoid 0!\x3dparams.subid\x26\x26\x22\x22!\x3dparams.subid?params.subid:subid;subid\x3dvoid 0!\x3dparams.subagentcodellc\x26\x26\x22\x22!\x3dparams.subagentcodellc?params.subagentcodellc:subid;subid\x3dvoid 0!\x3dparams.subagentcode\x26\x26\x22\x22!\x3dparams.subagentcode?params.subagentcode:subid;var proto\x3d\x22https:\x22!\x3dwindow.location.protocol?\x22http\x22:\x22https\x22;if(pid!\x3dreadCookie(\x22pid\x22)\x26\x26\x22\x22!\x3dpid){var ref\x3ddocument.referrer;qc_load_js((\x22https:\x22\x3d\x3d\ndocument.location.protocol?\x22https\x22:\x22http\x22)+\x22://affiliate.hotel.de/go.cgi?js\\x3d1\\x26pid\\x3d\x22+pid+\x22\\x26subid\\x3d\x22+subid+\x22\\x26wmid\\x3dbcc\\x26cpid\\x3d1\\x26ref\\x3d\x22+encodeURI(ref)+\x22\\x26target\\x3d\x22+encodeURI(window.location));createCookie(\x22pid\x22,pid,30);createCookie(\x22subid\x22,subid,30)}else subid!\x3dreadCookie(\x22subid\x22)\x26\x26\x22\x22!\x3dsubid\x26\x26(ref\x3ddocument.referrer,qc_load_js((\x22https:\x22\x3d\x3ddocument.location.protocol?\x22https\x22:\x22http\x22)+\x22://affiliate.hotel.de/go.cgi?js\\x3d1\\x26pid\\x3d\x22+pid+\x22\\x26subid\\x3d\x22+subid+\x22\\x26wmid\\x3dbcc\\x26cpid\\x3d1\\x26ref\\x3d\x22+\nencodeURI(ref)+\x22\\x26target\\x3d\x22+encodeURI(window.location)),createCookie(\x22subid\x22,subid,30))};\x3c/script\x3e',
 50, 'refid',
 '543662_98',
 'Metasearch_Tripadvisor_ein_aus_schalter',
 _M(72), '543662_99',
 '\x3cscript type\x3d\x22text/gtmscript\x22\x3efunction gup(c,d){d||(d\x3dlocation.href);c\x3dc.replace(/[\\[]/,\x22\\\\[\x22).replace(/[\\]]/,\x22\\\\]\x22);var a\x3d\x22[\\\\?\\x26]\x22+c+\x22\\x3d([^\\x26#]*)\x22;a\x3dnew RegExp(a);a\x3da.exec(d);return null\x3d\x3da?null:a[1]}function createCookie(c,d,a){if(a){var b\x3dnew Date;b.setTime(b.getTime()+864E5*a);a\x3d\x22; expires\\x3d\x22+b.toGMTString()}else a\x3d\x22\x22;b\x3dlocation.hostname.split(\x22.\x22);b\x3db[b.length-1];document.cookie\x3dc+\x22\\x3d\x22+d+a+\x22; domain\\x3d.hotel.\x22+b+\x22; path\\x3d/;\x22}cv\x3dgup(\x22refid\x22);createCookie(\x22refid\x22,cv);\x3c/script\x3e',
 51, '\x3cscript type\x3d\x22text/gtmscript\x22\x3e(function(d,e,g,f,h,b,a,c){d.taq||(b\x3dd.taq\x3dfunction(){b.queue.push(arguments)},b.queue\x3d[],/bot|googlebot|crawler|spider|robot|crawling/i.test(g.userAgent)||(a\x3de.createElement(f),a.async\x3d!0,a.src\x3dh,c\x3de.getElementsByTagName(f)[0],c.parentNode.insertBefore(a,c)))})(window,document,navigator,\x22script\x22,\x22//www.tripadvisor.com/js3/taevents-c.js\x22);var ismember\x3d\x22true\x22;-1\x3d\x3ddocument.cookie.indexOf(\x22gtagreg\x22)\x26\x26(ismember\x3d\x22false\x22);taq(\x22init\x22,\x22197428377\x22);\nisNaN(',
 ')?taq(\x22track\x22,\x22PAGEVIEW\x22,{is_member:ismember}):taq(\x22track\x22,\x22PAGEVIEW\x22,{travel_start_date:\x22',
 '\x22,travel_end_date:\x22',
 '\x22,is_member:ismember});\x3c/script\x3e',
 _T(619, 457, 620, 536, 621, 538, 622), 52, '\x3cscript type\x3d\x22text/gtmscript\x22\x3e(function(d,e,g,f,h,b,a,c){d.taq||(b\x3dd.taq\x3dfunction(){b.queue.push(arguments)},b.queue\x3d[],/bot|googlebot|crawler|spider|robot|crawling/i.test(g.userAgent)||(a\x3de.createElement(f),a.async\x3d!0,a.src\x3dh,c\x3de.getElementsByTagName(f)[0],c.parentNode.insertBefore(a,c)))})(window,document,navigator,\x22script\x22,\x22//www.tripadvisor.com/js3/taevents-c.js\x22);var ismember\x3d\x22true\x22;-1\x3d\x3ddocument.cookie.indexOf(\x22gtagreg\x22)\x26\x26(ismember\x3d\x22false\x22);taq(\x22init\x22,\x22197428377\x22);\ntaq(\x22track\x22,\x22START_BOOKING\x22,{travel_start_date:\x22',
 _T(625, 536, 621, 538, 622), 53, '\x3cscript type\x3d\x22text/gtmscript\x22\x3e(function(d,e,g,f,h,b,a,c){d.taq||(b\x3dd.taq\x3dfunction(){b.queue.push(arguments)},b.queue\x3d[],/bot|googlebot|crawler|spider|robot|crawling/i.test(g.userAgent)||(a\x3de.createElement(f),a.async\x3d!0,a.src\x3dh,c\x3de.getElementsByTagName(f)[0],c.parentNode.insertBefore(a,c)))})(window,document,navigator,\x22script\x22,\x22//www.tripadvisor.com/js3/taevents-c.js\x22);var ismember\x3d\x22true\x22;-1\x3d\x3ddocument.cookie.indexOf(\x22gtagreg\x22)\x26\x26(ismember\x3d\x22false\x22);taq(\x22init\x22,\x22197428377\x22);\nif(isNaN(',
 '))var totalbook\x3d0;else totalbook\x3d100*',
 ',totalbook\x3dMath.round(totalbook);taq(\x22track\x22,\x22BOOKING_CONFIRMATION\x22,{refid:\x22',
 __k, 'Metasearch_Tripadvisor_refid_cookie_auslesen',
 _E(_M(73), 7), '\x22,gbv:totalbook,currency:\x22EUR\x22,order_id:\x22',
 '\x22,travel_start_date:\x22',
 _T(628, 482, 629, 482, 630, 633, 634, 481, 635, 536, 621, 538, 622), 54, 'cookie_hdesession_auslesen',
 'hdesession',
 'wt_campaignID_auslesen',
 'WebtrekkController.Parameter.campaignId',
 'test_hkey1',
 '(function(){return document.getElementById(\x22HKEY_',
 '\x22).innerText})();',
 _T(643, 529, 644), 'test_hkey3',
 _T(643, 532, 644), 'test_hkey2',
 _T(643, 531, 644)
    ], b = [], c = 0; c < a.length; c++) b[c] =





      //<script type="text/gtmscript">
      function getParams() {
        var d = [], b = location.href;
        if (-1 != b.indexOf("?")) {
          b = b.split("?")[1].split("&");
          for (var c = 0; c < b.length; c++) {
            var a = b[c].split("=");
            a[0] && (d[a[0]] = a[1] ? a[1] : "")
          }
        }
        return d
      }

    function createCookie(d, b, c) {
      if (c) {
        var a = new Date;
        a.setTime(a.getTime() + 864E5 * c);
        c = "; expires=" + a.toGMTString()
      } else c = "";
      a = location.hostname.split(".");
      a = a[a.length - 1];
      document.cookie = d + "=" + b + c + "; domain=.hotel." + a + "; path=/;"
    }

    function qc_load_js(d) {
      var b = document.createElement("script");
      b.type = "text/javascript";
      b.async = !0;
      b.src = d;
      (document.getElementsByTagName("head")[0] || document.body).appendChild(b);
      qualityclick_done = setInterval(function () {
        qc_idcheck()
      }, 500)
    }

    function qc_idcheck() {
      "undefined" != typeof window.clickid && (createCookie("qc_cid", window.clickid, 30), clearInterval(qualityclick_done))
    }

    function readCookie(d) {
      d += "=";
      for (var b = document.cookie.split(";"), c = 0; c < b.length; c++) {
        for (var a = b[c]; " " == a.charAt(0);) a = a.substring(1, a.length);
        if (0 == a.indexOf(d)) return a.substring(d.length, a.length)
      }
      return null
    }

    for (var allparams = getParams(), key, keys = Object.keys(allparams), n = keys.length, params = {}; n--;) key = keys[n], params[key.toLowerCase()] = allparams[key];
    var pid, subid, clickid, done;
    pid = null != readCookie("pid") ? readCookie("pid") : "";
    pid = void 0 != params.pid && "" != params.pid ? params.pid : pid;
    pid = void 0 != params.hotelagentllc && "" != params.hotelagentllc ? params.hotelagentllc : pid;
    pid = void 0 != params.hotelagentnr && "" != params.hotelagentnr ? params.hotelagentnr : pid;
    pid = void 0 != params.han && "" != params.han ? params.han : pid;
    if ("99999999" != pid && 4 < pid.length) {
      subid = pid != readCookie("pid") && "" != pid ? "" : null != readCookie("subid") ? readCookie("subid") : "";
      subid = void 0 != params.subid && "" != params.subid ? params.subid : subid;
      subid = void 0 != params.subagentcodellc && "" != params.subagentcodellc ? params.subagentcodellc : subid;
      subid = void 0 != params.subagentcode && "" != params.subagentcode ? params.subagentcode : subid;
      var proto = "https:" != window.location.protocol ? "http" : "https";
      if (pid != readCookie("pid") && "" != pid) {
        var ref = document.referrer;
        qc_load_js(("https:" ==
        document.location.protocol ? "https" : "http") + "://affiliate.hotel.de/go.cgi?js=1&pid=" + pid + "&subid=" + subid + "&wmid=bcc&cpid=1&ref=" + encodeURI(ref) + "&target=" + encodeURI(window.location));
        createCookie("pid", pid, 30);
        createCookie("subid", subid, 30)
      } else subid != readCookie("subid") && "" != subid && (ref = document.referrer, qc_load_js(("https:" == document.location.protocol ? "https" : "http") + "://affiliate.hotel.de/go.cgi?js=1&pid=" + pid + "&subid=" + subid + "&wmid=bcc&cpid=1&ref=" +
        encodeURI(ref) + "&target=" + encodeURI(window.location)), createCookie("subid", subid, 30))
    }
    ;
    //</script>
