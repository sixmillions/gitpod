<template>
  <div class="foo-layout">
    <header>
      <SearchBox/>
    </header>
    <main>
      检索测试
    </main>
  </div>
</template>

<script>
import SearchBox from '@SearchBox'

export default {
  name: "searchTest",
  components: { SearchBox }
}
</script>