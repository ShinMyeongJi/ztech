<template>
  <div class="comment-wrap">
    <div class="comment-write-block">
      <p class="comment-text"></p>
      <textarea rows="5"></textarea>

      <n-button size="sm" class="comment-write-btn float-right font-weight-light" type="warning">취소</n-button>
      <n-button size="sm" class="comment-write-btn float-right font-weight-light" type="primary">확인</n-button>

    </div>
  </div>
</template>
<script>
  import { Button } from '@/components';

  export default {
    name: 'comment',
    components: {
      [Button.name]: Button
    },
    props: {

    },
    computed: {

    },
    methods: {

    }
  };
</script>
