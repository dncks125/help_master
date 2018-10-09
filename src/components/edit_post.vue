<template>
<div>
  <asd></asd>
  <div class="container" style="margin-left: 300px">

    <form>
      <!-- Material input -->
      <div class="md-form form-group mt-5">
        <label for="title">제목</label>

        <input type="text" class="form-control form-control-lg" v-model="getboard.title" id="title">
      </div>

      <div class="form-group">
        <!--<label for="exampleFormControlTextarea3">내용</label>-->
        <textarea class="form-control" id="exampleFormControlTextarea3" v-model="getboard.contents" rows="17"></textarea>
      </div>

      <label for="ex_file">파일 첨부 </label> <input type="file" id="ex_file">



    <div id="btncenter">
      <router-link v-bind:to="'/board/'+$route.params.menu_no"> <button class="btn btn-outline-primary btn-lg" v-on:click="put" type="submit">수정완료</button></router-link>
      <router-link v-bind:to="'/board/'+$route.params.menu_no"><button class="btn btn-outline-primary btn-lg">취소</button></router-link>
    </div>
    </form>
  </div>
</div>
</template>

<script>
    export default {

      data(){
        return{
          getboard:{
            title:'',
            contents:'',
            file:'',
            aa:this

          }
        }
      },
      methods:{
        put: function () {
          this.$http.put('http://localhost:8080/shincom/board', {
            title: this.getboard.title,
            contents: this.getboard.contents,
            board_no: this.getboard.board_no
          }).then((res) => {
            console.log(res)
            // this.$router.push('/board/read_post/'+ getboard.board_no)
          })
        }

        },
      created() {
        this.$http.get('http://localhost:8080/shincom/board/' + this.$route.params.id).then((res) => {
          this.getboard = res.data
        });
      },


    }
</script>

<style scoped>
  input{
    border: 1px solid skyblue;
  }
  textarea {
    border: 1px solid skyblue;
  }
  #btncenter{
    float: right;
    position: relative;
    left: -45%;
    /* right: 50% */
    text-align: left;
  }
  textarea{
    resize: none;
  }

</style>
