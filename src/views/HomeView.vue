<template>
  <HelloWorld msg="〜ポジティブ度分析〜" />
  <div class="home">
    <p id="explain">文章を入力してください</p>
    <form action="" @submit.prevent="doSend" class="form">
      <textarea
        id="form1"
        v-model="text"
        placeholder="ここに文章を入力してください。"
      ></textarea>
      <button type="submit">送信</button>
    </form>
    <h3>
      この文章のポジティブ度は「<span> {{ info }} </span>」です！
    </h3>
    <h5>入力された文章</h5>
    <p id="write">{{ bun }}</p>
    <p id="err">{{ err }}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";
import firebase from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  data() {
    return {
      text: "",
      info: "",
      err: "",
      bun: "",
    };
  },
  methods: {
    doSend() {
      //　あとで入力フォームを空にするので入力された文章を別に残しておく
      this.bun = this.text;

      //　URLエンコード
      const data = encodeURI(this.text);
      // console.log(data);
      let point = "";

      // API
      const header = {
        accept: "application/json",
        "Content-Type": "application/json",
        "x-api-key": [API - KEY],
      };
      axios
        .get(
          `http://ap.mextractr.net/ma9/negaposi_analyzer?&out=json&apikey=263F90E9A36EA90FFACFD143F8B1F8C6B4F9C41E&text=${data}`
        )
        .then(
          (response) => (
            (this.info = response.data["negaposi"]),
            // firebase にメッセージを追加
            push(ref(getDatabase(), "/text"), {
              text: this.text,
              point: this.info,
            }),
            // 入力フォームを空に
            (this.text = "")
          )
        )
        .catch((error) => (this.err = error));
    },
  },
};
</script>

<style>
* {
  margin: 0;
  overflow: hidden;
}
.home {
  width: 80%;
  margin: 0 auto;
}
span {
  color: red;
  font-weight: bold;
}

#explain {
  margin: 2rem auto 1rem auto;
}
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
textarea {
  width: 480px;
  height: 200px;
  margin: 0 auto;
}
button {
  width: 80px;
  height: 24px;
  margin: 1rem auto;
}
h3 {
  margin-top: 1rem;
}
h5 {
  margin-top: 2rem;
}
#write {
  margin: 0.5rem auto;
  font-size: 12px;
}
#err {
  font-weight: bold;
  font-style: italic;
}
</style>
