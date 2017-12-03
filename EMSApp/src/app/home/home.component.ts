import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }


  ngOnInit() {
    /*(<any>$('#nav')).affix({
      offset: {
        top: $('#homedata').offset().top
      }
    });*/
    /*$(document).ready(function() {
      const $body = $('body');
      const $nav = $('#nav');
      const navTop = $nav[0].offsetTop;
      const navHeight = $nav[0].clientHeight;
      const bsEnv = function(){
        const envs = ['xs', 'sm', 'md', 'lg'];
        const $el = $('<div>');
        $el.appendTo($('body'));
        for (let i = envs.length - 1; i >= 0; i--) {
          let env = envs[i];
          $el.addClass('hidden-' + env);
          if ($el.is(':hidden')) {
            $el.remove();
            return env
          }
        }
      };
      const initAffix = function() {
        $body.on('affix-top.bs.affix', function() {
          $body.css('padding-top', 0);
          $body.removeClass('navbar-affixed');
        });
        $body.on('affix.bs.affix', function() {
          $body.css('padding-top', navHeight + 20);
          $body.addClass('navbar-affixed');
        });
        $nav.on('affix.bs.affix', function() {
          $nav.addClass('navbar-fixed-top');
        });
        $nav.on('affix-top.bs.affix', function() {
          $nav.removeClass('navbar-fixed-top');
        });
        (<any>$nav).affix({
          offset: {
            top: function() {
              return navTop;
            }
          }
        });
      };
      if (<any>bsEnv === 'xs') {
        $nav.addClass('navbar-fixed-top');
        $body.css('padding-top', $nav[0].clientHeight + 15);
      } else {
        $nav.addClass('navbar-brand-hidden');
        initAffix();
      }
    });*/
  }

}
