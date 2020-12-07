<script>
  import { DropDown, Navbar, NavLink } from '@/components';
  import { Popover } from 'element-ui';
  import axios from 'axios';
  export default {
    name: 'main-navbar',
    props: {
      transparent: Boolean,
      colorOnScroll: Number
    },
    components: {
      DropDown,
      Navbar,
      NavLink,
      [Popover.name]: Popover

    },
    created() {


    },
    mounted() {
      this.isLogin()
      if(this.login) {
        this.getCurUser()
      }
    },
    data() {
      return {
        login : false,
        curUser : {}
      }
    },
    methods : {
      goToPage(){
        this.$router.push('/timeline')
      },
      logout(){
          this.$store.state.isLogin = false
          this.$store.state.token = ""
      },
      isLogin(){
        if(this.$store.state.isLogin){
          this.login = true
        }else{
          this.login = false
        }
      },
      getCurUser() {
        axios.get('/current').then(response =>{
            this.curUser = response.data
         }
        )
      },
      goToProfile() {
        this.$router.push(`/profile/${this.curUser.user_id}`)
      }

    }
  };
</script>

<template>
  <navbar
    position="fixed"
    type="primary"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  ><!--
    :transparent="transparent"
    -->
    <template>
      <router-link class="navbar-brand" to="/">
        <img src="../assets/img/logo.png" style="width : 100px;"/>
      </router-link>
      <el-popover
        ref="popover1"
        popper-class="popover"
        placement="bottom"
        width="200"
        trigger="hover"
      >
        <div class="popover-body">
          Designed by Invision. Coded by Creative Tim
        </div>
      </el-popover>
    </template>
    <template slot="navbar-menu">
      <li class="nav-item">
        <a
          class="nav-link"
          href="javascript:void(0);"
          @click="goToPage"
        >
          <i class="now-ui-icons design_bullet-list-67"></i>
          <p>Timeline</p>
        </a>
      </li>
      <drop-down
        tag="li"
        title="Components"
        icon="now-ui-icons design_app"
        class="nav-item"
      >
        <nav-link to="/">
          <i class="now-ui-icons business_chart-pie-36"></i> All components
        </nav-link>
        <a
          href="https://demos.creative-tim.com/vue-now-ui-kit/documentation"
          target="_blank"
          class="dropdown-item"
        >
          <i class="now-ui-icons design_bullet-list-67"></i> Documentation
        </a>
      </drop-down>
      <!--<drop-down
              tag="li"
              title="Examples"
              icon="now-ui-icons design_image"
              class="nav-item"
      >
        <nav-link to="/landing">
          <i class="now-ui-icons education_paper"></i> Landing
        </nav-link>

        <nav-link to="/profile">
          <i class="now-ui-icons users_single-02"></i> Profile
        </nav-link>
      </drop-down>-->
      <li class="nav-item" v-if="!login">
        <a
                class="nav-link"
                href="/login"
        >
          <i class="now-ui-icons users_circle-08"></i>
          <p>Login</p>
        </a>
      </li>

      <drop-down
              tag="li"
              :title="curUser.user_name"
              icon="now-ui-icons users_circle-08"
              class="nav-item"
              v-if="login"
      >
        <a class="dropdown-item" :href="`/profile?id=${curUser.user_id}`">
          <i class="now-ui-icons users_single-02"></i> Profile
        </a>
        <nav-link to="/login" @click="logout">
          <i class="now-ui-icons education_paper"></i> Logout
        </nav-link>
      </drop-down>



      <!--<li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Follow us on Twitter"
          data-placement="bottom"
          href="https://twitter.com/CreativeTim"
          target="_blank"
        >
          <i class="fab fa-twitter"></i>
          <p class="d-lg-none d-xl-none">Twitter</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Like us on Facebook"
          data-placement="bottom"
          href="https://www.facebook.com/CreativeTim"
          target="_blank"
        >
          <i class="fab fa-facebook-square"></i>
          <p class="d-lg-none d-xl-none">Facebook</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Follow us on Instagram"
          data-placement="bottom"
          href="https://www.instagram.com/CreativeTimOfficial"
          target="_blank"
        >
          <i class="fab fa-instagram"></i>
          <p class="d-lg-none d-xl-none">Instagram</p>
        </a>
      </li>-->
    </template>
  </navbar>
</template>


<style scoped></style>
