<template>
  <div>
    <asd></asd>
  <div class="container" style="margin-top: 20px; margin-left: 300px">
    <div class="row">
      <div class="col-sm">
        <h1>자주하는 질문</h1>
      </div>
      <div class="col-sm">

      </div>
      <div class="col-sm">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="검색...">
          <div class="input-group-append">
            <button class="btn btn-outline-info" type="button"><i class="fas fa-search"></i></button>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid" style="margin: 0px; padding: 0px; margin-top: 40px">
      <ol>
        <li><a data-toggle="collapse" href="#Q1" role="button"><div>Q. 회원가입은 어떻게 하나요?</div> </a></li>
        <div class="collapse" id="Q1">
          <div class="card card-body">
            <a>A. 추후 알림</a>
          </div>
        </div>

        <li><a data-toggle="collapse" href="#Q2" role="button"><div>Q. 회원 탈퇴는 어떻게 하나요?</div> </a></li>
        <div class="collapse" id="Q2">
          <div class="card card-body">
            <a>A. 추후 알림</a>
          </div>
        </div>

      </ol>

    </div>
  </div>
  </div>
</template>

<script>
  import asd from './asd.vue'
    export default {
      components: {asd},
        name: "qna"
    }
</script>

<style scoped>
  a{
    color: black;
  }
  li{
    border: 1px solid #ccc;
    padding: 5px;
    /*margin: 0.2% 0;*/
    /*box-shadow: 3px 3px 2px #ccc;*/
    transition: 0.5s;}

  ol, ul {
    list-style: none;
    margin:0px; padding:0px;
  }
  .card{
    /*background-color: #d1ecf1;*/
  }
  li:hover {
    background-color: rgb(236,236,236);
  }

</style>
