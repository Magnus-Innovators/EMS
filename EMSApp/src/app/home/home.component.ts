import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router} from '@angular/router';
import * as $ from 'jquery';
import { LinkService } from '../shared-services/link.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  imageUrl = '/assets/img/home-banner.jpeg';
  bannerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';
  bannerSubText = 'Duis pharetra varius quam sit amet vulputate. Quisque mauris augue, molestie tincidunt condimentum vitae';
  pageName = 'home';

  subscription: Subscription;

  constructor(private _router: Router, private _linkService: LinkService) {
    this.subscription = _linkService.linkSourceData$.subscribe(
        pageName => {
          this.goToSummaryPage(pageName);
          window.scrollTo(0, 0);
        }
    );
  }


  goToSummaryPage(pageName: string) {
    this._router.navigateByUrl('/home/(subroute:' + pageName + ')');
    this.loadHeader(pageName);
  }

  loadHeader(page) {
    this.pageName = page;
    if (page === 'home') {
      this.imageUrl = '/assets/img/home-banner.jpeg';
      this.bannerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';
      this.bannerSubText = 'Duis pharetra varius quam sit amet vulputate. Quisque mauris augue, molestie tincidunt condimentum vitae';
    } else if (page === 'students') {
      this.imageUrl = '/assets/img/student-home-banner.jpeg';
      this.bannerText = 'Students ipsum dolor sit amet, consectetur adipiscing elit';
      this.bannerSubText = 'Students pharetra varius quam sit amet vulputate. Quisque mauris augue, molestie tincidunt condimentum vitae';
    } else if (page === 'teachers') {
      this.imageUrl = '/assets/img/teachers-home-banner.jpeg';
      this.bannerText = 'Teachers ipsum dolor sit amet, consectetur adipiscing elit';
      this.bannerSubText = 'Teachers pharetra varius quam sit amet vulputate. Quisque mauris augue, molestie tincidunt condimentum vitae';
    } else if (page === 'parents') {
      this.imageUrl = '/assets/img/parents-home-banner.jpeg';
      this.bannerText = 'Parents ipsum dolor sit amet, consectetur adipiscing elit';
      this.bannerSubText = 'Parents pharetra varius quam sit amet vulputate. Quisque mauris augue, molestie tincidunt condimentum vitae';
    } else if (page === 'school') {
      this.imageUrl = '/assets/img/school-home-banner.jpeg';
      this.bannerText = 'School ipsum dolor sit amet, consectetur adipiscing elit';
      this.bannerSubText = 'School pharetra varius quam sit amet vulputate. Quisque mauris augue, molestie tincidunt condimentum vitae';
    }
  }


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

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

}
