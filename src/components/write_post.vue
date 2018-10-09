<template>
  <div>
    <asd></asd>
  <div class="container" style="margin-left: 300px">
    <form>
      <!-- Material input -->
      <div class="md-form form-group mt-5">
        <label for="title">제목</label>

        <input type="text" class="form-control form-control-lg" v-model="board.title" id="title"
               placeholder="제목을 입력하세요">
      </div>

      <div class="form-group">
        <!--<label for="exampleFormControlTextarea3">내용</label>-->
        <textarea class="form-control" id="exampleFormControlTextarea3" v-model="board.contents" rows="17"
                  placeholder="내용을 입력하세요."></textarea>
      </div>

      <label for="ex_file">파일 첨부 </label> <input type="file" id="ex_file">

    </form>


    <div id="btncenter">
      <router-link v-bind:to="'/board/'+$route.params.menu_no">
        <button class="btn btn-outline-primary btn-lg" v-on:click="post">입력</button>
      </router-link>
      <router-link v-bind:to="'/board/'+$route.params.menu_no">
        <button class="btn btn-outline-primary btn-lg">취소</button>
      </router-link>
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
        board: {
          title: '',
          contents: '',
          file: '',
        },
        menu_no: this.$route.params.menu_no
      }
    },
    methods: {
      post: function () {
        this.$http.post('http://localhost:8080/shincom/board', {
          title: this.board.title,
          contents: this.board.contents,
          menu: this.menu_no

        }).then(function (res) {
          console.log(res);
        });
      }
    }
  }
</script>

<style scoped>
  input {
    border: 1px solid skyblue;
  }

  textarea {
    border: 1px solid skyblue;
  }

  #btncenter {
    float: right;
    position: relative;
    left: -45%;
    /* right: 50% */
    text-align: left;
  }

  textarea {
    resize: none;
  }

</style>
