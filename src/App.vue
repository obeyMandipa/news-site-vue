

<template>
  <div class="h-[80px] bg-gray-400 justify-between  flex p-4">
    <div class="font-bold text-[30px]">...NEWS</div>
    <div class=" flex justify-between w-[500px] bg-red-300">
      <input type="text" class="w-[370px] rounded">
      <img src="" alt="notification">
    </div>
  </div>
  <main class="flex justify-between ">
    <div class="categories w-[20%] h-[88vh] bg-red-200"></div>
    <div class="newsheadlines  w-[45%] bg-blue-200"></div>
    <div class="relatednews  w-[30%] bg-green-200"></div>
  </main>
</template>

<script >

</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
