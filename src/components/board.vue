<template>
<div>
  <asd></asd>
  <div id="board" class="container" style="margin-left: 300px">

    <h3>여기에 게시판 이름</h3>
    <hr>

    <router-link :to="'/board/'+menu_no+'/write_post'" class="btn btn-outline-dark float-right"><b><i class="fas fa-plus"></i></b>글쓰기</router-link>
    <table style="width: 100%;" class="table table-hover table-sm custab">
      <thead class="thead-light">
      <tr>
        <th scope="col" class="no" style="width: 5%;">#</th>
        <th scope="col" class="title" >제목</th>
        <th scope="col" class="id" style="width: 10%;">작성자</th>
        <th scope="col" class="date" style="width: 10%;">작성일</th>
        <th scope="col" class="view" style="width: 10%;">조회수</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="board in boards" v-if="board.menu==menu_no">
        <th scope="row" class="no">{{board.board_no}}</th>
        <td class="title"><router-link v-bind:to="'/board/'+ menu_no +'/read_post/' + board.board_no">{{board.title}}</router-link></td>
        <td class="">
          <a id="btnGroupDrop1" class="dropdown-toggle" data-toggle="dropdown">{{board.writer}}</a>
          <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
            <a class="dropdown-item" href="#">메시지 보내기</a>
            <a class="dropdown-item" href="#">프로필 보기</a>
          </div>

        </td>
        <td class="date">{{board.created}}</td>
        <td class="view">여기 조회수</td>
      </tr>
      </tbody>
    </table>
    <hr>

    <div class="row align-items-center justify-content-center">
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item"><a class="page-link" href="#"> << </a></li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#"> >> </a></li>
        </ul>
      </nav>
    </div>
    <router-view></router-view>
  </div>
</div>
</template>

<script>
  import asd from './asd.vue'

    export default {
      components: {asd},
      data() {
        return {
          board:null,
          boards:[{
          }],
          menu:'',
          menu_no:this.$route.params.id

        }
      },

      created() {
        this.fetchdata();
        // this.$http.get('http://localhost:8080/shincom/boards').then((res) => {
        //   this.boards = res.data
        // });
        // this.$http.get('http://localhost:8080/shincom/menu'+ this.menu_no).then((res) => {
        //   this.menu = res.data
        // });

      },
      watch : {
         '$route' : 'fetchdata'
         },
      methods: {
        fetchdata(){
          this.$http.get('http://localhost:8080/shincom/menu/'+ this.$route.params.id).then((res)=>{
            this.menu = res.data
          });
          this.$http.get('http://localhost:8080/shincom/boards').then((res) => {
            this.boards = res.data
          });

        }
      }
    }
</script>

<style scoped>
#board{
  margin-top: 20px;
  padding: 5px;
}
.custab{
  border: 1px solid #ccc;
  padding: 5px;
  margin: 5% 0;
  box-shadow: 3px 3px 2px #ccc;
  transition: 0.5s;
}
.custab:hover{
  box-shadow: 3px 3px 0px transparent;
  transition: 0.5s;
}
  a{
    color: black;
  }
</style>
