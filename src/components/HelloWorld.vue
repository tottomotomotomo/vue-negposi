<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>入力された文章を分析してポジティブ度を-3〜3の範囲で判定します。</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div{
  background-color: #3FB883;
  color: white;
  padding: 0.5rem;
  border-top: #33485E 1rem solid;
}
h1 {
  margin: 1rem 0;
}
p{
  margin-bottom: 0.5rem;
}
</style>
