<script>
  //import { Parallax } from '@/components';
  import BasicElements from './../components/BasicElementsSection';
  import Navigation from './../components/Navigation';
  import TabsSection from './../components/Tabs';
  import ProgressPagination from './../components/ProgressPagination';
  import Notifications from './../components/Notifications';
  import Typography from './../components/Typography';
  import JavascriptComponents from './../components/JavascriptComponents';
  import CarouselSection from './../components/CarouselSection';
  import NucleoIconsSection from './../components/NucleoIconsSection';
  import SignupForm from './../components/SignupForm';
  import ExamplesSection from './../components/ExamplesSection';
  import DownloadSection from './../components/DownloadSection';
  import { Button } from '@/components';
  import axios from "axios";

  export default {
    name: 'index',
    bodyClass: 'index-page',
    components: {
      [Button.name]: Button,
      //Parallax,
      BasicElements,
      Navigation,
      TabsSection,
      ProgressPagination,
      Notifications,
      Typography,
      JavascriptComponents,
      CarouselSection,
      NucleoIconsSection,
      SignupForm,
      ExamplesSection,
      DownloadSection,
      // eslint-disable-next-line vue/no-unused-components
      axios
    },
    data() {
      return {
        boardList : []
      }
    },
    created() {

    },
    methods : {

    }
  };
</script>

<template>
  <div>
    <div class="page-header page-header-small">
      <parallax
          class="page-header-image"
          style="background-image:url('img/timeline_bg.jpg')"
      >
      </parallax>
      <div class="container">
        <div class="content-center brand" style="padding-top: 100px">
          <img class="n-logo" src="img/z-tech_icon.png" alt="" />
          <h5>TIMELINE</h5>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="container">
        <div class="card">
          <div class="timeline-header">
            <h2>TIMELINE</h2>
          </div>
          <div class="write-btn">

            <img src="img/write_icon.png">

          </div>
          <div class="section" >
             <div class="feed-card js-profile-card">

                <div class="feed-card__img">
                  <img src="https://res.cloudinary.com/muhammederdem/image/upload/v1537638518/Ba%C5%9Fl%C4%B1ks%C4%B1z-1.jpg" alt="profile card">
                </div>


                <div class="feed-card__cnt js-profile-cnt">
                  <div class="feed-card__name" >Muhammed Erdem</div>
                  <div class="feed-card__txt"><strong>Mesopotamia</strong> Front-end Developer from </div>
                  <hr />

                  <div class="feed-card-inf__item">

                    <div class="feed-card-inf__txt">FollowingFollowingFollowingFollowingFollowingFollowingFollowingFollowingFollowingFollowingFollowingFollowingFollowingFollowingFollowingFollowingFollowingFollowingFollowingFollowingFollowingFollowingFollowingFollowingFollowingFollowingFollowingFollowing</div>
                  </div>

                  <div class="feed-card-social">
                    <a href="https://www.facebook.com/iaMuhammedErdem" class="feed-card-social__item facebook" target="_blank">
                      <div>
                        <img src="img/bg1.jpg" class="feed-card-social__item__uploaded-img" />
                      </div>
                    </a>

                    <a href="https://www.facebook.com/iaMuhammedErdem" class="feed-card-social__item facebook" target="_blank">
                      <div>
                        <img src="img/bg1.jpg" class="feed-card-social__item__uploaded-img" />
                      </div>
                    </a>
                  </div>

                  <hr/>

                  <div class="feed-bottom" >
                    <a href=""><i class="now-ui-icons ui-2_chat-round"></i></a>
                    <span class="feed-bottom text">sdg</span>
                  </div>
                  <div class="feed-bottom" >
                    <a href="javascript:void(0)"><i class="now-ui-icons ui-2_like"></i></a>
                    <span class="feed-bottom text">900</span>
                  </div>

                  <!--<div class="container" id="news">
                    <div class="panel panel-default">
                      <div class="panel-body">
                        <textarea class="form-control" placeholder="Share comment" rows="3"></textarea>
                        <n-button class="pull-right" type="primary" round>등록</n-button>

                      </div>
                    </div>
                  </div>-->

<!--                  <div class="feed-card-ctr">
                    <button class="feed-card__button button&#45;&#45;blue js-message-btn">Message</button>
                    <button class="feed-card__button button&#45;&#45;orange">Follow</button>
                  </div>-->
                </div>

                <!--<div class="feed-card-message js-message">
                  <form class="feed-card-form">
                    <div class="feed-card-form__container">
                      <textarea placeholder="Say something..."></textarea>
                    </div>

                    <div class="feed-card-form__bottom">
                      <button class="feed-card__button button&#45;&#45;blue js-message-close">
                        Send
                      </button>

                      <button class="feed-card__button button&#45;&#45;gray js-message-close">
                        Cancel
                      </button>
                    </div>
                  </form>

                  <div class="feed-card__overlay js-message-close"></div>
                </div>-->

              </div>


            <div class="feed-card js-profile-card">

              <div class="feed-card__img">
                <img src="https://res.cloudinary.com/muhammederdem/image/upload/v1537638518/Ba%C5%9Fl%C4%B1ks%C4%B1z-1.jpg" alt="profile card">
              </div>

              <div class="feed-card__cnt js-profile-cnt">
                <div class="feed-card__name" >Muhammed Erdem</div>
                <div class="feed-card__txt"><strong>Mesopotamia</strong> Front-end Developer from </div>
                <hr />

                <div class="feed-card-inf__item">

                  <div class="feed-card-inf__txt">FollowingFollowingFollowingFollowingFollowingFollowingFollowingFollowingFollowingFollowingFollowingFollowingFollowingFollowingFollowingFollowingFollowingFollowingFollowingFollowingFollowingFollowingFollowingFollowingFollowingFollowingFollowingFollowing</div>
                </div>

                <div class="feed-card-social">
                  <a href="https://www.facebook.com/iaMuhammedErdem" class="feed-card-social__item facebook" target="_blank">
                    <div>
                      <img src="img/bg1.jpg" class="feed-card-social__item__uploaded-img" />
                    </div>
                  </a>

                  <a href="https://www.facebook.com/iaMuhammedErdem" class="feed-card-social__item facebook" target="_blank">
                    <div>
                      <img src="img/bg1.jpg" class="feed-card-social__item__uploaded-img" />
                    </div>
                  </a>
                </div>

                <hr/>

                <div class="feed-bottom" >
                  <a href=""><i class="now-ui-icons ui-2_chat-round"></i></a>
                  <span class="feed-bottom text">sdg</span>
                </div>
                <div class="feed-bottom" >
                  <a href="javascript:void(0)"><i class="now-ui-icons ui-2_like"></i></a>
                  <span class="feed-bottom text">sdg</span>
                </div>
                <!--<div class="container" id="news">
                  <div class="panel panel-default">
                    <div class="panel-body">
                      <textarea class="form-control" placeholder="Share comment" rows="3"></textarea>
                      <n-button class="pull-right" type="primary" round>등록</n-button>

                    </div>
                  </div>
                </div>-->

                <!--                  <div class="feed-card-ctr">
                                    <button class="feed-card__button button&#45;&#45;blue js-message-btn">Message</button>
                                    <button class="feed-card__button button&#45;&#45;orange">Follow</button>
                                  </div>-->
              </div>

              <!--<div class="feed-card-message js-message">
                <form class="feed-card-form">
                  <div class="feed-card-form__container">
                    <textarea placeholder="Say something..."></textarea>
                  </div>

                  <div class="feed-card-form__bottom">
                    <button class="feed-card__button button&#45;&#45;blue js-message-close">
                      Send
                    </button>

                    <button class="feed-card__button button&#45;&#45;gray js-message-close">
                      Cancel
                    </button>
                  </div>
                </form>

                <div class="feed-card__overlay js-message-close"></div>
              </div>-->

            </div>

          </div>
        </div>
      </div>
    </div>

    <basic-elements></basic-elements>
    <navigation></navigation>
    <tabs-section></tabs-section>
    <progress-pagination></progress-pagination>
    <notifications></notifications>
    <typography></typography>
    <javascript-components></javascript-components>
    <carousel-section></carousel-section>
    <nucleo-icons-section></nucleo-icons-section>
    <div class="section">
      <div class="container text-center">
        <div class="row justify-content-md-center">
          <div class="col-md-12 col-lg-8">
            <h2 class="title">Completed with examples</h2>
            <h5 class="description">
              The kit comes with three pre-built pages to help you get started
              faster. You can change the text and images and you're good to go.
              More importantly, looking at them will give you a picture of what
              you can built with this powerful Bootstrap 4 ui kit.
            </h5>
          </div>
        </div>
      </div>
    </div>
    <signup-form></signup-form>
    <examples-section></examples-section>
    <download-section></download-section>
  </div>
</template>

<style></style>
