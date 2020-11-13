
<script>
    import { Card, Button, FormGroupInput } from '@/components';
    import axios from "axios";
    export default {
        name: 'login-page',
        bodyClass: 'login-page',
        components: {
            Card,
            [Button.name]: Button,
            [FormGroupInput.name]: FormGroupInput
        },
        data() {
          return {
              account : {
                  user_id : "",
                  user_pwd : "",
                  pwChk : "",
                  user_name : "",
                  email : "",
                  profile_img : null
              },
              idChkFlag : false,
              nameChkFlag : false,
              pwChkFlag : false,
              emailChkFlag : false
          }
        },
        methods : {
            submitAccount(){

                if(this.account.user_id == null || this.account.user_id == "") {
                    this.idChkFlag = true;
                }

                if(this.account.user_name == null || this.account.user_name == "") {
                    this.nameChkFlag = true;
                }

                if(this.account.email == null || this.account.email == "") {
                    this.emailChkFlag = true;
                }

                if(this.idChkFlag == false && this.pwChkFlag== false && this.nameChkFlag == false && this.emailChkFlag == false) {
                    axios.post('/users',this.account)
                        .then(response => console.log(response))
                }


            },
            pwdValidate(){
                this.pwChkFlag=false
                if(this.account.user_pwd != this.account.pwChk){
                    this.pwChkFlag = true
                }else{
                    this.pwChkFlag = false
                }
            }
        }
    };
</script>

<template>
    <div class="page-header clear-filter" filter-color="orange">
        <parallax
                class="page-header-image"
                style="background-image:url('/img/bg-create.jpg')"
        >
        </parallax>
        <div class="container">
            <div class="content-center brand" style="padding-top: 100px">
                <h5>JOIN</h5>
            </div>
        </div>
        <div class="content" style="margin-top: -40px;">
            <div class="container">
                <div class="col-md-5 ml-auto mr-auto">
                    <card type="login" plain>
                        <div slot="header" class="logo-container">
                            <img v-lazy="'img/now-logo.png'" alt="" />
                        </div>

                        <div style="margin-bottom: 50px;">
                            <fg-input
                                    class="no-border input-lg"
                                    addon-left-icon="now-ui-icons users_circle-08"
                                    placeholder="ID"
                                    v-model="account.user_id"
                                    @keyup="idChkFlag = false"
                                    style="margin-bottom: -40px;"

                            >
                            </fg-input>
                            <span style="font-size: 11px;" v-if="idChkFlag"><i class="now-ui-icons travel_info"></i> ID를 입력하세요.</span>
                        </div>

                        <fg-input
                                type="password"
                                class="no-border input-lg"
                                addon-left-icon="now-ui-icons ui-1_lock-circle-open"
                                placeholder="Password"
                                v-model="account.user_pwd"
                                @keyup="pwdValidate"
                        >
                        </fg-input>

                        <div style="margin-bottom: 50px;">
                            <fg-input
                                    type="password"
                                    class="no-border input-lg"
                                    addon-left-icon="now-ui-icons ui-1_lock-circle-open"
                                    placeholder="Password Check"
                                    v-model="account.pwChk"
                                    @keyup="pwdValidate"
                                    style="margin-bottom: -40px;"
                            >
                            </fg-input>
                            <span style="font-size: 11px;" v-if="pwChkFlag"><i class="now-ui-icons travel_info"></i> 비밀번호를 확인하세요.</span>
                        </div>

                        <div style="margin-bottom: 50px;">
                            <fg-input
                                    class="no-border input-lg"
                                    addon-left-icon="now-ui-icons users_single-02"
                                    placeholder="Name"
                                    v-model="account.user_name"
                                    @keyup="nameChkFlag = false"
                                    style="margin-bottom: -40px;"
                            >
                            </fg-input>
                            <span style="font-size: 11px;" v-if="nameChkFlag"><i class="now-ui-icons travel_info"></i> 이름을 입력하세요.</span>
                        </div>

                        <div style="margin-bottom: 50px;">
                            <fg-input
                                    class="no-border input-lg"
                                    addon-left-icon="now-ui-icons ui-1_email-85"
                                    placeholder="E-mail"
                                    style="margin-bottom: -40px;"
                                    @keyup="emailChkFlag = false"
                                    v-model="account.email"
                            >
                            </fg-input>
                            <span style="font-size: 11px;" v-if="emailChkFlag"><i class="now-ui-icons travel_info"></i> 이메일을 입력하세요.</span>

                        </div>



                        <template slot="raw-content">
                            <div class="card-footer text-center">
                                <a
                                        @click="submitAccount"
                                        href="javascript:void(0)"
                                        class="btn btn-primary btn-round btn-lg btn-block"
                                >Create Account</a
                                >
                            </div>

                        </template>
                    </card>
                </div>
            </div>
        </div>
    </div>
</template>


