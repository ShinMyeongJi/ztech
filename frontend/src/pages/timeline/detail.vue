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
  import comment from '../../components/comment';
  import { Button, Modal } from '@/components';
  import axios from "axios";
  import moment from "moment";
  import {Carousel, CarouselItem} from "element-ui";

  export default {

    name: 'index',
    bodyClass: 'index-page',
    components: {
      [Button.name]: Button,
      [Carousel.name]: Carousel,
      [CarouselItem.name]: CarouselItem,
     // Parallax,
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
      comment,
      Modal,
      // eslint-disable-next-line vue/no-unused-components
      axios
    },
    data() {
      return {
        feed : {},
        modals: {
          classic: false,
          mini: false,
          carousel: false
        },
        filesPreview: [],
        imgUrls: [],
        showImgs : [],
        slideIndex : 0,
        comments : [],
        feedId : 0,
        visibility : false,
        mention : ""
  }
  },
  filters : {
      dateFormat :function (value) {
        return moment(String(value)).format('YYYY-MM-DD hh:mm')
      }
    },
    created() {
      this.feedId = this.$route.query.feedId
      console.log(this.feedId)
      this.getFeeds()
    },
    methods : {
      getFeeds(){
        axios.get(`/feeds/feed/${this.feedId}`).then(response =>{
          this.feed = response.data.infos[0]
          console.log(this.feed)
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
            this.$router.go(this.$router.currentRoute)
          }else{
            alert(response.statusText)
          }
        })
      },
      deletePic(idx){
        this.imgUrls.splice(idx, 1)
        this.$delete(this.$refs.file_input, 1)
      },
      splitLink(text){
        return (text || '').split(',')
      },c
      showTotalImgs(i){
        this.showImgs = this.splitLink(this.feed.imgs)
        this.modals.carousel=true
        this.slideIndex = i
        console.log(this.slideIndex)
      },
      showTextArea(feedId, commentId) {
        console.log(feedId)
      },
      goToPage(){
        this.$router.push('/timeline/detail')
      },
      addCommentForm(user, depth){
        this.mention = ""
        this.modals.classic = true
        console.log(user)
        if(depth == 1)
          this.mention = user.user_name
      }
    }
  };
</script>

<template>
  <div>
    <div class="page-header page-header-small">
      <parallax
          class="page-header-image"
          style="background-image:url('/img/timeline_bg.jpg')"
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

          <div class="section">
            <div class="feed-card js-profile-card">

              <div class="feed-card__img">
                <img src="https://image.flaticon.com/icons/svg/847/847969.svg" alt="profile card">
              </div>


              <div class="feed-card__cnt js-profile-cnt">
                <div class="feed-card__name" >{{feed.subject}}</div>
                <div class="feed-card__txt"><strong>{{feed.name}}</strong> {{feed.crt_dt}}</div>
                <hr />

                <div class="feed-card-inf__item">
                  <div class="feed-card-inf__txt">{{feed.content}}</div>
                </div>

                <div class="feed-card-social">
                  <a v-for="(img, i) in splitLink(feed.imgs)" v-bind:key="i" href="javascript:void(0);" @click="showTotalImgs(i)"
                     class="feed-card-social__item">
                    <div>
                      <img :src="img" class="feed-card-social__item__uploaded-img" />
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
                  <span class="feed-bottom text">{{feed.like}}</span>
                </div>

              </div>

              <div class="comments">
                <!--<div class="comment-wrap">
                  <div class="photo">
                    <div class="avatar" style="background-image: url('https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg')"></div>
                  </div>
                  <div class="comment-block">
                    <form action="">
                      <textarea class="comment-input" name="" id="" cols="30" rows="3" placeholder="Add comment..."></textarea>
                    </form>
                  </div>
                </div>-->
                <span v-if="feed.replies">

                   <hr/>

                  <modal :show.sync="modals.classic" headerClasses="justify-content-center" type="mini">
                    <h4 slot="header" class="title title-up">새 피드 작성</h4>

                    <fieldset> <!--style="position: relative;"-->
                       <div contenteditable="true" class="content-modal-textarea" style="overflow-y: auto">
                         <div style="background-color:darkgrey; display: inline;" v-if="mention != ''">@{{mention}}</div>
                         <div style="display : inline;">dsgsdg</div>
                       </div>

                      <!--<textarea class="content-text" name="user_bio" placeholder="댓글 내용을 입력하세요." style="border: none;">

                       </textarea>-->
                    </fieldset>

                  <template slot="footer">

                    <n-button type="warning" link @click.native="modals.classic = false">취소</n-button>
                    <n-button type="primary" >완료</n-button>


                  </template>
                </modal>




                    <div class="float-left font-weight-bold" style="font-size: 15px; margin-bottom: 20px;">댓글 <span>12</span></div>
                    <div>
                      <div v-for="(com, idx) in feed.replies" v-bind:key="idx">
                        <div  :id="'comm-' + idx">
                          <div class="comment-wrap">

                           <div class="photo">
                             <div class="avatar" :style="{backgroundImage : `url(https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg)`}"></div>

                           </div>
                           <div class="comment-block">
                             <span class="comment-user-name font-weight-bold">{{com.user.user_name}}</span>
                             <p class="comment-text">{{com.comment}}</p>
                             <div class="bottom-comment">
                                <!--<input class="comment-date" :value="com.crt_dt" readonly disabled="disabled"/>-->
                               <div class="comment-date">{{com.crt_dt | dateFormat}}</div>
                               <ul class="comment-actions">
                                 <li class="complain">
                                   <a href="javascript:void(0)">
                                     <i class="now-ui-icons ui-2_like"></i>
                                     <span style="margin-left: 8px; color: darkgray">{{com.like}}</span>
                                   </a>
                                 </li>
                                <!-- <li class="reply" @click="addCommentForm(idx)">답글</li>-->
                                 <li class="reply" @click="addCommentForm(com.user, com.comment_depth)">답글</li>
                               </ul>
                             </div>
                           </div>

                          </div>



                        </div>

                        <div v-if="com.sub_comments">

                            <div style="margin-left: 60px;" v-for="(sub, i) in com.sub_comments" v-bind:key="i">
                               <div :id="'subComm-' + i">
                                <div class="comment-wrap">
                                 <div class="photo">
                                   <div class="avatar" :style="{backgroundImage : `url(https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg)`}"></div>
                                 </div>
                                 <div class="comment-block">
                                   <span class="comment-user-name font-weight-bold">{{sub.user.user_name}}</span>
                                   <p class="comment-text">{{sub.comment}}</p>
                                   <div class="bottom-comment">
                                      <!--<input class="comment-date" :value="com.crt_dt" readonly disabled="disabled"/>-->
                                     <div class="comment-date">{{sub.crt_dt | dateFormat}}</div>
                                     <ul class="comment-actions">
                                       <li class="complain">
                                         <a href="javascript:void(0)">
                                           <i class="now-ui-icons ui-2_like"></i>
                                           <span style="margin-left: 8px; color: darkgray">{{sub.like}}</span>
                                         </a>
                                       </li>
                                       <li class="reply" @click="addCommentForm(sub.user, sub.comment_depth)">답글</li>
                                     </ul>
                                   </div>
                                 </div>
                                </div>
                              </div>
                             </div>


                          </div>



                    </div>
                  </div>

                   <div class="comment-wrap">
                     <div class="comment-write-block">
                       <p class="comment-text"></p>
                       <textarea rows="5"></textarea>

                       <n-button size="sm" class="comment-write-btn float-right font-weight-light" type="warning">취소</n-button>
                       <n-button size="sm" class="comment-write-btn float-right font-weight-light" type="primary">확인</n-button>

                     </div>
                   </div>

                   <hr/>
                 </span>
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
