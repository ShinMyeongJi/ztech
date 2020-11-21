<template>
  <div class="page-header clear-filter" filter-color="orange">

    <div
      class="page-header-image"
      style="background-image: url('img/login.jpg')"
    ></div>


    <div class="content">
      <div class="container">
        <div class="col-md-5 ml-auto mr-auto">
          <card type="login" plain>
            <div slot="header" class="logo-container">
              <img v-lazy="'img/now-logo.png'" alt="" />
            </div>


            <fg-input
              class="no-border input-lg"
              addon-left-icon="now-ui-icons users_circle-08"
              placeholder="ID"
              v-model="user.user_name"
            >
            </fg-input>

            <fg-input
              class="no-border input-lg"
              addon-left-icon="now-ui-icons ui-1_lock-circle-open"
              placeholder="Password"
              type="password"
              v-model="user.user_pwd"
            >
            </fg-input>

            <template slot="raw-content">
              <div class="card-footer text-center">
                <a
                  href="javascript:void(0)"
                  class="btn btn-primary btn-round btn-lg btn-block"
                  @click="login"
                  >Get Started</a
                >
              </div>
              <div class="pull-left">
                <h6>
                  <a href="javascript:void(0)" @click="goToCreate" class="link footer-link">Create Account</a>
                </h6>
              </div>
              <div class="pull-right">
                <h6>
                  <a href="#pablo" class="link footer-link">Need Help?</a>
                </h6>
              </div>

            </template>
          </card>
        </div>
      </div>
      <alert type="success" dismissible v-if="flag">
        <div class="alert-icon">
          <i class="now-ui-icons ui-2_like"></i>
        </div>
        <strong>Well done!</strong> 회원가입이 완료되었습니다😊👍
      </alert>
    </div>

  </div>
</template>
<script>
  /* eslint-disable vue/no-unused-components */
import axios from "axios";
import { Card, Button, FormGroupInput } from '@/components';
import { Alert } from '@/components';
export default {
  name: 'login-page',
  bodyClass: 'login-page',
  components: {
    Card,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    Alert,
    axios
  },
  methods : {
    goToCreate(feedId){
      this.$router.push(`/create/user`)
    },
    login() {
      axios.post('/login', this.user)
      .then(response => {
        if(response.status == 200){
        //  this.$router.push('/timeline')
        }
      })
    },
    getFeeds(){
      axios.get(`/feeds/feed/1`).then(response =>{
        this.feed = response.data.infos[0]
        console.log(this.feed)
      })
    }
  },
  data() {
    return {
      flag : false,
      user : {
        user_name : "",
        user_pwd : ""
      }
    }
  },
  created() {
    if(this.$route.query.create){
      this.flag = this.$route.query.create
    }
  }
};
</script>
<style></style>
