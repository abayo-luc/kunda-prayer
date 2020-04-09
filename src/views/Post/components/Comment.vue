<template>
  <div class="media">
    <!-- <img class="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt /> -->
    <div class="media-body">
      <div class="header">
        <h5 class="mt-0">{{username}}</h5>
        <span class="datetime float-left">{{getDate}}</span>
      </div>
      <p>{{content}}</p>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "Comment",
  props: {
    username: {
      type: String,
      default: "Unknown"
    },
    content: {
      type: String,
      required: true
    },
    createdAt: {
      type: String,
      required: true
    }
  },
  computed: {
    getDate() {
      return moment(this.createdAt).format("lll");
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.datetime {
  bottom: 0;
  color: #ccc;
  display: inline-block;
  font-size: 13px;
  font-style: italic;
  margin-left: 8px;
}
</style>