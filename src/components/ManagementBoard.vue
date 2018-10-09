<template>
<div>
  <asd></asd>
  <div class="container" style="margin-left: 300px">

    <h3 style="margin-top: 20px">게시판 관리</h3>
    <hr>


    <div class="row" v-for="menu in menues">
      <div class="col-4">
        <div class="list-group" id="list-tab" role="tablist">
          <a class="list-group-item list-group-item-action" :class="{'active': current_tab === menu.menu_no}"
             :id="menu.menu_no" data-toggle="list" :href="'#'+menu.menu_no" role="tab" aria-controls="home"
             @click="current_tab = menu.menu_no, title=menu.title, des=menu.description" >{{menu.title}}</a>
        </div>
      </div>
      <div class="col-8">

        <form v-if="current_tab === menu.menu_no">
          <div class="form-group row">
            <label for="title" class="col-sm-2 col-form-label">게시판 이름</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="title" v-model="title=menu.title">
            </div>
          </div>
          <div class="form-group row">
            <label for="description" class="col-sm-2 col-form-label">게시판 설명</label>
            <div class="col-sm-10">
              <textarea type="text" class="form-control" id="description" v-model="des=menu.description"/>
            </div>
          </div>
        </form>

        <!--<div class="tab-content" id="nav-tabContent">-->
        <!--<div class="tab-pane fade" :class="{'show active': current_tab === menu.title}" :id="'#'+menu.menu_no" role="tabpanel">{{menu.description}}</div>-->
        <!--</div>-->

      </div>
    </div>
    <hr>
    <div>
      <button type="button" class="btn btn-outline-dark" @click="editmenu(current_tab,title,des)"><i class="fas fa-eraser" ></i>수정</button>
      <button type="button" class="btn btn-outline-dark" data-toggle="modal" data-target="#deleteboard"><i
        class="fas fa-trash-alt"></i>삭제
      </button>
      <button type="button" class="btn btn-outline-dark" data-toggle="modal" data-target="#newboard"><i
        class="fas fa-plus"></i>생성
      </button>
    </div>


    <!--게시판 생성 모달-->
    <div class="modal fade" id="newboard" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">게시판 생성</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">

            <form>
              <div class="form-group row">
                <label for="board-title" class="col-sm-2 col-form-label">게시판 이름</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="board-title" v-model="menu.title">
                </div>
              </div>
              <div class="form-group row">
                <label for="board-description" class="col-sm-2 col-form-label">게시판 설명</label>
                <div class="col-sm-10">
                  <textarea type="text" class="form-control" id="board-description" v-model="menu.description"/>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="addmenu" data-dismiss="modal">생성</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">취소</button>
          </div>
        </div>
      </div>
    </div>

    <!--수정-->


    <!--삭제-->
    <div class="modal fade" id="deleteboard" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">게시판 삭제</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            정말로 게시판를 삭제 하시겠습니까?
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" @click="deletemenu(current_tab)" data-dismiss="modal">삭제</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">취소</button>
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
        menues: [{}],
        menu: {},
        current_tab: '',
        title:'',
        des:'',
        model: {
          home: 'home text',
          profile: 'profile text'
        }

      }
    },
    methods: {
      editmenu(id,title,des){
        this.$http.put('http://localhost:8080/shincom/menu', {
          description: des,
          menu_no: id,
          title : title
        }).then(function (res) {
          console.log(res)


        })
      },
      addmenu: function () {
        this.$http.post('http://localhost:8080/shincom/menu', {
          title: this.menu.title,
          description: this.menu.description
        }).then(function (res) {
          console.log(res);
          window.location.reload();
        });
      },
      deletemenu(id) {
        this.$http.delete('http://localhost:8080/shincom/menu?menu_no=' + id).then((res) => {
          this.menues = res.data.splice(index, 1);
        });
        window.location.reload();
      }
    },
    created() {
      this.$http.get('http://localhost:8080/shincom/menues').then((res) => {
        this.menues = res.data
      });

    }

  }


</script>

<style scoped>
  #createboard {
    margin-bottom: 10px;
  }

  .custab {
    /*border: 1px solid #ccc;*/
    padding: 5px;
    margin: 5% 0;
    box-shadow: 3px 3px 2px #ccc;
    transition: 0.5s;
  }

  .custab:hover {
    box-shadow: 3px 3px 0px transparent;
    transition: 0.5s;
  }

  a {
    color: #000;
  }

  .dropdown-toggle::after {
    display: none;
  }


</style>
