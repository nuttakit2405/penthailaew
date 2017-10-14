<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <h1><b>{{mss}}</b></h1>
    <h1>เลือก :
      <select v-model="types" @click="getType(type)">
        <option value="1">สุกกี้แห้ง</option>
        <option value="2">สุกกี้น้ำ</option>
      </select>
    </h1>

    <span>พิเศษ : </span>
    <button @click="del(menu)">-</button>
    <span>{{menu}}</span>
    <button @click="add(menu)">+</button>
    <span>กล่อง</span><br>

    <span>ธรรมดา : </span>
    <button @click="delN(menuN)">-</button>
    <span>{{menuN}}</span>
    <button @click="addN(menuN)">+</button>
    <span>กล่อง</span><br>

    <h1>รายการที่เลือก : <b>{{typesmenu}}</b></h1>
    <h1>(พิเศษ) : {{menu}} กล่อง</h1>
    <h1>(ธรรมดา) : {{menuN}} กล่อง</h1>
    <h1>รวม {{resa}} บาท</h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Pink Home',
      menu: 0,
      menuN: 0,
      mss: 'ร้านสุกีป้าใจ',
      types: '',
      typesmenu: '',
      sum: 0,
      sumN: 0
    }
  },
  methods: {
    add: function () {
      this.menu++
      this.sum = this.menu * 35
    },
    del: function () {
      if (this.menu < 1) {
        this.menu = 0
      } else {
        this.menu--
        this.sum -= 35
      }
    },
    getType: function () {
      if (this.types === '1') {
        this.typesmenu = 'สุกี้แห้ง'
      }
    },
    addN: function () {
      this.menuN++
      this.sumN = this.menuN * 30
    },
    delN: function () {
      if (this.menuN < 1) {
        this.menuN = 0
      } else {
        this.menuN--
        this.sumN -= 30
      }
    }
  },
  computed: {
    resa: function () {
      return this.sum + this.sumN
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
