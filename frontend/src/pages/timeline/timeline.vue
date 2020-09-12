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
  import { Button, Modal } from '@/components';
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
      axios,
      // eslint-disable-next-line vue/no-unused-components
      Modal
    },
    data() {
      return {
        feedList : [],
        modals: {
          classic: false,
          mini: false
        },
        img : [],
        filesPreview: [],
        imgUrls: [],
        feed : {
          subject : "",
          name : "shinmj",
          content : "",
          imgs : "",
          like : 0,
          crt_dt : new Date(),
          mod_dt : null
        }
      }
    },
    created() {
      this.getFeeds()
    },
    methods : {
      getFeeds(){
        axios.get('/feeds').then(response =>{
          this.feedList = response.data.infos
          console.log(this.feedList)
        })
      },
      postFeeds(){
        axios.post('/feeds/insert', this.feed)
        .then(response =>{
          console.log(response)
        })
      },
      popPickImg(){
        this.$refs.file_input.click()

        /*for(let i = 0; i< this.$refs.file_input.files.length; i++){
          this.filesPreview.push(this.$refs.file_input.files[i])
        }*/
      },
      fileSelected(e){
        console.log(e)
        let files = e.target.files

        for(var i = 0; i < files.length; i++){

          this.imgUrls.push(URL.createObjectURL(files[i]))
          if(this.imgUrls.length == 11) {
            this.imgUrls.splice(10,1)
            alert("이미지는 10개까지 업로드 할 수 있습니다.")
            e.preventDefault();
            break;
          }
        }
        console.log(this.imgUrls)
      },
      upload(){
        let formData = new FormData();
        for(let i = 0; i < this.$refs.file_input.files.length; i++){
          formData.append('img', this.$refs.file_input.files[i])
        }
        axios.post('/feeds/upload', formData).then(response => {
          console.log(response)
          if(response.status == 200){
            this.postFeeds()
          }else{
            alert(response.statusText)
          }
        })
      },
      deletePic(idx){
        this.imgUrls.splice(idx, 1)
        this.$delete(this.$refs.file_input, 1)
      }


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

            <img class="select-img" src="img/write_icon.png" @click="modals.classic = true">
            <modal :show.sync="modals.classic" headerClasses="justify-content-center">
              <h4 slot="header" class="title title-up">새 피드 작성</h4>



                <fieldset> <!--style="position: relative;"-->
                  <input class="title_text" placeholder="제목을 입력하세요." v-model="feed.subject"/>
                  <!--<textarea class="title_text" name="user_bio" rows="1"></textarea>-->
                  <textarea class="content_text" name="user_bio" placeholder="내용을 입력하세요." v-model="feed.content"></textarea>
                  <!--<button style="position: absolute; bottom: 30px; right: 680px; background: transparent;"><i class="now-ui-icons design_image"/></button>-->
                  <div class="float-left thumb-block" >

                    <div class="thumb-item" v-for="(v,idx) in imgUrls" v-bind:key="idx">
                      <img class="thumb-img" :src="v">
                      <a class="remImage" href="javascript:void(0)">
                        <img class="delete-icon" src="img/criss-cross.png" @click="deletePic(idx)">
                      </a>
                    </div>
                    <button class="add-btn float-left" @click="popPickImg">
                      <i class="now-ui-icons design_image" style="color: white;"/>
                      <span>사진</span>
                    </button>
                  </div>


                  <input v-on:change="fileSelected" type="file" class="file_input_hidden" ref="file_input" multiple="multiple" accept="image/x-png,image/gif,image/jpeg"/>
                </fieldset>

              <template slot="footer">

                <n-button type="primary" @click="upload">완료</n-button>
                <n-button type="warning" @click.native="modals.classic = false">취소</n-button>

              </template>
            </modal>
          </div>
          <div class="section">
             <div class="feed-card js-profile-card" v-for="(v, idx) in feedList" v-bind:key="idx">

                <div class="feed-card__img">
                  <img src="https://image.flaticon.com/icons/svg/847/847969.svg" alt="profile card">
                </div>


                <div class="feed-card__cnt js-profile-cnt">
                  <div class="feed-card__name" >{{v.subject}}</div>
                  <div class="feed-card__txt"><strong>{{v.name}}</strong> {{v.crt_dt}}</div>
                  <hr />

                  <div class="feed-card-inf__item">
                    <div class="feed-card-inf__txt">{{v.content}}</div>
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
                    <span class="feed-bottom text">{{v.like}}</span>
                  </div>

                </div>


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
