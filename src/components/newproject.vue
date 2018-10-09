<template>
  <div>
    <asd></asd>
  <div class="container-fluid" style="margin-left: 220px">
    <div class="col" ID="NP">
      <nav class="navbar navbar-default bg-light">

        <div class="input-group col" id="D1">
          <button style="margin-left: 10px" class="btn btn-outline-dark" data-toggle="modal"
                  data-target="#createproject" ><i class="fas fa-plus"> 프로젝트 추가</i></button>
          <!--<button style="margin-left: 10px" class="btn btn-outline-dark" data-toggle="modal" data-target="#deleteproject"><i class="fas fa-minus"> 프로젝트 삭제</i></button>-->
          <input type="text" class="form-control" placeholder="검색..." aria-describedby="button-addon2">
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button" id="button-addon2">검색</button>
          </div>
        </div>
      </nav>
      <hr>

      <div class="row">

        <div class="card col" style="height: 22rem; padding: 5px" v-for="getproject in projects">
          <!--<img src="../assets/logo.png" style="width: 100%; height: 40%">-->
          <h3><a>{{getproject.title}}</a> <!--<button class="btn btn-primary dropdown-toggle" style="float: right">설정</button>-->
            <b-dropdown variant="outline-dark" style="float: right">
              <b-dropdown-item data-toggle="modal" data-target="#memberinvite">멤버</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item data-toggle="modal" data-target="#deleteproject">삭제</b-dropdown-item>
            </b-dropdown>
          </h3>
          <div style=" height: 75%">
            <a id="content">{{getproject.description}}</a>
            </div>
          <div class="container">
            <button class="btn btn-outline-dark" style="width: 100%">확인</button>
          </div>
        </div>

      </div>

      <!-- 프로젝트 생성 모달 -->
      <div class="modal fade" id="createproject" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
           aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">새로운 프로젝트</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <h3>프로젝트 이름</h3>
              <input type="text" class="form-control" placeholder="여기에 프로젝트 이름을 적어주세요." v-model="project.title">
              <br>
              <h3>프로젝트 설명</h3>
              <textarea type="text" class="form-control" placeholder="여기에 프로젝트 설명을 적어주세요." style="resize: none;"
                        rows="5"v-model="project.description"></textarea>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" @click="addproject" data-dismiss="modal">프로젝트 등록</button>
              <button type="button" class="btn btn-secondary" data-dismiss="modal">취소</button>

            </div>
          </div>
        </div>
      </div>

      <!-- 프로젝트 삭제 모달 -->
      <div class="modal fade" id="deleteproject" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
           aria-hidden="true" v-for="getproject in projects">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">프로젝트 삭제</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              정말로 프로젝트를 삭제 하시겠습니까?
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" @click="deleteproject(getproject.project_no)" data-dismiss="modal">삭제</button>
              <button type="button" class="btn btn-secondary" data-dismiss="modal">취소</button>
            </div>
          </div>
        </div>
      </div>

      <!--멤버 초대 모달-->
      <div class="modal fade" id="memberinvite">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">멤버</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="input-group">
                <input type="text" class="form-control">
                <div class="input-group-append">
                  <button class="btn btn-outline-secondary" type="button"><i class="fas fa-plus">멤버 추가</i></button>
                </div>

                <div class="input-group-append">
                  <button class="btn btn-outline-secondary" type="button"><strong>검색</strong></button>
                </div>
              </div>
              <hr>
              <div>
                <div class="row">
                  <!--<div class="col member" >-->
                  <!--<a class="btn btn-outline-dark member_b"><img src="../assets/logo.png" class="rounded-circle" style="height: 40px;width: 40px; background-color: azure">asd</a>-->
                  <!--</div>-->
                  <!--<div class="col member">-->
                  <!--<a class="btn btn-outline-dark member_b"><img src="../assets/logo.png" class="rounded-circle" style="height: 40px;width: 40px; background-color: azure">asd</a>-->
                  <!--</div>-->
                  <!--<div class="w-100"></div>-->
                  <div class="col member_line">
                    <i class="fas fa-crown" style="color: gold"></i>
                    <a class="member_b"><img src="../assets/logo.png" class="rounded-circle">임현태</a>
                    <a class="x" href="#" title="강퇴"><strong>X</strong></a>
                  </div>
                  <!--<div class="col member_line">-->
                    <!--<a class="member_b"><img src="../assets/logo.png" class="rounded-circle">asd</a>-->
                    <!--<a class="btn btn-outline-info" href="#" data-toggle="modal" data-target="#authority">권한</a>-->
                    <!--<a class="x" href="#" title="강퇴"><strong>X</strong></a>-->
                  <!--</div>-->
                  <!--<div class="w-100"></div>-->
                  <!--<div class="col member_line">-->
                    <!--<a class="member_b"><img src="../assets/logo.png" class="rounded-circle">asd</a>-->
                    <!--<a class="btn btn-outline-info" href="#" data-toggle="modal" data-target="#authority">권한</a>-->
                    <!--<a class="x" href="#" title="강퇴"><strong>X</strong></a>-->
                  <!--</div>-->
                  <!--<div class="col member_line">-->
                    <!--<a class="member_b"><img src="../assets/logo.png" class="rounded-circle">asd</a>-->
                    <!--<a class="btn btn-outline-info" href="#" data-toggle="modal" data-target="#authority">권한</a>-->
                    <!--<a class="x" href="#" title="강퇴"><strong>X</strong></a>-->
                  <!--</div>-->
                  <!--<div class="w-100"></div>-->

                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary">Save changes</button>
              <a href="#" data-dismiss="modal" class="btn">취소</a>
            </div>
          </div>
        </div>
      </div>

      <!--권한 설정 모달-->
      <div class="modal fade" id="authority" data-backdrop="static">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">권한 설정</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              권한 설정 내용
              <label for="a1" style="cursor:pointer"><input type="checkbox" id="a1"/> 힌트 포함</label>
              <label for="a2" style="cursor:pointer"><input type="checkbox" id="a2"/> 이미지 포함</label>
              <label for="a3" style="cursor:pointer"><input type="checkbox" id="a3"/> 설명 포함</label>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary">확인</button>
              <a href="#" data-dismiss="modal" class="btn">취소</a>
            </div>
          </div>
        </div>
      </div>

    </div>


  </div>
  </div>
</template>

<script>
  import asd from './asd.vue'
  export default {
    components: {asd},
    data() {
      return {
        projects: [{}],
        project: {
          title: '',
          description: ''
        }
      }
    },

    methods: {
      deleteproject(id) {
        this.$http.delete('http://localhost:8080/shincom/project?project_no=' +id).then((res) => {
          this.projects = res.data.splice(index, 1);
        })
        window.location.reload();
      },
      addproject: function () {
        this.$http.post('http://localhost:8080/shincom/project', {
          title: this.project.title,
          description: this.project.description
        }).then(function (res) {
          console.log(res);
        });
      }
    },

    created() {
      this.$http.get('http://localhost:8080/shincom/projects').then((res) => {
        this.projects = res.data
      });
    }

  }
</script>

<style scoped>
  #NP {
    border: 1px solid #c6c8ca;
    padding: 10px;
    margin: 20px;
  }

  /*#D1{*/
  /*margin-left: 40%;*/
  /*}*/
  input {
    margin-left: 10px;
  }

  .card {
    margin: 10px;
  }

  .member_line {
    border: solid 1px #c6c8ca;
    padding: 8px;
    text-align: left;
    margin: 5px;
    border-radius: 10px;
  }

  .member {
    padding: 5px;
    text-align: left;
  }

  .member_b {
    width: 100%;
    height: 100%;
    padding: 10px;
    font-size: 25px;
  }

  .x {
    float: right;
    color: #000;
  }

  img {
    height: 40px;
    width: 40px;
    background-color: azure
  }

  #content {
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    /* 여러 줄 자르기 추가 스타일 */
    white-space: normal;
    line-height: 1.2;
    height: 14em;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 12;
    -webkit-box-orient: vertical;

  }

</style>
