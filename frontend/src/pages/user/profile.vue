<script>
    import { Tabs, TabPane, Modal } from '@/components';
    import axios from 'axios';
    export default {
        name: 'profile',
        bodyClass: 'profile-page',
        components: {
            Tabs,
            TabPane,
            Modal
        },
        data() {
            return {
                user_id : "",
                user_info : {},
                modals: {
                    classic: false,
                    mini: false,
                    carousel: false,
                    modify : false
                },
                uploaded_profile : null
            }
        },
        created() {
            /* this.user_id = this.$route.query.id
             console.log(this.user_id)*/
        },
        mounted() {
            this.getUserInfo()
        },
        methods : {
            getUserInfo() {
                axios.get('/current').then(response =>{
                        this.user_info = response.data
                        console.log(this.user_info)
                    }
                )
            },
            popPickImg(){
                this.$refs.file_input.click()
            }
        }
    };
</script><template>
    <div>
        <div class="page-header clear-filter" filter-color="orange">
            <parallax
                    class="page-header-image"
                    style="background-image:url('img/bg5.jpg')"
            >
            </parallax>
            <div class="container">
                <div class="photo-container">
                    <img v-if="uploaded_profile" :src="uploaded_profile" alt="" />
                    <img v-else src="img/default-avatar.png"/>

                </div>
                <a href="javascript:void(0)" @click="modals.modify=true">수정</a>
                <h3 class="title">{{user_info.user_name}}</h3>
                <p class="category">{{user_info.email}}</p>
                <div class="content">
                    <div class="social-description">
                        <h2>26</h2>
                        <p>Comments</p>
                    </div>
                    <div class="social-description">
                        <h2>26</h2>
                        <p>Comments</p>
                    </div>
                    <div class="social-description">
                        <h2>48</h2>
                        <p>Bookmarks</p>
                    </div>
                </div>
            </div>
        </div>
        <modal :show.sync="modals.modify" headerClasses="justify-content-center" type="mini">
            <h4 slot="header" class="title title-up">프로필 수정</h4>

            <!--<fieldset> &lt;!&ndash;style="position: relative;"&ndash;&gt;
                <div contenteditable="true" class="content-modal-textarea" style="overflow-y: auto">
                    <div style="background-color:darkgrey; display: inline;" v-if="mention != ''">@{{mention}}</div>
                    <div style="display : inline;">{{commentText}}</div>
                </div>
            </fieldset>-->
            <fieldset>
                <div class="photo-container float-left" >
                    <img v-if="user_info.profile_img" :src="user_info.profile_img" alt="" />
                    <img v-else src="img/default-avatar.png"/>

                </div>

                 <div class="float-left thumb-block" >

                    <div class="thumb-item" >
                        <img class="thumb-img" >
                        <a class="remImage" href="javascript:void(0)">
                            <img class="delete-icon" src="img/criss-cross.png" >
                        </a>
                    </div>
                    <button class="add-btn float-left" @click="popPickImg">
                        <i class="now-ui-icons design_image" style="color: white;"/>
                        <span>사진</span>
                    </button>
                </div>


                <input type="file" class="file_input_hidden" ref="file_input" accept="image/x-png,image/gif,image/jpeg"/>


            </fieldset>

            <template slot="footer">
                <n-button type="warning" link @click.native="modals.modify = false">취소</n-button>
                <n-button type="primary">완료</n-button>
            </template>
        </modal>
        <div class="section">
            <div class="container">
                <div class="button-container">
                    <a href="#button" class="btn btn-primary btn-round btn-lg">Follow</a>
                    <a
                            href="#button"
                            class="btn btn-default btn-round btn-lg btn-icon"
                            rel="tooltip"
                            title="Follow me on Twitter"
                    >
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a
                            href="#button"
                            class="btn btn-default btn-round btn-lg btn-icon"
                            rel="tooltip"
                            title="Follow me on Instagram"
                    >
                        <i class="fab fa-instagram"></i>
                    </a>
                </div>
                <h3 class="title">About me</h3>
                <h5 class="description">
                    An artist of considerable range, Ryan — the name taken by
                    Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and
                    records all of his own music, giving it a warm, intimate feel with a
                    solid groove structure. An artist of considerable range.
                </h5>
                <div class="row">
                    <div class="col-md-6 ml-auto mr-auto">
                        <h4 class="title text-center">My Portfolio</h4>
                    </div>
                    <tabs
                            pills
                            class="nav-align-center"
                            tab-content-classes="gallery"
                            tab-nav-classes="nav-pills-just-icons"
                            type="primary"
                    >
                        <tab-pane title="Profile">
                            <i slot="label" class="now-ui-icons design_image"></i>

                            <div class="col-md-10 ml-auto mr-auto">
                                <div class="row collections">
                                    <div class="col-md-6">
                                        <img src="img/bg6.jpg" class="img-raised" />
                                        <img src="img/bg11.jpg" alt="" class="img-raised" />
                                    </div>
                                    <div class="col-md-6">
                                        <img src="img/bg7.jpg" alt="" class="img-raised" />
                                        <img src="img/bg8.jpg" alt="" class="img-raised" />
                                    </div>
                                </div>
                            </div>
                        </tab-pane>

                        <tab-pane title="Home">
                            <i slot="label" class="now-ui-icons location_world"></i>

                            <div class="col-md-10 ml-auto mr-auto">
                                <div class="row collections">
                                    <div class="col-md-6">
                                        <img src="img/bg1.jpg" alt="" class="img-raised" />
                                        <img src="img/bg3.jpg" alt="" class="img-raised" />
                                    </div>
                                    <div class="col-md-6">
                                        <img src="img/bg8.jpg" alt="" class="img-raised" />
                                        <img src="img/bg7.jpg" alt="" class="img-raised" />
                                    </div>
                                </div>
                            </div>
                        </tab-pane>

                        <tab-pane title="Messages">
                            <i slot="label" class="now-ui-icons sport_user-run"></i>

                            <div class="col-md-10 ml-auto mr-auto">
                                <div class="row collections">
                                    <div class="col-md-6">
                                        <img src="img/bg3.jpg" alt="" class="img-raised" />
                                        <img src="img/bg8.jpg" alt="" class="img-raised" />
                                    </div>
                                    <div class="col-md-6">
                                        <img src="img/bg7.jpg" alt="" class="img-raised" />
                                        <img src="img/bg6.jpg" class="img-raised" />
                                    </div>
                                </div>
                            </div>
                        </tab-pane>
                    </tabs>
                </div>
            </div>
        </div>
    </div>

</template>

<style></style>
