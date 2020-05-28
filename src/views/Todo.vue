<template>
  <div class="todo">
    <img class="logo" alt="Taekyun logo" :src="logo" />
    <div class="case-filter">
      <button class="btn-filter">전체목록</button>
      <button class="btn-filter">마감 임박</button>
      <button class="btn-filter">할일</button>
      <button class="btn-filter">완료된목록</button>
    </div>
    <Todo-list/>
    <router-link class="link-write victoria" to="/create" tag="a">할일 추가</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from "@/components/TodoList.vue";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    TodoList
  },
  computed: {
    ...mapState(["logo"])
  }
};
</script>

<style lang="scss">
.todo{
  text-align: center;
  padding: 5vw;
}
.logo {
  width: 15vw;
  vertical-align: bottom;
}
.case-filter{
  padding: 5vw 0;
}
.btn-filter {
  box-shadow:inset 0px 1px 0px 0px #97c4fe;
  background:linear-gradient(to bottom, #3d94f6 5%, #1e62d0 100%);
  background-color:#3d94f6;
  border-radius:6px;
  border:1px solid #26589e;
  display:inline-block;
  cursor:pointer;
  color:#ffffff;
  font-family:Arial;
  font-size:15px;
  font-weight:bold;
  padding:6px 24px;
  text-decoration:none;
  text-shadow:0px 1px 0px #1570cd;
  margin: 1vw;
}
.btn-filter:hover {
  background:linear-gradient(to bottom, #1e62d0 5%, #3d94f6 100%);
  background-color:#1e62d0;
}
.btn-filter:active {
  position:relative;
  top:1px;
}
a.link-write:link, a.link-write:visited {
  position: relative;
  display: block;
  margin: 2vw auto 0;
  padding: 14px 15px;
  color: #D24D57;
  font-size:14px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  letter-spacing: .08em;
  border-radius: 0;
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;
}
a.link-write:link:after, a.link-write:visited:after {
  content: "";
  position: absolute;
  height: 0%;
  left: 50%;
  top: 50%;
  width: 150%;
  z-index: -1;
  -webkit-transition: all 0.75s ease 0s;
  -moz-transition: all 0.75s ease 0s;
  -o-transition: all 0.75s ease 0s;
  transition: all 0.75s ease 0s;
}
a.link-write:link:hover, a.link-write:visited:hover {
  color: #FFF;
  text-shadow: none;
}
a.link-write:link:hover:after, a.link-write:visited:hover:after {
  height: 450%;
}

a.link-write.victoria {
  border: 2px solid #D24D57;
}
a.link-write.victoria:after {
  background: #D24D57;
  opacity: .5;
  -moz-transform: translateX(-50%) translateY(-50%);
  -ms-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
}
a.link-write.victoria:hover:after {
  height: 140%;
  opacity: 1;
}
</style>
