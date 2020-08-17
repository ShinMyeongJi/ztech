<script>
  //import { Parallax } from '@/components';
  import BasicElements from './components/BasicElementsSection';
  import Navigation from './components/Navigation';
  import TabsSection from './components/Tabs';
  import ProgressPagination from './components/ProgressPagination';
  import Notifications from './components/Notifications';
  import Typography from './components/Typography';
  import JavascriptComponents from './components/JavascriptComponents';
  import CarouselSection from './components/CarouselSection';
  import NucleoIconsSection from './components/NucleoIconsSection';
  import SignupForm from './components/SignupForm';
  import ExamplesSection from './components/ExamplesSection';
  import DownloadSection from './components/DownloadSection';
  import axios from "axios";




  export default {
    name: 'index',
    bodyClass: 'index-page',
    components: {
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
      this.getSomething()
    },
    methods : {
      getSomething(){
        console.log("getSomething");
        axios.get("/lists").then(response=>{
          this.boardList = response.data.infos
          console.log(this.boardList)
        })
      }
    }
  };
</script>

<template>
  <div>
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image:url('img/index1.png')"
      >
      </parallax>
      <div class="container">
        <div class="content-center brand" style="padding-top: 100px">
          <img class="n-logo" src="img/z-tech_icon.png" alt="" />
          <h5>Z세대를 위한 제테크 커뮤니티</h5>
        </div>
      </div>
    </div>

    <div class="card" style="padding-top: 80px; ">

      <div class="main-content">
        <div class="container mt-7">
          <!-- Table -->
          <h2 class="mb-5">용어 쉽게 알아보기</h2>
          <div class="row">

            <div class="col">

                  <div class="card-header border-0">
                    <h3 class="mb-0">Card tables</h3>
                  </div>
                  <div class="table-responsive">
                    <table class="table align-items-center table-flush" style="height: 1000px;">
                      <thead class="thead-light">
                        <tr>
                          <th scope="col"></th>
                          <th scope="col">제목</th>
                          <th scope="col">작성자</th>
                          <th scope="col">날짜</th>

                        </tr>
                      </thead>
                      <tbody>

                        <tr v-for="(v, idx) in boardList" v-bind:key="idx">
                          <td style="font-size: x-small;">
                            {{v.id}}
                          </td>
                          <th scope="row">
                            <div class="media align-items-center">

                              <div class="media-body">
                                <span class="mb-0 text-sm" style="overflow: hidden;">{{v.subject}}</span>
                              </div>
                            </div>
                          </th>

                          <td>
                             {{v.name}}
                          </td>

                          <td>
                             {{v.crt_dt}}
                          </td>



                        </tr>

                  </tbody>
                </table>
              </div>
              <div class="card-footer py-4">
                <nav aria-label="...">
                  <ul class="pagination justify-content-end mb-0">
                    <li class="page-item disabled">
                      <a class="page-link" href="#" tabindex="-1">
                        <i class="fas fa-angle-left"></i>
                        <span class="sr-only">Previous</span>
                      </a>
                    </li>
                    <li class="page-item active">
                      <a class="page-link" href="#">1</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        <i class="fas fa-angle-right"></i>
                        <span class="sr-only">Next</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

          </div>
        </div>
        </div>
      </div>



     <!-- <div class="section section-images">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="hero-images-container">
                <img src="img/hero-image-1.png" alt="" />
              </div>
              <div class="hero-images-container-1">
                <img src="img/hero-image-2.png" alt="" />
              </div>
              <div class="hero-images-container-2">
                <img src="img/hero-image-3.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>-->
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
