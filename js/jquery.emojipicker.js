;(function($) {

  var pluginName = "emojiPicker",
      defaults = {
        width: '200',
        height: '350',
        position: 'right',
        fadeTime: 100,
        iconColor: 'black',
        iconBackgroundColor: '#eee',
        recentCount: 20,
        container: 'body',
        button: true,
        dailyEmoji: false
      };

  var MIN_WIDTH = 280,
      MAX_WIDTH = 600,
      MIN_HEIGHT = 100,
      MAX_HEIGHT = 350,
      MAX_ICON_HEIGHT = 50;

  var groups = [
    { name: 'people', label: 'People' },
    { name: 'nature', label: 'Nature and Animals' },
    { name: 'food', label: 'Food and Drinks' },
    { name: 'activities', label: 'Activities' },
    { name: 'travel', label: 'Travel & Places' },
    { name: 'objects', label: 'Objects' },
    { name: 'symbols', label: 'Symbols' },
    { name: 'flags', label: 'Flags' }
  ];

  function EmojiPicker( element, options ) {

    this.element = element;
    this.$el = $(element);

    this.settings = $.extend( {}, defaults, options );

    this.$container = $(this.settings.container);

    // (type) Safety first
    this.settings.width = parseInt(this.settings.width);
    this.settings.height = parseInt(this.settings.height);

    // Check for valid width/height
    if(this.settings.width >= MAX_WIDTH) {
      this.settings.width = MAX_WIDTH;
    } else if (this.settings.width < MIN_WIDTH) {
      this.settings.width = MIN_WIDTH;
    }
    if (this.settings.height >= MAX_HEIGHT) {
      this.settings.height = MAX_HEIGHT;
    } else if (this.settings.height < MIN_HEIGHT) {
      this.settings.height = MIN_HEIGHT;
    }

    var possiblePositions = [ 'left',
                              'right'
                              /*,'top',
                              'bottom'*/];
    if($.inArray(this.settings.position,possiblePositions) == -1) {
      this.settings.position = defaults.position; //current default
    }

    this.init();

  }

  $.extend(EmojiPicker.prototype, {

    init: function() {
      this.active = false;
      this.addPickerIcon();
      this.createPicker();
      this.listen();
    },

    addPickerIcon: function() {
      // The wrapper is not needed if they have chosen to not use a button
      if (this.settings.button) {
        var elementHeight = this.$el.outerHeight();
        var iconHeight = elementHeight > MAX_ICON_HEIGHT ?
          MAX_ICON_HEIGHT :
          elementHeight;

        // This can cause issues if the element is not visible when it is initiated
        var objectWidth = this.$el.width();

        this.$el.width(objectWidth);

        this.$wrapper = this.$el
          .wrap("<div class='emojiPickerIconWrap'></div>")
          .parent();

        this.$icon = $('<div class="emojiPickerIcon"></div>')
          .height(iconHeight)
          .width(iconHeight)
          .addClass(this.settings.iconColor)
          .css('right', -iconHeight);
          //.css('backgroundColor', this.settings.iconBackgroundColor)
        this.$wrapper.append( this.$icon );
      }

    },

    createPicker: function() {

      // Show template
      this.$picker = $( getPickerHTML() )
        .appendTo( this.$container )
        .width(this.settings.width)
        .height(this.settings.height)
        .css('z-index',10000);

      // Picker height
      this.$picker.find('.sections')
        .height(parseInt(this.settings.height) - 40); // 40 is height of the tabs

      // Tab size based on width
      if (this.settings.width < 240) {
        this.$picker.find('.emoji').css({'width':'1em', 'height':'1em'});
      }

    },

    destroyPicker: function() {
      if (this.isMobile) return this;

      this.$picker.unbind('mouseover');
      this.$picker.unbind('mouseout');
      this.$picker.unbind('click');
      this.$picker.remove();

      $.removeData(this.$el.get(0), 'emojiPicker');

      return this;
    },

    listen: function() {
      // If the button is being used, wrapper has not been set,
      //    and will not need a listener
      if (this.settings.button){
        // Clicking on the picker icon
        this.$wrapper.find('.emojiPickerIcon')
          .click( $.proxy(this.iconClicked, this) );
      }

      // Click event for emoji
      this.$picker.on('click', 'section em', $.proxy(this.emojiClicked, this));

      // Hover event for emoji
      this.$picker.on('mouseover', 'em', $.proxy(this.emojiMouseover, this) );
      this.$picker.on('mouseout',  'em', $.proxy(this.emojiMouseout, this) );

      // Click event for active tab
      this.$picker.find('nav .tab')
        .click( $.proxy(this.emojiCategoryClicked, this) )
        .mouseover( $.proxy(this.emojiTabMouseover, this) )
        .mouseout( $.proxy(this.emojiMouseout, this) );

      // Scroll event for active tab
      this.$picker.find('.sections')
        .scroll( $.proxy(this.emojiScroll, this) );

      this.$picker.click( $.proxy(this.pickerClicked, this) );

      // Key events for search
      this.$picker.find('section.search input')
        .on('keyup search', $.proxy(this.searchCharEntered, this) );

      // Shortcode hover
      this.$picker.find('.shortcode').mouseover(function(e) { e.stopPropagation(); });

      $(document.body).click( $.proxy(this.clickOutside, this) );

      // Resize events forces a reposition, which may or may not actually be required
      $(window).resize( $.proxy(this.updatePosition, this) );
    },

    updatePosition: function() {

      /*  Process:
          1. Find the nearest positioned element by crawling up the ancestors, record it's offset
          2. Find the bottom left or right of the input element, record this (Account for position setting of left or right)
          3. Find the difference between the two, as this will become our new position
          4. Magic.

          N.B. The removed code had a reference to top/bottom positioning, but I don't see the use case for this..
      */

      // Step 1
      // Luckily jquery already does this...
      var positionedParent = this.$picker.offsetParent();
      var parentOffset = positionedParent.offset(); // now have a top/left object

      // Step 2
      var elOffset = this.$el.offset();
      if(this.settings.position == 'right'){
        elOffset.left += this.$el.outerWidth() - this.settings.width;
      }
      elOffset.top += this.$el.outerHeight();

      // Step 3
      var diffOffset = {
        top: (elOffset.top - parentOffset.top),
        left: (elOffset.left - parentOffset.top)
      };

      this.$picker.css({
        top: diffOffset.top,
        left: diffOffset.left
      });

      return this;
    },

    hide: function() {
      this.$picker.hide(this.settings.fadeTime, 'linear', function() {
        this.active = false;
        if (this.settings.onHide) {
          this.settings.onHide( this.$picker, this.settings, this.active );
        }
      }.bind(this));
    },

    show: function() {
      //this.$el.focus();
      this.updatePosition();
      this.$picker.show(this.settings.fadeTime, 'linear', function() {
        this.active = true;
        if (this.settings.onShow) {
          this.settings.onShow( this.$picker, this.settings, this.active );
        }
      }.bind(this));
    },

    /************
     *  EVENTS  *
     ************/

    iconClicked : function() {
      if ( this.$picker.is(':hidden') ) {
        this.show();
        if( this.$picker.find('.search input').length > 0 ) {
         // this.$picker.find('.search input').focus();
        }
      } else {
        this.hide();
      }
    },

    emojiClicked: function(e) { 
      var clickTarget = $(e.target);
      var emojiSpan;
      if (clickTarget.is('em')) {
        emojiSpan = clickTarget.find('span');
      } else {
        emojiSpan = clickTarget.parent().find('.emoji');
      }

      var emojiId = emojiSpan.attr('class').split('emoji-')[1];
      var emojiCharacter = emojiSpan.text();

      $(this.element).focus();
      insertEmoji(this.element, emojiCharacter);
      addToLocalStorage(emojiId, emojiCharacter);
      updateRecentlyUsed();

      // For anyone who is relying on the keyup event
      $(this.element).trigger("keyup");

      // trigger change event on input
      var event = document.createEvent("HTMLEvents");
      event.initEvent("input", true, true);
      this.element.dispatchEvent(event);
    },

    emojiMouseover: function(e) {
      var clickTarget = $(e.target);
      var emojiSpan;
      if (clickTarget.is('em')) {
        emojiSpan = clickTarget.find('span');
      } else {
        emojiSpan = clickTarget.parent().find('.emoji');
      }
      var emojiId = emojiSpan.attr('class').split('emoji-')[1];
      var emojiCharacter = emojiSpan.text();
      var $shortcode = emojiSpan.parents('.emojiPicker').find('.shortcode');
      $shortcode.find('.random').hide();
      $shortcode.find('.info').show().html('<div class="emoji emoji-' + emojiId + '">' + emojiCharacter + '</div><em>' + emojiId.replace(/^:|:$/g,"").replace(/_+/g," ") + '</em>');
    },

    emojiMouseout: function(e) {
      $(e.target).parents('.emojiPicker').find('.shortcode .info').empty().hide();
      $(e.target).parents('.emojiPicker').find('.shortcode .random').show();
    },

    emojiCategoryClicked: function(e) {
      var section = '';

      // Update tab
      this.$picker.find('nav .tab').removeClass('active');
      if ($(e.target).parent().hasClass('tab')) {
        section = $(e.target).parent().attr('data-tab');
        $(e.target).parent('.tab').addClass('active');
      }
      else {
        section = $(e.target).attr('data-tab');
        $(e.target).addClass('active');
      }

      var $section = this.$picker.find('section.' + section);

      var heightOfSectionsHidden = $section.parent().scrollTop();
      var heightOfSectionToPageTop = $section.offset().top;
      var heightOfSectionsToPageTop = $section.parent().offset().top;

      var scrollDistance = heightOfSectionsHidden
                           + heightOfSectionToPageTop
                           - heightOfSectionsToPageTop;

      $('.sections').off('scroll'); // Disable scroll event until animation finishes

      var that = this;
      $('.sections').animate({
        scrollTop: scrollDistance
      }, 250, function() {
        that.$picker.find('.sections').on('scroll', $.proxy(that.emojiScroll, that) ); // Enable scroll event
      });
    },

    emojiTabMouseover: function(e) {
      var section = '';
      if ($(e.target).parent().hasClass('tab')) {
        section = $(e.target).parent().attr('data-tab');
      }
      else {
        section = $(e.target).attr('data-tab');
      }

      var groupTitle = '';
      for (var i = 0; i < groups.length; i++) {
        if (groups[i].name == section) { groupTitle = groups[i].label; }
      }
      if (groupTitle == '') { groupTitle = 'Recently Used'; }

      var groupCount = $('section.' + section).attr('data-count');
      var groupHtml = '<em class="tabTitle">' + groupTitle + ' <span class="count">(' + groupCount + ' emojis)</span></em>';

      var $shortcode = $(e.target).parents('.emojiPicker').find('.shortcode');
      $shortcode.find('.random').hide();
      $shortcode.find('.info').show().html(groupHtml);
    },

    emojiScroll: function(e) {
      var sections = $('section');
      $.each(sections, function(key, value) {
        var section = sections[key];
        var offsetFromTop = $(section).position().top;

        if (section.className == 'search' || (section.className == 'people' && offsetFromTop > 0)) {
          $(section).parents('.emojiPicker').find('nav tab.recent').addClass('active');
          return;
        }

        if (offsetFromTop <= 0) {
          $(section).parents('.emojiPicker').find('nav .tab').removeClass('active');
          $(section).parents('.emojiPicker').find('nav .tab[data-tab=' + section.className + ']').addClass('active');
        }
      });
    },

    pickerClicked: function(e) {
      e.stopPropagation();
    },

    clickOutside: function(e) {
      if ( this.active ) {
        this.hide();
      }
    },

    searchCharEntered: function(e) {
      var searchTerm = $(e.target).val();
      var searchEmojis = $(e.target).parents('.sections').find('section.search');
      var searchEmojiWrap = searchEmojis.find('.wrap');
      var sections = $(e.target).parents('.sections').find('section');

      // Clear if X is clicked within input
      var searchTermToBeUsed = searchTerm.trim().toLowerCase().replace(/\s+/g,"_");
      if (searchTermToBeUsed == '') {
        sections.show();
        searchEmojiWrap.hide();
        return;
      }
      
      if (searchTermToBeUsed.length > 0) {
        sections.hide();
        searchEmojis.show();
        searchEmojiWrap.show();

        var results = [];
        searchEmojiWrap.find('em').remove();

        $.each($.fn.emojiPicker.emojis, function(i, emoji) {
          var emojiId = emoji.id;
          if ( emojiId.indexOf(searchTermToBeUsed) > -1 ) {
            results.push('<em><span class="emoji emoji-' + emojiId + '">' + emoji.symbol+ '</span></em>');
          }
        });
        searchEmojiWrap.append(results.join(''));
      } else {
        sections.show();
        searchEmojiWrap.hide();
      }
    }
  });

  $.fn[ pluginName ] = function ( options ) {

    // Calling a function
    if (typeof options === 'string') {
      this.each(function() {
        var plugin = $.data( this, pluginName );
        switch(options) {
          case 'toggle':
            plugin.iconClicked();
            break;
          case 'destroy':
            plugin.destroyPicker();
            break;
        }
      });
      return this;
    }

    this.each(function() {
      // Don't attach to the same element twice
      if ( !$.data( this, pluginName ) ) {
        $.data( this, pluginName, new EmojiPicker( this, options ) );
      }
    });
    return this;
  };

  /* ---------------------------------------------------------------------- */

  function getPickerHTML() {
    var nodes = [];
    var aliases = {
      'undefined': 'object'
    }
    var items = {};
    var localStorageSupport = (typeof(Storage) !== 'undefined') ? true : false;

    // Re-Sort Emoji table
    $.each($.fn.emojiPicker.emojis, function(i, emoji) {
      var group = aliases[ emoji.group ] || emoji.group;
      items[ group ] = items[ group ] || [];
      items[ group ].push( emoji );
    });

    nodes.push('<div class="emojiPicker">');
    nodes.push('<nav>');

    // Recent Tab, if localstorage support
    if (localStorageSupport) {
      nodes.push('<div class="tab active" data-tab="recent"><div class="emoji emoji-tab-recent"></div></div>');
    }

    // Emoji group tabs
    var groups_length = groups.length;
    for (var i = 0; i < groups_length; i++) {
      nodes.push('<div class="tab' +
      ( !localStorageSupport && i == 0 ? ' active' : '' ) +
      '" data-tab="' +
      groups[i].name +
      '"><div class="emoji emoji-tab-' +
      groups[i].name +
      '"></div></div>');
    }
    nodes.push('</nav>');
    nodes.push('<div class="sections">');

    // Search
     nodes.push('<section class="search">');
     nodes.push('<input type="search" placeholder="Search...">');
     nodes.push('<div class="wrap" style="display:none;"><h1>Search Results</h1></div>');
     nodes.push('</section>');

    // Recent Section, if localstorage support
    if (localStorageSupport) {
      var recentlyUsedEmojiIds = [];
      var recentlyUsedEmojiSymbols = [];
      var recentlyUsedCount = 0;
      var displayRecentlyUsed = ' style="display:none;"';

      if (localStorage.emojiIds && localStorage.emojiSymbols) {
        recentlyUsedEmojiIds = JSON.parse(localStorage.emojiIds);
        recentlyUsedEmojiSymbols = JSON.parse(localStorage.emojiSymbols)
        recentlyUsedCount = recentlyUsedEmojiIds.length;
        displayRecentlyUsed = ' style="display:block;"';
      } else{
        localStorage.emojiIds = [];
        localStorage.emojiSymbols = [];
      }

      nodes.push('<section class="recent" data-count="' + recentlyUsedEmojiIds.length + '"' + displayRecentlyUsed + '>');
      nodes.push('<h1>Recently Used</h1><div class="wrap">');

      for (var i = recentlyUsedEmojiIds.length-1; i > -1 ; i--) {
        nodes.push('<em><span class="emoji emoji-' + recentlyUsedEmojiIds[i] + '">' + recentlyUsedEmojiSymbols[i] + '</span></em>');
      }
      nodes.push('</div></section>');
    }

    // Emoji sections
    for (var i = 0; i < groups_length; i++) {
      var group_length = items[ groups[i].name ].length;
      nodes.push('<section class="' + groups[i].name + '" data-count="' + group_length + '">');
      nodes.push('<h1>' + groups[i].label + '</h1><div class="wrap">');
      for (var j = 0; j < group_length; j++) {
        var emoji = items[ groups[i].name ][ j ];
        nodes.push('<em><span class="emoji emoji-' + emoji.id + '">'+emoji.symbol+'</span></em>');
      }
      nodes.push('</div></section>');
    }
    nodes.push('</div>');

    // Shortcode section
    nodes.push('<div class="shortcode"><span class="random">');
    if(defaults.dailyEmoji)
      nodes.push('<em class="tabTitle">' + generateEmojiOfDay() + '</em>');
    nodes.push('</span><span class="info"></span></div>');
    nodes.push('</div>');
    return nodes.join("\n");
  }

  function generateEmojiOfDay() {
    var emojis = $.fn.emojiPicker.emojis;
    var i = Math.floor(Math.random() * (364 - 0) + 0);
    var emoji = emojis[i];
    return 'Random Emoji: <span class="eod"><span class="emoji emoji-' + emoji.id + '"></span> <span class="emojiName">' + emoji.symbol + '</span></span>';
  }

  function insertEmoji(inputField, emojiCharacter){
    if(inputField.isContentEditable)
      pasteHtmlAtCaret(emojiCharacter);
    else
      insertAtCaret(inputField, emojiCharacter);
  }

  function pasteHtmlAtCaret(html){
      var sel, range;
      if (window.getSelection) {
          // IE9 and non-IE
          sel = window.getSelection();
          if (sel.getRangeAt && sel.rangeCount) {
              range = sel.getRangeAt(0);
              range.deleteContents();

              // Range.createContextualFragment() would be useful here but is
              // non-standard and not supported in all browsers (IE9, for one)
              var el = document.createElement("div");
              el.innerHTML = html;
              var frag = document.createDocumentFragment(), node, lastNode;
              while ( (node = el.firstChild) ) {
                  lastNode = frag.appendChild(node);
              }
              range.insertNode(frag);
              delete(el);
              
              // Preserve the selection
              if (lastNode) {
                  range = range.cloneRange();
                  range.setStartAfter(lastNode);
                  range.collapse(true);
                  sel.removeAllRanges();
                  sel.addRange(range);
              }
          }
      } else if (document.selection && document.selection.type != "Control") {
          // IE < 9
          document.selection.createRange().pasteHTML(html);
      }
    }

  function insertAtCaret(inputField, myValue) {
    if (document.selection) {
      //For browsers like Internet Explorer
      inputField.focus();
      var sel = document.selection.createRange();
      sel.text = myValue;
      inputField.focus();
    }
    else if (inputField.selectionStart || inputField.selectionStart == '0') {
      //For browsers like Firefox and Webkit based
      var startPos = inputField.selectionStart;
      var endPos = inputField.selectionEnd;
      var scrollTop = inputField.scrollTop;
      inputField.value = inputField.value.substring(0, startPos)+myValue+inputField.value.substring(endPos,inputField.value.length);
      inputField.focus();
      inputField.selectionStart = startPos + myValue.length;
      inputField.selectionEnd = startPos + myValue.length;
      inputField.scrollTop = scrollTop;
    } else {
      inputField.focus();
      inputField.value += myValue;
    }
  }

  function addToLocalStorage(emojiId, emojiCharacter) {
    var recentlyUsedEmojiIds = [];
    var recentlyUsedEmojiSymbols = [];
    if (localStorage.emojiIds && localStorage.emojiSymbols) {
      recentlyUsedEmojiIds = JSON.parse(localStorage.emojiIds);
      recentlyUsedEmojiSymbols = JSON.parse(localStorage.emojiSymbols);
    }

    // If already in recently used, move to front
    var index = recentlyUsedEmojiIds.indexOf(emojiId);
    if (index > -1) {
      recentlyUsedEmojiIds.splice(index, 1);
      recentlyUsedEmojiSymbols.splice(index,1);
    }
    recentlyUsedEmojiIds.push(emojiId);
    recentlyUsedEmojiSymbols.push(emojiCharacter)

    if (recentlyUsedEmojiIds.length > defaults.recentCount) {
      recentlyUsedEmojiIds.shift();
      recentlyUsedEmojiSymbols.shift();
    }

    localStorage.emojiIds = JSON.stringify(recentlyUsedEmojiIds);
    localStorage.emojiSymbols = JSON.stringify(recentlyUsedEmojiSymbols);
  }

  function updateRecentlyUsed() {
    var recentlyUsedEmojiIds = JSON.parse(localStorage.emojiIds);
    var recentlyUsedEmojiSymbols = JSON.parse(localStorage.emojiSymbols);
    var emojis = [];
    var recent = $('section.recent');

    for (var i = recentlyUsedEmojiIds.length-1; i >= 0; i--) {
      emojis.push('<em><span class="emoji emoji-' + recentlyUsedEmojiIds[i] + '">'+ recentlyUsedEmojiSymbols[i] +'</span></em>');
    }

    // Fix height as emojis are added
    var prevHeight = recent.outerHeight();
    $('section.recent').attr("data-count", emojis.length);
    $('section.recent .wrap').html(emojis.join(''));
    var currentScrollTop = $('.sections').scrollTop();
    var newHeight = recent.outerHeight();
    var newScrollToHeight = 0;

    if (!$('section.recent').is(':visible')) {
      newScrollToHeight = newHeight;
    } else if (prevHeight != newHeight) {
      newScrollToHeight = newHeight - prevHeight;
    }

    $('.sections').animate({
      scrollTop: currentScrollTop + newScrollToHeight
    }, 0);
  }
})(jQuery);
