
<script>
    import { Card, Button, FormGroupInput } from '@/components';

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
                  id : "",
                  pw : "",
                  pwChk : "",
                  name : "",
                  email : ""
              },
              pwChkFlag : false
          }
        },
        methods : {
            submitAccount(){
                alert(this.account.id)
            },
            pwdValidate(){
                if(this.account.pw == this.account.pwChk){
                    this.pwChkFlag = true
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

                        <fg-input
                                class="no-border input-lg"
                                addon-left-icon="now-ui-icons users_circle-08"
                                placeholder="ID"
                                v-model="account.id"
                        >
                        </fg-input>

                        <fg-input
                                type="password"
                                class="no-border input-lg"
                                addon-left-icon="now-ui-icons ui-1_lock-circle-open"
                                placeholder="Password"
                                v-model="account.pw"
                        >
                        </fg-input>

                        <div style="margin-bottom: 50px;">
                            <fg-input
                                    type="password"
                                    class="no-border input-lg"
                                    addon-left-icon="now-ui-icons ui-1_lock-circle-open"
                                    placeholder="Password Check"
                                    v-model="account.pwChk"
                                    @keypress="pwdValidate"
                                    style="margin-bottom: -40px;"
                            >
                            </fg-input>
                            <span style="font-size: 11px;" v-if="pwChkFlag"><i class="now-ui-icons travel_info"></i> 비밀번호를 확인하세요.</span>


                        </div>


                        <fg-input
                                class="no-border input-lg"
                                addon-left-icon="now-ui-icons users_single-02"
                                placeholder="Name"
                                v-model="account.name"
                        >
                        </fg-input>

                        <fg-input
                                class="no-border input-lg"
                                addon-left-icon="now-ui-icons ui-1_email-85"
                                placeholder="E-mail"
                                style="margin-bottom: 0px;"
                                v-model="account.email"
                        >
                        </fg-input>



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


