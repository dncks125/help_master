<template>
  <div>
    <asd></asd>
  <div class="container">
    <div class="box" style="border: 1px solid black;">
      <div id="title"  style="margin-right: 55%"> {{board.title}}</div>  <a style="display: inline; font-size: 20px">|</a>

      <div class="inbox"> 게시판 이름</div>
      <a id="time">{{board.created}}</a>

      <hr>
      <div>

        <a><img src="../assets/logo.png" class="rounded-circle" style="height: 40px;width: 40px; background-color: azure">
          <a id="nickname" style="padding: 10px">{{board.writer}}</a>
        </a>
        <a></a>
      </div>

      <!--여기서부터 내용-->
      <div id="content">
        {{board.contents}}
      </div>

      <!--파일첨부-->
      <div id="fileinput">파일첨부</div>
      <hr>
      <form class="form-inline">
        <div  class="form-inline" style="width: 100%;">
          <textarea  v-model="board_comment.contents" ></textarea>
          <button class="btn-outline-dark" @click="postcomment(board.board_no)" style=" padding: 13px; width: 10%">등록</button>
        </div>
      </form>

      <!--댓글-->
      <div id="comment" class="jumbotron jumbotron-fluid" v-if="comment.board_no==board.board_no" v-for="comment in board_comments">
        <!--이부분은 먼저댓글을 달고 보이게 해야함-->
        <div style="padding: 10px;">
          <a class="" style="margin-right: 10px;">
            <img src="../assets/logo.png" class="rounded-circle" style="height: 40px;width: 40px; background-color: azure">
          </a>
          <div style="display: inline;">
            <a>{{comment.writer}}작성자</a>
            <strong></strong><a style="font-size: 10px; padding: 5px;">{{comment.created}} </a>
            <div class="comment_button">
              <a  href="#" data-toggle="modal" data-target="#deletecomment">삭제</a>
              <a href="#" v-if="!comment.edit"@click="comment_state(comment.comment_no,comment.edit)">수정</a>
              <a href="#" v-if="comment.edit" @click="comment_state(comment.comment_no,comment.edit)">수정취소</a>
            </div>
          </div>

          <div>
          <textarea class="form-control" v-model="comment.contents" v-if="comment.edit"></textarea>
          <button class="btn-outline-dark" v-if="comment.edit" type="submit" @click="editcomment(comment.comment_no, comment.contents)" style=" padding: 13px; width: 10%">수정</button>
          <p v-else style="margin-left: 7%">{{comment.contents}}</p>
          </div>
        </div>
        <hr>

        <!--댓글 입력-->

      </div>
    </div>
    <div style="margin-left: 20px">
      <router-link v-bind:to="'/board/' + $route.params.menu_no"><button type="button" class="btn btn-outline-dark"><i class="fas fa-list-ul"></i>목록</button></router-link>

      <router-link v-bind:to=" '/board/' + $route.params.menu_no + '/edit_post/'+ board.board_no"><button type="button" class="btn btn-outline-dark"><i class="fas fa-eraser"></i>수정</button></router-link>

      <button type="button" class="btn btn-outline-dark" data-toggle="modal" data-target="#deletepost"><i class="fas fa-trash-alt"></i>삭제</button>
      <router-link v-bind:to="'/board/' + $route.params.menu_no +'/write_post'"><button type="button" class="btn btn-outline-dark"><i class="fas fa-pencil-alt"></i>글쓰기</button></router-link>
    </div>

    <div class="modal fade" id="deletepost" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">삭제</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            정말로 삭제 하시겠습니까?
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="deletepost(board.board_no)">확인</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">취소</button>
          </div>
        </div>
      </div>
    </div>


    <div class="modal fade" id="deletecomment" tabindex="-1" role="dialog" aria-hidden="true" v-for="comment in board_comments">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">삭제</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            정말로 삭제 하시겠습니까?
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="deletecomment(comment.comment_no)" data-dismiss="modal">확인</button>
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
          comment:{
            comment_no:''
          },
          board:{},
          board_comment:{},
          board_comments:[{
            comment_no:'',
            contents:'',
            parent:'',
            edit:'',


          }]
        }
        },
      methods: {
        deletecomment(id){
          this.$http.delete('http://localhost:8080/shincom/boardre?comment_no=' +id).then((res) => {
            this.board_comments = res.data.splice(index, 1);
            console.log(res);
            window.location.reload();
          })

        },
        editcomment(id,contents){
          this.$http.put('http://localhost:8080/shincom/boardre', {
            contents: contents,
            comment_no: id,
            edit : false
          }).then(function (res) {
            console.log(res)
            window.location.reload();

          })
        },
        comment_state(id,temp){
          this.$http.put('http://localhost:8080/shincom/boardre', {
            comment_no: id,
            edit : temp =! temp
          }).then(function (res) {
            console.log(res);
            window.location.reload();
          })
        },

        deletepost(id) {
          this.$http.delete('http://localhost:8080/shincom/board?board_no=' +id).then((res) => {
            this.board = res.data.splice(index, 1);
          })

          window.location.reload();
        },
        postcomment(id){
          this.$http.post('http://localhost:8080/shincom/boardre', {
            board_no: id,
            contents: this.board_comment.contents

          }).then(function (res) {
            console.log(res);
          });

        }
      },
      created() {
        this.$http.get('http://localhost:8080/shincom/board/' + this.$route.params.id).then((res) => {
          this.board = res.data
        });
        this.$http.get('http://localhost:8080/shincom/boardres').then((res) => {
          this.board_comments = res.data
        });

      },




    };

</script>

<style scoped>
  .box{
    border:1px solid; padding:10px; margin: 20px;
  }
  #title{
    padding: 5px;
    display: inline;
  }
  .inbox{
    /*background-color: azure;*/
    padding: 5px;
    display: inline;
  }
#time{
  padding: 5px;
  float: right; color: #adb5bd;
  font-size: 13px;
}
  #content{
    padding: 10px;
  }
  #fileinput{
    padding: 10px;
  }
  #nickname{
    font-size: 20px;
  }
  textarea{
    width: 89%;
    resize: none;
    margin-right: 10px;
  }
  #comment{
    width: 100%;
    padding: 20px;
    /*background-color: aliceblue;*/
  }
  .comment_button{
    float: right;
    margin-right: 10px;
    font-size: 10px;
  }

</style>
